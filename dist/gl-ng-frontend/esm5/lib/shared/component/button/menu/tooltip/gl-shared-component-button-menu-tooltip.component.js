import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var GlSharedComponentButtonMenuTooltipComponent = /** @class */ (function () {
    function GlSharedComponentButtonMenuTooltipComponent() {
        this.disabled = false;
    }
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
    return GlSharedComponentButtonMenuTooltipComponent;
}());
export { GlSharedComponentButtonMenuTooltipComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL21lbnUvdG9vbHRpcC9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRDtJQVFFO1FBUFMsYUFBUSxHQUFHLEtBQUssQ0FBQztJQU9WLENBQUM7SUFQUjtRQUFSLEtBQUssRUFBRTtpRkFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7Z0ZBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzRFQUFhO0lBQ1o7UUFBUixLQUFLLEVBQUU7MkVBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTs0RUFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFO2lGQUFVO0lBTlAsMkNBQTJDO1FBTHZELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5Q0FBeUM7WUFDbkQsMlFBQXVFOztTQUV4RSxDQUFDO09BQ1csMkNBQTJDLENBU3ZEO0lBQUQsa0RBQUM7Q0FBQSxBQVRELElBU0M7U0FUWSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXRvb2x0aXAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbk1lbnVUb29sdGlwQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=