import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlSharedComponentModalAlertService {
  message: string;
  isOK = true;

  showModal: boolean;
  modalClass: string;
  currentValue: Subject<boolean> = new Subject<boolean>();
  resolvePromise;

  customYes: string;
  customNo: string;

  constructor() {}

  show(message) {
    return this.modal(true, true, message);
  }
  showYesNo(message, customYes?: string, customNo?: string) {
    this.customYes = customYes;
    this.customNo = customNo;

    return this.modal(true, false, message);
  }

  hide() {
    this.modal(false, this.isOK, this.message);
  }

  onNo() {
    this.currentValue.next(false);
    this.resolvePromise(false);
    this.hide();
  }
  onYes() {
    this.currentValue.next(true);
    this.resolvePromise(true);
    this.hide();
  }
  onOk() {
    this.currentValue.next(true);
    this.resolvePromise(true);
    this.hide();
  }

  private modal(show: boolean, isOK: boolean = true, message: string = '') {
    return new Promise(resolve => {
      this.resolvePromise = resolve;
      this.isOK = isOK;
      this.message = message;

      if (show) {
        this.modalClass = 'hide-modal';
        this.showModal = show;
        this.modalClass = 'show-modal';
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

  onModalKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      if (this.isOK) { this.onOk(); } else { this.onYes(); }
    } else if (e.key === 'Escape') {
      if (this.isOK) { this.onOk(); } else { this.onNo(); }
    }
  }
}
