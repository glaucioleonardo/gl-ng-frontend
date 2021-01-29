import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputCheckBoxSimpleComponent {
    constructor() {
        this.checked = false;
        this.showBackground = true;
        this.checked$ = new EventEmitter();
    }
    onChecked(checked) {
        this.checked = checked;
        this.checked$.emit(checked);
    }
}
GlSharedComponentInputCheckBoxSimpleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-check-box-simple',
                template: "<div class=\"check-box-container {{ showBackground ? '' : 'transparent' }}\">\n  <img\n    *ngIf=\"!checked\"\n    (click)=\"onChecked(true)\"\n    alt=\"Checked\"\n    class=\"check-box unchecked\"\n    src=\"../assets/img/icon/check-box/unchecked.svg\">\n\n  <img\n    *ngIf=\"checked\"\n    (click)=\"onChecked(false)\"\n    alt=\"Unchecked\"\n    class=\"check-box checked\"\n    src=\"../assets/img/icon/check-box/checked.svg\">\n\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .check-box-container{align-items:center;background-color:#333437;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .check-box-container.transparent{background-color:transparent}:host::ng-deep .check-box-container .check-box{height:.8em;width:.8em}:host::ng-deep .check-box-container .check-box.checked:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.checked:not(hover){opacity:.8;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:hover{opacity:.6;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:not(hover){opacity:.3;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentInputCheckBoxSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputCheckBoxSimpleComponent.propDecorators = {
    checked: [{ type: Input }],
    showBackground: [{ type: Input }],
    checked$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9jaGVjay1ib3gvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sNkNBQTZDO0lBT3hEO1FBTFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUVyQixhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVqQixTQUFTLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCx5Y0FBMEU7O2FBRTNFOzs7O3NCQUdFLEtBQUs7NkJBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRDaGVja0JveFNpbXBsZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzaG93QmFja2dyb3VuZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIGNoZWNrZWQkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbkNoZWNrZWQoY2hlY2tlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5jaGVja2VkJC5lbWl0KGNoZWNrZWQpO1xuICB9XG59XG4iXX0=