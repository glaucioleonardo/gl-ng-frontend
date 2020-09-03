import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../simple/gl-shared-component-button-menu-simple.component';

function GlSharedComponentButtonMenuTooltipComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵelementStart(1, "gl-shared-component-button-menu-simple", 2);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonMenuTooltipComponent_div_0_Template_gl_shared_component_button_menu_simple_click_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); var ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.callback($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵattribute("alt", ctx_r0.alt);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r0.src)("id", ctx_r0.id)("alt", ctx_r0.alt);
} }
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
GlSharedComponentButtonMenuTooltipComponent.ɵfac = function GlSharedComponentButtonMenuTooltipComponent_Factory(t) { return new (t || GlSharedComponentButtonMenuTooltipComponent)(); };
GlSharedComponentButtonMenuTooltipComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonMenuTooltipComponent, selectors: [["gl-shared-component-button-menu-tooltip"]], inputs: { disabled: "disabled", tooltip: "tooltip", src: "src", id: "id", alt: "alt", callback: "callback" }, decls: 1, vars: 1, consts: [["class", "tooltip-menu", 4, "ngIf"], [1, "tooltip-menu"], [3, "src", "id", "alt", "click"]], template: function GlSharedComponentButtonMenuTooltipComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentButtonMenuTooltipComponent_div_0_Template, 2, 4, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.GlSharedComponentButtonMenuSimpleComponent], styles: [".tooltip-menu[_ngcontent-%COMP%]{z-index:100;position:relative;display:flex}.tooltip-menu[_ngcontent-%COMP%]::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu[_ngcontent-%COMP%]::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu[_ngcontent-%COMP%]:hover::after, .tooltip-menu[_ngcontent-%COMP%]:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%] {display:block}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonMenuTooltipComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-button-menu-tooltip',
                template: "<div [attr.alt]=\"alt\" class=\"tooltip-menu\" *ngIf=\"!disabled\">\n  <gl-shared-component-button-menu-simple\n    [src]=\"src\"\n    [id]=\"id\"\n    [alt]=\"alt\"\n    (click)=\"callback($event)\"\n  ></gl-shared-component-button-menu-simple>\n</div>\n",
                styles: [".tooltip-menu{z-index:100;position:relative;display:flex}.tooltip-menu::before{content:\"\";position:absolute;left:80%;transform:translateX(-137%) translateY(100%) rotate(180deg);border-width:.2em .2em 0;border-style:solid;border-color:#fff transparent transparent;z-index:100}.tooltip-menu::after{content:attr(alt);position:absolute;left:50%;transform:translateX(-85%) translateY(124%);background:#fff;text-align:left;color:#64666c;font-weight:600;padding:.5em 1em;width:-webkit-max-content;width:-moz-max-content;width:max-content;max-width:50em;border:none;pointer-events:none;white-space:nowrap;line-height:1.5em;font-size:.4em}.tooltip-menu:not(hover)::before{opacity:0;bottom:-.3em;transition:.1s ease-in-out}.tooltip-menu:not(hover)::after{opacity:0;bottom:0;transition:.1s ease-in-out}.tooltip-menu:hover::after,.tooltip-menu:hover::before{opacity:1;bottom:-.11em;transition:.1s ease-in-out}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep{display:block}}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], src: [{
            type: Input
        }], id: [{
            type: Input
        }], alt: [{
            type: Input
        }], callback: [{
            type: Input
        }] }); })();
    return GlSharedComponentButtonMenuTooltipComponent;
}());
export { GlSharedComponentButtonMenuTooltipComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9tZW51L3Rvb2x0aXAvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7MENBUUU7Z0VBUFMsYUFBUSxHQUFHLEtBQUs7QUFBQztJQU9WLENBQUMsS0FQUixxQkFBUixLQUFLLEVBQUU7MkJBQWtCLE1BQ2pCO2FBQVIsS0FBSyxFQUFFOzZEQUFpQixNQUNoQjthQUFSLEtBQUssRUFBRSw2RUFBYTs7Ozs7Ozs7O0FBSHZCO0FBQ29CLElBT2xCO0FBRW1DLFFBVDFCLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsSUFNa0IsQ0FBQztBQUNuQixJQVJXO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsaUZBQWlCO0FBQzNCLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyxnRkFBZ0I7QUFDMUIsSUFBVTs7QUFBQSw0RUFBWTtJQUNaLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUNULFFBREUsS0FBSyxFQUFFOzJFQUFZLDNFQUFYLDJFQUFXO0lBQ1gsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQ1YsUUFERyxLQUFLLEVBQUU7NEVBQWEsNUVBQVosNEVBQVk7SUFDWixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFFUixRQUZDLEtBQUssRUFBRTtpRkFBVSxqRkFBVCxpRkFBUztJQU5QLDJDQUEyQyx3QkFMdkQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHlDQUF5QyxjQUNuRCw1SkFHVywyQ0FBMkMsd0JBTHZELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSx5Q0FBeUMsY0FDbkQ7a1BBQXVFLEFBQUE7Ozs7eWtCQUV4RSxDQUFDLFFBQ1csMkNBQTJDLENBU3ZELE1BQUQsa0RBQUMsR0FBQSxBQVRELElBU0MsVUFUWSwyQ0FBMkMsektBRHZELENBQUMsUUFDVywyQ0FBMkMsQ0FTdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCxrREFBQztBQUNBLENBREEsQUFURCxJQVNDOztBQWhCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtdG9vbHRpcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uTWVudVRvb2x0aXBDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0b29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbHQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2s7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==