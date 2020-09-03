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
            template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\"\n  ><gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
            styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
        })
    ], GlSharedComponentInputAutocompleteLabelComponent);
    return GlSharedComponentInputAutocompleteLabelComponent;
}());
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9hdXRvY29tcGxldGUvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFO0lBdUJFO1FBckJVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuQyxjQUFTLEdBQW9CLEVBQUUsQ0FBQztRQUVoQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBZ0JqQixrQkFBYSxHQUFXLGdCQUFnQixDQUFDO0lBRW5DLENBQUM7SUFFaEIseUVBQWMsR0FBZCxVQUFlLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUF2QjlDO1FBQVQsTUFBTSxFQUFFOzBGQUFtQztJQUNuQztRQUFSLEtBQUssRUFBRTt1RkFBaUM7SUFFaEM7UUFBUixLQUFLLEVBQUU7c0ZBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3NGQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtnRkFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3dGQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTs0RkFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7eUZBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO2tHQUF3RDtJQUN2RDtRQUFSLEtBQUssRUFBRTttRkFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO21GQUFPO0lBQ047UUFBUixLQUFLLEVBQUU7c0ZBQW1CO0lBRWxCO1FBQVIsS0FBSyxFQUFFO29GQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTtxRkFBaUI7SUFFaEI7UUFBUixLQUFLLEVBQUU7d0ZBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO3VGQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsyRkFBMEM7SUFyQnZDLGdEQUFnRDtRQUw1RCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsOENBQThDO1lBQ3hELHl2QkFBNEU7O1NBRTdFLENBQUM7T0FDVyxnREFBZ0QsQ0EwQjVEO0lBQUQsdURBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxnREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUNvbWJvQm94RGF0YSB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QXV0b2NvbXBsZXRlTGFiZWxDb21wb25lbnQge1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGxpc3RJdGVtczogSUNvbWJvQm94RGF0YVtdID0gW107XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbGlzdE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogJ2xlZnQnIHwgJ2NlbnRlcicgfCAncmlnaHQnIHwgJyc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKSBjdXN0b206IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJhc2VVcmw6IHN0cmluZztcblxuICBASW5wdXQoKSB2YWx1ZUZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRleHRGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBvbkN1cnJlbnRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlKTsgfVxufVxuIl19