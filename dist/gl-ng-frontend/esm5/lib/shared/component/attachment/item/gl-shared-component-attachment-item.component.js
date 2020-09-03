import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var GlSharedComponentAttachmentItemComponent = /** @class */ (function () {
    function GlSharedComponentAttachmentItemComponent() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    GlSharedComponentAttachmentItemComponent.prototype.removeItem = function (id) { this.removeCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.editItem = function (id) { this.editCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.onButtonClick = function (e) {
        e.preventDefault();
        this.onItemClick.emit();
    };
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "attachmentUrl", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "fileName", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "fileIcon", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentItemComponent.prototype, "addingSmooth", void 0);
    __decorate([
        Output('onClick')
    ], GlSharedComponentAttachmentItemComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentItemComponent.prototype, "removeCurrentItem", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentItemComponent.prototype, "editCurrentItem", void 0);
    GlSharedComponentAttachmentItemComponent = __decorate([
        Component({
            selector: 'gl-shared-component-attachment-item',
            template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"fileIcon\"\n    alt=\"\u00CDcone anexo\">\n  <a\n    (click)=\"onButtonClick($event)\"\n    [id]=\"id\"\n    [href]=\"attachmentUrl\"\n    class=\"file\"\n  >{{ fileName }}</a>\n  <img\n    *ngIf=\"!disabled && type === 'link'\"\n    (click)=\"editItem(id)\"\n    class=\"edit-item\"\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\n    alt=\"Editar anexo\"/>\n  <img\n    *ngIf=\"!disabled\"\n    (click)=\"removeItem(id)\"\n    class=\"remove-item\"\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\n    alt=\"Apagar anexo\"/>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#333437}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2.15em;width:2.15em;margin:0 .6em 0 .1em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{padding:0;height:2.15em;width:2.15em;margin:0 0 0 .1em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:80%;padding:1em 0}"]
        })
    ], GlSharedComponentAttachmentItemComponent);
    return GlSharedComponentAttachmentItemComponent;
}());
export { GlSharedComponentAttachmentItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2l0ZW0vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZFO0lBYUU7UUFaUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBUVAsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxzQkFBaUIsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRSxvQkFBZSxHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTdELENBQUM7SUFFakIsNkRBQVUsR0FBVixVQUFXLEVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCwyREFBUSxHQUFSLFVBQVMsRUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUzRCxnRUFBYSxHQUFiLFVBQWMsQ0FBUTtRQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBcEJRO1FBQVIsS0FBSyxFQUFFOzhFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTttRkFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7OEVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzhFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTt3RUFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFOzBFQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7a0ZBQXVCO0lBRVo7UUFBbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztpRkFBc0Q7SUFDOUQ7UUFBVCxNQUFNLEVBQUU7dUZBQXNFO0lBQ3JFO1FBQVQsTUFBTSxFQUFFO3FGQUFvRTtJQVhsRSx3Q0FBd0M7UUFMcEQsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHFDQUFxQztZQUMvQyxrc0JBQW1FOztTQUVwRSxDQUFDO09BQ1csd0NBQXdDLENBdUJwRDtJQUFELCtDQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F2Qlksd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdHRhY2htZW50VXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGVJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgYWRkaW5nU21vb3RoOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoJ29uQ2xpY2snKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlQ3VycmVudEl0ZW06IEV2ZW50RW1pdHRlcjx7IGlkOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0Q3VycmVudEl0ZW06IEV2ZW50RW1pdHRlcjx7IGlkOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICByZW1vdmVJdGVtKGlkOiBudW1iZXIpIHsgdGhpcy5yZW1vdmVDdXJyZW50SXRlbS5lbWl0KHsgaWQgfSk7IH1cbiAgZWRpdEl0ZW0oaWQ6IG51bWJlcikgeyB0aGlzLmVkaXRDdXJyZW50SXRlbS5lbWl0KHsgaWQgfSk7IH1cblxuICBvbkJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25JdGVtQ2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==