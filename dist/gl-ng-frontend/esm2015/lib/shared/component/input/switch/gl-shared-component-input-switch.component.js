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
                template: "<div class=\"switch-main-container {{ enabled ? '' : 'disabled' }} {{ showAsInputButton ? 'show-as-button' : '' }}\"\r\n  (click)=\"onContainerClick()\">\r\n  <img\r\n    *ngIf=\"showAsInputButton && buttonIconSrc?.length > 0\"\r\n    [src]=\"buttonIconSrc\"\r\n    class=\"switch-button-icon\"\r\n    alt=\"switch-icon\">\r\n\r\n  <span\r\n    *ngIf=\"showLabel\"\r\n    class=\"switch-label {{ labelColor }} {{ buttonIconSrc?.length > 0 ? 'has-icon' : '' }}\">{{ label }}</span>\r\n  <div\r\n    (click)=\"activate()\"\r\n    class=\"switch-item-container {{ active ? 'active' : '' }}\">\r\n    <div\r\n      class=\"switch-item {{ active ? 'active' : '' }}\"></div>\r\n  </div>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3N3aXRjaC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8scUNBQXFDO0lBWWhEO1FBWFMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixlQUFVLEdBQXNCLE9BQU8sQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUl6QixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFOUMsQ0FBQztJQUVqQixRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLGtzQkFBZ0U7O2FBRWpFOzs7O3NCQUVFLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzRCQUVMLEtBQUs7c0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtc3dpdGNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtc3dpdGNoLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRTd2l0Y2hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGVuYWJsZWQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbGFiZWxDb2xvcjogJ3doaXRlJyB8ICdibGFjaycgPSAnd2hpdGUnO1xyXG4gIEBJbnB1dCgpIHNob3dMYWJlbCA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd0FzSW5wdXRCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgYnV0dG9uSWNvblNyYzogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgYWN0aXZlJDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhY3RpdmF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XHJcbiAgICAgIHRoaXMuYWN0aXZlJC5lbWl0KHRoaXMuYWN0aXZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ29udGFpbmVyQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zaG93QXNJbnB1dEJ1dHRvbikge1xyXG4gICAgICB0aGlzLmFjdGl2YXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==