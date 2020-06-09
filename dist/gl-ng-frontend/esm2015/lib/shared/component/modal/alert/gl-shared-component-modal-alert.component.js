import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../../../core/directives/autofocus/core-directives-autofocus.directive';
import * as ɵngcc3 from '../header/gl-shared-component-modal-header.component';
import * as ɵngcc4 from '../../input/button/simple/gl-shared-component-input-button-simple.component';

function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 11);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.service.onNo(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r1.innerValueNo)("value", ctx_r1.noValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 12);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.service.onYes(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r2.innerValueYes)("value", ctx_r2.yesValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); const ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.service.onOk(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r3.innerValueOK)("value", ctx_r3.okValue);
} }
function GlSharedComponentModalAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("keydown", function GlSharedComponentModalAlertComponent_div_0_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.service.onModalKeyUp($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelement(2, "gl-shared-component-modal-header", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "span", 5);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(6, "div", 6);
    ɵngcc0.ɵɵtemplate(7, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template, 1, 2, "gl-shared-component-input-button-simple", 7);
    ɵngcc0.ɵɵtemplate(8, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template, 1, 2, "gl-shared-component-input-button-simple", 8);
    ɵngcc0.ɵɵtemplate(9, GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template, 1, 2, "gl-shared-component-input-button-simple", 9);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(10, "div", 10);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("modal-container ", ctx_r0.service.modalClass, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("title", ctx_r0.title)("subtitle", ctx_r0.subtitle)("modalLogo", ctx_r0.modalLogo);
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.service.message);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.service.isOK);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.service.isOK);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.service.isOK);
} }
let GlSharedComponentModalAlertComponent = class GlSharedComponentModalAlertComponent {
    constructor(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
};
GlSharedComponentModalAlertComponent.ɵfac = function GlSharedComponentModalAlertComponent_Factory(t) { return new (t || GlSharedComponentModalAlertComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalAlertService)); };
GlSharedComponentModalAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalAlertComponent, selectors: [["gl-shared-component-modal-alert"]], inputs: { innerValueNo: "innerValueNo", innerValueYes: "innerValueYes", innerValueOK: "innerValueOK", noValue: "noValue", yesValue: "yesValue", okValue: "okValue", title: "title", subtitle: "subtitle", modalLogo: "modalLogo" }, decls: 1, vars: 1, consts: [["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "class", "keydown", 4, "ngIf"], ["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "keydown"], [1, "modal-main-content"], [3, "title", "subtitle", "modalLogo"], [1, "modal-message-container"], [1, "modal-message"], [1, "button-container"], ["class", "no", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "yes", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "ok", 3, "innerValue", "value", "click", 4, "ngIf"], [1, "modal-footer"], [1, "no", 3, "innerValue", "value", "click"], [1, "yes", 3, "innerValue", "value", "click"], [1, "ok", 3, "innerValue", "value", "click"]], template: function GlSharedComponentModalAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalAlertComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service.showModal);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.CoreDirectivesAutofocusDirective, ɵngcc3.GlSharedComponentModalHeaderComponent, ɵngcc4.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}[_nghost-%COMP%]  .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}[_nghost-%COMP%]  .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:400;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.7em;color:#fff;white-space:pre-wrap}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}[_nghost-%COMP%]  .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{border-top:1px solid #d24077}}@media screen and (min-device-width:1024px) and (orientation:landscape){[_nghost-%COMP%]  .modal-container .modal-main-content{width:30vw}[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"] });
GlSharedComponentModalAlertComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "modalLogo", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "innerValueNo", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "innerValueYes", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "innerValueOK", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "noValue", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "yesValue", void 0);
__decorate([
    Input()
], GlSharedComponentModalAlertComponent.prototype, "okValue", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalAlertComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-alert',
                template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"innerValueNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"innerValueYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:400;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.7em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}:host::ng-deep .modal-container .modal-main-content .modal-footer{border-top:1px solid #d24077}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
            }]
    }], function () { return [{ type: GlSharedComponentModalAlertService }]; }, { innerValueNo: [{
            type: Input
        }], innerValueYes: [{
            type: Input
        }], innerValueOK: [{
            type: Input
        }], noValue: [{
            type: Input
        }], yesValue: [{
            type: Input
        }], okValue: [{
            type: Input
        }], title: [{
            type: Input
        }], subtitle: [{
            type: Input
        }], modalLogo: [{
            type: Input
        }] }); })();
export { GlSharedComponentModalAlertComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMkNBQTJDLENBQUMsL0ZBQS9GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBTy9GLElBQWEsb0NBQW9DO0VBQWpELE1BQWE7Q0FBb0MsT0FZL0MsWUFBbUIsT0FBMkMsWUFBM0MsWUFBTyxHQUFQLE9BQU8sQ0FBb0MsU0FSckQsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFDcEIsa0JBQWEsR0FBRSxLQUFLLENBQUMsU0FDckIsaUJBQVksR0FBRSxJQUFJLENBQUMsU0FFbkI7TUFBTyxHQUFHLElBQUksQ0FBQyxTQUNmLGFBQVEsR0FBRSxLQUFLLENBQUMsU0FDaEIsWUFBTyxHQUFFLElBQUksQ0FBQyxLQUUyQyxDQUFDLEVBRXBFLENBQUE7O3NEQUY2QixrQ0FBa0MsTUFYckQsaUJBQVIsS0FBSyxFQUFFOztlQUFlLEVBQ2QsaUJBQVIsS0FBSyxFQUFFO21DQUFrQixFQUNqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSFgsSUFBYSxvQ0FBb0MsR0FBakQsTUFBYSxvQ0FBb0M7QUFDakQsSUFXRSxZQUFtQixPQUEyQztBQUFJLFFBQS9DLFlBQU8sR0FBUCxPQUFPLENBQW9DO0FBQUMsUUFSdEQsaUJBQVksR0FBRyxJQUFJLENBQUM7QUFDL0IsUUFBVyxrQkFBYSxHQUFFLEtBQUssQ0FBQztBQUNoQyxRQUFXLGlCQUFZLEdBQUUsSUFBSSxDQUFDO0FBQzlCLFFBQ1csWUFBTyxHQUFHLElBQUksQ0FBQztBQUMxQixRQUFXLGFBQVEsR0FBRSxLQUFLLENBQUM7QUFDM0IsUUFBVyxZQUFPLEdBQUUsSUFBSSxDQUFDO0FBQ3pCLElBQ29FLENBQUM7QUFDckUsQ0FDQzs7Ozs7O2trR0FBQTtBQUNEO0FBQThELFlBSGhDLGtDQUFrQztBQUFHO0FBWHhEO0FBQWEsSUFBckIsS0FBSyxFQUFFO0FBQUMsbUVBQWM7QUFDZDtBQUFhLElBQXJCLEtBQUssRUFBRTs7QUFDQztJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt1RUFBbUIsdkVBQWxCLHVFQUFrQjtBQUNsQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzBFQUFxQiwxRUFBcEIsMEVBQW9CO0FBQ3BCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7MkVBQXNCLDNFQUFyQiwyRUFBcUI7QUFDckIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTswRUFBb0IsMUVBQW5CLDBFQUFtQjtBQUVuQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3FFQUFnQixyRUFBZixxRUFBZTtBQUNmLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7c0VBQWlCLHRFQUFoQixzRUFBZ0I7QUFDaEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtxRUFBZSxyRUFBZCxxRUFBYztBQVZaLG9DQUFvQyxvQkFMaEQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLHRGQUlDLG9DQUFvQyxvQkFMaEQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFO3dCQUFpQyxBQUFBO1NBQzNDLEFBQUE7O20wQ0FBK0QsQUFBQTtpeUZBRWhFLENBQUMsSUFDVyxvQ0FBb0MsQ0FjaEQsV0FkWSxyREFEWixDQUFDLElBQ1csb0NBQW9DLENBY2hEO0NBZGdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQWVqRDs7QUF2QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbW9kYWxMb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVObyA9ICdObyc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVZZXM9ICdZZXMnO1xuICBASW5wdXQoKSBpbm5lclZhbHVlT0s9ICdPSyc7XG5cbiAgQElucHV0KCkgbm9WYWx1ZSA9ICdubyc7XG4gIEBJbnB1dCgpIHllc1ZhbHVlPSAneWVzJztcbiAgQElucHV0KCkgb2tWYWx1ZT0gJ29rJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cbn1cbiJdfQ==