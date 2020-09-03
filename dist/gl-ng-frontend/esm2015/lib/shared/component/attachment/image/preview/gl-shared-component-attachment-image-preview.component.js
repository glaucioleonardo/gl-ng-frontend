import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
let GlSharedComponentAttachmentImagePreviewComponent = class GlSharedComponentAttachmentImagePreviewComponent {
    constructor(service) {
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
    ngAfterViewInit() {
        this.service.initialize(this.fileInputImage.nativeElement, this.userImage.nativeElement, this.currentValue$, this.invalidSizeDescription, this.invalidFormatDescription, this.addImageButtonDescription, this.removeImageButtonDescription);
        this.updateImage();
    }
    updateImage() {
        if (this.currentImage != null && this.currentImage.length > 0) {
            this.service.setImage(this.currentImage);
        }
    }
};
GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = () => [
    { type: GlSharedComponentAttachmentImagePreviewService }
];
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
export { GlSharedComponentAttachmentImagePreviewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2ltYWdlL3ByZXZpZXcvZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw4Q0FBOEMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBT3hILElBQWEsZ0RBQWdELEdBQTdELE1BQWEsZ0RBQWdEO0lBbUIzRCxZQUFtQixPQUF1RDtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQWZqRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUEwQixFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQiw2QkFBd0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUNwRCx3QkFBbUIsR0FBVyx1QkFBdUIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUMxRCw4QkFBeUIsR0FBVyxXQUFXLENBQUM7UUFDaEQsaUNBQTRCLEdBQVcsY0FBYyxDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVpQyxDQUFDO0lBRS9FLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsNEJBQTRCLENBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFyQjZCLDhDQUE4Qzs7QUFsQlQ7SUFBaEUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7d0ZBQThDO0FBQ2xEO0lBQTNELFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzttRkFBdUM7QUFFekY7SUFBUixLQUFLLEVBQUU7a0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3NGQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7a0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzhFQUFrQztBQUNqQztJQUFSLEtBQUssRUFBRTttRkFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7a0dBQXFEO0FBQ3BEO0lBQVIsS0FBSyxFQUFFOzZGQUF1RDtBQUN0RDtJQUFSLEtBQUssRUFBRTtzRkFBZ0M7QUFDL0I7SUFBUixLQUFLLEVBQUU7Z0dBQStFO0FBQzlFO0lBQVIsS0FBSyxFQUFFO2tHQUEyRDtBQUMxRDtJQUFSLEtBQUssRUFBRTttR0FBaUQ7QUFDaEQ7SUFBUixLQUFLLEVBQUU7c0dBQXVEO0FBRXJEO0lBQVQsTUFBTSxFQUFFO3VGQUFvQztBQWpCbEMsZ0RBQWdEO0lBTDVELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4Q0FBOEM7UUFDeEQsNHdDQUE0RTs7S0FFN0UsQ0FBQztHQUNXLGdEQUFnRCxDQXdDNUQ7U0F4Q1ksZ0RBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXRJbWFnZScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGZpbGVJbnB1dEltYWdlOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd1c2VySW1hZ2UnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSB1c2VySW1hZ2U6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1cnJlbnRJbWFnZTtcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICcnID0gJyc7XG4gIEBJbnB1dCgpIHNob3dMYWJlbDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcbiAgQElucHV0KCkgYWRkSW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0NsaWNrIHRvIGFkZCBhbiBpbWFnZSc7XG4gIEBJbnB1dCgpIG1heEltYWdlU2l6ZTogc3RyaW5nID0gJzEwMjQwJztcbiAgQElucHV0KCkgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBzaXplLiBUaGUgbWF4IGFsbG93ZWQgc2l6ZSBpcyc7XG4gIEBJbnB1dCgpIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBmb3JtYXQhJztcbiAgQElucHV0KCkgYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nID0gJ0FkZCBpbWFnZSc7XG4gIEBJbnB1dCgpIHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZW1vdmUgaW1hZ2UnO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmZpbGVJbnB1dEltYWdlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnVzZXJJbWFnZS5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUkLFxuICAgICAgdGhpcy5pbnZhbGlkU2l6ZURlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb24sXG4gICAgICB0aGlzLnJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgdGhpcy51cGRhdGVJbWFnZSgpO1xuICB9XG5cbiAgdXBkYXRlSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlICE9IG51bGwgJiYgdGhpcy5jdXJyZW50SW1hZ2UubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldEltYWdlKHRoaXMuY3VycmVudEltYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==