import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck(value, input) {
        input.checked = true;
        this.itemSelected.emit(value);
    }
}
GlSharedComponentInputOptionSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\r\n  <!--suppress HtmlFormInputWithoutLabel -->\r\n  <input\r\n    #input\r\n    [checked]=\"checked\"\r\n    class=\"input-radio\"\r\n    type=\"radio\"\r\n    [value]=\"value\"\r\n    [id]=\"id\"\r\n    [name]=\"name\"\r\n    (click)=\"onCheck(value, input)\">\r\n  <span (click)=\"onCheck(value, input)\" class=\"check-mark\"></span>\r\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{align-items:center;display:flex;flex-grow:1;padding:.2em .2em 0;position:relative}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:all .3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:all .3s ease-in-out}:host::ng-deep .input-container .input-radio{cursor:pointer;height:2.2em;left:.75em;opacity:0;position:absolute;top:.9em;width:2.2em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{background-color:#d24077;border-radius:15%;height:.5em;left:.24em;opacity:1;top:.25em;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;visibility:visible;width:.5em}:host::ng-deep .input-container .check-mark{background-color:#d24077;border-radius:15%;cursor:pointer;height:1em;left:0;margin:0 .2em 0 0;position:relative;top:0;width:1em}:host::ng-deep .input-container .check-mark:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;content:\"\";opacity:0;pointer-events:none;position:absolute;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;user-select:none;visibility:collapse}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .label{color:#64666c;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:400}"]
            },] }
];
GlSharedComponentInputOptionSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputOptionSimpleComponent.propDecorators = {
    value: [{ type: Input }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9vcHRpb24vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sMkNBQTJDO0lBU3REO1FBRlUsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVsRCxDQUFDO0lBRWpCLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBdUI7UUFDNUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCx1Y0FBdUU7O2FBRXhFOzs7O29CQUVFLEtBQUs7aUJBQ0wsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dE9wdGlvblNpbXBsZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBvbkNoZWNrKHZhbHVlOiBzdHJpbmcsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICBpbnB1dC5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXX0=