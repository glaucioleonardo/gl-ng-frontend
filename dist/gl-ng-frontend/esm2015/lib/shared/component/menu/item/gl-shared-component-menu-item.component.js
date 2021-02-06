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
                template: "<li class=\"menu-title {{ itemClass }}\" *ngIf=\"!hasSubitem\">\r\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\r\n  <a\r\n    class=\"menu-item\"\r\n    *ngIf=\"absolute\"\r\n    [href]=\"'externalRedirect'\"\r\n    (click)=\"openAbsoluteLink($event, href, target)\"\r\n  >{{ content }}</a>\r\n  <a *ngIf=\"!absolute\"\r\n     class=\"menu-item\"\r\n     [routerLink]=\"href\"\r\n     [fragment]=\"fragment\"\r\n     (click)=\"onClick($event)\"\r\n  >{{ content }}</a>\r\n</li>\r\n\r\n<li class=\"menu-title {{ itemClass }} {{ active ? 'active' : '' }}\" *ngIf=\"hasSubitem\">\r\n  <img [src]=\"src\" class=\"menu-icons\" [alt]=\"alt\"/>\r\n  <div\r\n    class=\"menu-item\"\r\n    (click)=\"toggleActive()\"\r\n  >{{ content }}</div>\r\n  <img src=\"../assets/img/icon/side-menu/arrow-down.svg\" class=\"menu-arrow\" [alt]=\"alt\"/>\r\n</li>\r\n<ol *ngIf=\"hasSubitem && active\" [@fadeInOut] class=\"subitem-container {{ active ? 'active' : '' }}\">\r\n  <li class=\"menu-title adding-row-animated {{ item.class }}\" *ngFor=\"let item of subItems\">\r\n    <img [src]=\"item.src\" class=\"menu-icons\" [alt]=\"item.alt\"/>\r\n    <a\r\n      class=\"menu-item\"\r\n      *ngIf=\"item.absolute\"\r\n      [href]=\"'externalRedirect'\"\r\n      (click)=\"openAbsoluteLink($event, item.href, item.target)\"\r\n    >{{ item.content }}</a>\r\n    <a *ngIf=\"!item.absolute\"\r\n       class=\"menu-item\"\r\n       [routerLink]=\"item.href\"\r\n       [fragment]=\"item.fragment\"\r\n       (click)=\"onClick($event)\"\r\n    >{{ item.content }}</a>\r\n  </li>\r\n</ol>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvaXRlbS9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUNqRixPQUFPLEtBQUssWUFBWSxNQUFNLGVBQWUsQ0FBQztBQW1DOUMsTUFBTSxPQUFPLGtDQUFrQztJQWlCN0MsWUFDVSxPQUFlLEVBQ2YsS0FBbUM7UUFEbkMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQThCO1FBbEJwQyxjQUFTLEdBQStCLE1BQU0sQ0FBQztRQUUvQyxhQUFRLEdBQUcsNkNBQTZDLENBQUM7UUFDekQsUUFBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFLcEIsV0FBTSxHQUFlLE9BQU8sQ0FBQztRQU01QixXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFPekQsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBcUIsT0FBTztRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFO1lBQ3pFLGtCQUFrQixFQUFFLElBQUk7U0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4QixNQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO2dCQUNuRCxLQUFLLEVBQUUsSUFBSTtnQkFDWCxlQUFlLEVBQUUsSUFBSTtnQkFDckIsTUFBTSxFQUFFLGVBQWU7Z0JBQ3ZCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFFBQVEsRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLDRqREFBNkQ7Z0JBRTdELFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsV0FBVyxFQUFFO3dCQUNuQixLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQzs0QkFDZCxPQUFPLEVBQUUsQ0FBQzs0QkFDVixNQUFNLEVBQUUsQ0FBQzs0QkFDVCxTQUFTLEVBQUUsV0FBVzt5QkFDdkIsQ0FBQyxDQUFDO3dCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLEtBQUssQ0FBQztnQ0FDSixPQUFPLEVBQUUsQ0FBQztnQ0FDVixNQUFNLEVBQUUsQ0FBQztnQ0FDVCxTQUFTLEVBQUUsV0FBVzs2QkFDdkIsQ0FBQzs0QkFDRixPQUFPLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQztnQ0FDNUIsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsU0FBUyxFQUFFLFdBQVc7NkJBQ3ZCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3dCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7NEJBQ25CLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO2dDQUNqQixPQUFPLEVBQUUsQ0FBQztnQ0FDVixNQUFNLEVBQUUsQ0FBQztnQ0FDVCxTQUFTLEVBQUUsV0FBVzs2QkFDdkIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7cUJBQ0gsQ0FBQztpQkFDSDs7YUFDRjs7O1lBdENRLE1BQU07WUFHUCw0QkFBNEI7Ozt3QkFxQ2pDLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUVMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBJTWVudUl0ZW0sIFRVcmxUYXJnZXQgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmludGVyZmFjZSc7XHJcbmltcG9ydCB7c3R5bGUsIHN0YXRlLCBhbmltYXRlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlfSBmcm9tICcuLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIFNtb290aFNjcm9sbCBmcm9tICdzbW9vdGgtc2Nyb2xsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXHJcbiAgICAgIHN0YXRlKCcnLCBzdHlsZSh7XHJcbiAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICBoZWlnaHQ6IDAsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJ1xyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFsgICAvLyA6ZW50ZXIgaXMgYWxpYXMgdG8gJ3ZvaWQgPT4gKidcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgZWFzZS1pbicsIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBoZWlnaHQ6ICcqJyxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKSdcclxuICAgICAgICB9KSlcclxuICAgICAgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFsgICAvLyA6bGVhdmUgaXMgYWxpYXMgdG8gJyogPT4gdm9pZCdcclxuICAgICAgICBhbmltYXRlKDI1MCwgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcclxuICAgICAgICB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXRlbUNsYXNzOiAndHJhbnNsdWNpZCcgfCAnZGFyaycgfCAnJyA9ICdkYXJrJztcclxuICBASW5wdXQoKSBhYnNvbHV0ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBtZW51TG9nbyA9ICcuLi9hc3NldHMvaW1nL2xvZ28vZ2xhdWNpby1sb2dvLWNvbG9yZWQuc3ZnJztcclxuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xyXG4gIEBJbnB1dCgpIGhyZWY6IHN0cmluZztcclxuICBASW5wdXQoKSBmcmFnbWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFsdDtcclxuICBASW5wdXQoKSBjb250ZW50O1xyXG4gIEBJbnB1dCgpIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZic7XHJcblxyXG4gIEBJbnB1dCgpIGhhc1N1Yml0ZW06IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHN1Ykl0ZW1zOiBJTWVudUl0ZW1bXTtcclxuXHJcbiAgQE91dHB1dCgpICRjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIF9tZW51OiBHbFNoYXJlZENvbXBvbmVudE1lbnVTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgb3BlbkFic29sdXRlTGluayhldmVudCwgaHJlZiwgdGFyZ2V0OiBUVXJsVGFyZ2V0ID0gJ19zZWxmJykge1xyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2V4dGVybmFsUmVkaXJlY3QnLCB7IGV4dGVybmFsVXJsOiBocmVmLCB0YXJnZXR9XSwge1xyXG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYFJlZGlyZWN0ZWQgdG86ICR7aHJlZn1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVBY3RpdmUoKSB7XHJcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcclxuICB9XHJcblxyXG4gIG9uQ2xpY2soZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmZyYWdtZW50ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5fbWVudS5jbG9zZShldmVudCk7XHJcblxyXG4gICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuZnJhZ21lbnR9YCk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoYCMke3RoaXMuZnJhZ21lbnR9YCwge1xyXG4gICAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICAgIHNwZWVkQXNEdXJhdGlvbjogdHJ1ZSxcclxuICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyxcclxuICAgICAgICB1cGRhdGVVUkw6IHRydWUsXHJcbiAgICAgICAgcG9wc3RhdGU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIHNjcm9sbC5hbmltYXRlU2Nyb2xsKGVsZW1lbnQpO1xyXG5cclxuICAgICAgdGhpcy4kY2xpY2suZW1pdCh7IGV2ZW50LCBocmVmOiB0aGlzLmhyZWYsIGZyYWdtZW50OiB0aGlzLmZyYWdtZW50IH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=