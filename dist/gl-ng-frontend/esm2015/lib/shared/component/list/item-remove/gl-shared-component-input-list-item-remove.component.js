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
                template: "<img\r\n  [id]=\"id\"\r\n  class=\"remove-item\"\r\n  [ngClass]=\"{\r\n    'show-remove': showRemove,\r\n    'hide-remove' : !showRemove\r\n  }\"\r\n  src=\"../assets/img/icon/list/delete-item.svg\"\r\n  (click)=\"removeItem()\"\r\n  alt=\"Remove list item\">\r\n",
                styles: [":host::ng-deep{z-index:100}:host::ng-deep .remove-item{cursor:pointer;height:.9em;left:-2em;position:absolute;top:.2em;width:.9em;z-index:100}:host::ng-deep .remove-item.show-remove{-webkit-animation:show-remove .2s ease-in-out;-webkit-animation-delay:.1s;-webkit-animation-fill-mode:forwards;animation:show-remove .2s ease-in-out;animation-delay:.1s;animation-fill-mode:forwards}@-webkit-keyframes show-remove{0%{left:-2em}to{left:.3em}}@keyframes show-remove{0%{left:-2em}to{left:.3em}}:host::ng-deep .remove-item.hide-remove{-webkit-animation:hide-remove .2s ease-in-out;-webkit-animation-fill-mode:forwards;animation:hide-remove .2s ease-in-out;animation-fill-mode:forwards;left:-2em}@-webkit-keyframes hide-remove{0%{left:.3em}to{left:-2em}}@keyframes hide-remove{0%{left:.3em}to{left:-2em}}:host::ng-deep .remove-item:not(hover){opacity:.5;transform:scale(1);transition:all .3s ease-out}:host::ng-deep .remove-item:hover{opacity:1;transform:scale(1.1);transition:all .3s ease-in}"]
            },] }
];
GlSharedComponentInputListItemRemoveComponent.ctorParameters = () => [];
GlSharedComponentInputListItemRemoveComponent.propDecorators = {
    showRemove: [{ type: Input }],
    id: [{ type: Input }],
    itemToRemove: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tcmVtb3ZlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9saXN0L2l0ZW0tcmVtb3ZlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXJlbW92ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNkNBQTZDO0lBT3hEO1FBTFMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUczQixpQkFBWSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTNELENBQUM7SUFFakIsVUFBVTtRQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3JCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxtUkFBMEU7O2FBRTNFOzs7O3lCQUdFLEtBQUs7aUJBQ0wsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSUxpc3RSZW1vdmVJdGVtIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWxpc3QtaXRlbS1yZW1vdmUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tcmVtb3ZlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tcmVtb3ZlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWxpc3QtaXRlbS1yZW1vdmUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dExpc3RJdGVtUmVtb3ZlQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgc2hvd1JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBpdGVtVG9SZW1vdmU6IEV2ZW50RW1pdHRlcjxJTGlzdFJlbW92ZUl0ZW0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZW1vdmVJdGVtKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pdGVtVG9SZW1vdmUuZW1pdCh7XHJcbiAgICAgIGlkOiArdGhpcy5pZFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==