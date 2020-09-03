import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var GlSharedComponentInputTextLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputTextLabelComponent() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextLabelComponent.prototype.onKeyUp = function (values) { this.currentValue.emit(values); };
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
    GlSharedComponentInputTextLabelComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-label',
            template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
        })
    ], GlSharedComponentInputTextLabelComponent);
    return GlSharedComponentInputTextLabelComponent;
}());
export { GlSharedComponentInputTextLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFO0lBb0JFO1FBbkJTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFPckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUlyQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsMERBQU8sR0FBUCxVQUFRLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFyQjFDO1FBQVIsS0FBSyxFQUFFOzhFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTtrRkFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7d0VBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTtvRkFBd0I7SUFDdkI7UUFBUixLQUFLLEVBQUU7Z0ZBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFO2lGQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTswRkFBOEI7SUFDN0I7UUFBUixLQUFLLEVBQUU7MkVBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTsyRUFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7MEVBQStCO0lBQzlCO1FBQVIsS0FBSyxFQUFFO2dGQUFvQjtJQUNuQjtRQUFSLEtBQUssRUFBRTsrRUFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7OEVBQW1CO0lBRWxCO1FBQVIsS0FBSyxFQUFFO21GQUFrQztJQUVoQztRQUFULE1BQU0sRUFBRTtrRkFBbUM7SUFsQmpDLHdDQUF3QztRQUxwRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0NBQXNDO1lBQ2hELGt2QkFBb0U7O1NBRXJFLENBQUM7T0FDVyx3Q0FBd0MsQ0F1QnBEO0lBQUQsK0NBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSx3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUN1cnJlbmN5VHlwZXMgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRMYWJlbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5VXAodmFsdWVzKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWVzKTsgfVxufVxuIl19