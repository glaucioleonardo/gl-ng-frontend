import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AttachmentConvert, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";

import { IImageButtonTooltip } from '../../../button/image/tooltip/gl-shared-component-button-image-tooltip.interface';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { IImageString } from './gl-shared-component-attachment-image-preview.interface';

@Injectable({
  providedIn: 'root'
})
export class GlSharedComponentAttachmentImagePreviewService {
  private readonly image = '../assets/img/icon/image/image-template.svg';

  retrieveUpdate: Subject<string> = new Subject();
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

  constructor(private _alert: GlSharedComponentModalAlertService) {
    this.retrieveUpdate.subscribe(value => {
      if (value != null && value.trim().length > 0) {
        this.setImage(value);
        this.updateButtons(true);
      } else {
        this.setImage('');
        this.updateButtons(false);
      }
    });
  }

  initialize(input: HTMLInputElement, userImage: HTMLDivElement, currentValue: EventEmitter<IImageString>,
  invalidSizeDescription: string, invalidFormatDescription: string, addImageButtonDescription: string, removeImageButtonDescription: string) {
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

  onChange(invalidSizeDescription: string, invalidFormatDescription: string) {
    const isValid = AttachmentValidate.file(this._input, this._accepts);
    const sizeValid = AttachmentValidate.fileSize(this._input);

    if (!sizeValid) {
      const maxSize: number = AttachmentValidate.maxSize(this._input);
      const maxSizeStr = StringConverter.formatNumber(maxSize);
      this._alert.show(`${invalidSizeDescription} ${maxSizeStr}KB`).then(() => {});
      return;
    }

    if (isValid) {
      AttachmentConvert.textFileToUrlImage(this._input.files[0]).then((image: string) => {
        this.setImage(image);
        this._currentValue.emit({ value: image });
        this.updateButtons(true);
        this.clearInput();
      });
    } else {
      this.clearInput();
      this._alert.show(invalidFormatDescription).then(() => {});
    }
  }

  clearInput() {
    this._input.value = null;
  }

  updateButtons(hasValue: boolean) {
    this.buttons[0].show = !hasValue;
    this.buttons[1].show = hasValue;
  }

  setImage(image: string) {
    this._userImage.style.backgroundImage = `url("${image}")`;
    this._userImage.classList.remove('required-fill');
  }

  addImage() {
    this._input.click();
  }

  removeImage(init?: boolean) {
    this.clearInput();
    this.setImage(this.image);

    if (!init) {
      this._currentValue.emit({ value: null });
      this.updateButtons(false);
    }
  }
}
