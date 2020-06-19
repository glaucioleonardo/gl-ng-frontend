import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
var GlSharedComponentAttachmentImagePreviewComponent = /** @class */ (function () {
    function GlSharedComponentAttachmentImagePreviewComponent(service) {
        this.service = service;
        this.disabled = false;
        this.required = false;
        this.type = '';
        this.showLabel = true;
        this.requiredFieldDescription = 'Required field';
        this.addImageDescription = 'Click to add an image';
        this.maxImageSize = '10240';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.addImageButtonDescription = 'Add image';
        this.removeImageButtonDescription = 'Remove image';
        this.currentValue$ = new EventEmitter();
    }
    GlSharedComponentAttachmentImagePreviewComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.fileInputImage.nativeElement, this.userImage.nativeElement, this.currentValue$, this.invalidSizeDescription, this.invalidFormatDescription, this.addImageButtonDescription, this.removeImageButtonDescription);
        this.updateImage();
    };
    GlSharedComponentAttachmentImagePreviewComponent.prototype.updateImage = function () {
        if (this.currentImage != null && this.currentImage.length > 0) {
            this.service.setImage(this.currentImage);
        }
    };
    GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = function () { return [
        { type: GlSharedComponentAttachmentImagePreviewService }
    ]; };
    __decorate([
        ViewChild('fileInputImage', { read: ElementRef, static: true })
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "fileInputImage", void 0);
    __decorate([
        ViewChild('userImage', { read: ElementRef, static: true })
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "userImage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "currentImage", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "showLabel", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "requiredFieldDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "addImageDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "maxImageSize", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "invalidSizeDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "invalidFormatDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "addImageButtonDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "removeImageButtonDescription", void 0);
    __decorate([
        Output()
    ], GlSharedComponentAttachmentImagePreviewComponent.prototype, "currentValue$", void 0);
    GlSharedComponentAttachmentImagePreviewComponent = __decorate([
        Component({
            selector: 'gl-shared-component-attachment-image-preview',
            template: "<div class=\"item-container {{ type }}\">\n  <gl-shared-component-title-label-button-container\n    *ngIf=\"showLabel\"\n    labelValue=\"Image\"\n    labelAlignment=\"left\"\n    [class]=\"type\"\n    [requiredFieldDescription]=\"requiredFieldDescription\"\n    [required]=\"required\">\n    <ng-content select=\"top\"></ng-content>\n    <gl-shared-component-button-image-tooltip\n      *ngFor=\"let b of service.buttons\"\n      [src]=\"b.src\"\n      [alt]=\"b.alt\"\n      [id]=\"b.id\"\n      [show]=\"b.show && !disabled || b.id === 'expand-container-2'\"\n      [callback]=\"b.callback\"\n    ></gl-shared-component-button-image-tooltip>\n    <ng-content select=\"bottom\"></ng-content>\n  </gl-shared-component-title-label-button-container>\n\n  <div class=\"attachment-container-content\">\n    <input\n      #fileInputImage\n      id=\"file-input-image\"\n      name=\"file-input-image\"\n      type=\"file\"\n      class=\"input-image\"\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\n      maxlength=\"1\"\n      [attr.data-maxsize]=\"maxImageSize\"\n      [title]=\"addImageDescription\"\n    />\n  </div>\n  <div class=\"image-container\">\n    <div #userImage id=\"image\"></div>\n  </div>\n</div>\n",
            styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-grow:1;flex-direction:column}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:1.5em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid rgba(255,255,255,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{flex-grow:1;display:flex;justify-content:center;align-content:center}:host::ng-deep .item-container .image-container #image{content:\"\";background-size:auto 100%;background-repeat:no-repeat;min-width:100%;min-height:30vh;border:0;background-position-x:center;background-position-y:center;flex-grow:1}"]
        })
    ], GlSharedComponentAttachmentImagePreviewComponent);
    return GlSharedComponentAttachmentImagePreviewComponent;
}());
export { GlSharedComponentAttachmentImagePreviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2ltYWdlL3ByZXZpZXcvZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBT3hIO0lBbUJFLDBEQUFtQixPQUF1RDtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQWZqRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUEwQixFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQiw2QkFBd0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUNwRCx3QkFBbUIsR0FBVyx1QkFBdUIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUMxRCw4QkFBeUIsR0FBVyxXQUFXLENBQUM7UUFDaEQsaUNBQTRCLEdBQVcsY0FBYyxDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVpQyxDQUFDO0lBRS9FLDBFQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsNEJBQTRCLENBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELHNFQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOztnQkFwQjJCLDhDQUE4Qzs7SUFsQlQ7UUFBaEUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7NEZBQThDO0lBQ2xEO1FBQTNELFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzt1RkFBdUM7SUFFekY7UUFBUixLQUFLLEVBQUU7c0ZBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzBGQUFjO0lBQ2I7UUFBUixLQUFLLEVBQUU7c0ZBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO2tGQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTt1RkFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7c0dBQXFEO0lBQ3BEO1FBQVIsS0FBSyxFQUFFO2lHQUF1RDtJQUN0RDtRQUFSLEtBQUssRUFBRTswRkFBZ0M7SUFDL0I7UUFBUixLQUFLLEVBQUU7b0dBQStFO0lBQzlFO1FBQVIsS0FBSyxFQUFFO3NHQUEyRDtJQUMxRDtRQUFSLEtBQUssRUFBRTt1R0FBaUQ7SUFDaEQ7UUFBUixLQUFLLEVBQUU7MEdBQXVEO0lBRXJEO1FBQVQsTUFBTSxFQUFFOzJGQUFvQztJQWpCbEMsZ0RBQWdEO1FBTDVELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw4Q0FBOEM7WUFDeEQsNHdDQUE0RTs7U0FFN0UsQ0FBQztPQUNXLGdEQUFnRCxDQXdDNUQ7SUFBRCx1REFBQztDQUFBLEFBeENELElBd0NDO1NBeENZLGdEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld1NlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0SW1hZ2UnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBmaWxlSW5wdXRJbWFnZTogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgndXNlckltYWdlJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgdXNlckltYWdlOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXJyZW50SW1hZ2U7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHR5cGU6ICdsaWdodCcgfCAnZGFyaycgfCAnJyA9ICcnO1xuICBASW5wdXQoKSBzaG93TGFiZWw6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG4gIEBJbnB1dCgpIGFkZEltYWdlRGVzY3JpcHRpb246IHN0cmluZyA9ICdDbGljayB0byBhZGQgYW4gaW1hZ2UnO1xuICBASW5wdXQoKSBtYXhJbWFnZVNpemU6IHN0cmluZyA9ICcxMDI0MCc7XG4gIEBJbnB1dCgpIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgc2l6ZS4gVGhlIG1heCBhbGxvd2VkIHNpemUgaXMnO1xuICBASW5wdXQoKSBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgZm9ybWF0ISc7XG4gIEBJbnB1dCgpIGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZyA9ICdBZGQgaW1hZ2UnO1xuICBASW5wdXQoKSByZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUmVtb3ZlIGltYWdlJztcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlJCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5pbml0aWFsaXplKFxuICAgICAgdGhpcy5maWxlSW5wdXRJbWFnZS5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy51c2VySW1hZ2UubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlJCxcbiAgICAgIHRoaXMuaW52YWxpZFNpemVEZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5hZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5yZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uXG4gICAgKTtcblxuICAgIHRoaXMudXBkYXRlSW1hZ2UoKTtcbiAgfVxuXG4gIHVwZGF0ZUltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSAhPSBudWxsICYmIHRoaXMuY3VycmVudEltYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2VydmljZS5zZXRJbWFnZSh0aGlzLmN1cnJlbnRJbWFnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=