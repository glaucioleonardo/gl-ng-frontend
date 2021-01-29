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
                template: "<div class=\"item-container\">\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"convertValue(value)\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"processValue('typing', $event.value)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n    [allowMinus]=\"allowMinus\"\n    [rightAlign]=\"rightAlign\"\n    [step]=\"step\"\n    [decimalSeparator]=\"decimalSeparator\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n  <div class=\"step-button-container\">\n    <gl-shared-component-button-image-tooltip\n      alt=\"Decrease\"\n      src=\"../assets/img/icon/list/show-remove.svg\"\n      [id]=\"id + '-decrease'\"\n      [callback]=\"callback\"\n      (click)=\"processValue('decrease', null)\"\n    ></gl-shared-component-button-image-tooltip>\n    <gl-shared-component-button-image-tooltip\n      alt=\"Increase\"\n      src=\"../assets/img/icon/list/add-line.svg\"\n      [id]=\"id + '-increase'\"\n      [callback]=\"callback\"\n      (click)=\"processValue('increase', null)\"\n    ></gl-shared-component-button-image-tooltip>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvc2ltcGxlL3dpdGgtc3RlcC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQVMxRixNQUFNLE9BQU8saURBQWlEO0lBc0I1RDtRQXJCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBS3JCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHakIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUUzQyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsaUJBQVksR0FBdUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRixhQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVqQixZQUFZLENBQUMsS0FBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxFQUFFO1lBQzlCLE9BQU8sZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFlLEVBQUUsS0FBYTtRQUN6QyxNQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4RSxJQUFJLFFBQWdCLENBQUM7UUFFckIsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQ3ZCLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3pFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQzNELENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCLFFBQVEsR0FBRyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBRWhDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3pFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQzNELENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxNQUFNLFdBQVcsR0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNsRixRQUFRLEdBQUcsZUFBZSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsYUFBYTtnQkFDekUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVE7YUFDM0QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpREFBaUQ7Z0JBQzNELDh2Q0FBK0U7O2FBRWhGOzs7O3VCQUVFLEtBQUs7MkJBQ0wsS0FBSztpQkFDTCxLQUFLOzBCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7eUJBRUwsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBRUwsS0FBSzsrQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cmluZ0NvbnZlcnRlciwgVEN1cnJlbmN5U3ltYm9sVHlwZXMsIFREZWNpbWFsU2VwYXJhdG9ycyB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xuaW1wb3J0IHsgSUlucHV0VGV4dFN0ZXBCdXR0b24sIFRTdGVwVHlwZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRJbnB1dFRleHRNYXNrIH0gZnJvbSAnLi4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUtd2l0aC1zdGVwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVXaXRoU3RlcENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKSBhbGxvd01pbnVzOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcmlnaHRBbGlnbjogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHN0ZXA6IG51bWJlciA9IDU7XG5cbiAgQElucHV0KCkgbWFzazogVElucHV0VGV4dE1hc2s7XG4gIEBJbnB1dCgpIGRlY2ltYWxTZXBhcmF0b3I6IFREZWNpbWFsU2VwYXJhdG9ycyA9ICcsJztcbiAgQElucHV0KCkgbWFza1N5bWJvbDogVEN1cnJlbmN5U3ltYm9sVHlwZXM7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUlucHV0VGV4dFN0ZXBCdXR0b24+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNhbGxiYWNrID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjb252ZXJ0VmFsdWUodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnKSB7XG4gICAgICByZXR1cm4gU3RyaW5nQ29udmVydGVyLm51bWJlclRvUGVyY2VudGFnZSh2YWx1ZSwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NWYWx1ZSh0eXBlOiBUU3RlcFR5cGUsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBudW1iZXIgPSB0aGlzLnZhbHVlID09IG51bGwgfHwgTnVtYmVyLmlzTmFOKHRoaXMudmFsdWUpID8gMCA6IHRoaXMudmFsdWU7XG4gICAgY29uc3Qgc3RlcCA9IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gdGhpcy5zdGVwIC8gMTAwLjAgOiB0aGlzLnN0ZXA7XG4gICAgbGV0IG5ld1ZhbHVlOiBudW1iZXI7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2luY3JlYXNlJykge1xuICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlICsgc3RlcDtcblxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7XG4gICAgICAgIHR5cGU6ICdpbmNyZWFzZScsXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gcHJldmlvdXNWYWx1ZSA6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IG5ld1ZhbHVlIDogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlY3JlYXNlJykge1xuICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlIC0gc3RlcDtcblxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7XG4gICAgICAgIHR5cGU6ICdkZWNyZWFzZScsXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gcHJldmlvdXNWYWx1ZSA6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IG5ld1ZhbHVlIDogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJzZWRWYWx1ZTogc3RyaW5nID0gdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT09IDAgPyAnMC4wMCUnIDogdmFsdWU7XG4gICAgICBuZXdWYWx1ZSA9IFN0cmluZ0NvbnZlcnRlci5wZXJjZW50YWdlVG9OdW1iZXIocGFyc2VkVmFsdWUpO1xuXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcbiAgICAgICAgdHlwZTogJ3R5cGluZycsXG4gICAgICAgIHByZXZpb3VzVmFsdWU6IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gcHJldmlvdXNWYWx1ZSA6IHByZXZpb3VzVmFsdWUsXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IG5ld1ZhbHVlIDogbmV3VmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19