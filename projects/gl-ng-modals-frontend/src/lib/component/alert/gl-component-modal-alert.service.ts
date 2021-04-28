import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalAlertService {
  message: string;
  isOK = true;

  showModal: boolean;
  modalClass: string;
  currentValue: Subject<boolean> = new Subject<boolean>();
  resolvePromise;

  customYes: string;
  customNo: string;

  private _okButton: HTMLInputElement;
  private _noButton: HTMLInputElement;
  private _yesButton: HTMLInputElement;

  constructor() {}

  show(message): Promise<unknown> {
    return this.modal(true, true, message);
  }
  showYesNo(message, customYes?: string, customNo?: string): Promise<unknown> {
    this.customYes = customYes;
    this.customNo = customNo;

    return this.modal(true, false, message);
  }

  hide(): void {
    this.modal(false, this.isOK, this.message);
  }

  onNo(): void {
    this.currentValue.next(false);
    this.resolvePromise(false);
    this.hide();
  }
  onYes(): void {
    this.currentValue.next(true);
    this.resolvePromise(true);
    this.hide();
  }
  onOk(): void {
    this.currentValue.next(true);
    this.resolvePromise(true);
    this.hide();
  }

  private modal(show: boolean, isOK: boolean = true, message: string = ''): Promise<unknown> {
    return new Promise(resolve => {
      this.resolvePromise = resolve;
      this.isOK = isOK;
      this.message = message;

      if (show) {
        this.modalClass = 'hide-modal';
        this.showModal = show;
        this.modalClass = 'show-modal';

        setTimeout(() => {
          this.setElements();

          setTimeout(() => {
            if (isOK) {
              this._okButton.focus();
            } else {
              this._yesButton.focus();
            }
          }, 300);
        }, 300);
      } else {
        this.modalClass = 'hide-modal';
        setTimeout(() => {
          this.showModal = false;
          this.message = '';
          this.customYes = null;
          this.customNo = null;
        }, 300);
      }
    });
  }

  onModalKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      if (this.isOK) { this.onOk(); } else { this.onYes(); }
    } else if (e.key === 'Escape') {
      if (this.isOK) { this.onOk(); } else { this.onNo(); }
    }
  }

  private setElements(): void {
    const container = document.querySelector('.modal-container .modal-main-content .button-container');

    this._okButton = container.querySelector('.ok .default-button');
    this._noButton = container.querySelector('.no .default-button');
    this._yesButton = container.querySelector('.yes .default-button');
  }
}
