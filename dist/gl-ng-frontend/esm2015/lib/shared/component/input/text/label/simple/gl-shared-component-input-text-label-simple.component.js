import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputTextLabelSimpleComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.decimalSeparator = ',';
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-simple',
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-title-label-simple\r\n    [id]=\"id\"\r\n    [labelValue]=\"labelValue\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredLabel]=\"requiredLabel\"\r\n  ></gl-shared-component-title-label-simple>\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"onKeyUp($event)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            },] }
];
GlSharedComponentInputTextLabelSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVV2RSxNQUFNLE9BQU8sOENBQThDO0lBeUJ6RDtRQXhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFHVCxxQkFBZ0IsR0FBdUIsR0FBRyxDQUFDO1FBRTNDLGNBQVMsR0FBRyxHQUFHLENBQUM7UUFHaEIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUVoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVqQixPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1lBaENwRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztnQkFDdkQsODZCQUEyRTs7YUFFNUU7Ozs7dUJBRUUsS0FBSzsyQkFDTCxLQUFLO2lCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBRUwsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLEtBQUs7MkJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRDdXJyZW5jeVN5bWJvbFR5cGVzLCBURGVjaW1hbFNlcGFyYXRvcnMgfSBmcm9tICdnbC13LWZyb250ZW5kJztcclxuaW1wb3J0IHsgVEhvcml6b250YWxBbGlnbm1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi90aXRsZS9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1zaW1wbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgVElucHV0VGV4dE1hc2sgfSBmcm9tICcuLi8uLi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwtc2ltcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dExhYmVsU2ltcGxlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gIEBJbnB1dCgpIGxhYmVsVmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudDtcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKSBhbGxvd01pbnVzID0gdHJ1ZTtcclxuICBASW5wdXQoKSByaWdodEFsaWduID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzdGVwID0gNTtcclxuXHJcbiAgQElucHV0KCkgbWFzazogVElucHV0VGV4dE1hc2s7XHJcbiAgQElucHV0KCkgZGVjaW1hbFNlcGFyYXRvcjogVERlY2ltYWxTZXBhcmF0b3JzID0gJywnO1xyXG4gIEBJbnB1dCgpIG1hc2tTeW1ib2w6IFRDdXJyZW5jeVN5bWJvbFR5cGVzO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcclxuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBmaWVsZCc7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG9uS2V5VXAodmFsdWVzKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWVzKTsgfVxyXG59XHJcbiJdfQ==