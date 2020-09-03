import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let GlSharedComponentInputAutocompleteLabelComponent = class GlSharedComponentInputAutocompleteLabelComponent {
    constructor() {
        this.currentValue = new EventEmitter();
        this.listItems = [];
        this.disabled = false;
        this.requiredField = 'Required field';
    }
    onCurrentValue(value) { this.currentValue.emit(value); }
};
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
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9hdXRvY29tcGxldGUvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLElBQWEsZ0RBQWdELEdBQTdELE1BQWEsZ0RBQWdEO0lBdUIzRDtRQXJCVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCakIsa0JBQWEsR0FBVyxnQkFBZ0IsQ0FBQztJQUVuQyxDQUFDO0lBRWhCLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pELENBQUE7QUF4Qlc7SUFBVCxNQUFNLEVBQUU7c0ZBQW1DO0FBQ25DO0lBQVIsS0FBSyxFQUFFO21GQUFpQztBQUVoQztJQUFSLEtBQUssRUFBRTtrRkFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7a0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzRFQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7b0ZBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3dGQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTtxRkFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OEZBQXdEO0FBQ3ZEO0lBQVIsS0FBSyxFQUFFOytFQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7K0VBQU87QUFDTjtJQUFSLEtBQUssRUFBRTtrRkFBbUI7QUFFbEI7SUFBUixLQUFLLEVBQUU7Z0ZBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO2lGQUFpQjtBQUVoQjtJQUFSLEtBQUssRUFBRTtvRkFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUZBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO3VGQUEwQztBQXJCdkMsZ0RBQWdEO0lBTDVELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4Q0FBOEM7UUFDeEQseXZCQUE0RTs7S0FFN0UsQ0FBQztHQUNXLGdEQUFnRCxDQTBCNUQ7U0ExQlksZ0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDb21ib0JveERhdGEgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYXV0b2NvbXBsZXRlLWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dEF1dG9jb21wbGV0ZUxhYmVsQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IElDb21ib0JveERhdGFbXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxpc3ROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyB8ICcnO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY3VzdG9tOiBib29sZWFuO1xuICBASW5wdXQoKSBiYXNlVXJsOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdmFsdWVGaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZDogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgb25DdXJyZW50VmFsdWUodmFsdWUpIHsgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZSk7IH1cbn1cbiJdfQ==