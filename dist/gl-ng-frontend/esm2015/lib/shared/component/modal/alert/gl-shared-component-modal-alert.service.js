import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlSharedComponentModalAlertService {
    constructor() {
        this.isOK = true;
        this.currentValue = new Subject();
    }
    show(message) {
        return this.modal(true, true, message);
    }
    showYesNo(message, customYes, customNo) {
        this.customYes = customYes;
        this.customNo = customNo;
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
                    this.customYes = null;
                    this.customNo = null;
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
}
GlSharedComponentModalAlertService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAlertService_Factory() { return new GlSharedComponentModalAlertService(); }, token: GlSharedComponentModalAlertService, providedIn: "root" });
GlSharedComponentModalAlertService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAlertService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxrQ0FBa0M7SUFZN0M7UUFWQSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBSVosaUJBQVksR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQU16QyxDQUFDO0lBRWhCLElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxLQUFLLENBQUMsSUFBYSxFQUFFLE9BQWdCLElBQUksRUFBRSxVQUFrQixFQUFFO1FBQ3JFLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdkIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBZ0I7UUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQUU7aUJBQU07Z0JBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQUU7U0FDdkQ7YUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtTQUN0RDtJQUNILENBQUM7Ozs7WUEzRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgaXNPSyA9IHRydWU7XHJcblxyXG4gIHNob3dNb2RhbDogYm9vbGVhbjtcclxuICBtb2RhbENsYXNzOiBzdHJpbmc7XHJcbiAgY3VycmVudFZhbHVlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICByZXNvbHZlUHJvbWlzZTtcclxuXHJcbiAgY3VzdG9tWWVzOiBzdHJpbmc7XHJcbiAgY3VzdG9tTm86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBzaG93KG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGFsKHRydWUsIHRydWUsIG1lc3NhZ2UpO1xyXG4gIH1cclxuICBzaG93WWVzTm8obWVzc2FnZSwgY3VzdG9tWWVzPzogc3RyaW5nLCBjdXN0b21Obz86IHN0cmluZykge1xyXG4gICAgdGhpcy5jdXN0b21ZZXMgPSBjdXN0b21ZZXM7XHJcbiAgICB0aGlzLmN1c3RvbU5vID0gY3VzdG9tTm87XHJcblxyXG4gICAgcmV0dXJuIHRoaXMubW9kYWwodHJ1ZSwgZmFsc2UsIG1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMubW9kYWwoZmFsc2UsIHRoaXMuaXNPSywgdGhpcy5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIG9uTm8oKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5uZXh0KGZhbHNlKTtcclxuICAgIHRoaXMucmVzb2x2ZVByb21pc2UoZmFsc2UpO1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG4gIG9uWWVzKCkge1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcclxuICAgIHRoaXMucmVzb2x2ZVByb21pc2UodHJ1ZSk7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcbiAgb25PaygpIHtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1vZGFsKHNob3c6IGJvb2xlYW4sIGlzT0s6IGJvb2xlYW4gPSB0cnVlLCBtZXNzYWdlOiBzdHJpbmcgPSAnJykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcclxuICAgICAgdGhpcy5pc09LID0gaXNPSztcclxuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHJcbiAgICAgIGlmIChzaG93KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xyXG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gc2hvdztcclxuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnc2hvdy1tb2RhbCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5jdXN0b21ZZXMgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5jdXN0b21ObyA9IG51bGw7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzT0spIHsgdGhpcy5vbk9rKCk7IH0gZWxzZSB7IHRoaXMub25ZZXMoKTsgfVxyXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgaWYgKHRoaXMuaXNPSykgeyB0aGlzLm9uT2soKTsgfSBlbHNlIHsgdGhpcy5vbk5vKCk7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19