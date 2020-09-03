import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlSharedComponentFilterService {
    constructor() {
        this.opened = false;
        this.menuHidden$ = new Subject();
    }
    initialize(container, background, menuNavContainer, router) {
        this.container = container;
        this.background = background;
        this.menuNavContainer = menuNavContainer;
        this.router = router;
        this.menuHidden$.next(true);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
    open(event) {
        event.preventDefault();
        this.applyPartialResult;
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        setTimeout(() => {
            if (this.isIE) {
                this.menuNavContainer.scrollTop = 0;
            }
            else {
                this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }, 100);
        this.menuHidden$.next(false);
        this.opened = true;
        return true;
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden$.next(true);
        this.opened = false;
        return false;
    }
}
GlSharedComponentFilterService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentFilterService_Factory() { return new GlSharedComponentFilterService(); }, token: GlSharedComponentFilterService, providedIn: "root" });
GlSharedComponentFilterService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentFilterService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9maWx0ZXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyw4QkFBOEI7SUFhekM7UUFUQSxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGdCQUFXLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7SUFPOUIsQ0FBQztJQUVqQixVQUFVLENBQ1IsU0FBeUIsRUFDekIsVUFBMEIsRUFDMUIsZ0JBQWdDLEVBQ2hDLE1BQWM7UUFFZCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRTtJQUN6QyxDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQVk7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUVwRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsS0FBSyxDQUFDLEtBQVk7UUFDaEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7WUE1REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlIHtcbiAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgYmFja2dyb3VuZDogSFRNTERpdkVsZW1lbnQ7XG4gIG1lbnVOYXZDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICBvcGVuZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBtZW51SGlkZGVuJDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGlzSUU6IGJvb2xlYW47XG4gIGFwcGx5UGFydGlhbFJlc3VsdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgaW5pdGlhbGl6ZShcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50LFxuICAgIG1lbnVOYXZDb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICAgIHJvdXRlcjogUm91dGVyLFxuICApIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICAgIHRoaXMubWVudU5hdkNvbnRhaW5lciA9IG1lbnVOYXZDb250YWluZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5tZW51SGlkZGVuJC5uZXh0KHRydWUpO1xuICB9XG5cbiAgYmFja2dyb3VuZENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7IHRoaXMuY2xvc2UoZXZlbnQpOyB9XG4gIH1cbiAgb3BlbihldmVudDogRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYXBwbHlQYXJ0aWFsUmVzdWx0O1xuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtYWN0aXZlJyk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0lFKSB7XG4gICAgICAgIHRoaXMubWVudU5hdkNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tZW51TmF2Q29udGFpbmVyLnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHRoaXMubWVudUhpZGRlbiQubmV4dChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNsb3NlKGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1hY3RpdmUnKTtcbiAgICB0aGlzLmJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZS1iYWNrZ3JvdW5kJyk7XG5cbiAgICB0aGlzLm1lbnVIaWRkZW4kLm5leHQodHJ1ZSk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==