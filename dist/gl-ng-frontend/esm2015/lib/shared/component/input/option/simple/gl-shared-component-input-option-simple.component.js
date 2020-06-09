import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

const _c0 = ["input"];
let GlSharedComponentInputOptionSimpleComponent = class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck() {
        const input = document.querySelector(`#${this.id}`);
        input.checked = true;
        this.itemSelected.emit(input.value);
    }
};
GlSharedComponentInputOptionSimpleComponent.ɵfac = function GlSharedComponentInputOptionSimpleComponent_Factory(t) { return new (t || GlSharedComponentInputOptionSimpleComponent)(); };
GlSharedComponentInputOptionSimpleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputOptionSimpleComponent, selectors: [["gl-shared-component-input-option-simple"]], viewQuery: function GlSharedComponentInputOptionSimpleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.input = _t.first);
    } }, inputs: { value: "value", id: "id", label: "label", name: "name", checked: "checked" }, outputs: { itemSelected: "itemSelected" }, decls: 6, vars: 6, consts: [[1, "input-container"], ["type", "radio", 1, "input-radio", 3, "checked", "value", "id", "name", "click"], ["input", ""], [1, "check-mark", 3, "click"], [1, "label", 3, "for"]], template: function GlSharedComponentInputOptionSimpleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "input", 1, 2);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputOptionSimpleComponent_Template_input_click_1_listener() { return ctx.onCheck(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "span", 3);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentInputOptionSimpleComponent_Template_span_click_3_listener() { return ctx.onCheck(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("checked", ctx.checked)("value", ctx.value)("id", ctx.id)("name", ctx.name);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("for", ctx.id);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.label);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%] {display:block;flex-grow:1}[_nghost-%COMP%]  .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}[_nghost-%COMP%]  .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}[_nghost-%COMP%]  .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}[_nghost-%COMP%]  .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}[_nghost-%COMP%]  .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}[_nghost-%COMP%]  .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}[_nghost-%COMP%]  .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}[_nghost-%COMP%]  .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}[_nghost-%COMP%]  .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}[_nghost-%COMP%]  .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"] });
__decorate([
    ViewChild('input')
], GlSharedComponentInputOptionSimpleComponent.prototype, "input", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "label", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "name", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "checked", void 0);
__decorate([
    Output()
], GlSharedComponentInputOptionSimpleComponent.prototype, "itemSelected", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputOptionSimpleComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck()\"\n  >\n  <span (click)=\"onCheck()\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}:host::ng-deep .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}:host::ng-deep .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}:host::ng-deep .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"]
            }]
    }], function () { return []; }, { itemSelected: [{
            type: Output
        }], input: [{
            type: ViewChild,
            args: ['input']
        }], value: [{
            type: Input
        }], id: [{
            type: Input
        }], label: [{
            type: Input
        }], name: [{
            type: Input
        }], checked: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputOptionSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L29wdGlvbi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPOUYsSUFBYTs7S0FBMkMsR0FBeEQsTUFBYTtrQ0FBMkMsT0FXdEQsd0JBRlUsaUJBQVksR0FBeUIsSUFBSSxZQUFZLHJHQVRqRSxJQUFhLDJDQUEyQyxHQUF4RCxNQUFhLDJDQUEyQztDQVNXLENBQUMsS0FFbEQsQ0FBQyxLQUVqQixiQVpGLElBVUU7QUFFTyxhQUNMLE1BQU0sS0FBSyxHQUFxQixRQUFRLENBQUMscENBSDNCLFFBRk4saUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztDQUtWLENBQUMsRkFKM0QsSUFDa0IsQ0FBQztBQUc0QyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQXFCLENBQUMsWEFGOUYsSUFDRSxPQUFPO0lBRUwsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsekRBRjNCLFFBQUksTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQXFCLENBQUM7Q0FFOUQsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUN0QyxDQUFDLEVBQ0YsQ0FBQSxDQWpCcUIsbkJBY3RCLFFBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7TUFkdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyx4QkFlckIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs2Q0FqQnlELEVBRS9DLGlCQUFSLEtBQUssRUFBRSwyRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4b0RBZXhCO0FBakJxQjtBQUFhLElBQWhDLFNBQVMsQ0FBQyxPQUFPLENBQUM7QUFBQywwRUFBb0M7QUFFL0M7O0FBQUEsMEVBQWM7QUFDZCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ1QsSUFERSxLQUFLLEVBQUU7dUVBQVksdkVBQVgsdUVBQVc7QUFDWCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzBFQUFlLDFFQUFkLDBFQUFjO0FBQ2QsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt5RUFBYyx6RUFBYix5RUFBYTtBQUNiLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQWtCLDVFQUFqQiw0RUFBaUI7QUFFaEIsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTtpRkFBeUQsakZBQXhELGlGQUF3RDtBQVR2RCwyQ0FBMkMsb0JBTHZELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSw3RkFJQywyQ0FBMkMsb0JBTHZELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7T0FBeUMsQUFBQTtBQUNuRCxBQUFBO2tWQUF1RSxBQUFBO3loREFFeEUsQ0FBQyxJQUNXLDJDQUEyQyxDQWtCdkQsV0FsQlksNURBRFosQ0FBQyxJQUNXLDJDQUEyQyxDQWtCdkQ7O0FBbEJ1RDs7Ozs7Ozs7Ozs7Ozs7O29CQW1CeEQ7O0FBMUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dE9wdGlvblNpbXBsZUNvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2VkOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBpdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25DaGVjaygpIHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCkgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLml0ZW1TZWxlY3RlZC5lbWl0KGlucHV0LnZhbHVlKTtcbiAgfVxufVxuIl19