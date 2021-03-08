import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from "@angular/material-moment-adapter";
import { DateGet } from "gl-w-frontend";
const MONTH_YEAR_FORMAT = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
const ɵ0 = MONTH_YEAR_FORMAT;
export class GlSharedComponentInputDatepickerSimpleMonthYearComponent {
    constructor() {
        this.disabled = false;
        this.itemContentAlignment = 'center';
        this.value = DateGet.currentDate('DD/MM/YYYY');
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
        this.dateFormatString = 'MM/YYYY';
        this.dateFormat = 'DD/MM/YYYY';
        this.startDate = this.value;
        this.date = DateGet.customDateNoUTC('DD/MM/YYYY');
    }
    chosenYearHandler(normalizedYear) {
        const ctrlValue = this.date;
        ctrlValue.setFullYear(normalizedYear.year());
        this.date = ctrlValue;
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateNoUTCString(normalizedYear, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    chosenMonthHandler(normalizedMonth, datepicker) {
        const ctrlValue = this.date;
        ctrlValue.setMonth(normalizedMonth.month());
        this.date = ctrlValue;
        datepicker.close();
        const date = DateGet.customDateNoUTC(ctrlValue, this.dateFormat);
        const dateString = DateGet.customDateString(normalizedMonth, this.dateFormatString, this.dateFormatString);
        this.currentValue.emit({ date, dateString });
    }
    clear() {
        this.currentValue.emit({
            date: null,
            dateString: null
        });
    }
    changed(event) {
        this.currentValue.emit({
            date: DateGet.customDateNoUTC(event.value, this.dateFormat),
            dateString: DateGet.customDateString(event.value, this.dateFormatString, this.dateFormatString)
        });
    }
}
GlSharedComponentInputDatepickerSimpleMonthYearComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-datepicker-simple-month-year',
                template: "<ng-content></ng-content>\r\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\r\n  <!--  <mat-label>Input disabled</mat-label>-->\r\n  <input\r\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\r\n    matInput\r\n    [id]=\"id\"\r\n    [placeholder]=\"placeholder\"\r\n    [value]=\"value\"\r\n    [matDatepicker]=\"dp3\"\r\n    [attr.maxlength]=\"maxLength\"\r\n    (dateChange)=\"changed($event)\"\r\n    disabled>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/clear.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\r\n    <img\r\n      matDatepickerToggleIcon\r\n      class=\"datepicker-button\"\r\n      alt=\"Date picker icon\"\r\n      src=\"../assets/img/icon/datepicker/date.svg\">\r\n  </mat-datepicker-toggle>\r\n  <mat-datepicker\r\n    #dp3 disabled=\"false\"\r\n    startView=\"multi-year\"\r\n    (yearSelected)=\"chosenYearHandler($event)\"\r\n    (monthSelected)=\"chosenMonthHandler($event, dp3)\"\r\n    panelClass=\"month-picker\">\r\n  ></mat-datepicker>\r\n</mat-form-field>\r\n",
                providers: [
                    {
                        provide: MAT_DATE_LOCALE,
                        useValue: 'pt-BR'
                    },
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    {
                        provide: MAT_DATE_FORMATS,
                        useValue: ɵ0
                    }
                ],
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .month-picker .mat-calendar-period-button{pointer-events:none}:host::ng-deep .month-picker .mat-calendar-arrow{display:none}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
            },] }
];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.ctorParameters = () => [];
GlSharedComponentInputDatepickerSimpleMonthYearComponent.propDecorators = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL3NpbXBsZS9tb250aC15ZWFyL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUtbW9udGgteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEMsTUFBTSxpQkFBaUIsR0FBRztJQUN4QixLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRixDQUFDO1dBa0JjLGlCQUFpQjtBQUlqQyxNQUFNLE9BQU8sd0RBQXdEO0lBeUNuRTtRQXhDUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUFnQyxRQUFRLENBQUM7UUFFN0QsVUFBSyxHQUFTLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsY0FBUyxH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LEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmVcIjtcclxuaW1wb3J0IHsgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUywgTW9tZW50RGF0ZUFkYXB0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXJcIjtcclxuaW1wb3J0IHsgRGF0ZUdldCB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XHJcbmltcG9ydCB7IElEYXRlUGlja2VyTW9udGhZZWFyT3V0cHV0IH0gZnJvbSBcIi4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBNYXREYXRlcGlja2VyIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXJcIjtcclxuXHJcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XHJcbmNvbnN0IE1PTlRIX1lFQVJfRk9STUFUID0ge1xyXG4gIHBhcnNlOiB7XHJcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcclxuICB9LFxyXG4gIGRpc3BsYXk6IHtcclxuICAgIGRhdGVJbnB1dDogJ01NL1lZWVknLFxyXG4gICAgbW9udGhZZWFyTGFiZWw6ICdNTU0gWVlZWScsXHJcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxyXG4gICAgbW9udGhZZWFyQTExeUxhYmVsOiAnTU1NTSBZWVlZJyxcclxuICB9LFxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLW1vbnRoLXllYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLW1vbnRoLXllYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUtbW9udGgteWVhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsXHJcbiAgICAgIHVzZVZhbHVlOiAncHQtQlInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcclxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxyXG4gICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUyxcclxuICAgICAgdXNlVmFsdWU6IE1PTlRIX1lFQVJfRk9STUFUXHJcbiAgICB9XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dERhdGVwaWNrZXJTaW1wbGVNb250aFllYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnY2VudGVyJztcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBEYXRlID0gRGF0ZUdldC5jdXJyZW50RGF0ZSgnREQvTU0vWVlZWScpO1xyXG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElEYXRlUGlja2VyTW9udGhZZWFyT3V0cHV0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcmVhZG9ubHkgZGF0ZUZvcm1hdFN0cmluZzogJ01NL1lZWVknID0gJ01NL1lZWVknO1xyXG4gIHJlYWRvbmx5IGRhdGVGb3JtYXQgPSAnREQvTU0vWVlZWSc7XHJcbiAgc3RhcnREYXRlID0gdGhpcy52YWx1ZTtcclxuICBkYXRlOiBEYXRlID0gRGF0ZUdldC5jdXN0b21EYXRlTm9VVEMoJ0REL01NL1lZWVknKTtcclxuXHJcbiAgY2hvc2VuWWVhckhhbmRsZXIobm9ybWFsaXplZFllYXI6IE1vbWVudCkge1xyXG4gICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5kYXRlO1xyXG4gICAgY3RybFZhbHVlLnNldEZ1bGxZZWFyKG5vcm1hbGl6ZWRZZWFyLnllYXIoKSk7XHJcbiAgICB0aGlzLmRhdGUgPSBjdHJsVmFsdWU7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IERhdGVHZXQuY3VzdG9tRGF0ZU5vVVRDKGN0cmxWYWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcclxuXHJcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gRGF0ZUdldC5jdXN0b21EYXRlTm9VVENTdHJpbmcobm9ybWFsaXplZFllYXIsIHRoaXMuZGF0ZUZvcm1hdFN0cmluZywgdGhpcy5kYXRlRm9ybWF0U3RyaW5nKSBhcyAnTU0vWVlZWSc7XHJcblxyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh7IGRhdGUsIGRhdGVTdHJpbmcgfSk7XHJcbiAgfVxyXG5cclxuICBjaG9zZW5Nb250aEhhbmRsZXIobm9ybWFsaXplZE1vbnRoOiBNb21lbnQsIGRhdGVwaWNrZXI6IE1hdERhdGVwaWNrZXI8YW55Pikge1xyXG4gICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5kYXRlO1xyXG4gICAgY3RybFZhbHVlLnNldE1vbnRoKG5vcm1hbGl6ZWRNb250aC5tb250aCgpKTtcclxuICAgIHRoaXMuZGF0ZSA9IGN0cmxWYWx1ZTtcclxuXHJcbiAgICBkYXRlcGlja2VyLmNsb3NlKCk7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IERhdGVHZXQuY3VzdG9tRGF0ZU5vVVRDKGN0cmxWYWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBEYXRlR2V0LmN1c3RvbURhdGVTdHJpbmcobm9ybWFsaXplZE1vbnRoLCB0aGlzLmRhdGVGb3JtYXRTdHJpbmcsIHRoaXMuZGF0ZUZvcm1hdFN0cmluZykgYXMgJ01NL1lZWVknO1xyXG5cclxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyBkYXRlLCBkYXRlU3RyaW5nIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xyXG4gICAgICBkYXRlOiBudWxsLFxyXG4gICAgICBkYXRlU3RyaW5nOiBudWxsXHJcbiAgICB9KVxyXG4gIH1cclxuICBjaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcclxuICAgICAgZGF0ZTogRGF0ZUdldC5jdXN0b21EYXRlTm9VVEMoZXZlbnQudmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCksXHJcbiAgICAgIGRhdGVTdHJpbmc6IERhdGVHZXQuY3VzdG9tRGF0ZVN0cmluZyhldmVudC52YWx1ZSwgdGhpcy5kYXRlRm9ybWF0U3RyaW5nLCB0aGlzLmRhdGVGb3JtYXRTdHJpbmcpIGFzICdNTS9ZWVlZJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==