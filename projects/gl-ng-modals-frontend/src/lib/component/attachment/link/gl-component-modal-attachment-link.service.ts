import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlComponentModalAlertService } from '../../alert/gl-component-modal-alert.service';
import { IAttachmentLink } from './gl-component-modal-attachment-link.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalAttachmentLinkService {
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

  constructor(private _alert: GlComponentModalAlertService) { }

  setup(name: HTMLInputElement, url: HTMLInputElement): void {
    this.name = name;
    this.url = url;
  }

  onCancel(): void {
    this.modal(false);
  }

  async onConfirm(): Promise<void> {
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

  onName(e: Event): void {
    this._name = (e.currentTarget as HTMLInputElement).value;
  }

  onUrl(e: Event): void {
    this._url = (e.currentTarget as HTMLInputElement).value;
  }

  async validData(): Promise<boolean> {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const hasHttp = this._url != null && !this._url.includes('http://') && !this._url.includes('https://');
    const tempUrl = hasHttp ? `http://${this._url}` : this._url;
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

  modal(show): void {
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

  edit(name: string, url: string, editId: number): void {
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

  onModalKeyUp(e: KeyboardEvent): Promise<void> {
    if (e.key === 'Enter') {
      return this.onConfirm();
    } else if (e.key === 'Escape') {
      this.onCancel();
    }
  }
}
