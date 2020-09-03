import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
export { GlSharedComponentInputTextLabelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9sYWJlbC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLElBQWEsd0NBQXdDLEdBQXJELE1BQWEsd0NBQXdDO0lBb0JuRDtRQW5CUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFJckIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUdoQixrQkFBYSxHQUFHLGdCQUFnQixDQUFDO1FBRWhDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU1QixDQUFDO0lBRWpCLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3BELENBQUE7QUF0QlU7SUFBUixLQUFLLEVBQUU7MEVBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzhFQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTtvRUFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO2dGQUF3QjtBQUN2QjtJQUFSLEtBQUssRUFBRTs0RUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7NkVBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3NGQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTt1RUFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3VFQUFzQjtBQUVyQjtJQUFSLEtBQUssRUFBRTtzRUFBK0I7QUFDOUI7SUFBUixLQUFLLEVBQUU7NEVBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzJFQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTswRUFBbUI7QUFFbEI7SUFBUixLQUFLLEVBQUU7K0VBQWtDO0FBRWhDO0lBQVQsTUFBTSxFQUFFOzhFQUFtQztBQWxCakMsd0NBQXdDO0lBTHBELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQ0FBc0M7UUFDaEQsa3ZCQUFvRTs7S0FFckUsQ0FBQztHQUNXLHdDQUF3QyxDQXVCcEQ7U0F2Qlksd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0TGFiZWxDb21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgfCBJQ3VycmVuY3lUeXBlcztcbiAgQElucHV0KCkgbWFza1N5bWJvbDogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHJlcXVpcmVkTGFiZWwgPSAnUmVxdWlyZWQgZmllbGQnO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbktleVVwKHZhbHVlcykgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlcyk7IH1cbn1cbiJdfQ==