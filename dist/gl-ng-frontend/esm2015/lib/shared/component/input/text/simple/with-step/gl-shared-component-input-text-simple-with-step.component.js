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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvc2ltcGxlL3dpdGgtc3RlcC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZUFBZSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQVUxRixNQUFNLE9BQU8saURBQWlEO0lBc0I1RDtRQXJCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBS3JCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFFVixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUdULHFCQUFnQixHQUF1QixHQUFHLENBQUM7UUFFM0MsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVmLGlCQUFZLEdBQXVDLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEYsYUFBUSxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFakIsWUFBWSxDQUFDLEtBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtZQUM5QixPQUFPLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsSUFBZSxFQUFFLEtBQWE7UUFDekMsTUFBTSxhQUFhLEdBQVcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5RixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEUsSUFBSSxRQUFnQixDQUFDO1FBRXJCLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN2QixRQUFRLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQztZQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhO2dCQUN6RSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUMzRCxDQUFDLENBQUM7U0FDSjthQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUM5QixRQUFRLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQztZQUVoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhO2dCQUN6RSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTthQUMzRCxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsTUFBTSxXQUFXLEdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEYsUUFBUSxHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWE7Z0JBQ3pFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRO2FBQzNELENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBcEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaURBQWlEO2dCQUMzRCxzMENBQStFOzthQUVoRjs7Ozt1QkFFRSxLQUFLOzJCQUNMLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUVMLEtBQUs7eUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUVMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN0cmluZ0NvbnZlcnRlciwgVEN1cnJlbmN5U3ltYm9sVHlwZXMsIFREZWNpbWFsU2VwYXJhdG9ycyB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJSW5wdXRUZXh0U3RlcEJ1dHRvbiwgVFN0ZXBUeXBlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUSW5wdXRUZXh0TWFzayB9IGZyb20gJy4uL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLXdpdGgtc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS13aXRoLXN0ZXAuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVXaXRoU3RlcENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IFRIb3Jpem9udGFsQWxpZ25tZW50O1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWUgPSAwO1xyXG5cclxuICBASW5wdXQoKSBhbGxvd01pbnVzID0gdHJ1ZTtcclxuICBASW5wdXQoKSByaWdodEFsaWduID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzdGVwID0gNTtcclxuXHJcbiAgQElucHV0KCkgbWFzazogVElucHV0VGV4dE1hc2s7XHJcbiAgQElucHV0KCkgZGVjaW1hbFNlcGFyYXRvcjogVERlY2ltYWxTZXBhcmF0b3JzID0gJywnO1xyXG4gIEBJbnB1dCgpIG1hc2tTeW1ib2w6IFRDdXJyZW5jeVN5bWJvbFR5cGVzO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElJbnB1dFRleHRTdGVwQnV0dG9uPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY2FsbGJhY2sgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgY29udmVydFZhbHVlKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnKSB7XHJcbiAgICAgIHJldHVybiBTdHJpbmdDb252ZXJ0ZXIubnVtYmVyVG9QZXJjZW50YWdlKHZhbHVlLCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1ZhbHVlKHR5cGU6IFRTdGVwVHlwZSwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgcHJldmlvdXNWYWx1ZTogbnVtYmVyID0gdGhpcy52YWx1ZSA9PSBudWxsIHx8IE51bWJlci5pc05hTih0aGlzLnZhbHVlKSA/IDAgOiB0aGlzLnZhbHVlO1xyXG4gICAgY29uc3Qgc3RlcCA9IHRoaXMubWFzayA9PT0gJ3BlcmNlbnRhZ2UnID8gdGhpcy5zdGVwIC8gMTAwLjAgOiB0aGlzLnN0ZXA7XHJcbiAgICBsZXQgbmV3VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ2luY3JlYXNlJykge1xyXG4gICAgICBuZXdWYWx1ZSA9IHByZXZpb3VzVmFsdWUgKyBzdGVwO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7XHJcbiAgICAgICAgdHlwZTogJ2luY3JlYXNlJyxcclxuICAgICAgICBwcmV2aW91c1ZhbHVlOiB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IHByZXZpb3VzVmFsdWUgOiBwcmV2aW91c1ZhbHVlLFxyXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyA/IG5ld1ZhbHVlIDogbmV3VmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZWNyZWFzZScpIHtcclxuICAgICAgbmV3VmFsdWUgPSBwcmV2aW91c1ZhbHVlIC0gc3RlcDtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xyXG4gICAgICAgIHR5cGU6ICdkZWNyZWFzZScsXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBwcmV2aW91c1ZhbHVlIDogcHJldmlvdXNWYWx1ZSxcclxuICAgICAgICBuZXdWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBuZXdWYWx1ZSA6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcGFyc2VkVmFsdWU6IHN0cmluZyA9IHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09PSAwID8gJzAuMDAlJyA6IHZhbHVlO1xyXG4gICAgICBuZXdWYWx1ZSA9IFN0cmluZ0NvbnZlcnRlci5wZXJjZW50YWdlVG9OdW1iZXIocGFyc2VkVmFsdWUpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7XHJcbiAgICAgICAgdHlwZTogJ3R5cGluZycsXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBwcmV2aW91c1ZhbHVlIDogcHJldmlvdXNWYWx1ZSxcclxuICAgICAgICBuZXdWYWx1ZTogdGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgPyBuZXdWYWx1ZSA6IG5ld1ZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=