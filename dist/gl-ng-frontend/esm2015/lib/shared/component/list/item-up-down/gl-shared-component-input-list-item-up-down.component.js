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
                template: "<div class=\"reorder-list-container\">\n\n  <gl-shared-component-button-image-tooltip\n    id=\"move-up-list-item\"\n    alt=\"Move up\"\n    src=\"../assets/img/icon/list/move-up.svg\"\n    [class]=\"showUp ? '' : 'disabled'\"\n    (click)=\"onClick('move-up')\"\n    [callback]=\"callback\"\n  ></gl-shared-component-button-image-tooltip>\n  <gl-shared-component-button-image-tooltip\n    id=\"move-down-list-item\"\n    alt=\"Move down\"\n    src=\"../assets/img/icon/list/move-down.svg\"\n    [class]=\"showDown ? '' : 'disabled'\"\n    (click)=\"onClick('move-down')\"\n    [callback]=\"callback\"\n  ></gl-shared-component-button-image-tooltip>\n</div>\n",
                styles: [":host::ng-deep,:host::ng-deep .reorder-list-container{display:flex;flex-direction:row;flex-grow:1;justify-content:center}:host::ng-deep .reorder-list-container{align-items:center;background-color:#333437}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip:nth-child(2){margin:0 0 0 .2em}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip.disabled{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:not-allowed;opacity:.2;user-select:none}:host::ng-deep .reorder-list-container gl-shared-component-button-image-tooltip .button{height:.8em;width:.8em}"]
            },] }
];
GlSharedComponentInputListItemUpDownComponent.ctorParameters = () => [];
GlSharedComponentInputListItemUpDownComponent.propDecorators = {
    showUp: [{ type: Input }],
    showDown: [{ type: Input }],
    moveUpDown$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvbGlzdC9pdGVtLXVwLWRvd24vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sNkNBQTZDO0lBUXhEO1FBUFMsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFZixnQkFBVyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZFLGFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFSixDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxJQUFrQjtRQUV4QixJQUFJLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3QjtTQUNGO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0I7U0FDRjtJQUNILENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZDQUE2QztnQkFDdkQsZ3FCQUEyRTs7YUFFNUU7Ozs7cUJBRUUsS0FBSzt1QkFDTCxLQUFLOzBCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVExpc3RSZW9yZGVyIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWxpc3QtaXRlbS11cC1kb3duLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXVwLWRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1saXN0LWl0ZW0tdXAtZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtbGlzdC1pdGVtLXVwLWRvd24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0TGlzdEl0ZW1VcERvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBzaG93VXAgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93RG93biA9IHRydWU7XG5cbiAgQE91dHB1dCgpIG1vdmVVcERvd24kOiBFdmVudEVtaXR0ZXI8VExpc3RSZW9yZGVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYWxsYmFjayA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIG9uQ2xpY2sodHlwZTogVExpc3RSZW9yZGVyKSB7XG5cbiAgICBpZiAodHlwZSA9PT0gJ21vdmUtZG93bicpIHtcbiAgICAgIGlmICh0aGlzLnNob3dEb3duKSB7XG4gICAgICAgIHRoaXMubW92ZVVwRG93biQuZW1pdCh0eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc2hvd1VwKSB7XG4gICAgICAgIHRoaXMubW92ZVVwRG93biQuZW1pdCh0eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==