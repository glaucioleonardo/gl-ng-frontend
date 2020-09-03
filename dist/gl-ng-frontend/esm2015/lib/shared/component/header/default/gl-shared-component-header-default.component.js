import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../title/page/gl-shared-component-title-page.component';
import * as ɵngcc3 from '../../button/menu/tooltip/gl-shared-component-button-menu-tooltip.component';

function GlSharedComponentHeaderDefaultComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 6);
    ɵngcc0.ɵɵprojection(1, 2);
    ɵngcc0.ɵɵelementEnd();
} }
function GlSharedComponentHeaderDefaultComponent_gl_shared_component_title_page_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-title-page", 7);
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("title", ctx_r1.title)("subtitle", ctx_r1.subtitle);
} }
function GlSharedComponentHeaderDefaultComponent_gl_shared_component_button_menu_tooltip_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-button-menu-tooltip", 8);
} if (rf & 2) {
    const menuButton_r3 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("disabled", ctx_r2.readonly && !menuButton_r3.canReadonly || !ctx_r2.readonly && menuButton_r3.canReadonly && menuButton_r3.readonly)("tooltip", menuButton_r3.alt)("src", menuButton_r3.src)("id", menuButton_r3.id)("alt", menuButton_r3.alt)("callback", menuButton_r3.callback);
} }
const _c0 = [[["", "slot", "system-logo"]], "*", [["", "slot", "default-logo"]]];
const _c1 = ["[slot=system-logo]", "*", "[slot=default-logo]"];
let GlSharedComponentHeaderDefaultComponent = class GlSharedComponentHeaderDefaultComponent {
    constructor() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
};
GlSharedComponentHeaderDefaultComponent.ɵfac = function GlSharedComponentHeaderDefaultComponent_Factory(t) { return new (t || GlSharedComponentHeaderDefaultComponent)(); };
GlSharedComponentHeaderDefaultComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentHeaderDefaultComponent, selectors: [["gl-shared-component-header-default"]], inputs: { systemLogo: "systemLogo", labelModel: "labelModel", labelId: "labelId", labelArea: "labelArea", type: "type", title: "title", subtitle: "subtitle", menuButtons: "menuButtons", readonly: "readonly" }, outputs: { keyDown: "keyDown" }, ngContentSelectors: _c1, decls: 9, vars: 10, consts: [[3, "keydown"], ["class", "default-logo", 4, "ngIf"], [3, "title", "subtitle", 4, "ngIf"], [1, "menu-bar"], [1, "menu-buttons-container"], [3, "disabled", "tooltip", "src", "id", "alt", "callback", 4, "ngFor", "ngForOf"], [1, "default-logo"], [3, "title", "subtitle"], [3, "disabled", "tooltip", "src", "id", "alt", "callback"]], template: function GlSharedComponentHeaderDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c0);
        ɵngcc0.ɵɵelementStart(0, "section", 0);
        ɵngcc0.ɵɵlistener("keydown", function GlSharedComponentHeaderDefaultComponent_Template_section_keydown_0_listener($event) { return ctx.onKeyDown($event); }, false, ɵngcc0.ɵɵresolveWindow);
        ɵngcc0.ɵɵelementStart(1, "div");
        ɵngcc0.ɵɵtemplate(2, GlSharedComponentHeaderDefaultComponent_div_2_Template, 2, 0, "div", 1);
        ɵngcc0.ɵɵtemplate(3, GlSharedComponentHeaderDefaultComponent_gl_shared_component_title_page_3_Template, 1, 2, "gl-shared-component-title-page", 2);
        ɵngcc0.ɵɵprojection(4, 0, ["class", "system-logo"]);
        ɵngcc0.ɵɵelementStart(5, "div", 3);
        ɵngcc0.ɵɵelementStart(6, "div", 4);
        ɵngcc0.ɵɵprojection(7, 1);
        ɵngcc0.ɵɵtemplate(8, GlSharedComponentHeaderDefaultComponent_gl_shared_component_button_menu_tooltip_8_Template, 1, 6, "gl-shared-component-button-menu-tooltip", 5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("header-container ", ctx.type, "");
        ɵngcc0.ɵɵattribute("type", ctx.type);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMapInterpolate1("header-content ", ctx.type, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type != "only-buttons");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.type != "only-buttons" && !ctx.systemLogo);
        ɵngcc0.ɵɵadvance(5);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.menuButtons);
    } }, directives: [ɵngcc1.NgIf, ɵngcc1.NgForOf, ɵngcc2.GlSharedComponentTitlePageComponent, ɵngcc3.GlSharedComponentButtonMenuTooltipComponent], styles: ["[_nghost-%COMP%] {max-width:100vw}[_nghost-%COMP%]  .header-container{max-width:100vw;position:relative;background-color:#1a1b1d}[_nghost-%COMP%]  .header-container.inverted, [_nghost-%COMP%]  .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 100%)}[_nghost-%COMP%]  .header-container .header-content{display:flex;align-items:center}[_nghost-%COMP%]  .header-container .header-content.dark, [_nghost-%COMP%]  .header-container .header-content.light{border-top:.2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}[_nghost-%COMP%]  .header-container .header-content.inverted{border-bottom:.5px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}[_nghost-%COMP%]  .header-container .header-content .default-logo{margin:0 .5em 0 0}[_nghost-%COMP%]  .header-container .header-content .menu-bar{height:2.3em;display:flex;align-items:center;flex-grow:1;justify-content:flex-end}[_nghost-%COMP%]  .header-container .header-content .menu-bar .menu-buttons-container{display:flex;align-items:center;margin:0 .5em}[_nghost-%COMP%]  .header-container.only-buttons{background-color:transparent}"] });
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "systemLogo", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelModel", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelId", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelArea", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "type", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "menuButtons", void 0);
__decorate([
    Output()
], GlSharedComponentHeaderDefaultComponent.prototype, "keyDown", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "readonly", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentHeaderDefaultComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-header-default',
                template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
                styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{max-width:100vw;position:relative;background-color:#1a1b1d}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 100%)}:host::ng-deep .header-container .header-content{display:flex;align-items:center}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-top:.2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{height:2.3em;display:flex;align-items:center;flex-grow:1;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{display:flex;align-items:center;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
            }]
    }], function () { return []; }, { systemLogo: [{
            type: Input
        }], keyDown: [{
            type: Output
        }], labelModel: [{
            type: Input
        }], labelId: [{
            type: Input
        }], labelArea: [{
            type: Input
        }], type: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], menuButtons: [{
            type: Input
        }], readonly: [{
            type: Input
        }] }); })();
export { GlSharedComponentHeaderDefaultComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9oZWFkZXIvZGVmYXVsdC9nbC1zaGFyZWQtY29tcG9uZW50LWhlYWRlci1kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxJQUFhO0VBQXVDLEdBQXBELE1BQWE7T0FBdUMsT0FhbEQsd0JBWlMsZUFBVSxHQUFZLEtBQUssQ0FBQyxTQVEzQixZQUFPO0NBQXNCLElBQUksWUFBWSxFQUFFLENBQUMsS0FJMUMsQ0FBQyxLQUVqQixTQUFTLENBQUMsS0FBSyxZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQzNCLENBQUMsRUFDRixDQUFBLENBakJVOztNQUFSLEtBQUssRUFBRTtBQUE2QixFQUM1QixpQkFBUixLQUFLLEVBQUU7Ozs7QUFBb0IsRUFDbkIsaUJBQVIsS0FBSyxFQUFFLHlFQUFpQixFQUNoQjtFQUFSLEtBQUssRUFBRTs7Ozs7Ozs7Ozs7Ozs7QUFKVixJQUFhLHVDQUF1QyxHQUFwRCxNQUFhLHVDQUF1QztBQUNwRCxJQVlFO0FBQWdCLFFBWlAsZUFBVSxHQUFZLEtBQUssQ0FBQztBQUN2QyxRQU9ZLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM1RCxJQUdrQixDQUFDO0FBQ25CLElBQ0UsU0FBUyxDQUFDLEtBQUs7QUFDakIsUUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QixJQUFFLENBQUM7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0NENBQUE7QUFqQlU7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQywyRUFBNEI7QUFDNUI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQywyRUFBbUI7QUFDbkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyx3RUFBZ0I7O0FBQ0gsSUFBckIsS0FBSyxFQUFFOzBFQUFtQiwxRUFBbEIsMEVBQWtCO0FBQ2xCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7cUVBQTJCLHJFQUExQixxRUFBMEI7QUFDMUIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtzRUFBZSx0RUFBZCxzRUFBYztBQUNkLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7eUVBQWtCLHpFQUFqQix5RUFBaUI7QUFDakIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs0RUFBNEIsNUVBQTNCLDRFQUEyQjtBQUMxQixBQUFBO0lBQVQsTUFBTSxFQUFFLFpBQWMsSUFBdEIsTUFBTSxFQUFFO3dFQUFpRCx4RUFBaEQsd0VBQWdEO0FBRWpELEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7eUVBQW1CLHpFQUFsQix5RUFBa0I7QUFYaEIsdUNBQXVDLG9CQUxuRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsekZBSUMsdUNBQXVDLG9CQUxuRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O0VBQW9DLFVBQzlDLFZBRDhDLFVBQzlDOzs2bkNBQWtFLEFBQUE7dW9DQUVuRSxDQUFDLElBQ1csdUNBQXVDLENBa0JuRCxXQWxCWSx4REFEWixDQUFDLElBQ1csdUNBQXVDLENBa0JuRDtPQWxCbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFtQnBEOztBQTNCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9uL21lbnUvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEhlYWRlckRlZmF1bHRDb21wb25lbnQge1xuICBASW5wdXQoKSBzeXN0ZW1Mb2dvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsTW9kZWw6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxJZDogbnVtYmVyO1xuICBASW5wdXQoKSBsYWJlbEFyZWE6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogJ29ubHktYnV0dG9ucycgfCAnJztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVudUJ1dHRvbnM6IElNZW51QnV0dG9uW107XG4gIEBPdXRwdXQoKSBrZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHRoaXMua2V5RG93bi5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19