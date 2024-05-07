import { Injectable } from '@angular/core';
import { IModalItemAction } from './item/gl-components-modal-actions-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentsModalActionsService {

  readonly actions: IModalItemAction[] = [];
  showModal: boolean;
  modalClass: string;
  resolvePromise;
  binder;

  container: Element;
  closeButton: HTMLInputElement;

  constructor() {}

  _showContainer(visible: boolean) {
    if (visible) {
      this.setElements();
    }
  }

  addAction(actions: IModalItemAction[], removeCurrent: boolean = false): void {
    if (removeCurrent) {
      this.clearActions();
    }
    this.actions.push(...actions);
  }
  removeAction(index: number, deleteCount: number = 1): void {
    this.actions.splice(index, deleteCount);
  }
  clearActions(): void {
    this.actions.splice(0, this.actions.length);
  }

  show(actions: IModalItemAction[], binder): Promise<boolean> {
    this.binder = binder;
    this.addAction(actions);
    return this.modal(true);
  }
  hide(): void {
    this.clearActions();
    this.modal(false);
  }

  onModalKeyUp(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.hide();
    }
  }

  private modal(show: boolean): Promise<boolean> {
    return new Promise(resolve => {
      this.resolvePromise = resolve;

      if (show) {
        this.showModal = show;
      } else {
        this.modalClass = 'hide-modal';
        setTimeout(() => {
          this.showModal = show;
        }, 300);
      }
    });
  }

  private setElements(): void {
    this.container = document.querySelector('#modal-actions-close-container') as HTMLElement;
    this.closeButton = document.querySelector('#modal-actions-close-button');

    setTimeout(() => {
      this.modalClass = 'show-modal';

      setTimeout(() => {
        this.closeButton.focus();
      }, 300)
    }, 0)
  }
}
