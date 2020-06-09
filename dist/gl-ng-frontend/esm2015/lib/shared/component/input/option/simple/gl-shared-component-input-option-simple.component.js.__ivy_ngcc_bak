import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
let GlSharedComponentInputOptionSimpleComponent = class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck() {
        const input = document.querySelector(`#${this.id}`);
        input.checked = true;
        this.itemSelected.emit(input.value);
    }
};
__decorate([
    ViewChild('input')
], GlSharedComponentInputOptionSimpleComponent.prototype, "input", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "value", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "label", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "name", void 0);
__decorate([
    Input()
], GlSharedComponentInputOptionSimpleComponent.prototype, "checked", void 0);
__decorate([
    Output()
], GlSharedComponentInputOptionSimpleComponent.prototype, "itemSelected", void 0);
GlSharedComponentInputOptionSimpleComponent = __decorate([
    Component({
        selector: 'gl-shared-component-input-option-simple',
        template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck()\"\n  >\n  <span (click)=\"onCheck()\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{position:relative;padding:.2em .2em 0;display:flex;flex-grow:1;align-items:center}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:.3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:.3s ease-in-out}:host::ng-deep .input-container .input-radio{position:absolute;opacity:0;cursor:pointer;height:2.2em;width:2.2em;left:.75em;top:.9em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{visibility:visible;opacity:1;top:.25em;left:.24em;width:.5em;height:.5em;border-radius:50%;background-color:#d24077;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark{position:relative;cursor:pointer;top:0;left:0;height:1em;width:1em;background-color:#d24077;border-radius:50%;margin:0 .2em 0 0}:host::ng-deep .input-container .check-mark:after{content:\"\";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute;opacity:0;visibility:collapse;transition:opacity .5s ease-in-out,background-color .5s ease-in-out}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:.2s ease-in-out}:host::ng-deep .input-container .label{font-family:Montserrat,sans-serif;font-weight:400;color:#64666c;font-size:.6em}"]
    })
], GlSharedComponentInputOptionSimpleComponent);
export { GlSharedComponentInputOptionSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvb3B0aW9uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU85RixJQUFhLDJDQUEyQyxHQUF4RCxNQUFhLDJDQUEyQztJQVd0RDtRQUZVLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEQsQ0FBQztJQUVqQixPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQXFCLENBQUM7UUFDMUYsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBO0FBakJxQjtJQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzBFQUFxQztBQUUvQztJQUFSLEtBQUssRUFBRTswRUFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3VFQUFZO0FBQ1g7SUFBUixLQUFLLEVBQUU7MEVBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTt5RUFBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzRFQUFrQjtBQUVoQjtJQUFULE1BQU0sRUFBRTtpRkFBeUQ7QUFUdkQsMkNBQTJDO0lBTHZELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx5Q0FBeUM7UUFDbkQsdVpBQXVFOztLQUV4RSxDQUFDO0dBQ1csMkNBQTJDLENBa0J2RDtTQWxCWSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0T3B0aW9uU2ltcGxlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkNoZWNrKCkge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoaW5wdXQudmFsdWUpO1xuICB9XG59XG4iXX0=