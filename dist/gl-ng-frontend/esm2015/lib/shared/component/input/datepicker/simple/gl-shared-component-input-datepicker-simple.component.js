import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { DateGet } from "gl-w-frontend";
const ɵ0 = MAT_MOMENT_DATE_FORMATS;
export class GlSharedComponentInputDatepickerSimpleComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = null;
        this.dateFormat = 'DD/MM/YYYY';
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    clear() {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    }
    changed(event) {
        const date = new Date(event.value);
        this.currentValue.emit({
            date,
            dateString: DateGet.customDate(date, this.dateFormat)
        });
    }
}
GlSharedComponentInputDatepickerSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple',
                template: "<ng-content></ng-content>\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\n<!--  <mat-label>Input disabled</mat-label>-->\n  <input\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [matDatepicker]=\"dp3\"\n    [attr.maxlength]=\"maxLength\"\n    (dateChange)=\"changed($event)\"\n    matInput\n    disabled>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/clear.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"assets/img/icon/datepicker/date.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n</mat-form-field>\n",
                providers: [
                    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleComponent.propDecorators = {
    disabled: [{ type: Input }],
    id: [{ type: Input }],
    placeholder: [{ type: Input }],
    itemContentAlignment: [{ type: Input }],
    class: [{ type: Input }],
    value: [{ type: Input }],
    dateFormat: [{ type: Input }],
    maxLength: [{ type: Input }],
    currentValue: [{ type: Output }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvZGF0ZXBpY2tlci9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvSCxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXRGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7V0FhRyx1QkFBdUI7QUFHbEUsTUFBTSxPQUFPLCtDQUErQztJQWExRDtRQVpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIseUJBQW9CLEdBQWdDLFFBQVEsQ0FBQztRQUU3RCxVQUFLLEdBQVMsSUFBSSxDQUFDO1FBQ25CLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFFMUIsY0FBUyxHQUFHLEdBQUcsQ0FBQztRQUVmLGlCQUFZLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0QsQ0FBQztJQUVqQixLQUFLO1FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTyxDQUFDLEtBQUs7UUFDWCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSTtZQUNKLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3RELENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztnQkFDdkQsMmdDQUEyRTtnQkFFM0UsU0FBUyxFQUFFO29CQUNULEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO29CQUM3Qzt3QkFDRSxPQUFPLEVBQUUsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLGlCQUFpQjt3QkFDM0IsSUFBSSxFQUFFLENBQUMsZUFBZSxFQUFFLCtCQUErQixDQUFDO3FCQUN6RDtvQkFDRCxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLElBQXlCLEVBQUU7aUJBQ2pFOzthQUNGOzs7O3VCQUVFLEtBQUs7aUJBQ0wsS0FBSzswQkFDTCxLQUFLO21DQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBRUwsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1BVF9NT01FTlRfREFURV9GT1JNQVRTLCBNb21lbnREYXRlQWRhcHRlciwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBJRGF0ZVBpY2tlck91dHB1dCB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRGF0ZUdldCB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdwdC1CUid9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU11cbiAgICB9LFxuICAgIHsgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXREYXRlcGlja2VyU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogRGF0ZSA9IG51bGw7XG4gIEBJbnB1dCgpIGRhdGVGb3JtYXQgPSAnREQvTU0vWVlZWSc7XG5cbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJRGF0ZVBpY2tlck91dHB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcbiAgICAgIGRhdGU6IG51bGwsXG4gICAgICBkYXRlU3RyaW5nOiBudWxsXG4gICAgfSlcbiAgfVxuICBjaGFuZ2VkKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGV2ZW50LnZhbHVlKTtcblxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xuICAgICAgZGF0ZSxcbiAgICAgIGRhdGVTdHJpbmc6IERhdGVHZXQuY3VzdG9tRGF0ZShkYXRlLCB0aGlzLmRhdGVGb3JtYXQpXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==