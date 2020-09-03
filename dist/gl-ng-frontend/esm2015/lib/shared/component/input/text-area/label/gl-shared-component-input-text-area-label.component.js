import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../simple/gl-shared-component-input-text-area-simple.component';
import * as ɵngcc2 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
let GlSharedComponentInputTextAreaLabelComponent = class GlSharedComponentInputTextAreaLabelComponent {
    constructor() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) {
        this.currentValue.emit(values);
    }
};
GlSharedComponentInputTextAreaLabelComponent.ɵfac = function GlSharedComponentInputTextAreaLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextAreaLabelComponent)(); };
GlSharedComponentInputTextAreaLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextAreaLabelComponent, selectors: [["gl-shared-component-input-text-area-label"]], inputs: { disabled: "disabled", value: "value", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", maxLength: "maxLength", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 2, vars: 15, consts: [[3, "id", "placeholder", "itemContentAlignment", "value", "disabled", "maxLength", "currentValue"], [3, "labelAlignment", "id", "labelValue", "required", "requiredLabel"]], template: function GlSharedComponentInputTextAreaLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-text-area-simple", 0);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextAreaLabelComponent_Template_gl_shared_component_input_text_area_simple_currentValue_0_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("placeholder", ctx.placeholder)("itemContentAlignment", ctx.itemContentAlignment)("value", ctx.value)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("labelAlignment", ctx.labelAlignment)("id", ctx.id)("labelValue", ctx.labelValue)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
    } }, directives: [ɵngcc1.GlSharedComponentInputTextAreaSimpleComponent, ɵngcc2.GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}"] });
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "itemContentAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "maxLength", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "requiredLabel", void 0);
__decorate([
    Output()
], GlSharedComponentInputTextAreaLabelComponent.prototype, "currentValue", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaLabelComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\n  [class]=\"class\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  (currentValue)=\"onKeyUp($event)\"\n  [value]=\"value\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n  <gl-shared-component-title-label-simple\n    [class]=\"class\"\n    [labelAlignment]=\"labelAlignment\"\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-text-area-simple>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], value: [{
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
        }], maxLength: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputTextAreaLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC1hcmVhL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxJQUFhO09BQTRDLEdBQXpELE1BQWEsNENBQTRDLE9BZ0J2RDtDQWZTLGFBQVEsR0FBRyxLQUFLLENBQUMsU0FRakIsVUFBSyxHQUFHLEVBQUUsQ0FBQyxTQUdYLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7QUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDLEtBRTVCLENBQUMsS0FFakIsT0FBTyxDQUFDLE1BQU0sWUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxuR0FuQjNCLElBQWEsNENBQTRDLEdBQXpELE1BQWEsNENBQTRDO0NBbUJ4QixDQUFDLENBQUMsS0FDakMsQ0FBQyxFQUNGLENBQUEsQ0FwQlUsYkFBWCxJQWVFO1VBZkMsS0FBSyxFQUFFLGpCQWVRLFFBZlAsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUM1QixRQU9XLFVBQUssR0FBRyxFQUFFLENBQUM7d0NBUk0sRUFDakIsMUNBUVgsUUFFVyxrQkFBYSxHQUFHLGdCQUFnQixDQUFDO1lBVnpDLEtBQUssRUFBRSxuQkFXVixRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5QyxJQUNrQixDQUFDO0FBQ25CLElBQ0UsT0FBTyxDQUFDLE1BQU07Z0JBaEJNLEVBQ1gsaUJBQVIsbkNBZ0JILFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFoQjNCLEVBQUUsRkFpQlYsSUFBRSxDQUFDO0FBQ0gsQ0FBQzs4RUFsQmlDLEVBQ3ZCLGlCQUFSLEtBQUssRUFBRSxpRkFBb0IsRUFDbkI7Ozs7Ozs7Ozs7OzsyTEFnQlY7QUFwQlU7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyw4RUFBaUI7QUFDakI7QUFDVixJQURFLEtBQUssRUFBRTtBQUFDLHdFQUFXO0FBQ1g7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxvRkFBdUI7QUFDdkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7O0FBQ0M7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7aUZBQXFCLGpGQUFwQixpRkFBb0I7QUFDcEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTswRkFBOEIsMUZBQTdCLDBGQUE2QjtBQUM3QixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzJFQUFlLDNFQUFkLDJFQUFjO0FBRWQsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUNULElBREUsS0FBSyxFQUFFOzJFQUFZLDNFQUFYLDJFQUFXO0FBQ1gsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTsrRUFBbUIsL0VBQWxCLCtFQUFrQjtBQUNsQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOzhFQUFtQiw5RUFBbEIsOEVBQWtCO0FBQ2xCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7bUZBQWtDLG5GQUFqQyxtRkFBaUM7QUFFaEMsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTtrRkFBbUMsbEZBQWxDLGtGQUFrQztBQWRqQyw0Q0FBNEMsb0JBTHhELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSw5RkFJQyw0Q0FBNEMsb0JBTHhELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7U0FBMkMsQUFBQTtFQUNyRCxBQUFBOzhoQkFBeUUsb0VBRTFFLENBQUMsSUFDVyx6RUFIOEQsb0VBRTFFLENBQUMsSUFDVzs4QkFBNEMsQ0FxQnhELFdBckJZLFpBQTRDLENBcUJ4RDs7RUFyQndEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBc0J6RDs7QUE3QkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dEFyZWFMYWJlbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKSB2YWx1ZSA9ICcnO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlcjtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJlcXVpcmVkTGFiZWwgPSAnUmVxdWlyZWQgbGFiZWwnO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbktleVVwKHZhbHVlcykge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWVzKTtcbiAgfVxufVxuIl19