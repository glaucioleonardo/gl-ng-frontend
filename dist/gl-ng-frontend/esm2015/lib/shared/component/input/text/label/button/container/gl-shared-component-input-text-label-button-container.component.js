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
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-title-label-button-container\r\n    [labelValue]=\"labelValue\"\r\n    [id]=\"id\"\r\n    [labelAlignment]=\"labelAlignment\"\r\n    [required]=\"required\"\r\n    [class]=\"class\"\r\n    [requiredFieldDescription]=\"requiredLabel\">\r\n    <div class=\"button-container\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </gl-shared-component-title-label-button-container>\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"onKeyUp($event)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvbGFiZWwvYnV0dG9uL2NvbnRhaW5lci9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVVyRSxNQUFNLE9BQU8sdURBQXVEO0lBeUJsRTtRQXhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFHckIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztZQWhDcEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1REFBdUQ7Z0JBQ2pFLHNpQ0FBcUY7O2FBRXRGOzs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSztpQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUVMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUVMLEtBQUs7dUJBQ0wsS0FBSzs0QkFFTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVEN1cnJlbmN5U3ltYm9sVHlwZXMsIFREZWNpbWFsU2VwYXJhdG9ycyB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUSW5wdXRUZXh0TWFzayB9IGZyb20gJy4uLy4uLy4uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1idXR0b24tY29udGFpbmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1idXR0b24tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0TGFiZWxCdXR0b25Db250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKSBtYXNrOiBUSW5wdXRUZXh0TWFzaztcclxuICBASW5wdXQoKSBkZWNpbWFsU2VwYXJhdG9yOiBURGVjaW1hbFNlcGFyYXRvcnMgPSAnLCc7XHJcbiAgQElucHV0KCkgbWFza1N5bWJvbDogVEN1cnJlbmN5U3ltYm9sVHlwZXM7XHJcbiAgQElucHV0KCkgYWxsb3dNaW51czogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcmlnaHRBbGlnbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gNTtcclxuXHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKSByZXF1aXJlZExhYmVsID0gJ1JlcXVpcmVkIGZpZWxkJztcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgb25LZXlVcCh2YWx1ZXMpIHsgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZXMpOyB9XHJcbn1cclxuIl19