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
                template: "<div class=\"check-box-container {{ showBackground ? '' : 'transparent' }}\">\r\n  <img\r\n    *ngIf=\"!checked\"\r\n    (click)=\"onChecked(true)\"\r\n    alt=\"Checked\"\r\n    class=\"check-box unchecked\"\r\n    src=\"../assets/img/icon/check-box/unchecked.svg\">\r\n\r\n  <img\r\n    *ngIf=\"checked\"\r\n    (click)=\"onChecked(false)\"\r\n    alt=\"Unchecked\"\r\n    class=\"check-box checked\"\r\n    src=\"../assets/img/icon/check-box/checked.svg\">\r\n\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .check-box-container{align-items:center;background-color:#333437;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .check-box-container.transparent{background-color:transparent}:host::ng-deep .check-box-container .check-box{height:.8em;width:.8em}:host::ng-deep .check-box-container .check-box.checked:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.checked:not(hover){opacity:.8;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:hover{opacity:.6;transition:all .2s ease-in-out}:host::ng-deep .check-box-container .check-box.unchecked:not(hover){opacity:.3;transition:all .2s ease-in-out}"]
            },] }
];
GlSharedComponentInputCheckBoxSimpleComponent.ctorParameters = () => [];
GlSharedComponentInputCheckBoxSimpleComponent.propDecorators = {
    checked: [{ type: Input }],
    showBackground: [{ type: Input }],
    checked$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9pbnB1dC9jaGVjay1ib3gvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtY2hlY2stYm94LXNpbXBsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sNkNBQTZDO0lBT3hEO1FBTFMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUVyQixhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVqQixTQUFTLENBQUMsT0FBZ0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBakJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCx5ZUFBMEU7O2FBRTNFOzs7O3NCQUdFLEtBQUs7NkJBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtc2ltcGxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1jaGVjay1ib3gtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWNoZWNrLWJveC1zaW1wbGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dENoZWNrQm94U2ltcGxlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgY2hlY2tlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dCYWNrZ3JvdW5kID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIGNoZWNrZWQkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG9uQ2hlY2tlZChjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgdGhpcy5jaGVja2VkJC5lbWl0KGNoZWNrZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=