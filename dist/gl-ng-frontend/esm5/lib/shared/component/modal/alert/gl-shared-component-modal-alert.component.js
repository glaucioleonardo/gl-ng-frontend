import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../../../core/directives/autofocus/core-directives-autofocus.directive';
import * as ɵngcc3 from '../header/gl-shared-component-modal-header.component';
import * as ɵngcc4 from '../../input/button/simple/gl-shared-component-input-button-simple.component';

function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 11);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_7_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(2); return ctx_r4.service.onNo(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r1.innerValueNo)("value", ctx_r1.noValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template(rf, ctx) { if (rf & 1) {
    var _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 12);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_8_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r7); var ctx_r6 = ɵngcc0.ɵɵnextContext(2); return ctx_r6.service.onYes(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r2.innerValueYes)("value", ctx_r2.yesValue);
} }
function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template(rf, ctx) { if (rf & 1) {
    var _r9 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-button-simple", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAlertComponent_div_0_gl_shared_component_input_button_simple_9_Template_gl_shared_component_input_button_simple_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r9); var ctx_r8 = ɵngcc0.ɵɵnextContext(2); return ctx_r8.service.onOk(); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r3.innerValueOK)("value", ctx_r3.okValue);
} }
function GlSharedComponentModalAlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("keydown", function GlSharedComponentModalAlertComponent_div_0_Template_div_keydown_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); var ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.service.onModalKeyUp($event); });
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
    var ctx_r0 = ɵngcc0.ɵɵnextContext();
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
var GlSharedComponentModalAlertComponent = /** @class */ (function () {
    function GlSharedComponentModalAlertComponent(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
    GlSharedComponentModalAlertComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
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
GlSharedComponentModalAlertComponent.ɵfac = function GlSharedComponentModalAlertComponent_Factory(t) { return new (t || GlSharedComponentModalAlertComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalAlertService)); };
GlSharedComponentModalAlertComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalAlertComponent, selectors: [["gl-shared-component-modal-alert"]], inputs: { innerValueNo: "innerValueNo", innerValueYes: "innerValueYes", innerValueOK: "innerValueOK", noValue: "noValue", yesValue: "yesValue", okValue: "okValue", title: "title", subtitle: "subtitle", modalLogo: "modalLogo" }, decls: 1, vars: 1, consts: [["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "class", "keydown", 4, "ngIf"], ["glAutoFocus", "", "id", "modal", "tabindex", "-1", 3, "keydown"], [1, "modal-main-content"], [3, "title", "subtitle", "modalLogo"], [1, "modal-message-container"], [1, "modal-message"], [1, "button-container"], ["class", "no", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "yes", 3, "innerValue", "value", "click", 4, "ngIf"], ["class", "ok", 3, "innerValue", "value", "click", 4, "ngIf"], [1, "modal-footer"], [1, "no", 3, "innerValue", "value", "click"], [1, "yes", 3, "innerValue", "value", "click"], [1, "ok", 3, "innerValue", "value", "click"]], template: function GlSharedComponentModalAlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalAlertComponent_div_0_Template, 11, 10, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service.showModal);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.CoreDirectivesAutofocusDirective, ɵngcc3.GlSharedComponentModalHeaderComponent, ɵngcc4.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}[_nghost-%COMP%]  .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}[_nghost-%COMP%]  .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}[_nghost-%COMP%]  .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}[_nghost-%COMP%]  .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer{position:relative;border-top:0 solid transparent!important}[_nghost-%COMP%]  .modal-container .modal-main-content .modal-footer::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}@media screen and (min-device-width:1024px) and (orientation:landscape){[_nghost-%COMP%]  .modal-container .modal-main-content{width:30vw}[_nghost-%COMP%]  .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalAlertComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-alert',
                template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"innerValueNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"innerValueYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}:host::ng-deep .modal-container .modal-main-content .modal-footer{position:relative;border-top:0 solid transparent!important}:host::ng-deep .modal-container .modal-main-content .modal-footer::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
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
    return GlSharedComponentModalAlertComponent;
}());
export { GlSharedComponentModalAlertComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sMkNBQTJDLENBQUMsL0ZBQS9GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBTy9GO21DQVlFO3NDQUFtQixPQUEyQyxZQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQyxTQVJyRDtLQUFZLEdBQUcsSUFBSSxDQUFDLFNBQ3BCLGtCQUFhLEdBQUUsS0FBSyxDQUFDLFNBQ3JCLGlCQUFZLEdBQUU7RUFBSSxDQUFDLFNBRW5CLFlBQU8sR0FBRyxJQUFJLENBQUMsU0FDZixhQUFRLEdBQUUsS0FBSyxDQUFDLFNBQ2hCLFlBQU8sR0FBRSxJQUFJLENBQUMsS0FFMkMsQ0FBQzs7NEZBQXZDLGtDQUFrQztlQVhyRCxxQkFBUjtBQUFLLEVBQUUsd0VBQWU7R0FDZCxxQkFBUixLQUFLLEVBQUUsMkVBQWtCLE1BQ2pCLHFCQUFSLEtBQUssRUFBRSw0RUFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUg3QjtBQUNvQixJQVdsQiw4Q0FBbUIsT0FBMkM7QUFBSSxRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztBQUFDLFFBUnRELGlCQUFZLEdBQUcsSUFBSSxDQUFDO0FBQy9CLFFBQVcsa0JBQWEsR0FBRSxLQUFLLENBQUM7QUFDaEMsUUFBVyxpQkFBWSxHQUFFLElBQUksQ0FBQztBQUM5QixRQUNXLFlBQU8sR0FBRyxJQUFJLENBQUM7QUFDMUIsUUFBVyxhQUFRLEdBQUUsS0FBSyxDQUFDO0FBQzNCLFFBQVcsWUFBTyxHQUFFLElBQUksQ0FBQztBQUN6QixJQUNvRSxDQUFDO0FBQ3JFO0FBRThFLGdCQUhoRCxrQ0FBa0M7QUFBRztBQUcvRCxJQWRPO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsdUVBQWM7QUFDeEIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDBFQUFpQjtBQUMzQixJQUFVOztBQUFBLDJFQUFrQjtJQUNsQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7OEVBQXFCLDlFQUFwQiw4RUFBb0I7SUFDcEIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOytFQUFzQiwvRUFBckIsK0VBQXFCO0lBQ3JCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTs4RUFBb0IsOUVBQW5CLDhFQUFtQjtJQUVuQixKQUFYLElBQVc7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7eUVBQWdCLHpFQUFmLHlFQUFlO0lBQ2YsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOzBFQUFpQiwxRUFBaEIsMEVBQWdCO0lBQ2hCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt5RUFBZSx6RUFBZCx5RUFBYztJQVZaLG9DQUFvQyx3QkFMaEQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGlDQUFpQyxjQUMzQyw3SUFHVyxvQ0FBb0Msd0JBTGhELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxpQ0FBaUMsY0FDM0M7Ozs7cURBQStELEFBQUE7dW9HQUVoRSxDQUFDLFFBQ1csb0NBQW9DLENBY2hELE1BQUQsMkNBQUMsR0FBQSxBQWRELElBY0MsVUFkWSxvQ0FBb0MscEpBRGhELENBQUMsUUFDVyxvQ0FBb0MsQ0FjaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUNEO0FBQUMsSUFERCwyQ0FBQztBQUNBLENBREEsQUFkRCxJQWNDOztBQXRCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RhbExvZ286IHN0cmluZztcbiAgQElucHV0KCkgaW5uZXJWYWx1ZU5vID0gJ05vJztcbiAgQElucHV0KCkgaW5uZXJWYWx1ZVllcz0gJ1llcyc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVPSz0gJ09LJztcblxuICBASW5wdXQoKSBub1ZhbHVlID0gJ25vJztcbiAgQElucHV0KCkgeWVzVmFsdWU9ICd5ZXMnO1xuICBASW5wdXQoKSBva1ZhbHVlPSAnb2snO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7IH1cblxufVxuIl19