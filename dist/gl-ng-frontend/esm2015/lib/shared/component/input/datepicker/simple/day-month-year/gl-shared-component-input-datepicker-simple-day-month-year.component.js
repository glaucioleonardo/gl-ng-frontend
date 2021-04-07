import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateGet } from 'gl-w-frontend';
const ɵ0 = MAT_MOMENT_DATE_FORMATS;
export class GlSharedComponentInputDatepickerSimpleDayMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormat = 'DD/MM/YYYY';
    }
    clear(input) {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
        input.value = null;
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateNoUTCString(event.value, this.dateFormat)
        });
    }
}
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-day-month-year',
                template: "<ng-content></ng-content>\r\n<mat-form-field appearance=\"none\" floatLabel=\"never\" id=\"{{ id + '-with-step' }}\">\r\n<!--  <mat-label>Input disabled</mat-label>-->\r\n  <input\r\n    #input\r\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n    [id]=\"id\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [matDatepicker]=\"dp3\"\r\n    [attr.maxlength]=\"maxLength\"\r\n    (dateChange)=\"changed($event)\"\r\n    matInput\r\n    disabled>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear(input)\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/clear.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/date.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n</mat-form-field>\r\n",
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    {
                        provide: MAT_DATE_FORMATS,
                        useValue: ɵ0
                    },
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleDayMonthYearComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvZGF0ZXBpY2tlci9zaW1wbGUvZGF5LW1vbnRoLXllYXIvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvSCxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7V0FpQnhCLHVCQUF1QjtBQUl2QyxNQUFNLE9BQU8sMkRBQTJEO0lBYXRFO1FBWlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdqQix5QkFBb0IsR0FBeUIsUUFBUSxDQUFDO1FBRXRELFVBQUssR0FBUyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVmLGlCQUFZLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEUsZUFBVSxHQUFpQixZQUFZLENBQUM7SUFFbEMsQ0FBQztJQUVoQixLQUFLLENBQUMsS0FBdUI7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDM0QsVUFBVSxFQUFFLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQWlCO1NBQ3hGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDREQUE0RDtnQkFDdEUsNm5DQUEwRjtnQkFFMUYsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO29CQUMvQzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsSUFBSSxFQUFFLENBQUUsZUFBZSxFQUFFLCtCQUErQixDQUFFO3FCQUMzRDtvQkFDRDt3QkFDRSxPQUFPLEVBQUUsZ0JBQWdCO3dCQUN6QixRQUFRLElBQXlCO3FCQUNsQztpQkFDRjs7YUFDRjs7Ozt1QkFFRSxLQUFLO2lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQ0FDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNQVRfTU9NRU5UX0RBVEVfRk9STUFUUywgTW9tZW50RGF0ZUFkYXB0ZXIsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XHJcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUdldCB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBUSG9yaXpvbnRhbEFsaWdubWVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3RpdGxlL2xhYmVsL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBJRGF0ZVBpY2tlck91dHB1dCB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLWRheS1tb250aC15ZWFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1kYXktbW9udGgteWVhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAncHQtQlInIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxyXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXHJcbiAgICAgIGRlcHM6IFsgTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsXHJcbiAgICAgIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU1xyXG4gICAgfSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dERhdGVwaWNrZXJTaW1wbGVEYXlNb250aFllYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBUSG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWU6IERhdGUgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyT3V0cHV0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcmVhZG9ubHkgZGF0ZUZvcm1hdDogJ0REL01NL1lZWVknID0gJ0REL01NL1lZWVknO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGNsZWFyKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcclxuICAgICAgZGF0ZTogbnVsbCxcclxuICAgICAgZGF0ZVN0cmluZzogbnVsbFxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZChldmVudCkge1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7XHJcbiAgICAgIGRhdGU6IERhdGVHZXQuY3VzdG9tRGF0ZU5vVVRDKGV2ZW50LnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLFxyXG4gICAgICBkYXRlU3RyaW5nOiBEYXRlR2V0LmN1c3RvbURhdGVOb1VUQ1N0cmluZyhldmVudC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0KSBhcyAnREQvTU0vWVlZWSdcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=