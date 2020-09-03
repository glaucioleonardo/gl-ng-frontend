import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from './gl-shared-component-modal-attachment-link.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../header/gl-shared-component-modal-header.component';
import * as ɵngcc3 from '../../../input/button/simple/gl-shared-component-input-button-simple.component';

function GlSharedComponentModalAttachmentLinkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 1);
    ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentModalAttachmentLinkComponent_div_0_Template_div_keyup_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r1 = ɵngcc0.ɵɵnextContext(); return ctx_r1.service.onModalKeyUp($event); });
    ɵngcc0.ɵɵelementStart(1, "div", 2);
    ɵngcc0.ɵɵelement(2, "gl-shared-component-modal-header", 3);
    ɵngcc0.ɵɵelementStart(3, "div", 4);
    ɵngcc0.ɵɵelementStart(4, "div", 5);
    ɵngcc0.ɵɵelementStart(5, "label", 6);
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(7, "input", 7);
    ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentModalAttachmentLinkComponent_div_0_Template_input_keyup_7_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3.service.onName($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(8, "div", 8);
    ɵngcc0.ɵɵelementStart(9, "label", 9);
    ɵngcc0.ɵɵtext(10, "Link");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(11, "input", 10);
    ɵngcc0.ɵɵlistener("keyup", function GlSharedComponentModalAttachmentLinkComponent_div_0_Template_input_keyup_11_listener($event) { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.service.onUrl($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(12, "div", 11);
    ɵngcc0.ɵɵelementStart(13, "gl-shared-component-input-button-simple", 12);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAttachmentLinkComponent_div_0_Template_gl_shared_component_input_button_simple_click_13_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r5 = ɵngcc0.ɵɵnextContext(); return ctx_r5.service.onCancel(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "gl-shared-component-input-button-simple", 13);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentModalAttachmentLinkComponent_div_0_Template_gl_shared_component_input_button_simple_click_14_listener() { ɵngcc0.ɵɵrestoreView(_r2); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.service.onConfirm(); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(15, "div", 14);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("modal-link-container ", ctx_r0.service.modalClass, "");
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("title", ctx_r0.title)("subtitle", ctx_r0.subtitle)("modalLogo", ctx_r0.modalLogo);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.fileNameLabel);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r0.fileNamePlaceholder);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("placeholder", ctx_r0.linkPlaceholder);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("innerValue", ctx_r0.cancelInnerValue);
} }
let GlSharedComponentModalAttachmentLinkComponent = class GlSharedComponentModalAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
        this.subtitle = ': link';
        this.fileNameLabel = 'File name';
        this.fileNamePlaceholder = 'Type the file name';
        this.linkPlaceholder = 'Type the file link';
        this.cancelInnerValue = 'Cancel';
    }
};
GlSharedComponentModalAttachmentLinkComponent.ɵfac = function GlSharedComponentModalAttachmentLinkComponent_Factory(t) { return new (t || GlSharedComponentModalAttachmentLinkComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentModalAttachmentLinkService)); };
GlSharedComponentModalAttachmentLinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentModalAttachmentLinkComponent, selectors: [["gl-shared-component-modal-attachment-link"]], inputs: { subtitle: "subtitle", fileNameLabel: "fileNameLabel", fileNamePlaceholder: "fileNamePlaceholder", linkPlaceholder: "linkPlaceholder", cancelInnerValue: "cancelInnerValue", title: "title", modalLogo: "modalLogo" }, decls: 1, vars: 1, consts: [["id", "modal-attachment-link", 3, "class", "keyup", 4, "ngIf"], ["id", "modal-attachment-link", 3, "keyup"], [1, "modal-main-content"], [3, "title", "subtitle", "modalLogo"], [1, "modal-input-container"], [1, "name-container"], ["for", "attachment-link-name"], ["id", "attachment-link-name", "type", "text", 3, "placeholder", "keyup"], [1, "value-container"], ["for", "attachment-link-value"], ["id", "attachment-link-value", "type", "text", 3, "placeholder", "keyup"], [1, "button-container"], ["value", "cancel", 1, "cancel", 3, "innerValue", "click"], ["innerValue", "OK", "value", "ok", 1, "ok", 3, "click"], [1, "modal-footer"]], template: function GlSharedComponentModalAttachmentLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, GlSharedComponentModalAttachmentLinkComponent_div_0_Template, 16, 10, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngIf", ctx.service.showModal);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.GlSharedComponentModalHeaderComponent, ɵngcc3.GlSharedComponentInputButtonSimpleComponent], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .modal-link-container{position:fixed;min-width:100vw;min-height:100vh;z-index:99999;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}[_nghost-%COMP%]  .modal-link-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}[_nghost-%COMP%]  .modal-link-container .modal-main-content{opacity:0;background:#020202;margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:30vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container{display:flex;flex-direction:column;align-items:stretch;justify-content:center;flex-grow:1;padding:.5em}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .name-container, [_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .value-container{position:relative;display:flex;align-content:center;justify-content:center;align-items:stretch}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .name-container label, [_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .value-container label{font-family:Montserrat,sans-serif;font-weight:400;color:gray;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.5em;text-transform:none;position:absolute;left:.8em;font-size:.4em}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .name-container input, [_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .value-container input{font-family:Montserrat,sans-serif;font-weight:700;color:#fff;background-color:transparent;border:none;flex-grow:1;margin:0;font-size:.5em;text-align:left;padding:1em;height:2.2em;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-input-container .name-container{margin-bottom:.1em}[_nghost-%COMP%]  .modal-link-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch}[_nghost-%COMP%]  .modal-link-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .1em;max-width:calc(100% / 3)}[_nghost-%COMP%]  .modal-link-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}[_nghost-%COMP%]  .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}[_nghost-%COMP%]  .show-modal{-webkit-animation:.3s ease-in-out forwards show-modal;animation:.3s ease-in-out forwards show-modal}@keyframes show-modal{from{opacity:0}to{opacity:1}}"] });
GlSharedComponentModalAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "modalLogo", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "fileNameLabel", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "fileNamePlaceholder", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "linkPlaceholder", void 0);
__decorate([
    Input()
], GlSharedComponentModalAttachmentLinkComponent.prototype, "cancelInnerValue", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentModalAttachmentLinkComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-modal-attachment-link',
                template: "<div\n  *ngIf=\"service.showModal\"\n  (keyup)=\"service.onModalKeyUp($event)\"\n  id=\"modal-attachment-link\"\n  class=\"modal-link-container {{ service.modalClass }}\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-input-container\">\n      <div class=\"name-container\">\n        <label for=\"attachment-link-name\">{{ fileNameLabel }}</label>\n        <input\n          (keyup)=\"service.onName($event)\"\n          id=\"attachment-link-name\"\n          type=\"text\"\n          [placeholder]=\"fileNamePlaceholder\">\n      </div>\n      <div class=\"value-container\">\n        <label for=\"attachment-link-value\">Link</label>\n        <input\n          (keyup)=\"service.onUrl($event)\"\n          id=\"attachment-link-value\"\n          type=\"text\"\n          [placeholder]=\"linkPlaceholder\">\n      </div>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onCancel()\"\n        class=\"cancel\"\n        [innerValue]=\"cancelInnerValue\"\n        value=\"cancel\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        (click)=\"service.onConfirm()\"\n        class=\"ok\"\n        innerValue=\"OK\"\n        value=\"ok\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-link-container{position:fixed;min-width:100vw;min-height:100vh;z-index:99999;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-link-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-link-container .modal-main-content{opacity:0;background:#020202;margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:30vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container{display:flex;flex-direction:column;align-items:stretch;justify-content:center;flex-grow:1;padding:.5em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container{position:relative;display:flex;align-content:center;justify-content:center;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container label,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container label{font-family:Montserrat,sans-serif;font-weight:400;color:gray;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:.5em;text-transform:none;position:absolute;left:.8em;font-size:.4em}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container input,:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .value-container input{font-family:Montserrat,sans-serif;font-weight:700;color:#fff;background-color:transparent;border:none;flex-grow:1;margin:0;font-size:.5em;text-align:left;padding:1em;height:2.2em;border-bottom:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .modal-link-container .modal-main-content .modal-input-container .name-container{margin-bottom:.1em}:host::ng-deep .modal-link-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch}:host::ng-deep .modal-link-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .1em;max-width:calc(100% / 3)}:host::ng-deep .modal-link-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}:host::ng-deep .show-modal{-webkit-animation:.3s ease-in-out forwards show-modal;animation:.3s ease-in-out forwards show-modal}@keyframes show-modal{from{opacity:0}to{opacity:1}}"]
            }]
    }], function () { return [{ type: GlSharedComponentModalAttachmentLinkService }]; }, { subtitle: [{
            type: Input
        }], fileNameLabel: [{
            type: Input
        }], fileNamePlaceholder: [{
            type: Input
        }], linkPlaceholder: [{
            type: Input
        }], cancelInnerValue: [{
            type: Input
        }], title: [{
            type: Input
        }], modalLogo: [{
            type: Input
        }] }); })();
export { GlSharedComponentModalAttachmentLinkComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLE1BQU0scURBQXFELENBQUMsbEhBQWxILE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBT2xILElBQWE7UUFBNkMsR0FBMUQsTUFBYTttQkFBNkMsT0FTeEQsWUFBbUIsT0FBb0QsWUFBcEQsWUFBTyxHQUFQLE9BQU8sQ0FBNkM7TUFQOUQsYUFBUSxHQUFXLFFBQVEsQ0FBQyxTQUU1QixrQkFBYSxHQUFXLFdBQVcsQ0FBQyxTQUNwQztBQUFtQjtFQUFXLG9CQUFvQixDQUFDLFNBQ25ELG9CQUFlLEdBQVcsb0JBQW9CLENBQUMsU0FDL0M7V0FBZ0IsR0FBVyxRQUFRLENBQUMsS0FFOEIsQ0FBQyxFQUU3RSxDQUFBOztpQ0FGNkIsMkNBQTJDLE1BUjlELGlCQUFSLEtBQUssRUFBRSw2RUFBZSxFQUNkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRlgsSUFBYSw2Q0FBNkMsR0FBMUQsTUFBYSw2Q0FBNkM7QUFDMUQsSUFRRSxZQUFtQixPQUFvRDtBQUFJLFFBQXhELFlBQU8sR0FBUCxPQUFPLENBQTZDO0FBQUMsUUFQL0QsYUFBUSxHQUFXLFFBQVEsQ0FBQztBQUN2QyxRQUNXLGtCQUFhLEdBQVcsV0FBVyxDQUFDO0FBQy9DLFFBQVcsd0JBQW1CLEdBQVcsb0JBQW9CLENBQUM7QUFDOUQsUUFBVyxvQkFBZSxHQUFXLG9CQUFvQixDQUFDO0FBQzFELFFBQVcscUJBQWdCLEdBQVcsUUFBUSxDQUFDO0FBQy9DLElBQzZFLENBQUM7QUFDOUUsQ0FDQzs7Ozs7O2c4R0FBQTtBQUNEO0FBQXVFLFlBSHpDLDJDQUEyQztBQUFHO0FBUmpFO0FBQWEsSUFBckIsS0FBSyxFQUFFOztBQUNDO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOytFQUE2QiwvRUFBNUIsK0VBQTRCO0FBQzVCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7Z0ZBQW1CLGhGQUFsQixnRkFBa0I7QUFDbEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtvRkFBcUMscEZBQXBDLG9GQUFvQztBQUNwQyxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzBGQUFvRCwxRkFBbkQsMEZBQW1EO0FBQ25ELEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7c0ZBQWdELHRGQUEvQyxzRkFBK0M7QUFDL0MsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt1RkFBcUMsdkZBQXBDLHVGQUFvQztBQVBsQyw2Q0FBNkMsb0JBTHpELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSwvRkFJQyw2Q0FBNkMsb0JBTHpELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7U0FBMkMsQUFBQTtFQUNyRCxBQUFBOzYrQ0FBeUUsQUFBQTs0ckdBRTFFLENBQUMsSUFDVyw2Q0FBNkMsQ0FXekQsV0FYWSw5REFEWixDQUFDLElBQ1csNkNBQTZDLENBV3pEOztJQVh5RDs7Ozs7Ozs7Ozs7Ozs7b0JBWTFEOztBQXBCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBdHRhY2htZW50TGlua1NlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZyA9ICc6IGxpbmsnO1xuICBASW5wdXQoKSBtb2RhbExvZ286IHN0cmluZztcbiAgQElucHV0KCkgZmlsZU5hbWVMYWJlbDogc3RyaW5nID0gJ0ZpbGUgbmFtZSc7XG4gIEBJbnB1dCgpIGZpbGVOYW1lUGxhY2Vob2xkZXI6IHN0cmluZyA9ICdUeXBlIHRoZSBmaWxlIG5hbWUnO1xuICBASW5wdXQoKSBsaW5rUGxhY2Vob2xkZXI6IHN0cmluZyA9ICdUeXBlIHRoZSBmaWxlIGxpbmsnO1xuICBASW5wdXQoKSBjYW5jZWxJbm5lclZhbHVlOiBzdHJpbmcgPSAnQ2FuY2VsJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSkgeyB9XG5cbn1cbiJdfQ==