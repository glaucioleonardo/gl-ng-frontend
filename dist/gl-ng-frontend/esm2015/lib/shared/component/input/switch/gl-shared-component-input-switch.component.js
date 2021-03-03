import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputSwitchComponent {
    constructor() {
        this.enabled = true;
        this.active = false;
        this.labelColor = 'white';
        this.showLabel = true;
        this.showAsInputButton = false;
        this.active$ = new EventEmitter();
    }
    activate() {
        if (this.enabled) {
            this.active = !this.active;
            this.active$.emit(this.active);
        }
    }
    onContainerClick() {
        if (this.showAsInputButton) {
            this.activate();
        }
    }
}
GlSharedComponentInputSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-switch',
                template: "<div class=\"switch-main-container {{ enabled ? '' : 'disabled' }} {{ showAsInputButton ? 'show-as-button' : '' }}\"\n  (click)=\"onContainerClick()\">\n  <img\n    *ngIf=\"showAsInputButton && buttonIconSrc?.length > 0\"\n    [src]=\"buttonIconSrc\"\n    class=\"switch-button-icon\"\n    alt=\"switch-icon\">\n\n  <span\n    *ngIf=\"showLabel\"\n    class=\"switch-label {{ labelColor }} {{ buttonIconSrc?.length > 0 ? 'has-icon' : '' }}\">{{ label }}</span>\n  <div\n    (click)=\"activate()\"\n    class=\"switch-item-container {{ active ? 'active' : '' }}\">\n    <div\n      class=\"switch-item {{ active ? 'active' : '' }}\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");@import url(\"https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;300;400;500;600;700;800;900&display=swap\");:host::ng-deep .switch-main-container{align-items:center;display:flex;flex-direction:row}:host::ng-deep .switch-main-container .switch-label{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:600;user-select:none}:host::ng-deep .switch-main-container .switch-label.black{color:#000}:host::ng-deep .switch-main-container .switch-label.white{color:#fff}:host::ng-deep .switch-main-container .switch-item-container{background-color:#fff;border:2px solid #cacaca;border-radius:2em;cursor:pointer;display:flex;flex-direction:column;height:1em;justify-content:center;margin:0 0 0 .2em;padding:0 .1em;position:relative;transition:all .5s ease-in-out;width:1.7em}:host::ng-deep .switch-main-container .switch-item-container.active{background-color:#67ce78;border:2px solid #329d44;transition:all .3s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item{background-color:#e4e4e4;border-radius:1em;cursor:pointer;height:.9em;left:.1em;position:absolute;top:.06em;transition:all .5s ease-in-out;width:.9em}:host::ng-deep .switch-main-container .switch-item-container .switch-item:hover{background-color:#b1b1b1;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active{background-color:#f0f0f0;left:.9em;transition:all .5s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active:hover{background-color:#fff;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container.disabled,:host::ng-deep .switch-main-container.disabled .switch-item-container,:host::ng-deep .switch-main-container.disabled .switch-item-container .switch-item{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;user-select:none}:host::ng-deep .switch-main-container.show-as-button{align-items:center;background-color:hsla(0,0%,100%,.1);border-radius:.2em;display:flex;flex-direction:row;font-size:.8em;padding:.2em .25em}:host::ng-deep .switch-main-container.show-as-button .switch-button-icon{border-radius:.15em;height:1.563em;width:1.563em}:host::ng-deep .switch-main-container.show-as-button .switch-label{flex-grow:1;font-family:Montserrat,sans-serif;font-weight:300;padding:0 0 0 .8em}"]
            },] }
];
GlSharedComponentInputSwitchComponent.ctorParameters = () => [];
GlSharedComponentInputSwitchComponent.propDecorators = {
    enabled: [{ type: Input }],
    active: [{ type: Input }],
    label: [{ type: Input }],
    labelColor: [{ type: Input }],
    showLabel: [{ type: Input }],
    showAsInputButton: [{ type: Input }],
    buttonIconSrc: [{ type: Input }],
    active$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3N3aXRjaC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8scUNBQXFDO0lBWWhEO1FBWFMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixlQUFVLEdBQXNCLE9BQU8sQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUl6QixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFOUMsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLDhwQkFBZ0U7O2FBRWpFOzs7O3NCQUVFLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzRCQUVMLEtBQUs7c0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtc3dpdGNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0U3dpdGNoQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZW5hYmxlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbENvbG9yOiAnd2hpdGUnIHwgJ2JsYWNrJyA9ICd3aGl0ZSc7XG4gIEBJbnB1dCgpIHNob3dMYWJlbCA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dBc0lucHV0QnV0dG9uID0gZmFsc2U7XG5cbiAgQElucHV0KCkgYnV0dG9uSWNvblNyYzogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBhY3RpdmUkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5lbmFibGVkKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9ICF0aGlzLmFjdGl2ZTtcbiAgICAgIHRoaXMuYWN0aXZlJC5lbWl0KHRoaXMuYWN0aXZlKTtcbiAgICB9XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNob3dBc0lucHV0QnV0dG9uKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=