import { Injectable } from '@angular/core';
import { IModalItemAction } from './item/gl-component-modal-actions-item.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalActionsService {

  readonly actions: IModalItemAction[] = [];
  showModal: boolean;
  modalClass: string;
  resolvePromise;
  binder;

  private _closeButton: HTMLInputElement;

  constructor() { }

  addAction(actions: IModalItemAction[], removeCurrent: boolean = false): void {
    if (removeCurrent) {
      this.clearActions();
    }
    this.actions.push(...actions);
  }
  addSingleAction(title: string, icon: string, action: () => void, red: boolean, green: boolean, hide?: boolean, groupSplit?: boolean, removeCurrent: boolean = false): void {
    const actionExists = this.actions.filter(x => x.title === title).length > 0;

    if (removeCurrent) {
      this.clearActions();
    }

    if (!actionExists) {
      this.actions.push({ title, icon, action, red, green, hide, groupSplit });
    }
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

  private modal(show: boolean): Promise<boolean> {
    return new Promise(resolve => {
      this.resolvePromise = resolve;

      if (show) {
        this.modalClass = 'hide-modal';
        this.showModal = show;
        this.modalClass = 'show-modal';

        setTimeout(() => {
          this.setElements();

          setTimeout(() => {
            this._closeButton.focus();
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
    const container = document.querySelector('.modal-container');

    this._closeButton = container.querySelector('.close');
  }
}
