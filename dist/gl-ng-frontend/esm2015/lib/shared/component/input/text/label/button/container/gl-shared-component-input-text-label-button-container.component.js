import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputTextLabelButtonContainerComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.decimalSeparator = ',';
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    onKeyUp(values) { this.currentValue.emit(values); }
}
GlSharedComponentInputTextLabelButtonContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-label-button-container',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-button-container\n    [labelValue]=\"labelValue\"\n    [id]=\"id\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredFieldDescription]=\"requiredLabel\">\n    <div class=\"button-container\">\n      <ng-content></ng-content>\n    </div>\n  </gl-shared-component-title-label-button-container>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [allowMinus]=\"allowMinus\"\n    [rightAlign]=\"rightAlign\"\n    [step]=\"step\"\n    [decimalSeparator]=\"decimalSeparator\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container{margin:0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .button-container{align-items:center;display:flex;margin:0 .6em 0 0}"]
            },] }
];
GlSharedComponentInputTextLabelButtonContainerComponent.ctorParameters = () => [];
GlSharedComponentInputTextLabelButtonContainerComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    labelAlignment: [{ type: Input }],
    labelValue: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    maxLength: [{ type: Input }],
    required: [{ type: Input }],
    requiredLabel: [{ type: Input }],
    currentValue: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvbGFiZWwvYnV0dG9uL2NvbnRhaW5lci9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVVyRSxNQUFNLE9BQU8sdURBQXVEO0lBeUJsRTtRQXhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFHckIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztZQWhDcEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1REFBdUQ7Z0JBQ2pFLHcrQkFBcUY7O2FBRXRGOzs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSztpQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUVMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUVMLEtBQUs7dUJBQ0wsS0FBSzs0QkFFTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRDdXJyZW5jeVN5bWJvbFR5cGVzLCBURGVjaW1hbFNlcGFyYXRvcnMgfSBmcm9tICdnbC13LWZyb250ZW5kJztcbmltcG9ydCB7IFRIb3Jpem9udGFsQWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUSW5wdXRUZXh0TWFzayB9IGZyb20gJy4uLy4uLy4uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1idXR0b24tY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dExhYmVsQnV0dG9uQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudDtcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBASW5wdXQoKSBtYXNrOiBUSW5wdXRUZXh0TWFzaztcbiAgQElucHV0KCkgZGVjaW1hbFNlcGFyYXRvcjogVERlY2ltYWxTZXBhcmF0b3JzID0gJywnO1xuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBUQ3VycmVuY3lTeW1ib2xUeXBlcztcbiAgQElucHV0KCkgYWxsb3dNaW51czogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJpZ2h0QWxpZ246IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5VXAodmFsdWVzKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWVzKTsgfVxufVxuIl19