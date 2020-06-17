import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
let GlSharedComponentModalAlertService = class GlSharedComponentModalAlertService {
    constructor() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    show(message) {
        return this.modal(true, true, message);
    }
    showYesNo(message) {
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
    modal(show, isOK = true, message = '') {
        return new Promise(resolve => {
            this.resolvePromise = resolve;
            this.isOK = isOK;
            this.message = message;
            if (show) {
                this.modalClass = 'hide-modal';
                this.showModal = show;
                this.modalClass = 'show-modal';
            }
            else {
                this.modalClass = 'hide-modal';
                setTimeout(() => {
                    this.showModal = false;
                    this.message = '';
                }, 300);
            }
        });
    }
    onModalKeyUp(e) {
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
    }
};
GlSharedComponentModalAlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
GlSharedComponentModalAlertService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlSharedComponentModalAlertService);
export { GlSharedComponentModalAlertService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0IsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFTN0M7UUFQQSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBSVosaUJBQVksR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQUd6QyxDQUFDO0lBRWhCLElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUFPO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sS0FBSyxDQUFDLElBQWEsRUFBRSxPQUFnQixJQUFJLEVBQUUsVUFBa0IsRUFBRTtRQUNyRSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXZCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFBRTtTQUN2RDthQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFFO2lCQUFNO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFFO1NBQ3REO0lBQ0gsQ0FBQztDQUNGLENBQUE7O0FBakVZLGtDQUFrQztJQUg5QyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csa0NBQWtDLENBaUU5QztTQWpFWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2Uge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIGlzT0sgPSB0cnVlO1xuXG4gIHNob3dNb2RhbDogYm9vbGVhbjtcbiAgbW9kYWxDbGFzczogc3RyaW5nO1xuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICByZXNvbHZlUHJvbWlzZTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc2hvdyhtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kYWwodHJ1ZSwgdHJ1ZSwgbWVzc2FnZSk7XG4gIH1cbiAgc2hvd1llc05vKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbCh0cnVlLCBmYWxzZSwgbWVzc2FnZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UsIHRoaXMuaXNPSywgdGhpcy5tZXNzYWdlKTtcbiAgfVxuXG4gIG9uTm8oKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZShmYWxzZSk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cbiAgb25ZZXMoKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG4gIG9uT2soKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbChzaG93OiBib29sZWFuLCBpc09LOiBib29sZWFuID0gdHJ1ZSwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuaXNPSyA9IGlzT0s7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gc2hvdztcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25Nb2RhbEtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmICh0aGlzLmlzT0spIHsgdGhpcy5vbk9rKCk7IH0gZWxzZSB7IHRoaXMub25ZZXMoKTsgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBpZiAodGhpcy5pc09LKSB7IHRoaXMub25PaygpOyB9IGVsc2UgeyB0aGlzLm9uTm8oKTsgfVxuICAgIH1cbiAgfVxufVxuIl19