import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlSharedComponentMenuService {
    constructor() {
        this.menuHidden = new Subject();
        this.opened = false;
    }
    ngOnDestroy() {
        this.menuHidden.observers.map(x => x.complete());
    }
    initialize(container, background, router) {
        this.container = container;
        this.background = background;
        this.router = router;
        this.menuHidden.next(true);
    }
    close(event) {
        event.preventDefault();
        this.container.classList.remove('menu-active');
        this.background.classList.remove('visible-background');
        this.menuHidden.next(true);
        this.opened = false;
        return false;
    }
    open(event) {
        event.preventDefault();
        this.container.classList.add('menu-active');
        this.background.classList.add('visible-background');
        this.menuHidden.next(false);
        this.opened = true;
        return true;
    }
    goToSettings(url, target = '_blank') {
        window.open(url, target);
    }
    backgroundClick(event) {
        if (this.opened) {
            this.close(event);
        }
    }
}
GlSharedComponentMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
GlSharedComponentMenuService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentMenuService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbWVudS9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXRELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSzdCLE1BQU0sT0FBTyw0QkFBNEI7SUFVekM7UUFIQSxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUVDLENBQUM7SUFFakIsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxVQUFVLENBQUMsU0FBeUIsRUFBRSxVQUEwQixFQUFFLE1BQWM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQVk7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXLEVBQUUsU0FBaUIsUUFBUTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFO0lBQ3pDLENBQUM7Ozs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuICBleHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgYmFja2dyb3VuZDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIHJvdXRlcjogUm91dGVyO1xyXG5cclxuICBtZW51SGlkZGVuOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuICBvcGVuZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVIaWRkZW4ub2JzZXJ2ZXJzLm1hcCh4ID0+IHguY29tcGxldGUoKSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50LCByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcblxyXG4gICAgdGhpcy5tZW51SGlkZGVuLm5leHQodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgIHRoaXMubWVudUhpZGRlbi5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgb3BlbihldmVudDogRXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWFjdGl2ZScpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUtYmFja2dyb3VuZCcpO1xyXG5cclxuICAgIHRoaXMubWVudUhpZGRlbi5uZXh0KGZhbHNlKTtcclxuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ29Ub1NldHRpbmdzKHVybDogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZyA9ICdfYmxhbmsnKSB7XHJcbiAgICB3aW5kb3cub3Blbih1cmwsIHRhcmdldCk7XHJcbiAgfVxyXG5cclxuICBiYWNrZ3JvdW5kQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLm9wZW5lZCkgeyB0aGlzLmNsb3NlKGV2ZW50KTsgfVxyXG4gIH1cclxufVxyXG4iXX0=