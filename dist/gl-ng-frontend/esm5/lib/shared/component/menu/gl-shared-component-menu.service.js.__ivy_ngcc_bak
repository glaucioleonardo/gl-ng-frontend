import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var GlSharedComponentMenuService = /** @class */ (function () {
    function GlSharedComponentMenuService() {
        this.menuHidden = new Subject();
        this.opened = false;
    }
    GlSharedComponentMenuService.prototype.ngOnDestroy = function () {
        this.menuHidden.observers.map(function (x) { return x.complete(); });
    };
    GlSharedComponentMenuService.prototype.initialize = function (container, background, router) {
        this.container = container;
        this.background = background;
        this.router = router;
        this.menuHidden.next(true);
    };
    GlSharedComponentMenuService.prototype.close = function (event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden.next(true);
        this.opened = false;
        return false;
    };
    GlSharedComponentMenuService.prototype.open = function (event) {
        event.preventDefault();
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        this.menuHidden.next(false);
        this.opened = true;
        return true;
    };
    GlSharedComponentMenuService.prototype.goToSettings = function (url, target) {
        if (target === void 0) { target = '_blank'; }
        window.open(url, target);
    };
    GlSharedComponentMenuService.prototype.backgroundClick = function (event) {
        if (this.opened) {
            this.close(event);
        }
    };
    GlSharedComponentMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
    GlSharedComponentMenuService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentMenuService);
    return GlSharedComponentMenuService;
}());
export { GlSharedComponentMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLN0I7SUFVQTtRQUhBLGVBQVUsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBRUMsQ0FBQztJQUVqQixrREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxpREFBVSxHQUFWLFVBQVcsU0FBeUIsRUFBRSxVQUEwQixFQUFFLE1BQWM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDRDQUFLLEdBQUwsVUFBTSxLQUFZO1FBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsMkNBQUksR0FBSixVQUFLLEtBQVk7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG1EQUFZLEdBQVosVUFBYSxHQUFXLEVBQUUsTUFBeUI7UUFBekIsdUJBQUEsRUFBQSxpQkFBeUI7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFlLEdBQWYsVUFBZ0IsS0FBSztRQUNuQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7SUFDekMsQ0FBQzs7SUFqRFksNEJBQTRCO1FBSDFDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDYSw0QkFBNEIsQ0FrRDFDO3VDQXpERDtDQXlEQyxBQWxEQyxJQWtERDtTQWxEYyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuICBleHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cbiAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgYmFja2dyb3VuZDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgbWVudUhpZGRlbjogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIG9wZW5lZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tZW51SGlkZGVuLm9ic2VydmVycy5tYXAoeCA9PiB4LmNvbXBsZXRlKCkpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LCBiYWNrZ3JvdW5kOiBIVE1MRGl2RWxlbWVudCwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuXG4gICAgdGhpcy5tZW51SGlkZGVuLm5leHQodHJ1ZSk7XG4gIH1cblxuICBjbG9zZShldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYWN0aXZlJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xuXG4gICAgdGhpcy5tZW51SGlkZGVuLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgb3BlbihldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtYWN0aXZlJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xuXG4gICAgdGhpcy5tZW51SGlkZGVuLm5leHQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdvVG9TZXR0aW5ncyh1cmw6IHN0cmluZywgdGFyZ2V0OiBzdHJpbmcgPSAnX2JsYW5rJykge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgdGFyZ2V0KTtcbiAgfVxuXG4gIGJhY2tncm91bmRDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkgeyB0aGlzLmNsb3NlKGV2ZW50KTsgfVxuICB9XG59XG4iXX0=