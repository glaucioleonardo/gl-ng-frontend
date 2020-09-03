import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../simple/gl-shared-component-input-autocomplete-simple.component';
import * as ɵngcc2 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
var GlSharedComponentInputAutocompleteLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputAutocompleteLabelComponent() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    GlSharedComponentInputAutocompleteLabelComponent.prototype.onCurrentValue = function (value) { this.currentValue.emit(value); };
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
    return GlSharedComponentInputAutocompleteLabelComponent;
}());
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvYXV0b2NvbXBsZXRlL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RTsrQ0F1QkU7d0JBckJVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQyxTQUNuQyxjQUFTLEdBQW9CLEVBQUUsQ0FBQyxTQUVoQztVQUFRLEdBQUcsS0FBSyxDQUFDLFNBZ0JqQixrQkFBYSxHQUFXLGdCQUFnQixDQUFDLEtBRW5DLENBQUMsS0FFaEIsN0VBekJGO0FBRW1CLElBcUJqQjtBQUVjLEdBQWQsVUFBZSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsN0NBQUwsUUF2QmhDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztFQXVCUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BdkI5QyxaQUNaLFFBQVcsY0FBUyxHQUFvQixFQUFFLENBQUM7SUFEeEMsTUFBTSxFQUFFLFpBRVgsUUFDVyxhQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzVCLFFBZVcsa0JBQWEsR0FBVyxnQkFBZ0IsQ0FBQztBQUNwRCxJQUNpQixDQUFDO21CQXJCNEIsTUFDbkMscUJBQVIsS0FBSyxFQUFFLHJEQXFCVixJQUNFLHlFQUFjLEdBQWQsVUFBZSxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBdEJmLE1BRWhDLGRBcUJWLElBeEJXO0FBQWEsUUFBdEIsTUFBTSxFQUFFO0NBR1IsS0FBSyxFQUFFLFJBSEUsMEZBQWtDO0dBR2xCLE1BQ2pCLFRBSFYsSUFBVTthQUdSLGJBSHFCLFFBQXJCLEtBQUssRUFBRTtFQUdGLEVBQUUsSkFIQyx1RkFBZ0M7RUFHZixNQUNqQixSQUZYLElBQVc7WUFFUixaQUZxQixRQUFyQixLQUFLLEVBQUU7Q0FFRixFQUFFLGlGQUFZLHBGQUZYLHNGQUFpQjtFQUdqQixGQUZWLElBQVU7TUFFUixLQUFLLEVBQUUsYkFGYyxRQUFyQixLQUFLLEVBQUU7c0ZBRW9CLHRGQUZuQixzRkFBaUI7SUFHakIsSkFGVixJQUFVO1FBRVIsS0FBSyxFQUFFLGZBRFQsUUFERSxLQUFLLEVBQUU7QUFBQyxnRkFBVztVQUVZLE1BQ3ZCLGhCQUZWLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7SUFFUCxLQUFLLEVBQUUsWEFGQyx3RkFBbUI7V0FFQyxYQUQ5QixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsNEZBQXVCO0FBQ2pDLElBQVU7O0FBQUEseUZBQW9CO0lBQ3BCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtrR0FBd0QsbEdBQXZELGtHQUF1RDtJQUN2RCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7bUZBQWUsbkZBQWQsbUZBQWM7SUFDZCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFDSixRQURILEtBQUssRUFBRTttRkFBTyxuRkFBTixtRkFBTTtJQUNOLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTtzRkFBbUIsdEZBQWxCLHNGQUFrQjtJQUVsQixKQUFYLElBQVc7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7b0ZBQWlCLHBGQUFoQixvRkFBZ0I7SUFDaEIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO3FGQUFpQixyRkFBaEIscUZBQWdCO0lBRWhCLEpBQVgsSUFBVztRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt3RkFBb0IseEZBQW5CLHdGQUFtQjtJQUNuQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7dUZBQW1CLHZGQUFsQix1RkFBa0I7SUFDbEIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOzJGQUEwQywzRkFBekMsMkZBQXlDO0lBckJ2QyxnREFBZ0Qsd0JBTDVELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSw4Q0FBOEMsY0FDeEQsdEtBR1csZ0RBQWdELHdCQUw1RCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsOENBQThDLGNBQ3hEOzJ0QkFBNEUsa0lBRTdFLENBQUMsUUFDVyxnREFBZ0QsQ0EwQjVELE1BQUQsdURBQUMsR0FBQSxBQTFCRCxJQTBCQyxVQTFCWSwxUUFIaUUsa0lBRTdFLENBQUMsUUFDVyxnREFBZ0QsQ0EwQjVEO3NDQTFCNEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBMkI3RDtBQUFDLElBREQsdURBQUM7QUFDQSxDQURBLEFBMUJELElBMEJDOztBQWxDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDb21ib0JveERhdGEgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZUxhYmVsQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICcnO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xuICBASW5wdXQoKSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZDogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DdXJyZW50VmFsdWUodmFsdWUpIHsgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZSk7IH1cbn1cbiJdfQ==