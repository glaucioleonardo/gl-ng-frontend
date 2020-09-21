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
        console.log(customNo);
        console.log(customYes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxrQ0FBa0M7SUFZN0M7UUFWQSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBSVosaUJBQVksR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQU16QyxDQUFDO0lBRWhCLElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU8sS0FBSyxDQUFDLElBQWEsRUFBRSxPQUFnQixJQUFJLEVBQUUsVUFBa0IsRUFBRTtRQUNyRSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXZCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO29CQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNUO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLENBQWdCO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUFFO2lCQUFNO2dCQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUFFO1NBQ3ZEO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQUU7aUJBQU07Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQUU7U0FDdEQ7SUFDSCxDQUFDOzs7O1lBN0VGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgaXNPSyA9IHRydWU7XG5cbiAgc2hvd01vZGFsOiBib29sZWFuO1xuICBtb2RhbENsYXNzOiBzdHJpbmc7XG4gIGN1cnJlbnRWYWx1ZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHJlc29sdmVQcm9taXNlO1xuXG4gIGN1c3RvbVllczogc3RyaW5nO1xuICBjdXN0b21Obzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzaG93KG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RhbCh0cnVlLCB0cnVlLCBtZXNzYWdlKTtcbiAgfVxuICBzaG93WWVzTm8obWVzc2FnZSwgY3VzdG9tWWVzPzogc3RyaW5nLCBjdXN0b21Obz86IHN0cmluZykge1xuICAgIHRoaXMuY3VzdG9tWWVzID0gY3VzdG9tWWVzO1xuICAgIHRoaXMuY3VzdG9tTm8gPSBjdXN0b21ObztcblxuICAgIGNvbnNvbGUubG9nKGN1c3RvbU5vKVxuICAgIGNvbnNvbGUubG9nKGN1c3RvbVllcylcbiAgICByZXR1cm4gdGhpcy5tb2RhbCh0cnVlLCBmYWxzZSwgbWVzc2FnZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UsIHRoaXMuaXNPSywgdGhpcy5tZXNzYWdlKTtcbiAgfVxuXG4gIG9uTm8oKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZShmYWxzZSk7XG4gICAgdGhpcy5oaWRlKCk7XG4gIH1cbiAgb25ZZXMoKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG4gIG9uT2soKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh0cnVlKTtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlKHRydWUpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBtb2RhbChzaG93OiBib29sZWFuLCBpc09LOiBib29sZWFuID0gdHJ1ZSwgbWVzc2FnZTogc3RyaW5nID0gJycpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMuaXNPSyA9IGlzT0s7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgICBpZiAoc2hvdykge1xuICAgICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gc2hvdztcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICcnO1xuICAgICAgICAgIHRoaXMuY3VzdG9tWWVzID0gbnVsbDtcbiAgICAgICAgICB0aGlzLmN1c3RvbU5vID0gbnVsbDtcbiAgICAgICAgfSwgMzAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTW9kYWxLZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAodGhpcy5pc09LKSB7IHRoaXMub25PaygpOyB9IGVsc2UgeyB0aGlzLm9uWWVzKCk7IH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaWYgKHRoaXMuaXNPSykgeyB0aGlzLm9uT2soKTsgfSBlbHNlIHsgdGhpcy5vbk5vKCk7IH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==