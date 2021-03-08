import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentInputListItemUpDownComponent {
    constructor() {
        this.showUp = true;
        this.showDown = true;
        this.moveUpDown$ = new EventEmitter();
        this.callback = () => { };
    }
    onClick(type) {
        if (type === 'move-down') {
            if (this.showDown) {
                this.moveUpDown$.emit(type);
            }
        }
        else {
            if (this.showUp) {
                this.moveUpDown$.emit(type);
            }
        }
    }
}
GlSharedComponentInputListItemUpDownComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-input-list-item-up-down',
                template: "<div class=\"reorder-list-container\">\r\n\r\n  <gl-shared-component-button-image-tooltip\r\n    id=\"move-up-list-item\"\r\n    alt=\"Move up\"\r\n    src=\"../assets/img/icon/list/move-up.svg\"\r\n    [class]=\"showUp ? '' : 'disabled'\"\r\n    (click)=\"onClick('move-up')\"\r\n    [callback]=\"callback\"\r\n  ></gl-shared-component-button-image-tooltip>\r\n  <gl-shared-component-button-image-tooltip\r\n    id=\"move-down-list-item\"\r\n    alt=\"Move down\"\r\n    src=\"../assets/img/icon/list/move-down.svg\"\r\n    [class]=\"showDown ? '' : 'disabled'\"\r\n    (click)=\"onClick('move-down')\"\r\n    [callback]=\"callback\"\r\n  ></gl-shared-component-button-image-tooltip>\r\n</div>\r\n",
                styles: [":host::ng-deep,:host::ng-deep .reorder-list-container{display:flex;flex-direction:row;flex-grow:1;justify-content:center}:host::ng-deep .reorder-list-container{align-items:center;background-color:#333437}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip:nth-child(2){margin:0 0 0 .2em}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip.disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;opacity:.2;user-select:none}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip .button{height:.8em;width:.8em}"]
            },] }
];
GlSharedComponentInputListItemUpDownComponent.ctorParameters = () => [];
GlSharedComponentInputListItemUpDownComponent.propDecorators = {
    showUp: [{ type: Input }],
    showDown: [{ type: Input }],
    moveUpDown$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbGlzdC9pdGVtLXVwLWRvd24vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNkNBQTZDO0lBUXhEO1FBUFMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFLGFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFSixDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFrQjtRQUV4QixJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztnQkFDdkQsc3NCQUEyRTs7YUFFNUU7Ozs7cUJBRUUsS0FBSzt1QkFDTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTGlzdFJlb3JkZXIgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXVwLWRvd24uaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXVwLWRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXVwLWRvd24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dExpc3RJdGVtVXBEb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBzaG93VXAgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dEb3duID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpIG1vdmVVcERvd24kOiBFdmVudEVtaXR0ZXI8VExpc3RSZW9yZGVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY2FsbGJhY2sgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBvbkNsaWNrKHR5cGU6IFRMaXN0UmVvcmRlcikge1xyXG5cclxuICAgIGlmICh0eXBlID09PSAnbW92ZS1kb3duJykge1xyXG4gICAgICBpZiAodGhpcy5zaG93RG93bikge1xyXG4gICAgICAgIHRoaXMubW92ZVVwRG93biQuZW1pdCh0eXBlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc2hvd1VwKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVXBEb3duJC5lbWl0KHR5cGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==