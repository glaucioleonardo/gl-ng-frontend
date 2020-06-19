import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentButtonMenuTooltipComponent = class GlSharedComponentButtonMenuTooltipComponent {
    constructor() {
        this.disabled = false;
    }
};
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "tooltip", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuTooltipComponent.prototype, "callback", void 0);
GlSharedComponentButtonMenuTooltipComponent = __decorate([
    Component({
        selector: 'gl-shared-component-button-menu-tooltip',
        template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
        styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{display:block}}"]
    })
], GlSharedComponentButtonMenuTooltipComponent);
export { GlSharedComponentButtonMenuTooltipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL21lbnUvdG9vbHRpcC9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDJDQUEyQyxHQUF4RCxNQUFhLDJDQUEyQztJQVF0RDtRQVBTLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFPVixDQUFDO0NBQ2xCLENBQUE7QUFSVTtJQUFSLEtBQUssRUFBRTs2RUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7NEVBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO3dFQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7dUVBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTt3RUFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOzZFQUFVO0FBTlAsMkNBQTJDO0lBTHZELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsMlFBQXVFOztLQUV4RSxDQUFDO0dBQ1csMkNBQTJDLENBU3ZEO1NBVFksMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25NZW51VG9vbHRpcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFjaztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19