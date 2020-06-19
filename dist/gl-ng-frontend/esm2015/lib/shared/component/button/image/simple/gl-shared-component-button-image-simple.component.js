import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentButtonImageSimpleComponent = class GlSharedComponentButtonImageSimpleComponent {
    constructor() { }
};
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentButtonImageSimpleComponent.prototype, "callback", void 0);
GlSharedComponentButtonImageSimpleComponent = __decorate([
    Component({
        selector: 'gl-shared-component-button-image-simple',
        template: "<img\n  class=\"button\"\n  [id]=\"id\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback($event)\">\n",
        styles: [":host::ng-deep{display:flex;align-items:center}:host::ng-deep .button{width:1em;height:1em}:host::ng-deep .button:not(hover){opacity:.5;transform:scale(1);transition:.2s ease-in-out}:host::ng-deep .button:hover{opacity:1;transform:scale(1.1);transition:.2s ease-in-out}"]
    })
], GlSharedComponentButtonImageSimpleComponent);
export { GlSharedComponentButtonImageSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2Utc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2ltYWdlL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDJDQUEyQyxHQUF4RCxNQUFhLDJDQUEyQztJQU10RCxnQkFBZ0IsQ0FBQztDQUNsQixDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7dUVBQUk7QUFDSDtJQUFSLEtBQUssRUFBRTt3RUFBSztBQUNKO0lBQVIsS0FBSyxFQUFFO3dFQUFLO0FBQ0o7SUFBUixLQUFLLEVBQUU7NkVBQVU7QUFKUCwyQ0FBMkM7SUFMdkQsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHlDQUF5QztRQUNuRCx3SEFBdUU7O0tBRXhFLENBQUM7R0FDVywyQ0FBMkMsQ0FPdkQ7U0FQWSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXNpbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkltYWdlU2ltcGxlQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWQ7XG4gIEBJbnB1dCgpIGFsdDtcbiAgQElucHV0KCkgc3JjO1xuICBASW5wdXQoKSBjYWxsYmFjaztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19