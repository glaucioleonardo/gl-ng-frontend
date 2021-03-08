import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StringConverter } from 'gl-w-frontend';
export class GlSharedComponentInputTextSimpleWithStepComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = 0;
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.decimalSeparator = ',';
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.callback = () => { };
    }
    convertValue(value) {
        if (this.mask === 'percentage') {
            return StringConverter.numberToPercentage(value, false);
        }
        else {
            return this.value.toString();
        }
    }
    processValue(type, value) {
        const previousValue = this.value == null || Number.isNaN(this.value) ? 0 : this.value;
        const step = this.mask === 'percentage' ? this.step / 100.0 : this.step;
        let newValue;
        if (type === 'increase') {
            newValue = previousValue + step;
            this.currentValue.emit({
                type: 'increase',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
        else if (type === 'decrease') {
            newValue = previousValue - step;
            this.currentValue.emit({
                type: 'decrease',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
        else {
            const parsedValue = value == null || value.length === 0 ? '0.00%' : value;
            newValue = StringConverter.percentageToNumber(parsedValue);
            this.currentValue.emit({
                type: 'typing',
                previousValue: this.mask === 'percentage' ? previousValue : previousValue,
                newValue: this.mask === 'percentage' ? newValue : newValue
            });
        }
    }
}
GlSharedComponentInputTextSimpleWithStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple-with-step',
                template: "<div class=\"item-container\">\r\n  <gl-shared-component-input-text-simple\r\n    [class]=\"class\"\r\n    [value]=\"convertValue(value)\"\r\n    [id]=\"id\"\r\n    [itemContentAlignment]=\"itemContentAlignment\"\r\n    [placeholder]=\"placeholder\"\r\n    (currentValue)=\"processValue('typing', $event.value)\"\r\n    [disabled]=\"disabled\"\r\n    [autocomplete]=\"autocomplete\"\r\n    [allowMinus]=\"allowMinus\"\r\n    [rightAlign]=\"rightAlign\"\r\n    [step]=\"step\"\r\n    [decimalSeparator]=\"decimalSeparator\"\r\n\r\n    [mask]=\"mask\"\r\n    [maskSymbol]=\"maskSymbol\"\r\n    [maxLength]=\"maxLength\"\r\n  ></gl-shared-component-input-text-simple>\r\n  <div class=\"step-button-container\">\r\n    <gl-shared-component-button-image-tooltip\r\n      alt=\"Decrease\"\r\n      src=\"../assets/img/icon/list/show-remove.svg\"\r\n      [id]=\"id + '-decrease'\"\r\n      [callback]=\"callback\"\r\n      (click)=\"processValue('decrease', null)\"\r\n    ></gl-shared-component-button-image-tooltip>\r\n    <gl-shared-component-button-image-tooltip\r\n      alt=\"Increase\"\r\n      src=\"../assets/img/icon/list/add-line.svg\"\r\n      [id]=\"id + '-increase'\"\r\n      [callback]=\"callback\"\r\n      (click)=\"processValue('increase', null)\"\r\n    ></gl-shared-component-button-image-tooltip>\r\n  </div>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:row;position:relative}:host::ng-deep .item-container gl-shared-component-input-text-simple{margin:0;position:relative}:host::ng-deep .item-container gl-shared-component-input-text-simple .item-content{padding:.8em 4.8em .8em .8em}:host::ng-deep .item-container .step-button-container{display:flex;flex-direction:row;position:absolute;right:.3em;top:.3em}:host::ng-deep .item-container .step-button-container gl-shared-component-button-image-simple{margin:0 0 0 .05em}:host::ng-deep .item-container .step-button-container gl-shared-component-button-image-simple .button{height:.8em;width:.8em}"]
            },] }
];
GlSharedComponentInputTextSimpleWithStepComponent.ctorParameters = () => [];
GlSharedComponentInputTextSimpleWithStepComponent.propDecorators = {
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
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
    currentValue: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvc2ltcGxlL3dpdGgtc3RlcC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQVMxRixNQUFNLE9BQU8saURBQWlEO0lBc0I1RDtRQXJCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBS3JCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsaUJBQVksR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRixhQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVqQixZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLE9BQU8sZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFlLEVBQUUsS0FBYTtRQUN6QyxNQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RSxJQUFJLFFBQWdCLENBQUM7UUFFckIsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3pFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQzNELENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3pFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQzNELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxNQUFNLFdBQVcsR0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRixRQUFRLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYTtnQkFDekUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDM0QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpREFBaUQ7Z0JBQzNELHMwQ0FBK0U7O2FBRWhGOzs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSztpQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBRUwsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3RyaW5nQ29udmVydGVyLCBUQ3VycmVuY3lTeW1ib2xUeXBlcywgVERlY2ltYWxTZXBhcmF0b3JzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XHJcbmltcG9ydCB7IElJbnB1dFRleHRTdGVwQnV0dG9uLCBUU3RlcFR5cGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUtd2l0aC1zdGVwLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRJbnB1dFRleHRNYXNrIH0gZnJvbSAnLi4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUtd2l0aC1zdGVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZVdpdGhTdGVwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIGFsbG93TWludXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJpZ2h0QWxpZ246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XHJcblxyXG4gIEBJbnB1dCgpIG1hc2s6IFRJbnB1dFRleHRNYXNrO1xyXG4gIEBJbnB1dCgpIGRlY2ltYWxTZXBhcmF0b3I6IFREZWNpbWFsU2VwYXJhdG9ycyA9ICcsJztcclxuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBUQ3VycmVuY3lTeW1ib2xUeXBlcztcclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJSW5wdXRUZXh0U3RlcEJ1dHRvbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNhbGxiYWNrID0gKCkgPT4ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGNvbnZlcnRWYWx1ZSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJykge1xyXG4gICAgICByZXR1cm4gU3RyaW5nQ29udmVydGVyLm51bWJlclRvUGVyY2VudGFnZSh2YWx1ZSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb2Nlc3NWYWx1ZSh0eXBlOiBUU3RlcFR5cGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IHByZXZpb3VzVmFsdWU6IG51bWJlciA9IHRoaXMudmFsdWUgPT0gbnVsbCB8fCBOdW1iZXIuaXNOYU4odGhpcy52YWx1ZSkgPyAwIDogdGhpcy52YWx1ZTtcclxuICAgIGNvbnN0IHN0ZXAgPSB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IHRoaXMuc3RlcCAvIDEwMC4wIDogdGhpcy5zdGVwO1xyXG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdpbmNyZWFzZScpIHtcclxuICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlICsgc3RlcDtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xyXG4gICAgICAgIHR5cGU6ICdpbmNyZWFzZScsXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBwcmV2aW91c1ZhbHVlIDogcHJldmlvdXNWYWx1ZSxcclxuICAgICAgICBuZXdWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBuZXdWYWx1ZSA6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVjcmVhc2UnKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gcHJldmlvdXNWYWx1ZSAtIHN0ZXA7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcclxuICAgICAgICB0eXBlOiAnZGVjcmVhc2UnLFxyXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gcHJldmlvdXNWYWx1ZSA6IHByZXZpb3VzVmFsdWUsXHJcbiAgICAgICAgbmV3VmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gbmV3VmFsdWUgOiBuZXdWYWx1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHBhcnNlZFZhbHVlOiBzdHJpbmcgPSB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlLmxlbmd0aCA9PT0gMCA/ICcwLjAwJScgOiB2YWx1ZTtcclxuICAgICAgbmV3VmFsdWUgPSBTdHJpbmdDb252ZXJ0ZXIucGVyY2VudGFnZVRvTnVtYmVyKHBhcnNlZFZhbHVlKTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xyXG4gICAgICAgIHR5cGU6ICd0eXBpbmcnLFxyXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gcHJldmlvdXNWYWx1ZSA6IHByZXZpb3VzVmFsdWUsXHJcbiAgICAgICAgbmV3VmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gbmV3VmFsdWUgOiBuZXdWYWx1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19