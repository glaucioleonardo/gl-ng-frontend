import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputSwitchComponent {
    constructor() {
        this.enabled = true;
        this.active = false;
        this.labelColor = 'white';
        this.showLabel = true;
        this.active$ = new EventEmitter();
    }
    activate() {
        if (this.enabled) {
            this.active = !this.active;
            this.active$.emit(this.active);
        }
    }
}
GlSharedComponentInputSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-switch',
                template: "<div class=\"switch-main-container {{ enabled ? '' : 'disabled' }}\">\n  <span\n    *ngIf=\"showLabel\"\n    class=\"switch-label {{ labelColor }}\">{{ label }}</span>\n  <div\n    (click)=\"activate()\"\n    class=\"switch-item-container {{ active ? 'active' : '' }}\">\n    <div\n      class=\"switch-item {{ active ? 'active' : '' }}\"></div>\n  </div>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .switch-main-container{align-items:center;display:flex;flex-direction:row}:host::ng-deep .switch-main-container .switch-label{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-size:.5em;font-weight:600;user-select:none}:host::ng-deep .switch-main-container .switch-label.black{color:#000}:host::ng-deep .switch-main-container .switch-label.white{color:#fff}:host::ng-deep .switch-main-container .switch-item-container{background-color:#fff;border:2px solid #cacaca;border-radius:2em;cursor:pointer;display:flex;flex-direction:column;height:1em;justify-content:center;margin:0 0 0 .2em;padding:0 .1em;position:relative;transition:all .5s ease-in-out;width:1.7em}:host::ng-deep .switch-main-container .switch-item-container.active{background-color:#67ce78;border:2px solid #329d44;transition:all .3s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item{background-color:#e4e4e4;border-radius:1em;cursor:pointer;height:.9em;left:.1em;position:absolute;top:.06em;transition:all .5s ease-in-out;width:.9em}:host::ng-deep .switch-main-container .switch-item-container .switch-item:hover{background-color:#b1b1b1;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active{background-color:#f0f0f0;left:.9em;transition:all .5s ease-in-out}:host::ng-deep .switch-main-container .switch-item-container .switch-item.active:hover{background-color:#fff;transition:all .2s ease-in-out}:host::ng-deep .switch-main-container.disabled,:host::ng-deep .switch-main-container.disabled .switch-item-container,:host::ng-deep .switch-main-container.disabled .switch-item-container .switch-item{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;user-select:none}"]
            },] }
];
GlSharedComponentInputSwitchComponent.ctorParameters = () => [];
GlSharedComponentInputSwitchComponent.propDecorators = {
    enabled: [{ type: Input }],
    active: [{ type: Input }],
    label: [{ type: Input }],
    labelColor: [{ type: Input }],
    showLabel: [{ type: Input }],
    active$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3N3aXRjaC9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXN3aXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8scUNBQXFDO0lBUWhEO1FBUFMsWUFBTyxHQUFHLElBQUksQ0FBQztRQUNmLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixlQUFVLEdBQXNCLE9BQU8sQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFlBQU8sR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU5QyxDQUFDO0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1Qyx5WEFBZ0U7O2FBRWpFOzs7O3NCQUVFLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXN3aXRjaC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRTd2l0Y2hDb21wb25lbnQge1xuICBASW5wdXQoKSBlbmFibGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsQ29sb3I6ICd3aGl0ZScgfCAnYmxhY2snID0gJ3doaXRlJztcbiAgQElucHV0KCkgc2hvd0xhYmVsID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGFjdGl2ZSQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGFjdGl2YXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmVuYWJsZWQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICAgICAgdGhpcy5hY3RpdmUkLmVtaXQodGhpcy5hY3RpdmUpO1xuICAgIH1cbiAgfVxufVxuIl19