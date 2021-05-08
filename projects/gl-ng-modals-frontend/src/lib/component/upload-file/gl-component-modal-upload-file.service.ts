import { Injectable } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/scripts/core/services/attachment/core-services-attachment.interface';
import { Subject } from 'rxjs';
import { GlComponentModalAlertService } from '../alert/gl-component-modal-alert.service';
import { TModalUploadFunction } from './gl-component-modal-upload-file.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalUploadFileService {
  attachmentItems$: Subject<IAttachmentData[]> = new Subject();
  uploadAction: TModalUploadFunction;
  showModal: boolean;
  modalClass: string;
  currentValue: Subject<boolean> = new Subject<boolean>();
  resolvePromise;

  private _attachmentItems: IAttachmentData[] = [];
  private _uploadButton: HTMLInputElement;
  private _cancelButton: HTMLInputElement;

  constructor(private _alert: GlComponentModalAlertService) {
    this.attachmentItems$.subscribe(attachments => {
      this._attachmentItems = attachments;
    });
  }

  show(uploadAction: TModalUploadFunction): Promise<unknown> {
    this.uploadAction = uploadAction;
    return this.modal(true);
  }
  hide(): void {
    this.modal(false);
  }

  onCancel(): void {
    this.currentValue.next(false);
    this.resolvePromise(false);
    this.hide();
  }
  async onUpload(): Promise<void | unknown> {
    if (this._attachmentItems.length === 0) {
      this.hide();
      await this._alert.show('Não existem arquivos anexados! Por favor, insira pelo menos um arquivo antes de continuar!');
      return this.show(this.uploadAction);
    }

    this.currentValue.next(true);
    this.resolvePromise(true);
    this.hide();

    await this.uploadAction(this._attachmentItems);
    this.uploadAction = null;
  }
  onModalKeyUp(e: KeyboardEvent): void | unknown {
    if (e.key === 'Enter') {
      return this.onUpload();
    } else if (e.key === 'Escape') {
      this.onCancel();
    }
  }

  private modal(show: boolean): Promise<unknown> {
    this.attachmentItems$.observers.map(x => x.complete());

    return new Promise(resolve => {
      this.resolvePromise = resolve;

      if (show) {
        this.modalClass = 'hide-modal';
        this.showModal = show;
        this.modalClass = 'show-modal';

        setTimeout(() => {
          this.setElements();

          setTimeout(() => {
            this._uploadButton.focus();
          }, 300);
        }, 300);
      } else {
        this.modalClass = 'hide-modal';
        setTimeout(() => {
          this.showModal = false;
        }, 300);
      }
    });
  }
  private setElements(): void {
    const container = document.querySelector('.modal-container .modal-main-content .button-container');

    this._uploadButton = container.querySelector('.upload .default-button');
    this._cancelButton = container.querySelector('.cancel .default-button');
  }
}
