import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../simple/gl-shared-component-input-autocomplete-simple.component';
import * as ɵngcc2 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
let GlSharedComponentInputAutocompleteLabelComponent = class GlSharedComponentInputAutocompleteLabelComponent {
    constructor() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    onCurrentValue(value) { this.currentValue.emit(value); }
};
GlSharedComponentInputAutocompleteLabelComponent.ɵfac = function GlSharedComponentInputAutocompleteLabelComponent_Factory(t) { return new (t || GlSharedComponentInputAutocompleteLabelComponent)(); };
GlSharedComponentInputAutocompleteLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputAutocompleteLabelComponent, selectors: [["gl-shared-component-input-autocomplete-label"]], inputs: { listItems: "listItems", disabled: "disabled", requiredField: "requiredField", listName: "listName", id: "id", labelValue: "labelValue", labelAlignment: "labelAlignment", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", value: "value", required: "required", custom: "custom", baseUrl: "baseUrl", valueField: "valueField", textField: "textField" }, outputs: { currentValue: "currentValue" }, decls: 2, vars: 20, consts: [[3, "value", "listName", "id", "itemContentAlignment", "placeholder", "listItems", "disabled", "custom", "baseUrl", "valueField", "textField", "currentValue"], [3, "id", "labelAlignment", "labelValue", "required", "requiredLabel"]], template: function GlSharedComponentInputAutocompleteLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-autocomplete-simple", 0);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputAutocompleteLabelComponent_Template_gl_shared_component_input_autocomplete_simple_currentValue_0_listener($event) { return ctx.onCurrentValue($event); });
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("value", ctx.value)("listName", ctx.listName)("id", ctx.id)("itemContentAlignment", ctx.itemContentAlignment)("placeholder", ctx.placeholder)("listItems", ctx.listItems)("disabled", ctx.disabled)("custom", ctx.custom)("baseUrl", ctx.baseUrl)("valueField", ctx.valueField)("textField", ctx.textField);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("labelAlignment", ctx.labelAlignment)("labelValue", ctx.labelValue)("required", ctx.required)("requiredLabel", ctx.requiredField);
    } }, directives: [ɵngcc1.GlSharedComponentInputAutocompleteSimpleComponent, ɵngcc2.GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex}[_nghost-%COMP%]  gl-shared-component-title-label-simple{flex-grow:0}"] });
