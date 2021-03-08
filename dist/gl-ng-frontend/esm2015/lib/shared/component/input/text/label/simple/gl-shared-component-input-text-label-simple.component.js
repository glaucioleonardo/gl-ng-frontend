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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9sYWJlbC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVV2RSxNQUFNLE9BQU8sOENBQThDO0lBeUJ6RDtRQXhCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBT3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFFckIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUM7UUFFaEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTVCLENBQUM7SUFFakIsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7OztZQWhDcEQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2Q0FBNkM7Z0JBQ3ZELDg2QkFBMkU7O2FBRTVFOzs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSztpQkFDTCxLQUFLOzZCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUVMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUVMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFFTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUQ3VycmVuY3lTeW1ib2xUeXBlcywgVERlY2ltYWxTZXBhcmF0b3JzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XHJcbmltcG9ydCB7IFRIb3Jpem9udGFsQWxpZ25tZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vdGl0bGUvbGFiZWwvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtc2ltcGxlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRJbnB1dFRleHRNYXNrIH0gZnJvbSAnLi4vLi4vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLXNpbXBsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1sYWJlbC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRMYWJlbFNpbXBsZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsQWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudDtcclxuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpIGFsbG93TWludXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJpZ2h0QWxpZ246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XHJcblxyXG4gIEBJbnB1dCgpIG1hc2s6IFRJbnB1dFRleHRNYXNrO1xyXG4gIEBJbnB1dCgpIGRlY2ltYWxTZXBhcmF0b3I6IFREZWNpbWFsU2VwYXJhdG9ycyA9ICcsJztcclxuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBUQ3VycmVuY3lTeW1ib2xUeXBlcztcclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIHJlcXVpcmVkTGFiZWwgPSAnUmVxdWlyZWQgZmllbGQnO1xyXG5cclxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvbktleVVwKHZhbHVlcykgeyB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHZhbHVlcyk7IH1cclxufVxyXG4iXX0=