import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import { IAttachmentLink } from './gl-shared-component-modal-attachment-link.interface';

@Injectable({
  providedIn: 'root'
})
export class GlSharedComponentModalAttachmentLinkService {
  name: HTMLInputElement;
  url: HTMLInputElement;
  linkIcon = '../assets/img/icon/attachment/link.svg';

  showModal = false;
  modalClass: string;
  currentValue: Subject<IAttachmentLink> = new Subject();

  editing: boolean;
  editId: number;

  private _name: string;
  private _url: string;

  constructor(private _alert: GlSharedComponentModalAlertService) { }

  setup(name: HTMLInputElement, url: HTMLInputElement) {
    this.name = name;
    this.url = url;
  }

  onCancel() {
    this.modal(false);
  }

  async onConfirm() {
    if (await this.validData()) {
      const values = {
        name: this._name,
        url: this._url,
        icon: this.linkIcon,
        editing: this.editing,
        editId: this.editId
      };

      this.currentValue.next(values);
      this.modal(false);
    }
  }

  onName(e: Event) {
    this._name = (e.currentTarget as HTMLInputElement).value;
  }

  onUrl(e: Event) {
    this._url = (e.currentTarget as HTMLInputElement).value;
  }

  async validData() {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? `http://${this._url}` : this._url;
    const validUrl = new RegExp(urlRegex).test(tempUrl);

    if (this._name == null || this._name.trim().length === 0) {
      await this._alert.show('Por favor, informe o nome do arquivo!');
      return false;
    } else if (this._url == null || this._url.trim().length === 0) {
      await this._alert.show('Por favor, informe o url do arquivo!');
      return false;
    } else if (!validUrl) {
      await this._alert.show('Por favor, informe um url válido!');
    } else {
      this._url = tempUrl;
      return true;
    }
  }

  modal(show) {
    this.editing = false;
    this.editId = null;

    if (show) {
      this.modalClass = 'hide-modal';
      this.showModal = true;
      this.modalClass = 'show-modal';

    } else {
      this.modalClass = 'hide-modal';
      setTimeout(() => {
        this.showModal = false;
      }, 300);
    }
  }

  edit(name: string, url: string, editId: number) {
    this.modal(true);
    this.editing = true;
    this.editId = editId;

    setTimeout(() => {
      this.name = document.querySelector('#attachment-link-name');
      this.url = document.querySelector('#attachment-link-value');

      this._name = name;
      this.name.value = name;
      this._url = url;
      this.url.value = url;
    }, 100);
  }

  onModalKeyUp(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      return this.onConfirm();
    } else if (e.key === 'Escape') {
      this.onCancel();
    }
  }
}
