import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentButtonMenuSimpleComponent = class GlSharedComponentButtonMenuSimpleComponent {
    constructor() {
        this.disabled = false;
    }
};
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentButtonMenuSimpleComponent.prototype, "callback", void 0);
GlSharedComponentButtonMenuSimpleComponent = __decorate([
    Component({
        selector: 'gl-shared-component-button-menu-simple',
        template: "<img\n  [id]=\"id\"\n  class=\"menu-buttons\"\n  [src]=\"src\"\n  [alt]=\"alt\"\n  (click)=\"callback\">\n",
        styles: [":host{height:1.45em}:host .menu-buttons{height:1.5em;width:1.5em;margin:0 0 0 .1em;cursor:pointer}:host .menu-buttons:hover{transform:scale(1.01);opacity:1;transition:.1s ease-in-out}:host .menu-buttons:not(hover){transform:scale(1);opacity:.9;transition:.2s ease-in-out}"]
    })
], GlSharedComponentButtonMenuSimpleComponent);
export { GlSharedComponentButtonMenuSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vbWVudS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDBDQUEwQyxHQUF2RCxNQUFhLDBDQUEwQztJQU9yRDtRQU5TLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFNVixDQUFDO0NBQ2xCLENBQUE7QUFQVTtJQUFSLEtBQUssRUFBRTs0RUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7dUVBQWE7QUFDWjtJQUFSLEtBQUssRUFBRTtzRUFBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO3VFQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7NEVBQW9CO0FBTGpCLDBDQUEwQztJQUx0RCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0NBQXdDO1FBQ2xELHNIQUFzRTs7S0FFdkUsQ0FBQztHQUNXLDBDQUEwQyxDQVF0RDtTQVJZLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uTWVudVNpbXBsZUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBhbHQ6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2s6ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=