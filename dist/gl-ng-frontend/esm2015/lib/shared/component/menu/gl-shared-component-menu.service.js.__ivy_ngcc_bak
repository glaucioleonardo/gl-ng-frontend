import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
let GlSharedComponentMenuService = class GlSharedComponentMenuService {
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
};
GlSharedComponentMenuService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentMenuService_Factory() { return new GlSharedComponentMenuService(); }, token: GlSharedComponentMenuService, providedIn: "root" });
GlSharedComponentMenuService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlSharedComponentMenuService);
export { GlSharedComponentMenuService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFdEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFLN0IsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFVekM7UUFIQSxlQUFVLEdBQXFCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFHLEtBQUssQ0FBQztJQUVDLENBQUM7SUFFakIsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxVQUFVLENBQUMsU0FBeUIsRUFBRSxVQUEwQixFQUFFLE1BQWM7UUFDOUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFdkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQVk7UUFDZixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFXLEVBQUUsU0FBaUIsUUFBUTtRQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUFFO0lBQ3pDLENBQUM7Q0FDRixDQUFBOztBQWxEYyw0QkFBNEI7SUFIMUMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNhLDRCQUE0QixDQWtEMUM7U0FsRGMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbiAgZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gIGJhY2tncm91bmQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIG1lbnVIaWRkZW46IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xuICBvcGVuZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWVudUhpZGRlbi5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSgpKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCwgYmFja2dyb3VuZDogSFRNTERpdkVsZW1lbnQsIHJvdXRlcjogUm91dGVyKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcblxuICAgIHRoaXMubWVudUhpZGRlbi5uZXh0KHRydWUpO1xuICB9XG5cbiAgY2xvc2UoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWFjdGl2ZScpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlLWJhY2tncm91bmQnKTtcblxuICAgIHRoaXMubWVudUhpZGRlbi5uZXh0KHRydWUpO1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIG9wZW4oZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWFjdGl2ZScpO1xuICAgIHRoaXMuYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlLWJhY2tncm91bmQnKTtcblxuICAgIHRoaXMubWVudUhpZGRlbi5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBnb1RvU2V0dGluZ3ModXJsOiBzdHJpbmcsIHRhcmdldDogc3RyaW5nID0gJ19ibGFuaycpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIHRhcmdldCk7XG4gIH1cblxuICBiYWNrZ3JvdW5kQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHsgdGhpcy5jbG9zZShldmVudCk7IH1cbiAgfVxufVxuIl19