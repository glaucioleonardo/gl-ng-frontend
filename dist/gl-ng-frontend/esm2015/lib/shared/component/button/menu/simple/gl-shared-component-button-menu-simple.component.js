import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
let GlSharedComponentButtonMenuSimpleComponent = class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
    }
};
GlSharedComponentButtonMenuSimpleComponent.ɵfac = function GlSharedComponentButtonMenuSimpleComponent_Factory(t) { return new (t || GlSharedComponentButtonMenuSimpleComponent)(); };
GlSharedComponentButtonMenuSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonMenuSimpleComponent, selectors: [["gl-shared-component-button-menu-simple"]], inputs: { disabled: "disabled", src: "src", id: "id", alt: "alt", callback: "callback" }, decls: 1, vars: 3, consts: [[1, "menu-buttons", 3, "id", "src", "alt", "click"]], template: function GlSharedComponentButtonMenuSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "img", 0);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonMenuSimpleComponent_Template_img_click_0_listener() { return ctx.callback; });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("id", ctx.id)("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.alt);
    } }, styles: ["[_nghost-%COMP%]{height:1.45em}[_nghost-%COMP%]   .menu-buttons[_ngcontent-%COMP%]{height:1.5em;width:1.5em;margin:0 0 0 .1em;cursor:pointer}[_nghost-%COMP%]   .menu-buttons[_ngcontent-%COMP%]:hover{transform:scale(1.01);opacity:1;transition:.1s ease-in-out}[_nghost-%COMP%]   .menu-buttons[_ngcontent-%COMP%]:not(hover){transform:scale(1);opacity:.9;transition:.2s ease-in-out}"] });
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "callback", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonMenuSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-button-menu-simple',
                template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
                styles: [":host{height:1.45em}:host .menu-buttons{height:1.5em;width:1.5em;margin:0 0 0 .1em;cursor:pointer}:host .menu-buttons:hover{transform:scale(1.01);opacity:1;transition:.1s ease-in-out}:host .menu-buttons:not(hover){transform:scale(1);opacity:.9;transition:.2s ease-in-out}"]
            }]
    }], function () { return []; }, { disabled: [{
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
export { GlSharedComponentButtonMenuSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL21lbnUvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYTtLQUEwQyxHQUF2RCxNQUFhLDBDQUEwQyxPQU9yRCx3QkFOUyx2RkFEWCxJQUFhLDBDQUEwQyxHQUF2RCxNQUFhLDBDQUEwQztBQUNwQyxHQUFHLEtBQUssQ0FBQyxLQU1WLENBQUMsRUFDbEIsQ0FBQSxDQVBVLG5CQUFYLElBTUU7Z0JBTkMsS0FBSyxFQUFFLHZCQU1RLFFBTlAsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixJQUtrQixDQUFDO0FBQ25CLENBQUM7NERBUDJCLEVBQ2pCLGlCQUFSLEtBQUssRUFBRSx3RUFBYTs7Ozs7OzttWkFNdEI7QUFQVTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDRFQUFpQjtBQUNqQjs7QUFBQSx1RUFBWTtBQUNaLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFDVCxJQURFLEtBQUssRUFBRTtzRUFBWSx0RUFBWCxzRUFBVztBQUNYLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFDVixJQURHLEtBQUssRUFBRTt1RUFBYSx2RUFBWix1RUFBWTtBQUNaLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQW9CLDVFQUFuQiw0RUFBbUI7QUFMakIsMENBQTBDLG9CQUx0RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsNUZBSUMsMENBQTBDLG9CQUx0RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O01BQXdDLFVBQ2xELFZBRGtELFVBQ2xEOztpREFBc0UsQUFBQTtvTkFFdkUsQ0FBQyxJQUNXLDBDQUEwQyxDQVF0RCxXQVJZLDNEQURaLENBQUMsSUFDVywwQ0FBMEMsQ0FRdEQ7YUFSc0Q7Ozs7Ozs7Ozs7O29CQVN2RDs7QUFoQkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbk1lbnVTaW1wbGVDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrOiAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19