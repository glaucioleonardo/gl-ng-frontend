import { EventEmitter, Injectable } from '@angular/core';
import { AttachmentConvert, AttachmentParser, AttachmentValidate } from 'gl-w-attachment-frontend';
import { ImageResize } from 'gl-w-image-frontend';
import { NumberParse } from 'gl-w-number-frontend';
import { Subject } from 'rxjs';

import { IImageButtonTooltip } from '../../../../../../gl-ng-buttons-frontend/src/lib/component/image/tooltip/gl-component-button-image-tooltip.interface';
import { GlComponentModalAlertService } from '../../../../../../gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.service';

import { IImageString, IImageUpdate } from './gl-component-attachment-image-preview.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentAttachmentImagePreviewService {
  private readonly image = '../assets/img/icon/image/image-template.svg';

  retrieveUpdate: Subject<IImageUpdate> = new Subject();
  labelIcons = '../assets/img/icon/label/';

  buttons: IImageButtonTooltip[] = [
    {
      src: `${this.labelIcons}image.svg`,
      id: 'add-image-from-label',
      alt: 'Add image',
      show: true, callback: () => {
        this.addImage();
      }
    },
    {
      src: `${this.labelIcons}remove-image.svg`,
      id: 'clear-image-from-label',
      alt: 'Remove image',
      show: false,
      callback: () => {
        this.removeImage();
      }
    },
  ];

  private _accepts: string[];
  private _input: HTMLInputElement;
  private _userImage: HTMLDivElement;
  private _currentValue: EventEmitter<IImageString>;

  constructor(private _alert: GlComponentModalAlertService) {
    this.retrieveUpdate.subscribe((data) => {
      if (data.image != null && data.image.trim().length > 0) {
        this.setImage(data);
        this.updateButtons(true);
      } else {
        this.setImage({ image: '' });
        this.updateButtons(false);
      }
    });
  }

  initialize(
    input: HTMLInputElement, userImage: HTMLDivElement, currentValue: EventEmitter<IImageString>,
    invalidSizeDescription: string, invalidFormatDescription: string, addImageButtonDescription: string,
    removeImageButtonDescription: string): void {
    this._input = input;
    this._accepts = AttachmentParser.parseAcceptFiles((input.attributes as any).accept.value);
    this._userImage = userImage;
    this._currentValue = currentValue;

    setTimeout(() => {
      this.buttons[0].alt = addImageButtonDescription;
      this.buttons[1].alt = removeImageButtonDescription;
    }, 100);

    this._input.oninput = () => { this.onChange(invalidSizeDescription, invalidFormatDescription); };
    this.removeImage(true);
  }

  onChange(invalidSizeDescription: string, invalidFormatDescription: string): void {
    const isValid = AttachmentValidate.file(this._input, this._accepts);
    const sizeValid = AttachmentValidate.fileSize(this._input);

    if (!sizeValid) {
      const maxSize: number = AttachmentValidate.maxSize(this._input);
      const maxSizeStr = NumberParse.formatDecimalSeparator(maxSize);
      this._alert.show(`${invalidSizeDescription} ${maxSizeStr}KB`).then(() => {});
      return;
    }

    if (isValid) {
      AttachmentConvert.textFileToUrlImage(this._input.files[0]).then((image: string) => {
        this.setImage({ image });
        this._currentValue.emit({ value: image });
        this.updateButtons(true);
        this.clearInput();
      });
    } else {
      this.clearInput();
      this._alert.show(invalidFormatDescription).then(() => {});
    }
  }

  clearInput(): void {
    this._input.value = null;
  }

  updateButtons(hasValue: boolean): void {
    this.buttons[0].show = !hasValue;
    this.buttons[1].show = hasValue;
  }

  setImage(data: IImageUpdate): void {
    const img = data.resize ? ImageResize.base64(data) : data.image;

    this._userImage.style.backgroundImage = `url("${img}")`;
    this._userImage.classList.remove('required-fill');
  }

  addImage(): void {
    this._input.click();
  }

  removeImage(init?: boolean): void {
    this.clearInput();
    this.setImage({ image: this.image });

    if (!init) {
      this._currentValue.emit({ value: null });
      this.updateButtons(false);
    }
  }
}
