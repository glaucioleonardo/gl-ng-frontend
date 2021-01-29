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
                template: "<ng-content></ng-content>\n<mat-form-field appearance=\"none\" floatLabel=\"never\">\n  <!--  <mat-label>Input disabled</mat-label>-->\n  <input\n    class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n    matInput\n    [id]=\"id\"\n    [placeholder]=\"placeholder\"\n    [value]=\"value\"\n    [matDatepicker]=\"dp3\"\n    [attr.maxlength]=\"maxLength\"\n    (dateChange)=\"changed($event)\"\n    disabled>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix (click)=\"clear()\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"../assets/img/icon/datepicker/clear.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker-toggle *ngIf=\"!disabled\" matSuffix [for]=\"dp3\">\n    <img\n      matDatepickerToggleIcon\n      class=\"datepicker-button\"\n      alt=\"Date picker icon\"\n      src=\"../assets/img/icon/datepicker/date.svg\">\n  </mat-datepicker-toggle>\n  <mat-datepicker\n    #dp3 disabled=\"false\"\n    startView=\"multi-year\"\n    (yearSelected)=\"chosenYearHandler($event)\"\n    (monthSelected)=\"chosenMonthHandler($event, dp3)\"\n    panelClass=\"month-picker\">\n  ></mat-datepicker>\n</mat-form-field>\n",
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
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{background-color:#333437;display:flex;flex-direction:column;flex-grow:1;position:relative}:host::ng-deep .month-picker .mat-calendar-period-button{pointer-events:none}:host::ng-deep .month-picker .mat-calendar-arrow{display:none}:host::ng-deep mat-form-field{display:flex;flex-grow:1;line-height:1}:host::ng-deep mat-form-field .mat-form-field-wrapper{display:flex;flex-grow:1;padding:0}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex{align-items:center;border-radius:0;height:1.275em;padding:.2em .3em .2em .45em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{border:none;display:flex;padding:0;width:auto}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix{display:flex;flex-direction:row}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle{margin:0 0 0 .1em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator{height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper{align-items:center;display:flex;height:.8em;width:.8em}:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper .datepicker-button,:host::ng-deep mat-form-field .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix .mat-datepicker-toggle .mat-focus-indicator .mat-button-wrapper svg{height:.8em;width:.8em}:host::ng-deep mat-form-field .item-content{border:none;color:#fff;flex-grow:1;font-family:Montserrat,sans-serif;font-size:.45em;font-weight:400}:host::ng-deep mat-form-field .item-content:focus{outline:none!important}:host::ng-deep mat-form-field .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content::placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.left{text-align:left}:host::ng-deep mat-form-field .item-content.center{text-align:center}:host::ng-deep mat-form-field .item-content.right{text-align:right}:host::ng-deep mat-form-field .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep mat-form-field .item-content.light::-moz-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.light::placeholder{color:hsla(0,0%,100%,.2)!important}:host::ng-deep mat-form-field .item-content.dark{background-color:#161617}:host::ng-deep mat-form-field .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep mat-form-field .item-content.light:-ms-input-placeholder{color:grey!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9kYXRlcGlja2VyL3NpbXBsZS9tb250aC15ZWFyL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUtbW9udGgteWVhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEMsTUFBTSxpQkFBaUIsR0FBRztJQUN4QixLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsU0FBUztLQUNyQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLGNBQWMsRUFBRSxVQUFVO1FBQzFCLGFBQWEsRUFBRSxJQUFJO1FBQ25CLGtCQUFrQixFQUFFLFdBQVc7S0FDaEM7Q0FDRixDQUFDO1dBa0JjLGlCQUFpQjtBQUlqQyxNQUFNLE9BQU8sd0RBQXdEO0lBeUNuRTtRQXhDUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBR2pCLHlCQUFvQixHQUFnQyxRQUFRLENBQUM7UUFFN0QsVUFBSyxHQUFTLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsY0FBUyxH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LEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlXCI7XG5pbXBvcnQgeyBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLCBNb21lbnREYXRlQWRhcHRlciB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlclwiO1xuaW1wb3J0IHsgRGF0ZUdldCB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5pbXBvcnQgeyBJRGF0ZVBpY2tlck1vbnRoWWVhck91dHB1dCB9IGZyb20gXCIuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtZGF0ZXBpY2tlci1zaW1wbGUtbW9udGgteWVhci5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IE1hdERhdGVwaWNrZXIgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xuXG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuY29uc3QgTU9OVEhfWUVBUl9GT1JNQVQgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTU0vWVlZWScsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWRhdGVwaWNrZXItc2ltcGxlLW1vbnRoLXllYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1kYXRlcGlja2VyLXNpbXBsZS1tb250aC15ZWFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSxcbiAgICAgIHVzZVZhbHVlOiAncHQtQlInXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLFxuICAgICAgdXNlVmFsdWU6IE1PTlRIX1lFQVJfRk9STUFUXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXREYXRlcGlja2VyU2ltcGxlTW9udGhZZWFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdjZW50ZXInO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogRGF0ZSA9IERhdGVHZXQuY3VycmVudERhdGUoJ0REL01NL1lZWVknKTtcbiAgQElucHV0KCkgbWF4TGVuZ3RoID0gMjU1O1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJRGF0ZVBpY2tlck1vbnRoWWVhck91dHB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcmVhZG9ubHkgZGF0ZUZvcm1hdFN0cmluZzogJ01NL1lZWVknID0gJ01NL1lZWVknO1xuICByZWFkb25seSBkYXRlRm9ybWF0ID0gJ0REL01NL1lZWVknO1xuICBzdGFydERhdGUgPSB0aGlzLnZhbHVlO1xuICBkYXRlOiBEYXRlID0gRGF0ZUdldC5jdXN0b21EYXRlTm9VVEMoJ0REL01NL1lZWVknKTtcblxuICBjaG9zZW5ZZWFySGFuZGxlcihub3JtYWxpemVkWWVhcjogTW9tZW50KSB7XG4gICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5kYXRlO1xuICAgIGN0cmxWYWx1ZS5zZXRGdWxsWWVhcihub3JtYWxpemVkWWVhci55ZWFyKCkpO1xuICAgIHRoaXMuZGF0ZSA9IGN0cmxWYWx1ZTtcblxuICAgIGNvbnN0IGRhdGUgPSBEYXRlR2V0LmN1c3RvbURhdGVOb1VUQyhjdHJsVmFsdWUsIHRoaXMuZGF0ZUZvcm1hdCk7XG5cbiAgICBjb25zdCBkYXRlU3RyaW5nID0gRGF0ZUdldC5jdXN0b21EYXRlTm9VVENTdHJpbmcobm9ybWFsaXplZFllYXIsIHRoaXMuZGF0ZUZvcm1hdFN0cmluZywgdGhpcy5kYXRlRm9ybWF0U3RyaW5nKSBhcyAnTU0vWVlZWSc7XG5cbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgZGF0ZSwgZGF0ZVN0cmluZyB9KTtcbiAgfVxuXG4gIGNob3Nlbk1vbnRoSGFuZGxlcihub3JtYWxpemVkTW9udGg6IE1vbWVudCwgZGF0ZXBpY2tlcjogTWF0RGF0ZXBpY2tlcjxhbnk+KSB7XG4gICAgY29uc3QgY3RybFZhbHVlID0gdGhpcy5kYXRlO1xuICAgIGN0cmxWYWx1ZS5zZXRNb250aChub3JtYWxpemVkTW9udGgubW9udGgoKSk7XG4gICAgdGhpcy5kYXRlID0gY3RybFZhbHVlO1xuXG4gICAgZGF0ZXBpY2tlci5jbG9zZSgpO1xuXG4gICAgY29uc3QgZGF0ZSA9IERhdGVHZXQuY3VzdG9tRGF0ZU5vVVRDKGN0cmxWYWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gRGF0ZUdldC5jdXN0b21EYXRlU3RyaW5nKG5vcm1hbGl6ZWRNb250aCwgdGhpcy5kYXRlRm9ybWF0U3RyaW5nLCB0aGlzLmRhdGVGb3JtYXRTdHJpbmcpIGFzICdNTS9ZWVlZJztcblxuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoeyBkYXRlLCBkYXRlU3RyaW5nIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY3VycmVudFZhbHVlLmVtaXQoe1xuICAgICAgZGF0ZTogbnVsbCxcbiAgICAgIGRhdGVTdHJpbmc6IG51bGxcbiAgICB9KVxuICB9XG4gIGNoYW5nZWQoZXZlbnQpIHtcbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHtcbiAgICAgIGRhdGU6IERhdGVHZXQuY3VzdG9tRGF0ZU5vVVRDKGV2ZW50LnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLFxuICAgICAgZGF0ZVN0cmluZzogRGF0ZUdldC5jdXN0b21EYXRlU3RyaW5nKGV2ZW50LnZhbHVlLCB0aGlzLmRhdGVGb3JtYXRTdHJpbmcsIHRoaXMuZGF0ZUZvcm1hdFN0cmluZykgYXMgJ01NL1lZWVknXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==