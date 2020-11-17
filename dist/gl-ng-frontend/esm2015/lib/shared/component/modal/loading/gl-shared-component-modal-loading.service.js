import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GlSharedComponentModalLoadingService {
    constructor() {
        this._defaultMessage = 'Loading... please wait...';
        this.defaultMessage = 'Loading... please wait...';
        this._loadingStatus = this.defaultMessage;
        this._showLoading = true;
    }
    checkElement() {
        return new Promise(resolve => {
            if (this._mainLoading == null) {
                const loadingInterval = setInterval(() => {
                    this._mainLoading = document.querySelector('.main-loading');
                    if (this._mainLoading != null) {
                        clearInterval(loadingInterval);
                        resolve();
                    }
                }, 1);
            }
            else {
                resolve();
            }
        });
    }
    setup(mainLoading) {
        this._mainLoading = mainLoading;
    }
    hide() {
        this.checkElement().then(() => {
            this._mainLoading.classList.add('hide-loading');
            setTimeout(() => {
                this._showLoading = false;
                this.status(null);
            }, 1100);
        });
    }
    show(status) {
        this.checkElement().then(() => {
            if (status != null) {
                this.status(status);
            }
            else {
                this.status(null);
            }
            this._mainLoading.classList.remove('hide-loading');
            this._showLoading = true;
        });
    }
    status(message) {
        this.checkElement().then(() => {
            setTimeout(() => {
                if (message == null || message.trim().length === 0) {
                    if (this.defaultMessage != null && this.defaultMessage.length === 0) {
                        this.defaultMessage = this._defaultMessage;
                    }
                    this._loadingStatus = this.defaultMessage;
                }
                else {
                    this._loadingStatus = message;
                }
            }, 10);
        });
    }
}
GlSharedComponentModalLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
GlSharedComponentModalLoadingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalLoadingService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvbG9hZGluZy9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0NBQW9DO0lBTy9DO1FBTlEsb0JBQWUsR0FBRywyQkFBMkIsQ0FBQTtRQUNyRCxtQkFBYyxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUdKLENBQUM7SUFFakIsWUFBWTtRQUNWLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDN0IsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO3dCQUM3QixhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxDQUFDO3FCQUNYO2dCQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBMkI7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEQsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBZTtRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFO2lCQUFNO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBRTtZQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVkLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO3FCQUFFO29CQUNwSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQzNDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2lCQUMvQjtZQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxMb2FkaW5nU2VydmljZSB7XG4gIHByaXZhdGUgX2RlZmF1bHRNZXNzYWdlID0gJ0xvYWRpbmcuLi4gcGxlYXNlIHdhaXQuLi4nXG4gIGRlZmF1bHRNZXNzYWdlID0gJ0xvYWRpbmcuLi4gcGxlYXNlIHdhaXQuLi4nO1xuICBfbG9hZGluZ1N0YXR1cyA9IHRoaXMuZGVmYXVsdE1lc3NhZ2U7XG4gIF9zaG93TG9hZGluZyA9IHRydWU7XG4gIF9tYWluTG9hZGluZzogSFRNTERpdkVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjaGVja0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHRoaXMuX21haW5Mb2FkaW5nID09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbG9hZGluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX21haW5Mb2FkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbG9hZGluZycpO1xuICAgICAgICAgIGlmICh0aGlzLl9tYWluTG9hZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGxvYWRpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldHVwKG1haW5Mb2FkaW5nOiBIVE1MRGl2RWxlbWVudCkge1xuICAgIHRoaXMuX21haW5Mb2FkaW5nID0gbWFpbkxvYWRpbmc7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuY2hlY2tFbGVtZW50KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLl9tYWluTG9hZGluZy5jbGFzc0xpc3QuYWRkKCdoaWRlLWxvYWRpbmcnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLl9zaG93TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXR1cyhudWxsKTtcbiAgICAgIH0sIDExMDApO1xuICAgIH0pO1xuICB9XG4gIHNob3coc3RhdHVzPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGVja0VsZW1lbnQoKS50aGVuKCgpID0+IHtcbiAgICAgIGlmIChzdGF0dXMgIT0gbnVsbCkgeyB0aGlzLnN0YXR1cyhzdGF0dXMpOyB9IGVsc2UgeyB0aGlzLnN0YXR1cyhudWxsKTsgfVxuICAgICAgdGhpcy5fbWFpbkxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1sb2FkaW5nJyk7XG4gICAgICB0aGlzLl9zaG93TG9hZGluZyA9IHRydWU7XG4gICAgfSk7XG4gIH1cbiAgc3RhdHVzKG1lc3NhZ2UpIHtcbiAgICB0aGlzLmNoZWNrRWxlbWVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UgPT0gbnVsbCB8fCBtZXNzYWdlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0TWVzc2FnZSAhPSBudWxsICYmIHRoaXMuZGVmYXVsdE1lc3NhZ2UubGVuZ3RoID09PSAwKSB7IHRoaXMuZGVmYXVsdE1lc3NhZ2UgPSB0aGlzLl9kZWZhdWx0TWVzc2FnZTsgfVxuICAgICAgICAgIHRoaXMuX2xvYWRpbmdTdGF0dXMgPSB0aGlzLmRlZmF1bHRNZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2xvYWRpbmdTdGF0dXMgPSBtZXNzYWdlO1xuICAgICAgICB9XG4gICAgICB9LCAxMCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==