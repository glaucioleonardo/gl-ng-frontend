import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from 'gl-w-frontend';
import { GlSharedComponentInputTextSimpleService } from './gl-shared-component-input-text-simple.service';
export class GlSharedComponentInputTextSimpleComponent {
    constructor(service) {
        this.service = service;
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
        this._input = this.inputElement.nativeElement;
        this.applyInputMask();
        this.service.updateInputMask$.subscribe(() => {
            this.applyInputMask();
        });
    }
    applyInputMask() {
        setTimeout(() => {
            if (this.mask != null && this._input != null) {
                if (this.mask.includes('currency')) {
                    this.inputElement.nativeElement.placeholder = InputMask.currency(this.inputElement.nativeElement, this.mask, this.maskSymbol);
                }
                else if (this.mask === 'percentage' || this.mask === 'numeric') {
                    this.placeholder = InputMask[this.mask](this._input, this.allowMinus, this.decimalSeparator, this.rightAlign, this.step);
                }
                else if (this.mask === 'integer') {
                    this.placeholder = InputMask.integer(this._input, this.allowMinus, this.rightAlign, this.step);
                }
                else if (this.mask === 'custom') {
                    InputMask.customNumberPhone(this.placeholder, this._input, this.rightAlign);
                }
            }
            else if (this._input != null) {
                InputMask.remove(this._input);
            }
        }, 0);
    }
    ngOnDestroy() {
        this.service.updateInputMask$.observers.map(x => x.complete);
    }
}
GlSharedComponentInputTextSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-text-simple',
                template: "<!--suppress HtmlFormInputWithoutLabel -->\r\n<input\r\n  #inputElement\r\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n  type=\"text\"\r\n  autocomplete=\"off\"\r\n  required\r\n  [id]=\"id\"\r\n  [value]=\"value\"\r\n  [placeholder]=\"placeholder\"\r\n  (keyup)=\"onKeyUp($event)\"\r\n  [disabled]=\"disabled\"\r\n  [maxLength]=\"maxLength\">\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.required-fill::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.required-fill::placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:all .2s ease-in-out}.error-highlight::-moz-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight:-ms-input-placeholder{color:hsla(0,0%,100%,.3)!important}.error-highlight::placeholder{color:hsla(0,0%,100%,.3)!important}:host::ng-deep{align-items:stretch;display:flex;flex:1 0 auto;flex-direction:column;position:relative}:host::ng-deep .item-content{background-color:#333437;border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400;padding:.8em}:host::ng-deep .item-content:focus{outline:none!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputTextSimpleComponent.ctorParameters = () => [
    { type: GlSharedComponentInputTextSimpleService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4SCxPQUFPLEVBQUUsU0FBUyxFQUE0RCxNQUFNLGVBQWUsQ0FBQztBQUNwRyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQU8xRyxNQUFNLE9BQU8seUNBQXlDO0lBNEJwRCxZQUFtQixPQUFnRDtRQUFoRCxZQUFPLEdBQVAsT0FBTyxDQUF5QztRQXZCMUQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUtyQixVQUFLLEdBQVcsSUFBSSxDQUFDO1FBR3JCLHFCQUFnQixHQUF1QixHQUFHLENBQUM7UUFDM0MsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFNBQUksR0FBRyxDQUFDLENBQUM7UUFHVCxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsaUJBQVksR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU1OLENBQUM7SUFMOUQsT0FBTyxDQUFDLElBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxT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S0FBSzt3QkFDTCxLQUFLOzJCQUVMLE1BQU07c0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uLy4uL3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJU2ltcGxlVGV4dFJlc3VsdCwgVElucHV0VGV4dE1hc2sgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgSW5wdXRNYXNrLCBUQ3VycmVuY3lTeW1ib2xUeXBlcywgVEN1cnJlbmN5VHlwZXMsIFREZWNpbWFsU2VwYXJhdG9ycyB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0U2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gIHByaXZhdGUgX2lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogVEhvcml6b250YWxBbGlnbm1lbnQ7XHJcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgbWFzazogVElucHV0VGV4dE1hc2s7XHJcbiAgQElucHV0KCkgZGVjaW1hbFNlcGFyYXRvcjogVERlY2ltYWxTZXBhcmF0b3JzID0gJywnO1xyXG4gIEBJbnB1dCgpIGFsbG93TWludXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHJpZ2h0QWxpZ24gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHN0ZXAgPSA1O1xyXG5cclxuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBUQ3VycmVuY3lTeW1ib2xUeXBlcztcclxuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJU2ltcGxlVGV4dFJlc3VsdD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uS2V5VXAoYXJncykge1xyXG4gICAgaWYgKGFyZ3MudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7IGFyZ3MudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTsgfVxyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBhcmdzLnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZVNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLmFwcGx5SW5wdXRNYXNrKCk7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLnVwZGF0ZUlucHV0TWFzayQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5hcHBseUlucHV0TWFzaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhcHBseUlucHV0TWFzaygpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5tYXNrICE9IG51bGwgJiYgdGhpcy5faW5wdXQgIT0gbnVsbCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hc2suaW5jbHVkZXMoJ2N1cnJlbmN5JykpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2suY3VycmVuY3koXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgIHRoaXMubWFzayBhcyBUQ3VycmVuY3lUeXBlcyxcclxuICAgICAgICAgICAgdGhpcy5tYXNrU3ltYm9sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXNrID09PSAncGVyY2VudGFnZScgfHwgdGhpcy5tYXNrID09PSAnbnVtZXJpYycpIHtcclxuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2tbdGhpcy5tYXNrXShcclxuICAgICAgICAgICAgdGhpcy5faW5wdXQsXHJcbiAgICAgICAgICAgIHRoaXMuYWxsb3dNaW51cyxcclxuICAgICAgICAgICAgdGhpcy5kZWNpbWFsU2VwYXJhdG9yLFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QWxpZ24sXHJcbiAgICAgICAgICAgIHRoaXMuc3RlcFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubWFzayA9PT0gJ2ludGVnZXInKSB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gSW5wdXRNYXNrLmludGVnZXIoXHJcbiAgICAgICAgICAgIHRoaXMuX2lucHV0LFxyXG4gICAgICAgICAgICB0aGlzLmFsbG93TWludXMsXHJcbiAgICAgICAgICAgIHRoaXMucmlnaHRBbGlnbixcclxuICAgICAgICAgICAgdGhpcy5zdGVwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5tYXNrID09PSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgSW5wdXRNYXNrLmN1c3RvbU51bWJlclBob25lKFxyXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICB0aGlzLl9pbnB1dCxcclxuICAgICAgICAgICAgdGhpcy5yaWdodEFsaWduXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbnB1dCAhPSBudWxsKSB7XHJcbiAgICAgICAgSW5wdXRNYXNrLnJlbW92ZSh0aGlzLl9pbnB1dCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlcnZpY2UudXBkYXRlSW5wdXRNYXNrJC5vYnNlcnZlcnMubWFwKHggPT4geC5jb21wbGV0ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==