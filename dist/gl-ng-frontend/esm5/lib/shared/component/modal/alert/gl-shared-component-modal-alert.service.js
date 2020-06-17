import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var GlSharedComponentModalAlertService = /** @class */ (function () {
    function GlSharedComponentModalAlertService() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    GlSharedComponentModalAlertService.prototype.show = function (message) {
        return this.modal(true, true, message);
    };
    GlSharedComponentModalAlertService.prototype.showYesNo = function (message) {
        return this.modal(true, false, message);
    };
    GlSharedComponentModalAlertService.prototype.hide = function () {
        this.modal(false, this.isOK, this.message);
    };
    GlSharedComponentModalAlertService.prototype.onNo = function () {
        this.currentValue.next(false);
        this.resolvePromise(false);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.onYes = function () {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.onOk = function () {
        this.currentValue.next(true);
        this.resolvePromise(true);
        this.hide();
    };
    GlSharedComponentModalAlertService.prototype.modal = function (show, isOK, message) {
        var _this = this;
        if (isOK === void 0) { isOK = true; }
        if (message === void 0) { message = ''; }
        return new Promise(function (resolve) {
            _this.resolvePromise = resolve;
            _this.isOK = isOK;
            _this.message = message;
            if (show) {
                _this.modalClass = 'hide-modal';
                _this.showModal = show;
                _this.modalClass = 'show-modal';
            }
            else {
                _this.modalClass = 'hide-modal';
                setTimeout(function () {
                    _this.showModal = false;
                    _this.message = '';
                }, 300);
            }
        });
    };
    GlSharedComponentModalAlertService.prototype.onModalKeyUp = function (e) {
        if (e.key === 'Enter') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onYes();
            }
        }
        else if (e.key === 'Escape') {
            if (this.isOK) {
                this.onOk();
            }
            else {
                this.onNo();
            }
        }
    };
    GlSharedComponentModalAlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
    GlSharedComponentModalAlertService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalAlertService);
    return GlSharedComponentModalAlertService;
}());
export { GlSharedComponentModalAlertService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0I7SUFTRTtRQVBBLFNBQUksR0FBRyxJQUFJLENBQUM7UUFJWixpQkFBWSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO0lBR3pDLENBQUM7SUFFaEIsaURBQUksR0FBSixVQUFLLE9BQU87UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsc0RBQVMsR0FBVCxVQUFVLE9BQU87UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsaURBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpREFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0Qsa0RBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELGlEQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxrREFBSyxHQUFiLFVBQWMsSUFBYSxFQUFFLElBQW9CLEVBQUUsT0FBb0I7UUFBdkUsaUJBa0JDO1FBbEI0QixxQkFBQSxFQUFBLFdBQW9CO1FBQUUsd0JBQUEsRUFBQSxZQUFvQjtRQUNyRSxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTztZQUN4QixLQUFJLENBQUMsY0FBYyxHQUFHLE9BQU8sQ0FBQztZQUM5QixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixJQUFJLElBQUksRUFBRTtnQkFDUixLQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixVQUFVLENBQUM7b0JBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlEQUFZLEdBQVosVUFBYSxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFBRTtTQUN2RDthQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFFO2lCQUFNO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFFO1NBQ3REO0lBQ0gsQ0FBQzs7SUFoRVUsa0NBQWtDO1FBSDlDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQ0FBa0MsQ0FpRTlDOzZDQXZFRDtDQXVFQyxBQWpFRCxJQWlFQztTQWpFWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGlzT0sgPSB0cnVlO1xuXG4gIHNob3dNb2RhbDogYm9vbGVhbjtcbiAgbW9kYWxDbGFzczogc3RyaW5nO1xuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICByZXNvbHZlUHJvbWlzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2hvdyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWwodHJ1ZSwgdHJ1ZSwgbWVzc2FnZSk7XG4gIH1cbiAgc2hvd1llc05vKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbCh0cnVlLCBmYWxzZSwgbWVzc2FnZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UsIHRoaXMuaXNPSywgdGhpcy5tZXNzYWdlKTtcbiAgfVxuXG4gIG9uTm8oKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZShmYWxzZSk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cbiAgb25ZZXMoKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG4gIG9uT2soKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbChzaG93OiBib29sZWFuLCBpc09LOiBib29sZWFuID0gdHJ1ZSwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuaXNPSyA9IGlzT0s7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gc2hvdztcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2RhbEtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmICh0aGlzLmlzT0spIHsgdGhpcy5vbk9rKCk7IH0gZWxzZSB7IHRoaXMub25ZZXMoKTsgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBpZiAodGhpcy5pc09LKSB7IHRoaXMub25PaygpOyB9IGVsc2UgeyB0aGlzLm9uTm8oKTsgfVxuICAgIH1cbiAgfVxufVxuIl19