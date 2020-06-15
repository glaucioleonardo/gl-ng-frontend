import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
import * as ɵngcc2 from '../simple/gl-shared-component-input-text-simple.component';
let GlSharedComponentInputTextLabelComponent = class GlSharedComponentInputTextLabelComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
};
GlSharedComponentInputTextLabelComponent.ɵfac = function GlSharedComponentInputTextLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextLabelComponent)(); };
GlSharedComponentInputTextLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextLabelComponent, selectors: [["gl-shared-component-input-text-label"]], inputs: { disabled: "disabled", autocomplete: "autocomplete", value: "value", maxLength: "maxLength", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", mask: "mask", maskSymbol: "maskSymbol", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 3, vars: 18, consts: [[1, "item-container"], [3, "id", "labelValue", "labelAlignment", "required", "requiredLabel"], [3, "value", "id", "itemContentAlignment", "placeholder", "disabled", "autocomplete", "mask", "maskSymbol", "maxLength", "currentValue"]], template: function GlSharedComponentInputTextLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementStart(2, "gl-shared-component-input-text-simple", 2);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextLabelComponent_Template_gl_shared_component_input_text_simple_currentValue_2_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("labelValue", ctx.labelValue)("labelAlignment", ctx.labelAlignment)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("value", ctx.value)("id", ctx.id)("itemContentAlignment", ctx.itemContentAlignment)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("autocomplete", ctx.autocomplete)("mask", ctx.mask)("maskSymbol", ctx.maskSymbol)("maxLength", ctx.maxLength);
    } }, directives: [ɵngcc1.GlSharedComponentTitleLabelSimpleComponent, ɵngcc2.GlSharedComponentInputTextSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}[_nghost-%COMP%]  .item-container   gl-shared-component-input-text-simple{margin:0}"] });
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "autocomplete", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "labelAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "labelValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "itemContentAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "mask", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "maskSymbol", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "maxLength", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextLabelComponent.prototype, "requiredLabel", void 0);
__decorate([
    Output()
], GlSharedComponentInputTextLabelComponent.prototype, "currentValue", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextLabelComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-label',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], value: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], requiredLabel: [{
            type: Input
        }], currentValue: [{
            type: Output
        }], id: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }], mask: [{
            type: Input
        }], maskSymbol: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputTextLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxJQUFhO0dBQXdDLEdBQXJELE1BQWEsd0NBQXdDLE9Bb0JuRCx3QkFuQlMsYUFBUSxHQUFHO0FBQUssQ0FBQyxTQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQyxTQU9yQixVQUFLLEdBQVcsSUFBSSxDQUFDLFNBSXJCO0NBQVMsR0FBRyxHQUFHLENBQUMsU0FHaEIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxTQUVoQyxpQkFBWSxHQUFHLElBQUkseEZBbEIvQixJQUFhLHdDQUF3QyxHQUFyRCxNQUFhLHdDQUF3QztJQWtCVixFQUFFLENBQUMsS0FFNUIsQ0FBQyxLQUVqQixsQkFyQkYsSUFtQkU7S0FFTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsckJBRlAsUUFuQlAsYUFBUSxHQUFHLEtBQUssQ0FBQztFQXFCUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDcEQsQ0FBQSxDQXRCVSx0QkFDWCxRQUFXLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBRDdCLEtBQUssRUFBRSxYQUVWLFFBTVcsVUFBSyxHQUFXLElBQUksQ0FBQztBQUNoQyxRQUdXLGNBQVMsR0FBRyxHQUFHLENBQUM7NkJBWkMsRUFDakIsL0JBWVgsUUFFVyxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO0NBZHpDLEtBQUssRUFBRSxSQWVWLFFBQ1ksaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlDLElBQ2tCLENBQUM7aUNBbEJhLEVBQ3JCLGlCQUFSLHBEQWtCSCxJQUNFLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBbkI3QyxEQW9CUixDQUFDO0FBcEJTLHFFQUFZLEVBQ1gsaUJBQVIsS0FBSyxFQUFFO0FBQXdCLEVBQ3ZCLGlCQUFSLEtBQUssRUFBRSw2RUFBb0IsRUFDbkIsaUJBQVIsS0FBSyxFQUFFLDhFQUFxQjs7Ozs7Ozs7Ozs7Ozs7cVlBaUI5QjtBQXRCVTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDBFQUFpQjtBQUNqQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDhFQUFxQjtBQUNyQjtBQUNWLElBREUsS0FBSyxFQUFFO0FBQUMsb0VBQVc7QUFDWDtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLGdGQUF1QjtBQUN2QjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDRFQUFtQjtBQUNuQjs7QUFBQSw2RUFBb0I7QUFDcEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtzRkFBOEIsdEZBQTdCLHNGQUE2QjtBQUM3QixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3VFQUFlLHZFQUFkLHVFQUFjO0FBQ2QsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTt1RUFBc0IsdkVBQXJCLHVFQUFxQjtBQUVyQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3NFQUErQix0RUFBOUIsc0VBQThCO0FBQzlCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7NEVBQW9CLDVFQUFuQiw0RUFBbUI7QUFDbkIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTsyRUFBaUIsM0VBQWhCLDJFQUFnQjtBQUNoQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzBFQUFtQiwxRUFBbEIsMEVBQWtCO0FBRWxCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7K0VBQWtDLC9FQUFqQywrRUFBaUM7QUFFaEMsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTs4RUFBbUMsOUVBQWxDLDhFQUFrQztBQWxCakMsd0NBQXdDLG9CQUxwRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsMUZBSUMsd0NBQXdDLG9CQUxwRCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O0lBQXNDLFVBQ2hELFZBRGdELFVBQ2hEOzs2cUJBQW9FLEFBQUE7NkxBRXJFLENBQUMsSUFDVyx3Q0FBd0MsQ0F1QnBELFdBdkJZLHpEQURaLENBQUMsSUFDVyx3Q0FBd0MsQ0F1QnBEO1NBdkJvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF3QnJEOztBQWhDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9pbnB1dC9jb3JlLXNlcnZpY2VzLWlucHV0LmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dExhYmVsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgQElucHV0KCkgbWFzazogc3RyaW5nIHwgSUN1cnJlbmN5VHlwZXM7XG4gIEBJbnB1dCgpIG1hc2tTeW1ib2w6IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSByZXF1aXJlZExhYmVsID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25LZXlVcCh2YWx1ZXMpIHsgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZXMpOyB9XG59XG4iXX0=