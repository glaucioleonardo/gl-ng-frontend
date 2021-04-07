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
                template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    [src]=\"fileIcon\"\r\n    alt=\"\u00CDcone anexo\">\r\n  <a\r\n    (click)=\"onButtonClick($event)\"\r\n    [id]=\"id\"\r\n    [href]=\"attachmentUrl\"\r\n    class=\"file\"\r\n  >{{ fileName }}</a>\r\n  <img\r\n    *ngIf=\"!disabled && type === 'link'\"\r\n    (click)=\"editItem(id)\"\r\n    class=\"edit-item\"\r\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\r\n    alt=\"Editar anexo\"/>\r\n  <img\r\n    *ngIf=\"!disabled\"\r\n    (click)=\"removeItem(id)\"\r\n    class=\"remove-item\"\r\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\r\n    alt=\"Apagar anexo\"/>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2F0dGFjaG1lbnQvaXRlbS9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxNQUFNLE9BQU8sd0NBQXdDO0lBYW5EO1FBWlMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFQLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDOUQsc0JBQWlCLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsb0JBQWUsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU3RCxDQUFDO0lBRWpCLFVBQVUsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELFFBQVEsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxhQUFhLENBQUMsQ0FBUTtRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUExQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLGt2QkFBbUU7O2FBRXBFOzs7O3VCQUVFLEtBQUs7NEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLOzJCQUNMLEtBQUs7MEJBRUwsTUFBTSxTQUFDLFNBQVM7Z0NBQ2hCLE1BQU07OEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEl0ZW1Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYXR0YWNobWVudFVybDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlsZUljb246IHN0cmluZztcclxuICBASW5wdXQoKSBpZDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBhZGRpbmdTbW9vdGg6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoJ29uQ2xpY2snKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSByZW1vdmVDdXJyZW50SXRlbTogRXZlbnRFbWl0dGVyPHsgaWQ6IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZWRpdEN1cnJlbnRJdGVtOiBFdmVudEVtaXR0ZXI8eyBpZDogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICByZW1vdmVJdGVtKGlkOiBudW1iZXIpIHsgdGhpcy5yZW1vdmVDdXJyZW50SXRlbS5lbWl0KHsgaWQgfSk7IH1cclxuICBlZGl0SXRlbShpZDogbnVtYmVyKSB7IHRoaXMuZWRpdEN1cnJlbnRJdGVtLmVtaXQoeyBpZCB9KTsgfVxyXG5cclxuICBvbkJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLm9uSXRlbUNsaWNrLmVtaXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==