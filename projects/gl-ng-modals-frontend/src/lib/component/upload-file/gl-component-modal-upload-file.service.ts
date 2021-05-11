import { Injectable, OnDestroy } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/scripts/core/services/attachment/core-services-attachment.interface';
import { Subject } from 'rxjs';
import { GlComponentModalAlertService } from '../alert/gl-component-modal-alert.service';
import { TModalUploadFunction } from './gl-component-modal-upload-file.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalUploadFileService implements OnDestroy {
  get modalClass(): string {
    return this._modalClass;
  }
  get showModal(): boolean {
    return this._showModal;
  }
  get attachmentItems(): IAttachmentData[] {
    return this._attachmentItems;
  }

  attachmentItems$: Subject<IAttachmentData[]> = new Subject();
  currentValue$: Subject<boolean> = new Subject<boolean>();

  uploadAction: TModalUploadFunction;
  uploadActionCaller: any;
  resolvePromise: (value) => void;

  private _modalClass: string;
  private _showModal: boolean;
  private _attachmentItems: IAttachmentData[] = [];
  private _uploadButton: HTMLInputElement;
  private _cancelButton: HTMLInputElement;

  constructor(public alert: GlComponentModalAlertService) {
    setTimeout(async () => {
      await this.clear();
    });
  }

  async ngOnDestroy(): Promise<void> {
    await this.clear();
  }

  async show(action: TModalUploadFunction, caller: any, resetData = true, clearObservers = false, subscribe = true): Promise<unknown> {
    await this.clear(resetData, clearObservers);

    this.uploadActionCaller = caller;

    if (caller != null) {
      this.uploadAction = action.bind(caller);
    } else {
      this.uploadAction = action;
    }

    return this.modal(true, resetData, clearObservers);
  }
  hide(resetData = true, clearObservers = true): void {
    this.modal(false, resetData, clearObservers);
  }

  async showError(message: string): Promise<void | unknown> {
    this.hide(false, false);
    await this.alert.show(message);
    return this.show(this.uploadAction, this.uploadActionCaller, false, false, false);
  }

  private modal(show: boolean, resetData = false, clearObservers = false): Promise<unknown> {
    this.attachmentItems$.observers.map(x => x.complete());

    return new Promise(async resolve => {
      this.resolvePromise = resolve;

      await this.clear(resetData, clearObservers);

      if (show) {
        this._modalClass = 'hide-modal';
        this._showModal = show;
        this._modalClass = 'show-modal';

        setTimeout(() => {
          this.setElements();

          setTimeout(() => {
            this._uploadButton.focus();
          }, 300);
        }, 300);
      } else {
        this._modalClass = 'hide-modal';
        setTimeout(() => {
          this._showModal = false;
        }, 300);
      }
    });
  }
  private setElements(): void {
    const container = document.querySelector('.modal-container .modal-main-content .button-container');

    this._uploadButton = container.querySelector('.upload .default-button');
    this._cancelButton = container.querySelector('.cancel .default-button');
  }

  private subscription(): Promise<void> {
    return new Promise(resolve => {

      if (this.attachmentItems$.observers.length === 0) {
        this.attachmentItems$.subscribe(attachments => {
          this._attachmentItems = attachments;
        });

        resolve();
      } else {
        resolve();
      }
    });
  }
  private clearObservers(): Promise<void> {
    return new Promise(resolve => {
      this.attachmentItems$.observers.map(x => x.complete());
      resolve();
    });
  }
  private clearItems(): Promise<void> {
    return new Promise(resolve => {
      this._attachmentItems = [];
      resolve();
    });
  }
  private async clear(resetData = true, clearObservers = true): Promise<void> {
    if (resetData) {
      await this.clearItems();
    }

    if (clearObservers) {
      await this.clearObservers();
    }

    await this.subscription();
  }
}
