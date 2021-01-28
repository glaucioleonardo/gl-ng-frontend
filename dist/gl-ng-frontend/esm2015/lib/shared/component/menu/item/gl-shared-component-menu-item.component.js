import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { style, state, animate, transition, trigger } from '@angular/animations';
export class GlSharedComponentMenuItemComponent {
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
}
GlSharedComponentMenuItemComponent.decorators = [
    { type: Component, args: [{
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
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.adding-row-animated{-webkit-animation:adding-row .5s ease-in-out;-webkit-animation-fill-mode:forwards;-webkit-animation-play-state:running;animation:adding-row .5s ease-in-out;animation-fill-mode:forwards;animation-play-state:running}@-webkit-keyframes adding-row{0%{opacity:0}to{opacity:1}}@keyframes adding-row{0%{opacity:0}to{opacity:1}}.delete-row-animated{max-height:0!important;opacity:0!important;transition:all .2s ease-out}.delete-row-animated-frame{-webkit-animation-duration:.2s;-webkit-animation-fill-mode:forwards!important;-webkit-animation-name:hide;-webkit-animation-play-state:initial;animation-duration:.2s;animation-fill-mode:forwards!important;animation-name:hide;animation-play-state:initial}@-webkit-keyframes hide{0%{opacity:1}to{opacity:0}}@keyframes hide{0%{opacity:1}to{opacity:0}}:host::ng-deep{outline:none!important}:host::ng-deep .menu-title{align-items:center;background:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-left:.2em solid #d24077;display:flex;margin:0 0 1px;position:relative}:host::ng-deep .menu-title .material-icons{color:hsla(0,0%,100%,.6);font-size:1.2em;margin:0 .5em 0 .3em;padding:.3em}:host::ng-deep .menu-title .menu-icons{height:1.5em;padding:.2em .5em;width:1.5em}:host::ng-deep .menu-title .menu-arrow{height:1em;opacity:.5;padding:.2em .5em;transform:rotate(0deg);transition:all .25s ease-in-out;width:1em}:host::ng-deep .menu-title .menu-item{color:hsla(0,0%,100%,.4);cursor:pointer;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;max-width:79%;overflow:hidden;padding:1.5em .7em;text-decoration:none;text-overflow:ellipsis;text-transform:uppercase;white-space:nowrap}:host::ng-deep .menu-title.active .menu-arrow{transform:rotate(180deg);transition:all .25s ease-in-out}:host::ng-deep .menu-title:not(hover) .menu-icons{transform:scale(1);transition:all .2s ease-in-out}:host::ng-deep .menu-title:hover .menu-icons{transform:scale(1.2);transition:all .2s ease-in-out}:host::ng-deep .menu-title.dark{border-bottom:1px solid #38393c;border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.dark:not(hover){background:#2c2c2f;transition:all .3s ease-in-out}:host::ng-deep .menu-title.dark:hover{background:#4b4d52;transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid{border-bottom:.5px solid hsla(0,0%,100%,.1);border-left:.2em solid transparent;margin:0}:host::ng-deep .menu-title.translucid:not(hover){background:hsla(0,0%,100%,.05);transition:all .3s ease-in-out}:host::ng-deep .menu-title.translucid:hover{background:hsla(0,0%,100%,.1);transition:all .3s ease-in-out}:host::ng-deep .menu-item,:host::ng-deep .menu-title,:host::ng-deep .subitem-container{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;outline:none!important;user-select:none}:host::ng-deep .subitem-container .menu-title{transform:scaleY(0);transition:all .3s ease-in-out}:host::ng-deep .subitem-container.active .menu-title{transform:scaleY(1);transition:all .3s ease-in-out;transition-delay:.1s}"]
            },] }
];
GlSharedComponentMenuItemComponent.ctorParameters = () => [
    { type: Router }
];
GlSharedComponentMenuItemComponent.propDecorators = {
    itemClass: [{ type: Input }],
    absolute: [{ type: Input }],
    menuLogo: [{ type: Input }],
    src: [{ type: Input }],
    href: [{ type: Input }],
    alt: [{ type: Input }],
    content: [{ type: Input }],
    target: [{ type: Input }],
    hasSubitem: [{ type: Input }],
    active: [{ type: Input }],
    subItems: [{ type: Input }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tZW51LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21lbnUvaXRlbS9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekMsT0FBTyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQW1DL0UsTUFBTSxPQUFPLGtDQUFrQztJQWdCN0MsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFmMUIsY0FBUyxHQUErQixNQUFNLENBQUM7UUFFL0MsYUFBUSxHQUFXLDZDQUE2QyxDQUFDO1FBQ2pFLFFBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBSXBCLFdBQU0sR0FBZSxPQUFPLENBQUM7UUFNNUIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBSTFELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQXFCLE9BQU87UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsRUFBRTtZQUN6RSxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsNjZDQUE2RDtnQkFFN0QsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDOzRCQUNkLE9BQU8sRUFBRSxDQUFDOzRCQUNWLE1BQU0sRUFBRSxDQUFDOzRCQUNULFNBQVMsRUFBRSxXQUFXO3lCQUN2QixDQUFDLENBQUM7d0JBQ0gsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE1BQU0sRUFBRSxDQUFDO2dDQUNULFNBQVMsRUFBRSxXQUFXOzZCQUN2QixDQUFDOzRCQUNGLE9BQU8sQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDO2dDQUM1QixPQUFPLEVBQUUsQ0FBQztnQ0FDVixNQUFNLEVBQUUsR0FBRztnQ0FDWCxTQUFTLEVBQUUsV0FBVzs2QkFDdkIsQ0FBQyxDQUFDO3lCQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRTs0QkFDbkIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7Z0NBQ2pCLE9BQU8sRUFBRSxDQUFDO2dDQUNWLE1BQU0sRUFBRSxDQUFDO2dDQUNULFNBQVMsRUFBRSxXQUFXOzZCQUN2QixDQUFDLENBQUM7eUJBQ0osQ0FBQztxQkFDSCxDQUFDO2lCQUNIOzthQUNGOzs7WUFwQ1EsTUFBTTs7O3dCQXNDWixLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztrQkFDTCxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBRUwsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSU1lbnVJdGVtLCBUVXJsVGFyZ2V0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5pbnRlcmZhY2UnO1xuaW1wb3J0IHtzdHlsZSwgc3RhdGUsIGFuaW1hdGUsIHRyYW5zaXRpb24sIHRyaWdnZXJ9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1lbnUtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdmYWRlSW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFsgICAvLyA6ZW50ZXIgaXMgYWxpYXMgdG8gJ3ZvaWQgPT4gKidcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoXCIwLjNzIGVhc2UtaW5cIiwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgWyAgIC8vIDpsZWF2ZSBpcyBhbGlhcyB0byAnKiA9PiB2b2lkJ1xuICAgICAgICBhbmltYXRlKDI1MCwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNZW51SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGl0ZW1DbGFzczogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGFic29sdXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBtZW51TG9nbzogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvbG9nby9nbGF1Y2lvLWxvZ28tY29sb3JlZC5zdmcnO1xuICBASW5wdXQoKSBzcmMgPSB0aGlzLm1lbnVMb2dvO1xuICBASW5wdXQoKSBocmVmO1xuICBASW5wdXQoKSBhbHQ7XG4gIEBJbnB1dCgpIGNvbnRlbnQ7XG4gIEBJbnB1dCgpIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZic7XG5cbiAgQElucHV0KCkgaGFzU3ViaXRlbTogYm9vbGVhbjtcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuICBASW5wdXQoKSBzdWJJdGVtczogSU1lbnVJdGVtW107XG5cbiAgQE91dHB1dCgpIG9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XG5cbiAgfVxuXG4gIG9wZW5BYnNvbHV0ZUxpbmsoZXZlbnQsIGhyZWYsIHRhcmdldDogVFVybFRhcmdldCA9ICdfc2VsZicpIHtcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvZXh0ZXJuYWxSZWRpcmVjdCcsIHsgZXh0ZXJuYWxVcmw6IGhyZWYsIHRhcmdldH1dLCB7XG4gICAgICBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUsXG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgUmVkaXJlY3RlZCB0bzogJHtocmVmfWApO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHRvZ2dsZUFjdGl2ZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgfVxufVxuIl19