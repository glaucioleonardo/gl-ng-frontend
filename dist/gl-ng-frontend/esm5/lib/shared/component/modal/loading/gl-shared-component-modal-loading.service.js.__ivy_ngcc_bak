import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var GlSharedComponentModalLoadingService = /** @class */ (function () {
    function GlSharedComponentModalLoadingService() {
        this._defaultMessage = 'Loading... please wait...';
        this.defaultMessage = 'Loading... please wait...';
        this._loadingStatus = this.defaultMessage;
        this._showLoading = true;
    }
    GlSharedComponentModalLoadingService.prototype.checkElement = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this._mainLoading == null) {
                var loadingInterval_1 = setInterval(function () {
                    _this._mainLoading = document.querySelector('.main-loading');
                    if (_this._mainLoading != null) {
                        clearInterval(loadingInterval_1);
                        resolve();
                    }
                }, 1);
            }
            else {
                resolve();
            }
        });
    };
    GlSharedComponentModalLoadingService.prototype.setup = function (mainLoading) {
        this._mainLoading = mainLoading;
    };
    GlSharedComponentModalLoadingService.prototype.hide = function () {
        var _this = this;
        this.checkElement().then(function () {
            _this._mainLoading.classList.add('hide-loading');
            setTimeout(function () {
                _this._showLoading = false;
                _this.status(null);
            }, 1100);
        });
    };
    GlSharedComponentModalLoadingService.prototype.show = function (status) {
        var _this = this;
        this.checkElement().then(function () {
            if (status != null) {
                _this.status(status);
            }
            else {
                _this.status(null);
            }
            _this._mainLoading.classList.remove('hide-loading');
            _this._showLoading = true;
        });
    };
    GlSharedComponentModalLoadingService.prototype.status = function (message) {
        var _this = this;
        this.checkElement().then(function () {
            setTimeout(function () {
                if (message == null || message.trim().length === 0) {
                    if (_this.defaultMessage != null && _this.defaultMessage.length === 0) {
                        _this.defaultMessage = _this._defaultMessage;
                    }
                    _this._loadingStatus = _this.defaultMessage;
                }
                else {
                    _this._loadingStatus = message;
                }
            }, 10);
        });
    };
    GlSharedComponentModalLoadingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalLoadingService_Factory() { return new GlSharedComponentModalLoadingService(); }, token: GlSharedComponentModalLoadingService, providedIn: "root" });
    GlSharedComponentModalLoadingService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalLoadingService);
    return GlSharedComponentModalLoadingService;
}());
export { GlSharedComponentModalLoadingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2xvYWRpbmcvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBT0U7UUFOUSxvQkFBZSxHQUFHLDJCQUEyQixDQUFBO1FBQ3JELG1CQUFjLEdBQUcsMkJBQTJCLENBQUM7UUFDN0MsbUJBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3JDLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBR0osQ0FBQztJQUVqQiwyREFBWSxHQUFaO1FBQUEsaUJBY0M7UUFiQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixJQUFJLEtBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUM3QixJQUFNLGlCQUFlLEdBQUcsV0FBVyxDQUFDO29CQUNsQyxLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzVELElBQUksS0FBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7d0JBQzdCLGFBQWEsQ0FBQyxpQkFBZSxDQUFDLENBQUM7d0JBQy9CLE9BQU8sRUFBRSxDQUFDO3FCQUNYO2dCQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2FBQ1g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvREFBSyxHQUFMLFVBQU0sV0FBMkI7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELG1EQUFJLEdBQUo7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtREFBSSxHQUFKLFVBQUssTUFBZTtRQUFwQixpQkFNQztRQUxDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQUU7WUFDeEUsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELHFEQUFNLEdBQU4sVUFBTyxPQUFPO1FBQWQsaUJBWUM7UUFYQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLFVBQVUsQ0FBQztnQkFFVCxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7b0JBQ2xELElBQUksS0FBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUFFLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQztxQkFBRTtvQkFDcEgsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO2lCQUMzQztxQkFBTTtvQkFDTCxLQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztpQkFDL0I7WUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBekRVLG9DQUFvQztRQUhoRCxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csb0NBQW9DLENBMERoRDsrQ0EvREQ7Q0ErREMsQUExREQsSUEwREM7U0ExRFksb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsTG9hZGluZ1NlcnZpY2Uge1xuICBwcml2YXRlIF9kZWZhdWx0TWVzc2FnZSA9ICdMb2FkaW5nLi4uIHBsZWFzZSB3YWl0Li4uJ1xuICBkZWZhdWx0TWVzc2FnZSA9ICdMb2FkaW5nLi4uIHBsZWFzZSB3YWl0Li4uJztcbiAgX2xvYWRpbmdTdGF0dXMgPSB0aGlzLmRlZmF1bHRNZXNzYWdlO1xuICBfc2hvd0xvYWRpbmcgPSB0cnVlO1xuICBfbWFpbkxvYWRpbmc6IEhUTUxEaXZFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgY2hlY2tFbGVtZW50KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh0aGlzLl9tYWluTG9hZGluZyA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9tYWluTG9hZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWxvYWRpbmcnKTtcbiAgICAgICAgICBpZiAodGhpcy5fbWFpbkxvYWRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb2FkaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXR1cChtYWluTG9hZGluZzogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLl9tYWluTG9hZGluZyA9IG1haW5Mb2FkaW5nO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmNoZWNrRWxlbWVudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fbWFpbkxvYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZS1sb2FkaW5nJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc2hvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdGF0dXMobnVsbCk7XG4gICAgICB9LCAxMTAwKTtcbiAgICB9KTtcbiAgfVxuICBzaG93KHN0YXR1cz86IHN0cmluZykge1xuICAgIHRoaXMuY2hlY2tFbGVtZW50KCkudGhlbigoKSA9PiB7XG4gICAgICBpZiAoc3RhdHVzICE9IG51bGwpIHsgdGhpcy5zdGF0dXMoc3RhdHVzKTsgfSBlbHNlIHsgdGhpcy5zdGF0dXMobnVsbCk7IH1cbiAgICAgIHRoaXMuX21haW5Mb2FkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtbG9hZGluZycpO1xuICAgICAgdGhpcy5fc2hvd0xvYWRpbmcgPSB0cnVlO1xuICAgIH0pO1xuICB9XG4gIHN0YXR1cyhtZXNzYWdlKSB7XG4gICAgdGhpcy5jaGVja0VsZW1lbnQoKS50aGVuKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIGlmIChtZXNzYWdlID09IG51bGwgfHwgbWVzc2FnZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1lc3NhZ2UgIT0gbnVsbCAmJiB0aGlzLmRlZmF1bHRNZXNzYWdlLmxlbmd0aCA9PT0gMCkgeyB0aGlzLmRlZmF1bHRNZXNzYWdlID0gdGhpcy5fZGVmYXVsdE1lc3NhZ2U7IH1cbiAgICAgICAgICB0aGlzLl9sb2FkaW5nU3RhdHVzID0gdGhpcy5kZWZhdWx0TWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9sb2FkaW5nU3RhdHVzID0gbWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgfSwgMTApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=