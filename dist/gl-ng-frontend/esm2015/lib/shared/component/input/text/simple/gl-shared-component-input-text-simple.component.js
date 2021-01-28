import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from 'gl-w-frontend';
export class GlSharedComponentInputTextSimpleComponent {
    constructor() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.decimalSeparator = ',';
        this.allowMinus = true;
        this.rightAlign = true;
        this.step = 5;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    onKeyUp(args) {
        if (args.target.value.trim().length > 0) {
            args.target.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: args.target.value });
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const input = this.inputElement.nativeElement;
            if (this.mask != null) {
                if (this.mask.includes('currency')) {
                    this.inputElement.nativeElement.placeholder = InputMask.currency(this.inputElement.nativeElement, this.mask, this.maskSymbol);
                }
                else if (this.mask === 'percentage' || this.mask === 'numeric') {
                    this.placeholder = InputMask[this.mask](input, this.allowMinus, this.decimalSeparator, this.rightAlign, this.step);
                }
                else if (this.mask === 'integer') {
                    this.placeholder = InputMask.integer(input, this.allowMinus, this.rightAlign, this.step);
                }
            }
        }, 0);
    }
}
GlSharedComponentInputTextSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  autocomplete=\"off\"\n  required\n  [id]=\"id\"\n  [value]=\"value\"\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:.8em}:host::ng-deep .item-content:focus{outline:none!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputTextSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputTextSimpleComponent.propDecorators = {
    inputElement: [{ type: ViewChild, args: ['inputElement', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    autocomplete: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    mask: [{ type: Input }],
    decimalSeparator: [{ type: Input }],
    allowMinus: [{ type: Input }],
    rightAlign: [{ type: Input }],
    step: [{ type: Input }],
    maskSymbol: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }],
    onKeyUp: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsU0FBUyxFQUE4RSxNQUFNLGVBQWUsQ0FBQztBQU90SCxNQUFNLE9BQU8seUNBQXlDO0lBMEJwRDtRQXZCUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBS3JCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFHckIscUJBQWdCLEdBQXVCLEdBQUcsQ0FBQztRQUMzQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUdqQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsaUJBQVksR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU03RCxDQUFDO0lBTFAsT0FBTyxDQUFDLElBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQUU7UUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFJRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1lBRTlDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUM5RCxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFDL0IsSUFBSSxDQUFDLElBQXNCLEVBQzNCLElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7aUJBQ0g7cUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtvQkFDaEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUNyQyxLQUFLLEVBQ0wsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLElBQUksQ0FDVixDQUFDO2lCQUNIO3FCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FDbEMsS0FBSyxFQUNMLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsSUFBSSxDQUNWLENBQUM7aUJBQ0g7YUFDRjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsb1dBQXFFOzthQUV0RTs7OzsyQkFFRSxTQUFTLFNBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUU1RCxLQUFLOzJCQUNMLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUVMLEtBQUs7K0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUJBQ0wsS0FBSzt5QkFFTCxLQUFLO3dCQUNMLEtBQUs7MkJBRUwsTUFBTTtzQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVNpbXBsZVRleHRSZXN1bHQsIFRJbnB1dFRleHRNYXNrIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJbnB1dE1hc2ssIFRDdXJyZW5jeVN5bWJvbFR5cGVzLCBUQ3VycmVuY3lUeXBlcywgVERlY2ltYWxTZXBhcmF0b3JzLCBUUGVyY2VudGFnZVR5cGVzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIEBJbnB1dCgpIG1hc2s6IFRJbnB1dFRleHRNYXNrO1xuICBASW5wdXQoKSBkZWNpbWFsU2VwYXJhdG9yOiBURGVjaW1hbFNlcGFyYXRvcnMgPSAnLCc7XG4gIEBJbnB1dCgpIGFsbG93TWludXM6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSByaWdodEFsaWduOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBUQ3VycmVuY3lTeW1ib2xUeXBlcztcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJU2ltcGxlVGV4dFJlc3VsdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbktleVVwKGFyZ3MpIHtcbiAgICBpZiAoYXJncy50YXJnZXQudmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHsgYXJncy50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQtZmlsbCcpOyB9XG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBhcmdzLnRhcmdldC52YWx1ZSB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAodGhpcy5tYXNrICE9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMubWFzay5pbmNsdWRlcygnY3VycmVuY3knKSkge1xuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2suY3VycmVuY3koXG4gICAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5tYXNrIGFzIFRDdXJyZW5jeVR5cGVzLFxuICAgICAgICAgICAgdGhpcy5tYXNrU3ltYm9sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hc2sgPT09ICdwZXJjZW50YWdlJyB8fCB0aGlzLm1hc2sgPT09ICdudW1lcmljJykge1xuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2tbdGhpcy5tYXNrXShcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy5hbGxvd01pbnVzLFxuICAgICAgICAgICAgdGhpcy5kZWNpbWFsU2VwYXJhdG9yLFxuICAgICAgICAgICAgdGhpcy5yaWdodEFsaWduLFxuICAgICAgICAgICAgdGhpcy5zdGVwXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1hc2sgPT09ICdpbnRlZ2VyJykge1xuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2suaW50ZWdlcihcbiAgICAgICAgICAgIGlucHV0LFxuICAgICAgICAgICAgdGhpcy5hbGxvd01pbnVzLFxuICAgICAgICAgICAgdGhpcy5yaWdodEFsaWduLFxuICAgICAgICAgICAgdGhpcy5zdGVwXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=