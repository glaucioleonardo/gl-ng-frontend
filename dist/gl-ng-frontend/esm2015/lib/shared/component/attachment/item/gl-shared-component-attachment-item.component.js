import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentAttachmentItemComponent {
    constructor() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    removeItem(id) { this.removeCurrentItem.emit({ id }); }
    editItem(id) { this.editCurrentItem.emit({ id }); }
    onButtonClick(e) {
        e.preventDefault();
        this.onItemClick.emit();
    }
}
GlSharedComponentAttachmentItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-item',
                template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"fileIcon\"\n    alt=\"\u00CDcone anexo\">\n  <a\n    (click)=\"onButtonClick($event)\"\n    [id]=\"id\"\n    [href]=\"attachmentUrl\"\n    class=\"file\"\n  >{{ fileName }}</a>\n  <img\n    *ngIf=\"!disabled && type === 'link'\"\n    (click)=\"editItem(id)\"\n    class=\"edit-item\"\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\n    alt=\"Editar anexo\"/>\n  <img\n    *ngIf=\"!disabled\"\n    (click)=\"removeItem(id)\"\n    class=\"remove-item\"\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\n    alt=\"Apagar anexo\"/>\n</div>\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em}:host::ng-deep .attachment-container:not(hover){background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#fff;color:#333437}:host::ng-deep .attachment-container .attachment-icon{border-radius:.3em;height:2.15em;margin:0 .6em 0 .4em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{height:2.15em;margin:0 0 0 .1em;padding:0;width:2.15em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;font-family:Montserrat,sans-serif;font-weight:400;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:80%}"]
            },] }
];
GlSharedComponentAttachmentItemComponent.ctorParameters = () => [];
GlSharedComponentAttachmentItemComponent.propDecorators = {
    disabled: [{ type: Input }],
    attachmentUrl: [{ type: Input }],
    fileName: [{ type: Input }],
    fileIcon: [{ type: Input }],
    id: [{ type: Input }],
    type: [{ type: Input }],
    addingSmooth: [{ type: Input }],
    onItemClick: [{ type: Output, args: ['onClick',] }],
    removeCurrentItem: [{ type: Output }],
    editCurrentItem: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2F0dGFjaG1lbnQvaXRlbS9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sd0NBQXdDO0lBYW5EO1FBWlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFQLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUQsc0JBQWlCLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsb0JBQWUsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU3RCxDQUFDO0lBRWpCLFVBQVUsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELFFBQVEsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxhQUFhLENBQUMsQ0FBUTtRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLGtzQkFBbUU7O2FBRXBFOzs7O3VCQUVFLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBRUwsTUFBTSxTQUFDLFNBQVM7Z0NBQ2hCLE1BQU07OEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJdGVtQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYXR0YWNobWVudFVybDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWxlTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBmaWxlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogbnVtYmVyO1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFkZGluZ1Ntb290aDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCdvbkNsaWNrJykgb25JdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlbW92ZUN1cnJlbnRJdGVtOiBFdmVudEVtaXR0ZXI8eyBpZDogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZWRpdEN1cnJlbnRJdGVtOiBFdmVudEVtaXR0ZXI8eyBpZDogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcmVtb3ZlSXRlbShpZDogbnVtYmVyKSB7IHRoaXMucmVtb3ZlQ3VycmVudEl0ZW0uZW1pdCh7IGlkIH0pOyB9XG4gIGVkaXRJdGVtKGlkOiBudW1iZXIpIHsgdGhpcy5lZGl0Q3VycmVudEl0ZW0uZW1pdCh7IGlkIH0pOyB9XG5cbiAgb25CdXR0b25DbGljayhlOiBFdmVudCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoKTtcbiAgfVxuXG59XG4iXX0=