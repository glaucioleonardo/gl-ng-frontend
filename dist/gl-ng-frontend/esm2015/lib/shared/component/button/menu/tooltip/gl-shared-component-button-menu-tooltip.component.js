import { Component, Input } from '@angular/core';
export class GlSharedComponentButtonMenuTooltipComponent {
    constructor() {
        this.disabled = false;
        this.hide = false;
    }
}
GlSharedComponentButtonMenuTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled && !hide\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    [hide]=\"hide\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
                styles: [".tooltip-menu{display:flex;position:relative;z-index:100}.tooltip-menu:before{border-color:#fff transparent transparent;border-style:solid;border-width:.2em .2em 0;content:\"\";left:80%;position:absolute;transform:translateX(-137%) translateY(100%) rotate(180deg);z-index:100}.tooltip-menu:after{background:#fff;border:none;color:#64666c;content:attr(alt);font-size:.4em;font-weight:600;left:50%;line-height:1.5em;max-width:50em;padding:.5em 1em;pointer-events:none;position:absolute;text-align:left;transform:translateX(-85%) translateY(124%);white-space:nowrap;width:-webkit-max-content;width:-moz-max-content;width:max-content}.tooltip-menu:not(hover):before{bottom:-.3em;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:not(hover):after{bottom:0;opacity:0;transition:all .1s ease-in-out}.tooltip-menu:hover:after,.tooltip-menu:hover:before{bottom:-.11em;opacity:1;transition:all .1s ease-in-out}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){:host::ng-deep{display:block}}"]
            },] }
];
GlSharedComponentButtonMenuTooltipComponent.ctorParameters = () => [];
GlSharedComponentButtonMenuTooltipComponent.propDecorators = {
    disabled: [{ type: Input }],
    hide: [{ type: Input }],
    tooltip: [{ type: Input }],
    src: [{ type: Input }],
    id: [{ type: Input }],
    alt: [{ type: Input }],
    callback: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vbWVudS90b29sdGlwL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLDJDQUEyQztJQVN0RDtRQVJTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFHLEtBQUssQ0FBQztJQU9OLENBQUM7OztZQWRsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQseVNBQXVFOzthQUV4RTs7Ozt1QkFFRSxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSztrQkFDTCxLQUFLO2lCQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25NZW51VG9vbHRpcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZGUgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=