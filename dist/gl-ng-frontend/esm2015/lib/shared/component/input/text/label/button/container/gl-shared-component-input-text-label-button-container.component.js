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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvbGFiZWwvYnV0dG9uL2NvbnRhaW5lci9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVVyRSxNQUFNLE9BQU8sdURBQXVEO0lBeUJsRTtRQXhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFHckIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUVULGNBQVMsR0FBRyxHQUFHLENBQUM7UUFHaEIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztRQUVoQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFFNUIsQ0FBQztJQUVqQixPQUFPLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O1lBaENwRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVEQUF1RDtnQkFDakUsc2lDQUFxRjs7YUFFdEY7Ozs7dUJBRUUsS0FBSzsyQkFDTCxLQUFLO2lCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBRUwsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBRUwsS0FBSzt1QkFDTCxLQUFLOzRCQUVMLEtBQUs7MkJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUQ3VycmVuY3lTeW1ib2xUeXBlcywgVERlY2ltYWxTZXBhcmF0b3JzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XHJcbmltcG9ydCB7IFRIb3Jpem9udGFsQWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRJbnB1dFRleHRNYXNrIH0gZnJvbSAnLi4vLi4vLi4vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwtYnV0dG9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLWJ1dHRvbi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRMYWJlbEJ1dHRvbkNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudDtcclxuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgbWFzazogVElucHV0VGV4dE1hc2s7XHJcbiAgQElucHV0KCkgZGVjaW1hbFNlcGFyYXRvcjogVERlY2ltYWxTZXBhcmF0b3JzID0gJywnO1xyXG4gIEBJbnB1dCgpIG1hc2tTeW1ib2w6IFRDdXJyZW5jeVN5bWJvbFR5cGVzO1xyXG4gIEBJbnB1dCgpIGFsbG93TWludXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJpZ2h0QWxpZ24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHN0ZXAgPSA1O1xyXG5cclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIHJlcXVpcmVkTGFiZWwgPSAnUmVxdWlyZWQgZmllbGQnO1xyXG5cclxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvbktleVVwKHZhbHVlcykgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlcyk7IH1cclxufVxyXG4iXX0=