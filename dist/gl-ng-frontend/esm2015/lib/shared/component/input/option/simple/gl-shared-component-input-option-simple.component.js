import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class GlSharedComponentInputOptionSimpleComponent {
    constructor() {
        this.itemSelected = new EventEmitter();
    }
    onCheck() {
        const input = document.querySelector(`#${this.id}`);
        input.checked = true;
        this.itemSelected.emit(input.value);
    }
}
GlSharedComponentInputOptionSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-option-simple',
                template: "<div class=\"input-container\">\n  <!--suppress HtmlFormInputWithoutLabel -->\n  <input\n    #input\n    [checked]=\"checked\"\n    class=\"input-radio\"\n    type=\"radio\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [name]=\"name\"\n    (click)=\"onCheck()\"\n  >\n  <span (click)=\"onCheck()\" class=\"check-mark\"></span>\n  <label class=\"label\" [for]=\"id\">{{ label }}</label>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{display:block;flex-grow:1}:host::ng-deep .input-container{align-items:center;display:flex;flex-grow:1;padding:.2em .2em 0;position:relative}:host::ng-deep .input-container:not(hover) .check-mark{background-color:#1a1b1d;transition:all .3s ease-in-out}:host::ng-deep .input-container:hover .check-mark{background-color:#333437;transition:all .3s ease-in-out}:host::ng-deep .input-container .input-radio{cursor:pointer;height:2.2em;left:.75em;opacity:0;position:absolute;top:.9em;width:2.2em}:host::ng-deep .input-container .input-radio:checked~.check-mark{background-color:#1a1b1d}:host::ng-deep .input-container .input-radio:checked~.check-mark:after{background-color:#d24077;border-radius:50%;height:.5em;left:.24em;opacity:1;top:.25em;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;visibility:visible;width:.5em}:host::ng-deep .input-container .check-mark{background-color:#d24077;border-radius:50%;cursor:pointer;height:1em;left:0;margin:0 .2em 0 0;position:relative;top:0;width:1em}:host::ng-deep .input-container .check-mark:after{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;content:\"\";opacity:0;pointer-events:none;position:absolute;transition:opacity .5s ease-in-out,background-color .5s ease-in-out;user-select:none;visibility:collapse}:host::ng-deep .input-container .check-mark:after:hover{transform:scale(1.1);transition:all .2s ease-in-out}:host::ng-deep .input-container .label{color:#64666c;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:400}"]
            },] }
];
GlSharedComponentInputOptionSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputOptionSimpleComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input',] }],
    value: [{ type: Input }],
    id: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    checked: [{ type: Input }],
    itemSelected: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1vcHRpb24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9vcHRpb24vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPOUYsTUFBTSxPQUFPLDJDQUEyQztJQVd0RDtRQUZVLGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEQsQ0FBQztJQUVqQixPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQXFCLENBQUM7UUFDMUYsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsdVpBQXVFOzthQUV4RTs7OztvQkFFRSxTQUFTLFNBQUMsT0FBTztvQkFFakIsS0FBSztpQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtb3B0aW9uLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LW9wdGlvbi1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0T3B0aW9uU2ltcGxlQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNoZWNrZWQ6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIGl0ZW1TZWxlY3RlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkNoZWNrKCkge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuaXRlbVNlbGVjdGVkLmVtaXQoaW5wdXQudmFsdWUpO1xuICB9XG59XG4iXX0=