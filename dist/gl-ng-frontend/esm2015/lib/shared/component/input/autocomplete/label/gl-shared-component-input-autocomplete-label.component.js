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
        template: "<gl-shared-component-input-autocomplete-simple\n  [class]=\"class\"\n  [value]=\"value\"\n  [listName]=\"listName\"\n  (currentValue)=\"onCurrentValue($event)\"\n  [id]=\"id\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  [placeholder]=\"placeholder\"\n  [listItems]=\"listItems\"\n  [disabled]=\"disabled\"\n\n  [custom]=\"custom\"\n  [baseUrl]=\"baseUrl\"\n  [valueField]=\"valueField\"\n  [textField]=\"textField\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredField\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-autocomplete-simple>\n",
        styles: [":host::ng-deep{display:flex}:host::ng-deep gl-shared-component-title-label-simple{flex-grow:0}"]
    })
], GlSharedComponentInputAutocompleteLabelComponent);
export { GlSharedComponentInputAutocompleteLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9hdXRvY29tcGxldGUvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLElBQWEsZ0RBQWdELEdBQTdELE1BQWEsZ0RBQWdEO0lBdUIzRDtRQXJCVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkMsY0FBUyxHQUFvQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQWdCakIsa0JBQWEsR0FBVyxnQkFBZ0IsQ0FBQztJQUVuQyxDQUFDO0lBRWhCLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3pELENBQUE7QUF4Qlc7SUFBVCxNQUFNLEVBQUU7c0ZBQW1DO0FBQ25DO0lBQVIsS0FBSyxFQUFFO21GQUFpQztBQUVoQztJQUFSLEtBQUssRUFBRTtrRkFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7a0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzRFQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7b0ZBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFO3dGQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTtxRkFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7OEZBQXdEO0FBQ3ZEO0lBQVIsS0FBSyxFQUFFOytFQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7K0VBQU87QUFDTjtJQUFSLEtBQUssRUFBRTtrRkFBbUI7QUFFbEI7SUFBUixLQUFLLEVBQUU7Z0ZBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO2lGQUFpQjtBQUVoQjtJQUFSLEtBQUssRUFBRTtvRkFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7bUZBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO3VGQUEwQztBQXJCdkMsZ0RBQWdEO0lBTDVELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4Q0FBOEM7UUFDeEQseXZCQUE0RTs7S0FFN0UsQ0FBQztHQUNXLGdEQUFnRCxDQTBCNUQ7U0ExQlksZ0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDb21ib0JveERhdGEgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9lczUvc2NyaXB0cy9jb3JlL3NlcnZpY2VzL2NvbWJvYm94L2NvcmUtc2VydmljZXMtY29tYm9ib3guaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1hdXRvY29tcGxldGUtbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWF1dG9jb21wbGV0ZS1sYWJlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRBdXRvY29tcGxldGVMYWJlbENvbXBvbmVudCB7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbGlzdEl0ZW1zOiBJQ29tYm9Cb3hEYXRhW10gPSBbXTtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBsaXN0TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgfCAnJztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGN1c3RvbTogYm9vbGVhbjtcbiAgQElucHV0KCkgYmFzZVVybDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHZhbHVlRmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgdGV4dEZpZWxkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGQ6IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG9uQ3VycmVudFZhbHVlKHZhbHVlKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWUpOyB9XG59XG4iXX0=