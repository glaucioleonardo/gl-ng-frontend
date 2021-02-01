import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { GlSharedComponentMenuService } from '../gl-shared-component-menu.service';
import * as SmoothScroll from 'smooth-scroll';
export class GlSharedComponentMenuItemComponent {
    constructor(_router, _menu) {
        this._router = _router;
        this._menu = _menu;
        this.itemClass = 'dark';
        this.menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
        this.src = this.menuLogo;
        this.target = '_self';
        this.$click = new EventEmitter();
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
    onClick(event) {
        if (this.fragment != null) {
            this._menu.close(event);
            const element = document.querySelector(`#${this.fragment}`);
            const scroll = new SmoothScroll(`#${this.fragment}`, {
                speed: 1000,
                speedAsDuration: true,
                easing: 'easeInOutQuad',
                updateURL: true,
                popstate: true
            });
            scroll.animateScroll(element);
            this.$click.emit({ event, href: this.href, fragment: this.fragment });
        }
    }
}
GlSharedComponentMenuItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-menu-item',
                template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <a\n    class=\"menu-item\"\n    *ngIf=\"absolute\"\n    [href]=\"'externalRedirect'\"\n    (click)=\"openAbsoluteLink($event, href, target)\"\n  >{{ content }}</a>\n  <a *ngIf=\"!absolute\"\n     class=\"menu-item\"\n     [routerLink]=\"href\"\n     [fragment]=\"fragment\"\n     (click)=\"onClick($event)\"\n  >{{ content }}</a>\n</li>\n\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\n  <div\n    class=\"menu-item\"\n    (click)=\"toggleActive()\"\n  >{{ content }}</div>\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\n</li>\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\n    <a\n      class=\"menu-item\"\n      *ngIf=\"item.absolute\"\n      [href]=\"'externalRedirect'\"\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\n    >{{ item.content }}</a>\n    <a *ngIf=\"!item.absolute\"\n       class=\"menu-item\"\n       [routerLink]=\"item.href\"\n       [fragment]=\"item.fragment\"\n       (click)=\"onClick($event)\"\n    >{{ item.content }}</a>\n  </li>\n</ol>\n",
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
                            animate('0.3s ease-in', style({
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
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.adding-row-animated{-webkit-animation:adding-row .5s ease-in-out;-webkit-animation-fill-mode:forwards;-webkit-animation-play-state:running;animation:adding-row .5s ease-in-out;animation-fill-mode:forwards;animation-play-state:running}@-webkit-keyframes adding-row{0%{opacity:0}to{opacity:1}}@keyframes adding-row{0%{opacity:0}to{opacity:1}}.delete-row-animated{max-height:0!important;opacity:0!important;transition:all .2s ease-out}.delete-row-animated-frame{-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;-webkit-animation-name:hide;-webkit-animation-play-state:initial;animation-duration:.2s;animation-fill-mode:forwards!important;animation-name:hide;animation-play-state:initial}@-webkit-keyframes hide{0%{opacity:1}to{opacity:0}}@keyframes hide{0%{opacity:1}to{opacity:0}}:host::ng-deep{outline:none!important}:host::ng-deep .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #d24077;display:flex;margin:0 0 1px;position:relative}:host::ng-deep .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{height:1em;opacity:.5;padding:.2em .5em;transform:rotate(0deg);transition:all .25s ease-in-out;width:1em}:host::ng-deep .menu-title .menu-item{color:hsla(0,0%,100%,.4);cursor:pointer;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;max-width:79%;overflow:hidden;padding:1.5em .7em;text-decoration:none;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:all .25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:all .2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:all .2s ease-in-out}:host::ng-deep .menu-title.dark{border-bottom:1px solid #38393c;border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:all .3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid{border-bottom:.5px solid hsla(0,0%,100%,.1);border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.translucid:not(hover){background:hsla(0,0%,100%,.05);transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;outline:none!important;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:all .3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:all .3s ease-in-out;transition-delay:.1s}"]
            },] }
];
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router },
    { type: GlSharedComponentMenuService }
];
GlSharedComponentMenuItemComponent.propDecorators = {
    itemClass: [{ type: Input }],
    absolute: [{ type: Input }],
    menuLogo: [{ type: Input }],
    src: [{ type: Input }],
    href: [{ type: Input }],
    fragment: [{ type: Input }],
    alt: [{ type: Input }],
    content: [{ type: Input }],
    target: [{ type: Input }],
    hasSubitem: [{ type: Input }],
    active: [{ type: Input }],
    subItems: [{ type: Input }],
    $click: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvaXRlbS9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEtBQUssWUFBWSxNQUFNLGVBQWUsQ0FBQztBQW1DOUMsTUFBTSxPQUFPLGtDQUFrQztJQWlCN0MsWUFDVSxPQUFlLEVBQ2YsS0FBbUM7UUFEbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQThCO1FBbEJwQyxjQUFTLEdBQStCLE1BQU0sQ0FBQztRQUUvQyxhQUFRLEdBQUcsNkNBQTZDLENBQUM7UUFDekQsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFLcEIsV0FBTSxHQUFlLE9BQU8sQ0FBQztRQU01QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPekQsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBcUIsT0FBTztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFO1lBQ3pFLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QixNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuRCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxlQUFlLEVBQUUsSUFBSTtnQkFDckIsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDArQ0FBNkQ7Z0JBRTdELFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNuQixLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQzs0QkFDZCxPQUFPLEVBQUUsQ0FBQzs0QkFDVixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxTQUFTLEVBQUUsV0FBVzt5QkFDdkIsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixNQUFNLEVBQUUsQ0FBQztnQ0FDVCxTQUFTLEVBQUUsV0FBVzs2QkFDdkIsQ0FBQzs0QkFDRixPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztnQ0FDNUIsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsU0FBUyxFQUFFLFdBQVc7NkJBQ3ZCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO2dDQUNqQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixNQUFNLEVBQUUsQ0FBQztnQ0FDVCxTQUFTLEVBQUUsV0FBVzs2QkFDdkIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDs7YUFDRjs7O1lBdENRLE1BQU07WUFHUCw0QkFBNEI7Ozt3QkFxQ2pDLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUVMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElNZW51SXRlbSwgVFVybFRhcmdldCB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uaW50ZXJmYWNlJztcbmltcG9ydCB7c3R5bGUsIHN0YXRlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7R2xTaGFyZWRDb21wb25lbnRNZW51U2VydmljZX0gZnJvbSAnLi4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgU21vb3RoU2Nyb2xsIGZyb20gJ3Ntb290aC1zY3JvbGwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFsgICAvLyA6ZW50ZXIgaXMgYWxpYXMgdG8gJ3ZvaWQgPT4gKidcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIGhlaWdodDogJyonLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFsgICAvLyA6bGVhdmUgaXMgYWxpYXMgdG8gJyogPT4gdm9pZCdcbiAgICAgICAgYW5pbWF0ZSgyNTAsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TWVudUl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBpdGVtQ2xhc3M6ICd0cmFuc2x1Y2lkJyB8ICdkYXJrJyB8ICcnID0gJ2RhcmsnO1xuICBASW5wdXQoKSBhYnNvbHV0ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbWVudUxvZ28gPSAnLi4vYXNzZXRzL2ltZy9sb2dvL2dsYXVjaW8tbG9nby1jb2xvcmVkLnN2Zyc7XG4gIEBJbnB1dCgpIHNyYyA9IHRoaXMubWVudUxvZ287XG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcbiAgQElucHV0KCkgZnJhZ21lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0O1xuICBASW5wdXQoKSBjb250ZW50O1xuICBASW5wdXQoKSB0YXJnZXQ6IFRVcmxUYXJnZXQgPSAnX3NlbGYnO1xuXG4gIEBJbnB1dCgpIGhhc1N1Yml0ZW06IGJvb2xlYW47XG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3ViSXRlbXM6IElNZW51SXRlbVtdO1xuXG4gIEBPdXRwdXQoKSAkY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgX21lbnU6IEdsU2hhcmVkQ29tcG9uZW50TWVudVNlcnZpY2VcbiAgKSB7XG5cbiAgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYsIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZicpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYsIHRhcmdldH1dLCB7XG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVkaXJlY3RlZCB0bzogJHtocmVmfWApO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5mcmFnbWVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9tZW51LmNsb3NlKGV2ZW50KTtcblxuICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmZyYWdtZW50fWApO1xuICAgICAgY29uc3Qgc2Nyb2xsID0gbmV3IFNtb290aFNjcm9sbChgIyR7dGhpcy5mcmFnbWVudH1gLCB7XG4gICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICBzcGVlZEFzRHVyYXRpb246IHRydWUsXG4gICAgICAgIGVhc2luZzogJ2Vhc2VJbk91dFF1YWQnLFxuICAgICAgICB1cGRhdGVVUkw6IHRydWUsXG4gICAgICAgIHBvcHN0YXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHNjcm9sbC5hbmltYXRlU2Nyb2xsKGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLiRjbGljay5lbWl0KHsgZXZlbnQsIGhyZWY6IHRoaXMuaHJlZiwgZnJhZ21lbnQ6IHRoaXMuZnJhZ21lbnQgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=