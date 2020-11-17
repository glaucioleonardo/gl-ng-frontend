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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxrQ0FBa0M7SUFZN0M7UUFWQSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBSVosaUJBQVksR0FBcUIsSUFBSSxPQUFPLEVBQVcsQ0FBQztJQU16QyxDQUFDO0lBRWhCLElBQUksQ0FBQyxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBa0IsRUFBRSxRQUFpQjtRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ0QsS0FBSztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFTyxLQUFLLENBQUMsSUFBYSxFQUFFLE9BQWdCLElBQUksRUFBRSxVQUFrQixFQUFFO1FBQ3JFLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFdkIsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztnQkFDL0IsVUFBVSxDQUFDLEdBQUcsRUFBRTtvQkFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBZ0I7UUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQUU7aUJBQU07Z0JBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQUU7U0FDdkQ7YUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtpQkFBTTtnQkFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFBRTtTQUN0RDtJQUNILENBQUM7Ozs7WUEzRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpc09LID0gdHJ1ZTtcblxuICBzaG93TW9kYWw6IGJvb2xlYW47XG4gIG1vZGFsQ2xhc3M6IHN0cmluZztcbiAgY3VycmVudFZhbHVlOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcmVzb2x2ZVByb21pc2U7XG5cbiAgY3VzdG9tWWVzOiBzdHJpbmc7XG4gIGN1c3RvbU5vOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHNob3cobWVzc2FnZSkge1xuICAgIHJldHVybiB0aGlzLm1vZGFsKHRydWUsIHRydWUsIG1lc3NhZ2UpO1xuICB9XG4gIHNob3dZZXNObyhtZXNzYWdlLCBjdXN0b21ZZXM/OiBzdHJpbmcsIGN1c3RvbU5vPzogc3RyaW5nKSB7XG4gICAgdGhpcy5jdXN0b21ZZXMgPSBjdXN0b21ZZXM7XG4gICAgdGhpcy5jdXN0b21ObyA9IGN1c3RvbU5vO1xuXG4gICAgcmV0dXJuIHRoaXMubW9kYWwodHJ1ZSwgZmFsc2UsIG1lc3NhZ2UpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLm1vZGFsKGZhbHNlLCB0aGlzLmlzT0ssIHRoaXMubWVzc2FnZSk7XG4gIH1cblxuICBvbk5vKCkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQoZmFsc2UpO1xuICAgIHRoaXMucmVzb2x2ZVByb21pc2UoZmFsc2UpO1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG4gIG9uWWVzKCkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSh0cnVlKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuICBvbk9rKCkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5yZXNvbHZlUHJvbWlzZSh0cnVlKTtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgbW9kYWwoc2hvdzogYm9vbGVhbiwgaXNPSzogYm9vbGVhbiA9IHRydWUsIG1lc3NhZ2U6IHN0cmluZyA9ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLmlzT0sgPSBpc09LO1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IHNob3c7XG4gICAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdzaG93LW1vZGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdoaWRlLW1vZGFsJztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcbiAgICAgICAgICB0aGlzLmN1c3RvbVllcyA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jdXN0b21ObyA9IG51bGw7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHRoaXMuaXNPSykgeyB0aGlzLm9uT2soKTsgfSBlbHNlIHsgdGhpcy5vblllcygpOyB9XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGlmICh0aGlzLmlzT0spIHsgdGhpcy5vbk9rKCk7IH0gZWxzZSB7IHRoaXMub25ObygpOyB9XG4gICAgfVxuICB9XG59XG4iXX0=