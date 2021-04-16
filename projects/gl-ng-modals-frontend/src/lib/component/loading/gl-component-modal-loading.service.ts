import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlComponentModalLoadingService {
  private _defaultMessage = 'Loading... please wait...';
  defaultMessage = 'Loading... please wait...';
  _loadingStatus = this.defaultMessage;
  _showLoading = true;
  _mainLoading: HTMLDivElement;

  constructor() { }

  checkElement(): Promise<undefined> {
    return new Promise(resolve => {
      if (this._mainLoading == null) {
        const loadingInterval = setInterval(() => {
          this._mainLoading = document.querySelector('.main-loading');
          if (this._mainLoading != null) {
            clearInterval(loadingInterval);
            resolve(undefined);
          }
        }, 1);
      } else {
        resolve(undefined);
      }
    });
  }

  setup(mainLoading: HTMLDivElement): void {
    this._mainLoading = mainLoading;
  }

  hide(): void {
    this.checkElement().then(() => {
      this._mainLoading.classList.add('hide-loading');
      setTimeout(() => {
        this._showLoading = false;
        this.status(null);
      }, 1100);
    });
  }
  show(status?: string): void {
    this.checkElement().then(() => {
      if (status != null) { this.status(status); } else { this.status(null); }
      this._mainLoading.classList.remove('hide-loading');
      this._showLoading = true;
    });
  }
  status(message): void {
    this.checkElement().then(() => {
      setTimeout(() => {

        if (message == null || message.trim().length === 0) {
          if (this.defaultMessage != null && this.defaultMessage.length === 0) { this.defaultMessage = this._defaultMessage; }
          this._loadingStatus = this.defaultMessage;
        } else {
          this._loadingStatus = message;
        }
      }, 10);
    });
  }
}
