import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    GlSharedComponentInputAutocompleteLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-autocomplete-label',
            template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
            styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
        })
    ], GlSharedComponentInputAutocompleteLabelComponent);
    return GlSharedComponentInputAutocompleteLabelComponent;
}());
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9hdXRvY29tcGxldGUvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFO0lBdUJFO1FBckJVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUVoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBZ0JqQixrQkFBYSxHQUFXLGdCQUFnQixDQUFDO0lBRW5DLENBQUM7SUFFaEIseUVBQWMsR0FBZCxVQUFlLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUF2QjlDO1FBQVQsTUFBTSxFQUFFOzBGQUFtQztJQUNuQztRQUFSLEtBQUssRUFBRTt1RkFBaUM7SUFFaEM7UUFBUixLQUFLLEVBQUU7c0ZBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3NGQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtnRkFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3dGQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs0RkFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7eUZBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO2tHQUF3RDtJQUN2RDtRQUFSLEtBQUssRUFBRTttRkFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO21GQUFPO0lBQ047UUFBUixLQUFLLEVBQUU7c0ZBQW1CO0lBRWxCO1FBQVIsS0FBSyxFQUFFO29GQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtxRkFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7d0ZBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3VGQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsyRkFBMEM7SUFyQnZDLGdEQUFnRDtRQUw1RCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOENBQThDO1lBQ3hELHl2QkFBNEU7O1NBRTdFLENBQUM7T0FDVyxnREFBZ0QsQ0EwQjVEO0lBQUQsdURBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxnREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvY29tYm9ib3gvY29yZS1zZXJ2aWNlcy1jb21ib2JveC5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZUxhYmVsQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICcnO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xuICBASW5wdXQoKSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZDogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DdXJyZW50VmFsdWUodmFsdWUpIHsgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZSk7IH1cbn1cbiJdfQ==