__decorate([
    Output()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "currentValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listItems", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "listName", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelValue", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "labelAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "placeholder", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "itemContentAlignment", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "custom", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "baseUrl", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "valueField", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "textField", void 0);
__decorate([
    Input()
], GlSharedComponentInputAutocompleteLabelComponent.prototype, "requiredField", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputAutocompleteLabelComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-autocomplete-label',
                template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\"\n  ><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
                styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
            }]
    }], function () { return []; }, { currentValue: [{
            type: Output
        }], listItems: [{
            type: Input
        }], disabled: [{
            type: Input
        }], requiredField: [{
            type: Input
        }], listName: [{
            type: Input
        }], id: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }], value: [{
            type: Input
        }], required: [{
            type: Input
        }], custom: [{
            type: Input
        }], baseUrl: [{
            type: Input
        }], valueField: [{
            type: Input
        }], textField: [{
            type: Input
        }] }); })();
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvYXV0b2NvbXBsZXRlL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxJQUFhO1dBQWdELEdBQTdELE1BQWEsZ0RBQWdELE9BdUIzRDtNQXJCVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsU0FDbkMsY0FBUyxHQUFvQixFQUFFLENBQUMsU0FFaEMsYUFBUSxHQUFHO0FBQUssQ0FBQyxTQWdCakIsa0JBQWEsR0FBVyxnQkFBZ0IsQ0FBQyxLQUVuQyxDQUFDLEtBRWhCLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSywvR0F6QnRELElBQWEsZ0RBQWdELEdBQTdELE1BQWEsZ0RBQWdEO0FBeUJOLENBQUMsQ0FBQyxDQUFDLEVBQ3pELENBQUEsQ0F4QlcsUEFEWixJQXNCRTtJQXJCQyxNQUFNLEVBQUUsWkFxQk8sUUFyQk4saUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQzlDLFFBQVcsY0FBUyxHQUFvQixFQUFFLENBQUM7c0JBREcsRUFDbkMseEJBQ1gsUUFDVyxhQUFRLEdBQUcsS0FBSyxDQUFDO1VBRnpCLEtBQUssRUFBRSxqQkFHVixRQWVXLGtCQUFhLEdBQVcsZ0JBQWdCLENBQUM7QUFDcEQsSUFDaUIsQ0FBQztnREFwQnlCLEVBRWhDLGxEQW1CWCxJQUNFLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7R0FyQkUsS0FBSyxFQUFFLG1GQUFrQixFQUNqQixpQkFBUixLQUFLLEVBQUU7RUFBa0IsRUFDakIsaUJBQVIsS0FBSyxFQUFFLDZFQUFZLEVBQ1gsaUJBQVIsS0FBSyxFQUFFLHFGQUFvQixFQUNuQixpQkFBUixLQUFLLEVBQUUseUZBQXdCLEVBQ3ZCOzs7Ozs7Ozs7Ozt3UEFnQlY7QUF4Qlc7QUFBYSxJQUF0QixNQUFNLEVBQUU7QUFBQyxzRkFBa0M7QUFDbkM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxtRkFBZ0M7QUFFaEM7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxrRkFBaUI7QUFDakI7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxrRkFBaUI7QUFDakI7QUFDVixJQURFLEtBQUssRUFBRTtBQUFDLDRFQUFXO0FBQ1g7QUFBYSxJQUFyQixLQUFLLEVBQUU7QUFBQyxvRkFBbUI7QUFDbkI7QUFBYSxJQUFyQixLQUFLLEVBQUU7O0FBQ0M7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7cUZBQXFCLHJGQUFwQixxRkFBb0I7QUFDcEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs4RkFBd0QsOUZBQXZELDhGQUF1RDtBQUN2RCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFOytFQUFlLC9FQUFkLCtFQUFjO0FBQ2QsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUNKLElBREgsS0FBSyxFQUFFOytFQUFPLC9FQUFOLCtFQUFNO0FBQ04sQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtrRkFBbUIsbEZBQWxCLGtGQUFrQjtBQUVsQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO2dGQUFpQixoRkFBaEIsZ0ZBQWdCO0FBQ2hCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7aUZBQWlCLGpGQUFoQixpRkFBZ0I7QUFFaEIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTtvRkFBb0IscEZBQW5CLG9GQUFtQjtBQUNuQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO21GQUFtQixuRkFBbEIsbUZBQWtCO0FBQ2xCLEFBQUE7SUFBUixLQUFLLEVBQUUsWEFBYyxJQUFyQixLQUFLLEVBQUU7dUZBQTBDLHZGQUF6Qyx1RkFBeUM7QUFyQnZDLGdEQUFnRCxvQkFMNUQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFLGxHQUlDLGdEQUFnRCxvQkFMNUQsU0FBUyxDQUFDLFVBQ1QsUUFBUSxFQUFFOztZQUE4QyxBQUFBO0tBQ3hELEFBQUE7b3JCQUE0RSxBQUFBO21DQUU3RSxDQUFDLElBQ1csZ0RBQWdELENBMEI1RCxXQTFCWSxqRUFEWixDQUFDLElBQ1csZ0RBQWdELENBMEI1RDs7VUExQjREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQTJCN0Q7O0FBbkNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlTGFiZWxDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGxpc3RJdGVtczogSUNvbWJvQm94RGF0YVtdID0gW107XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGlzdE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjdXN0b206IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhc2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkN1cnJlbnRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlKTsgfVxufVxuIl19