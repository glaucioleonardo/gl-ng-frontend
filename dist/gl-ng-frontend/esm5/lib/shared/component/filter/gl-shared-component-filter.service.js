import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var GlSharedComponentFilterService = /** @class */ (function () {
    function GlSharedComponentFilterService() {
        this.opened = false;
        this.menuHidden$ = new Subject();
    }
    GlSharedComponentFilterService.prototype.initialize = function (container, background, menuNavContainer, router) {
        this.container = container;
        this.background = background;
        this.menuNavContainer = menuNavContainer;
        this.router = router;
        this.menuHidden$.next(true);
    };
    GlSharedComponentFilterService.prototype.backgroundClick = function (event) {
        if (this.opened) {
            this.close(event);
        }
    };
    GlSharedComponentFilterService.prototype.open = function (event) {
        var _this = this;
        event.preventDefault();
        this.applyPartialResult;
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        setTimeout(function () {
            if (_this.isIE) {
                _this.menuNavContainer.scrollTop = 0;
            }
            else {
                _this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
        this.menuHidden$.next(false);
        this.opened = true;
        return true;
    };
    GlSharedComponentFilterService.prototype.close = function (event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden$.next(true);
        this.opened = false;
        return false;
    };
    GlSharedComponentFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
    GlSharedComponentFilterService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentFilterService);
    return GlSharedComponentFilterService;
}());
export { GlSharedComponentFilterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvZmlsdGVyL2dsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLL0I7SUFhRTtRQVRBLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZ0JBQVcsR0FBcUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU85QixDQUFDO0lBRWpCLG1EQUFVLEdBQVYsVUFDRSxTQUF5QixFQUN6QixVQUEwQixFQUMxQixnQkFBZ0MsRUFDaEMsTUFBYztRQUVkLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0RBQWUsR0FBZixVQUFnQixLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRTtJQUN6QyxDQUFDO0lBQ0QsNkNBQUksR0FBSixVQUFLLEtBQVk7UUFBakIsaUJBaUJDO1FBaEJDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXBELFVBQVUsQ0FBQztZQUNULElBQUksS0FBSSxDQUFDLElBQUksRUFBRTtnQkFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDTCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVSLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELDhDQUFLLEdBQUwsVUFBTSxLQUFZO1FBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztJQXpEVSw4QkFBOEI7UUFIMUMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLDhCQUE4QixDQTBEMUM7eUNBakVEO0NBaUVDLEFBMURELElBMERDO1NBMURZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50RmlsdGVyU2VydmljZSB7XG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50O1xuICBtZW51TmF2Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgb3BlbmVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbWVudUhpZGRlbiQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICByb3V0ZXI6IFJvdXRlcjtcblxuICBpc0lFOiBib29sZWFuO1xuICBhcHBseVBhcnRpYWxSZXN1bHQ6ICgpID0+IFByb21pc2U8dm9pZD47XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGluaXRpYWxpemUoXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICBiYWNrZ3JvdW5kOiBIVE1MRGl2RWxlbWVudCxcbiAgICBtZW51TmF2Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICByb3V0ZXI6IFJvdXRlcixcbiAgKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB0aGlzLm1lbnVOYXZDb250YWluZXIgPSBtZW51TmF2Q29udGFpbmVyO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMubWVudUhpZGRlbiQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGJhY2tncm91bmRDbGljayhldmVudCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkgeyB0aGlzLmNsb3NlKGV2ZW50KTsgfVxuICB9XG4gIG9wZW4oZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFwcGx5UGFydGlhbFJlc3VsdDtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWFjdGl2ZScpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlLWJhY2tncm91bmQnKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNJRSkge1xuICAgICAgICB0aGlzLm1lbnVOYXZDb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWVudU5hdkNvbnRhaW5lci5zY3JvbGxUbyh7IHRvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICB0aGlzLm1lbnVIaWRkZW4kLm5leHQoZmFsc2UpO1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjbG9zZShldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtYWN0aXZlJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xuXG4gICAgdGhpcy5tZW51SGlkZGVuJC5uZXh0KHRydWUpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=