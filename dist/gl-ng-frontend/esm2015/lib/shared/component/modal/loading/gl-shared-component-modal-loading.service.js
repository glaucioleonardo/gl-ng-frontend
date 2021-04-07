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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvbG9hZGluZy9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWxvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sb0NBQW9DO0lBTy9DO1FBTlEsb0JBQWUsR0FBRywyQkFBMkIsQ0FBQztRQUN0RCxtQkFBYyxHQUFHLDJCQUEyQixDQUFDO1FBQzdDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNyQyxpQkFBWSxHQUFHLElBQUksQ0FBQztJQUdKLENBQUM7SUFFakIsWUFBWTtRQUNWLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDN0IsTUFBTSxlQUFlLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtvQkFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM1RCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO3dCQUM3QixhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxDQUFDO3FCQUNYO2dCQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBMkI7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEQsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsTUFBZTtRQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUFFO2lCQUFNO2dCQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFBRTtZQUN4RSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLE9BQU87UUFDWixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVkLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQUUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO3FCQUFFO29CQUNwSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQzNDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO2lCQUMvQjtZQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQTVERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsTG9hZGluZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2RlZmF1bHRNZXNzYWdlID0gJ0xvYWRpbmcuLi4gcGxlYXNlIHdhaXQuLi4nO1xyXG4gIGRlZmF1bHRNZXNzYWdlID0gJ0xvYWRpbmcuLi4gcGxlYXNlIHdhaXQuLi4nO1xyXG4gIF9sb2FkaW5nU3RhdHVzID0gdGhpcy5kZWZhdWx0TWVzc2FnZTtcclxuICBfc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gIF9tYWluTG9hZGluZzogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGNoZWNrRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgaWYgKHRoaXMuX21haW5Mb2FkaW5nID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCBsb2FkaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9tYWluTG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRpbmcnKTtcclxuICAgICAgICAgIGlmICh0aGlzLl9tYWluTG9hZGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9hZGluZ0ludGVydmFsKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXR1cChtYWluTG9hZGluZzogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHRoaXMuX21haW5Mb2FkaW5nID0gbWFpbkxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5jaGVja0VsZW1lbnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5fbWFpbkxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZS1sb2FkaW5nJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Nob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMobnVsbCk7XHJcbiAgICAgIH0sIDExMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHNob3coc3RhdHVzPzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNoZWNrRWxlbWVudCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgdGhpcy5zdGF0dXMoc3RhdHVzKTsgfSBlbHNlIHsgdGhpcy5zdGF0dXMobnVsbCk7IH1cclxuICAgICAgdGhpcy5fbWFpbkxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1sb2FkaW5nJyk7XHJcbiAgICAgIHRoaXMuX3Nob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzdGF0dXMobWVzc2FnZSkge1xyXG4gICAgdGhpcy5jaGVja0VsZW1lbnQoKS50aGVuKCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlID09IG51bGwgfHwgbWVzc2FnZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0TWVzc2FnZSAhPSBudWxsICYmIHRoaXMuZGVmYXVsdE1lc3NhZ2UubGVuZ3RoID09PSAwKSB7IHRoaXMuZGVmYXVsdE1lc3NhZ2UgPSB0aGlzLl9kZWZhdWx0TWVzc2FnZTsgfVxyXG4gICAgICAgICAgdGhpcy5fbG9hZGluZ1N0YXR1cyA9IHRoaXMuZGVmYXVsdE1lc3NhZ2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2xvYWRpbmdTdGF0dXMgPSBtZXNzYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==