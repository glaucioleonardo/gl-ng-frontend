import { EventEmitter, Injectable } from '@angular/core';
import { IAttachmentData } from 'gl-sp-frontend';
import { AttachmentIcon, AttachmentParser, AttachmentValidate } from 'gl-w-attachment-frontend';
import { NumberParse } from 'gl-w-number-frontend';
import { GlComponentModalAlertService } from '../../../../../../gl-ng-modals-frontend/src/lib/component/alert/gl-component-modal-alert.service';

@Injectable({
  providedIn: 'root'
})
export class GlComponentButtonAttachmentFileService {
  private _input: HTMLInputElement;
  private _accepts: string[];
  private _currentValue: EventEmitter<IAttachmentData>;
  private _attachments: IAttachmentData[];

  constructor(
    public _alert: GlComponentModalAlertService
  ) { }

  initialize(
    input: HTMLInputElement, currentValue: EventEmitter<IAttachmentData>, attachments: IAttachmentData[],
    duplicatedDescription: string, invalidSizeDescription: string, invalidFormatDescription: string, attachmentIconSrc: string): void {
    this._input = input;
    this._currentValue = currentValue;
    this._attachments = attachments;

    // Todo Block specif files
    const accept = (input.attributes as any).accept.value;
    // tslint:disable-next-line:triple-equals
    const accepts: boolean = accept == null || accept == 'undefined' || accept === '';

    this._accepts = accepts ? ['*'] : AttachmentParser.parseAcceptFiles((input.attributes as any).accept.value);
    this._input.oninput = () => {
      this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc);
    };
  }

  addAttachment(): void {
    this._input.click();
  }
  onChange(
    duplicatedDescription: string, invalidSizeDescription: string, invalidFormatDescription: string, attachmentIconSrc: string): void {
    const isValid = AttachmentValidate.file(this._input, this._accepts);
    const sizeValid = AttachmentValidate.fileSize(this._input);
    const duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);

    if (duplicated) {
      this.clearInput();
      this._alert.show(duplicatedDescription).then(() => {});
      return;
    } else if (!sizeValid) {
      const maxSize: number = AttachmentValidate.maxSize(this._input);
      const maxSizeStr: string = NumberParse.formatDecimalSeparator(maxSize);
      this.clearInput();
      this._alert.show(`${invalidSizeDescription}: ${maxSizeStr}KB`).then(() => {});
      return;
    } else if (!isValid) {
      this.clearInput();
      this._alert.show(invalidFormatDescription).then(() => {});
    } else {
      const file: IAttachmentData = {
        name: this._input.files[0].name,
        file: this._input.files[0],
        icon: AttachmentIcon.get(this._input.files[0].name, attachmentIconSrc),
        new: true,
        url: '',
        remove: false,
        id: this._attachments.length,
      };

      this.clearInput();
      this._currentValue.emit(file);
    }
  }

  clearInput(): void {
    this._input.value = null;
  }
}
