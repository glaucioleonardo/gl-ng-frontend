import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputListItemRemoveComponent {
    constructor() {
        this.showRemove = false;
        this.itemToRemove = new EventEmitter();
    }
    removeItem() {
        this.itemToRemove.emit({
            id: +this.id
        });
    }
}
GlSharedComponentInputListItemRemoveComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-list-item-remove',
                template: "<img\n  [id]=\"id\"\n  class=\"remove-item\"\n  [ngClass]=\"{\n    'show-remove': showRemove,\n    'hide-remove' : !showRemove\n  }\"\n  src=\"../assets/img/icon/list/delete-item.svg\"\n  (click)=\"removeItem()\"\n  alt=\"Remove list item\">\n",
                styles: [":host::ng-deep{z-index:100}:host::ng-deep .remove-item{cursor:pointer;height:.9em;left:-2em;position:absolute;top:.2em;width:.9em;z-index:100}:host::ng-deep .remove-item.show-remove{-webkit-animation:show-remove .2s ease-in-out;-webkit-animation-delay:.1s;-webkit-animation-fill-mode:forwards;animation:show-remove .2s ease-in-out;animation-delay:.1s;animation-fill-mode:forwards}@-webkit-keyframes show-remove{0%{left:-2em}to{left:.3em}}@keyframes show-remove{0%{left:-2em}to{left:.3em}}:host::ng-deep .remove-item.hide-remove{-webkit-animation:hide-remove .2s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-remove .2s ease-in-out;animation-fill-mode:forwards;left:-2em}@-webkit-keyframes hide-remove{0%{left:.3em}to{left:-2em}}@keyframes hide-remove{0%{left:.3em}to{left:-2em}}:host::ng-deep .remove-item:not(hover){opacity:.5;transform:scale(1);transition:all .3s ease-out}:host::ng-deep .remove-item:hover{opacity:1;transform:scale(1.1);transition:all .3s ease-in}"]
            },] }
];
GlSharedComponentInputListItemRemoveComponent.ctorParameters = () => [];
GlSharedComponentInputListItemRemoveComponent.propDecorators = {
    showRemove: [{ type: Input }],
    id: [{ type: Input }],
    itemToRemove: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tcmVtb3ZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9saXN0L2l0ZW0tcmVtb3ZlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXJlbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNkNBQTZDO0lBT3hEO1FBTFMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUczQixpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTNELENBQUM7SUFFakIsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCwrUEFBMEU7O2FBRTNFOzs7O3lCQUdFLEtBQUs7aUJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElMaXN0UmVtb3ZlSXRlbSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tcmVtb3ZlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXJlbW92ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWxpc3QtaXRlbS1yZW1vdmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWxpc3QtaXRlbS1yZW1vdmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0TGlzdEl0ZW1SZW1vdmVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIHNob3dSZW1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgaXRlbVRvUmVtb3ZlOiBFdmVudEVtaXR0ZXI8SUxpc3RSZW1vdmVJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHJlbW92ZUl0ZW0oKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtVG9SZW1vdmUuZW1pdCh7XG4gICAgICBpZDogK3RoaXMuaWRcbiAgICB9KTtcbiAgfVxufVxuIl19