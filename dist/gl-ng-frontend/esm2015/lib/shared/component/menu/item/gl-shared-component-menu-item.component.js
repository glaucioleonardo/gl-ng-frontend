import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
let GlSharedComponentMenuItemComponent = class GlSharedComponentMenuItemComponent {
    constructor(_router) {
        this._router = _router;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.onClick = new EventEmitter();
    }
    openAbsoluteLink(event, href, target = '_self') {
        this._router.navigate(['/externalRedirect', { externalUrl: href, target }], {
            skipLocationChange: true,
        }).then(() => {
            console.log(`Redirected to: ${href}`);
        });
        event.preventDefault();
    }
    toggleActive() {
        this.active = !this.active;
    }
};
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "itemClass", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "absolute", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "menuLogo", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "href", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "content", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "target", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "hasSubitem", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "active", void 0);
__decorate([
    Input()
], GlSharedComponentMenuItemComponent.prototype, "subItems", void 0);
__decorate([
    Output()
], GlSharedComponentMenuItemComponent.prototype, "onClick", void 0);
GlSharedComponentMenuItemComponent = __decorate([
    Component({
        selector: 'gl-shared-component-menu-item',
        template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    class=\"menu-item\"\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href, target)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     class=\"menu-item\"\n     [routerLink]=\"href\"\n     (click)=\"onClick.emit(null)\"\n  >{{ content }}</a>\n</li>\n\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <div\n    class=\"menu-item\"\n    (click)=\"toggleActive()\"\n  >{{ content }}</div>\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\n</li>\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\n    <a\n      class=\"menu-item\"\n      *ngIf=\"item.absolute\"\n      [href]=\"'externalRedirect'\"\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\n    >{{ item.content }}</a>\n    <a *ngIf=\"!item.absolute\"\n       class=\"menu-item\"\n       [routerLink]=\"item.href\"\n       (click)=\"onClick.emit(null)\"\n    >{{ item.content }}</a>\n  </li>\n</ol>\n",
        animations: [
            trigger('fadeInOut', [
                state('', style({
                    opacity: 0,
                    height: 0,
                    transform: 'scaleY(0)'
                })),
                transition(':enter', [
                    style({
                        opacity: 0,
                        height: 0,
                        transform: 'scaleY(0)'
                    }),
                    animate("0.3s ease-in", style({
                        opacity: 1,
                        height: '*',
                        transform: 'scaleY(1)'
                    }))
                ]),
                transition(':leave', [
                    animate(250, style({
                        opacity: 0,
                        height: 0,
                        transform: 'scaleY(0)'
                    }))
                ])
            ])
        ],
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.adding-row-animated{-webkit-animation:.5s ease-in-out forwards adding-row;animation:.5s ease-in-out forwards adding-row}@-webkit-keyframes adding-row{from{opacity:0}to{opacity:1}}@keyframes adding-row{from{opacity:0}to{opacity:1}}.delete-row-animated{opacity:0!important;max-height:0!important;transition:.2s ease-out}.delete-row-animated-frame{-webkit-animation-name:hide;animation-name:hide;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;animation-fill-mode:forwards!important;-webkit-animation-play-state:initial;animation-play-state:initial}@-webkit-keyframes hide{from{opacity:1}to{opacity:0}}@keyframes hide{from{opacity:1}to{opacity:0}}:host::ng-deep{outline:0!important}:host::ng-deep .menu-title{background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);margin:0 0 1px;position:relative;display:flex;align-items:center;border-left:.2em solid #d24077}:host::ng-deep .menu-title .material-icons{color:rgba(255,255,255,.6);font-size:1.2em;padding:.3em;margin:0 .5em 0 .3em}:host::ng-deep .menu-title .menu-icons{padding:.2em .5em;height:1.5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{padding:.2em .5em;height:1em;width:1em;opacity:.5;transform:rotate(0);transition:.25s ease-in-out}:host::ng-deep .menu-title .menu-item{text-decoration:none;font-size:.6em;font-family:Montserrat,sans-serif;font-weight:300;text-transform:uppercase;color:rgba(255,255,255,.4);padding:1.5em .7em;flex-grow:1;cursor:pointer;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:79%}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:.25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:.2s ease-in-out}:host::ng-deep .menu-title.dark{margin:0;border-bottom:1px solid #38393c;border-left:.2em solid transparent}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:.3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid{margin:0;border-bottom:.5px solid rgba(255,255,255,.1);border-left:.2em solid transparent}:host::ng-deep .menu-title.translucid:not(hover){background:rgba(255,255,255,.05);transition:.3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:rgba(255,255,255,.1);transition:.3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{outline:0!important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:.3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:.3s ease-in-out .1s}"]
    })
], GlSharedComponentMenuItemComponent);
export { GlSharedComponentMenuItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tZW51L2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QyxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUMvRSxJQUFhLGtDQUFrQyxHQUEvQyxNQUFhLGtDQUFrQztJQWdCN0MsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFmMUIsY0FBUyxHQUErQixNQUFNLENBQUM7UUFFL0MsYUFBUSxHQUFXLDZDQUE2QyxDQUFDO1FBQ2pFLFFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBSXBCLFdBQU0sR0FBZSxPQUFPLENBQUM7UUFNNUIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTFELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQXFCLE9BQU87UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRTtZQUN6RSxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOztZQWpCOEIsTUFBTTs7QUFmMUI7SUFBUixLQUFLLEVBQUU7cUVBQWdEO0FBQy9DO0lBQVIsS0FBSyxFQUFFO29FQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtvRUFBa0U7QUFDakU7SUFBUixLQUFLLEVBQUU7K0RBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO2dFQUFNO0FBQ0w7SUFBUixLQUFLLEVBQUU7K0RBQUs7QUFDSjtJQUFSLEtBQUssRUFBRTttRUFBUztBQUNSO0lBQVIsS0FBSyxFQUFFO2tFQUE4QjtBQUU3QjtJQUFSLEtBQUssRUFBRTtzRUFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7a0VBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO29FQUF1QjtBQUVyQjtJQUFULE1BQU0sRUFBRTttRUFBaUQ7QUFkL0Msa0NBQWtDO0lBakM5QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLDY2Q0FBNkQ7UUFFN0QsVUFBVSxFQUFFO1lBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7b0JBQ2QsT0FBTyxFQUFFLENBQUM7b0JBQ1YsTUFBTSxFQUFFLENBQUM7b0JBQ1QsU0FBUyxFQUFFLFdBQVc7aUJBQ3ZCLENBQUMsQ0FBQztnQkFDSCxVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNuQixLQUFLLENBQUM7d0JBQ0osT0FBTyxFQUFFLENBQUM7d0JBQ1YsTUFBTSxFQUFFLENBQUM7d0JBQ1QsU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCLENBQUM7b0JBQ0YsT0FBTyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDO3dCQUNWLE1BQU0sRUFBRSxHQUFHO3dCQUNYLFNBQVMsRUFBRSxXQUFXO3FCQUN2QixDQUFDLENBQUM7aUJBQ0osQ0FBQztnQkFDRixVQUFVLENBQUMsUUFBUSxFQUFFO29CQUNuQixPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQzt3QkFDakIsT0FBTyxFQUFFLENBQUM7d0JBQ1YsTUFBTSxFQUFFLENBQUM7d0JBQ1QsU0FBUyxFQUFFLFdBQVc7cUJBQ3ZCLENBQUMsQ0FBQztpQkFDSixDQUFDO2FBQ0gsQ0FBQztTQUNIOztLQUNGLENBQUM7R0FDVyxrQ0FBa0MsQ0FpQzlDO1NBakNZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSU1lbnVJdGVtLCBUVXJsVGFyZ2V0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtzdHlsZSwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFsgICAvLyA6ZW50ZXIgaXMgYWxpYXMgdG8gJ3ZvaWQgPT4gKidcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXCIwLjNzIGVhc2UtaW5cIiwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgWyAgIC8vIDpsZWF2ZSBpcyBhbGlhcyB0byAnKiA9PiB2b2lkJ1xuICAgICAgICBhbmltYXRlKDI1MCwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGFic29sdXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xuICBASW5wdXQoKSBocmVmO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG4gIEBJbnB1dCgpIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZic7XG5cbiAgQElucHV0KCkgaGFzU3ViaXRlbTogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBzdWJJdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYsIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZicpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYsIHRhcmdldH1dLCB7XG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVkaXJlY3RlZCB0bzogJHtocmVmfWApO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxufVxuIl19