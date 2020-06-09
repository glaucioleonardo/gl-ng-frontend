import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["input"];
var GlSharedComponentInputOptionSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputOptionSimpleComponent() {
        this.itemSelected = new EventEmitter();
    }
    GlSharedComponentInputOptionSimpleComponent.prototype.onCheck = function () {
        var input = document.querySelector("#" + this.id);
        input.checked = true;
        this.itemSelected.emit(input.value);
    };
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
    return GlSharedComponentInputOptionSimpleComponent;
}());
export { GlSharedComponentInputOptionSimpleComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L29wdGlvbi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPOUY7OztvQkFXRSxwQkFYRjtNQVNZLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUMsS0FFbEQsQ0FBQyxLQUVqQix4REFaa0IsSUFVbEI7QUFHc0IsUUFMWixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ3BFLElBQ2tCLENBQUM7RUFFVixHQUFQLHNCQUNFLElBQU0sS0FBSyxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE1BQUksSUFBSSxDQUFDLEVBQUksQ0FBcUIsQ0FBQyw3RUFGOUYsSUFDRSw2REFBTyxHQUFQO0lBRUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsekRBRnpCLFFBQUUsSUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBSSxJQUFJLENBQUMsRUFBSSxDQUFxQixDQUFDO0dBRTlELENBQUMsS0FBSyxDQUFDLENBQUMsS0FDdEMsQ0FBQyxNQWhCbUIsdkJBY3RCLFFBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Y0FkdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxoQ0FlckIsUUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsSUFBRSxDQUFDO0FBQ0YsSUFqQnFCO0FBQWEsUUFBaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQztlQUFxQyxNQUUvQyxxQkFBUixLQUFLLEVBQUUsakRBRlksOEVBQW9DO0FBRTFELElBQVc7QUFBYSxRQUFyQixLQUFLLEVBQUU7ZUFBZSxNQUNkLHFCQUFSLEtBQUssRUFBRSxqREFEQyw4RUFBYzs7QUFFeEIsUUFERSxLQUFLLEVBQUU7MkVBQVksM0VBQVgsMkVBQVc7SUFDWCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7OEVBQWUsOUVBQWQsOEVBQWM7SUFDZCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7NkVBQWMsN0VBQWIsNkVBQWE7SUFDYixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7Z0ZBQWtCLGhGQUFqQixnRkFBaUI7SUFFaEIsSkFBWixJQUFZO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTtxRkFBeUQsckZBQXhELHFGQUF3RDtJQVR2RCwyQ0FBMkMsd0JBTHZELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSx5Q0FBeUMsY0FDbkQsNUpBR1csMkNBQTJDLHdCQUx2RCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUseUNBQXlDLGNBQ25EOzs7Ozt5QkFBdUUsQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z09BRXhFLENBQUMsUUFDVywyQ0FBMkMsQ0FrQnZELE1BQUQsa0RBQUMsR0FBQSxBQWxCRCxJQWtCQyxVQWxCWSwyQ0FBMkMsektBRHZELENBQUMsUUFDVywyQ0FBMkMsQ0FrQnZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFDRDtBQUFDLElBREQsa0RBQUM7QUFDQSxDQURBLEFBbEJELElBa0JDOztBQXpCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRPcHRpb25TaW1wbGVDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY2hlY2tlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgaXRlbVNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uQ2hlY2soKSB7XG4gICAgY29uc3QgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy5pdGVtU2VsZWN0ZWQuZW1pdChpbnB1dC52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==