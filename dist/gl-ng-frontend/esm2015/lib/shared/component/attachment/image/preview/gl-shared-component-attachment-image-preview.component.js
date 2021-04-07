import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
export class GlSharedComponentAttachmentImagePreviewComponent {
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
}
GlSharedComponentAttachmentImagePreviewComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-attachment-image-preview',
                template: "<div class=\"item-container {{ type }}\">\r\n  <gl-shared-component-title-label-button-container\r\n    *ngIf=\"showLabel\"\r\n    labelValue=\"Image\"\r\n    labelAlignment=\"left\"\r\n    [class]=\"type\"\r\n    [requiredFieldDescription]=\"requiredFieldDescription\"\r\n    [required]=\"required\">\r\n    <ng-content select=\"top\"></ng-content>\r\n      <gl-shared-component-button-image-tooltip\r\n        *ngFor=\"let b of service.buttons\"\r\n        [src]=\"b.src\"\r\n        [alt]=\"b.alt\"\r\n        [id]=\"b.id\"\r\n        [show]=\"b.show && !disabled || b.id === 'expand-with-step-2'\"\r\n        [callback]=\"b.callback\"\r\n      ></gl-shared-component-button-image-tooltip>\r\n      <ng-content select=\"[slot=buttons]\"></ng-content>\r\n    <ng-content select=\"bottom\"></ng-content>\r\n  </gl-shared-component-title-label-button-container>\r\n\r\n  <div class=\"attachment-container-content\">\r\n    <input\r\n      #fileInputImage\r\n      id=\"file-input-image\"\r\n      name=\"file-input-image\"\r\n      type=\"file\"\r\n      class=\"input-image\"\r\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\r\n      maxlength=\"1\"\r\n      [attr.data-maxsize]=\"maxImageSize\"\r\n      [title]=\"addImageDescription\"\r\n    />\r\n  </div>\r\n  <div class=\"image-container\">\r\n    <div #userImage id=\"image\"></div>\r\n  </div>\r\n</div>\r\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-direction:column;flex-grow:1}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .label-with-button-container .label-button-container{margin:0 .8em 0 0}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:.2em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid hsla(0,0%,100%,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{align-content:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .item-container .image-container #image{background-position-x:center;background-position-y:center;background-repeat:no-repeat;background-size:contain;border:0;content:\"\";flex-grow:1;min-height:30vh;min-width:100%}"]
            },] }
];
GlSharedComponentAttachmentImagePreviewComponent.ctorParameters = () => [
    { type: GlSharedComponentAttachmentImagePreviewService }
];
GlSharedComponentAttachmentImagePreviewComponent.propDecorators = {
    fileInputImage: [{ type: ViewChild, args: ['fileInputImage', { read: ElementRef, static: true },] }],
    userImage: [{ type: ViewChild, args: ['userImage', { read: ElementRef, static: true },] }],
    disabled: [{ type: Input }],
    currentImage: [{ type: Input }],
    required: [{ type: Input }],
    type: [{ type: Input }],
    showLabel: [{ type: Input }],
    requiredFieldDescription: [{ type: Input }],
    addImageDescription: [{ type: Input }],
    maxImageSize: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    addImageButtonDescription: [{ type: Input }],
    removeImageButtonDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2F0dGFjaG1lbnQvaW1hZ2UvcHJldmlldy9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOENBQThDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQU94SCxNQUFNLE9BQU8sZ0RBQWdEO0lBbUIzRCxZQUFtQixPQUF1RDtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQWZqRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUEwQixFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQiw2QkFBd0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUNwRCx3QkFBbUIsR0FBVyx1QkFBdUIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUMxRCw4QkFBeUIsR0FBVyxXQUFXLENBQUM7UUFDaEQsaUNBQTRCLEdBQVcsY0FBYyxDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVpQyxDQUFDO0lBRS9FLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsNEJBQTRCLENBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELG02Q0FBNEU7O2FBRTdFOzs7WUFOUSw4Q0FBOEM7Ozs2QkFRcEQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUM5RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUV6RCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7cUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3dDQUNMLEtBQUs7MkNBQ0wsS0FBSzs0QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcclxuICBAVmlld0NoaWxkKCdmaWxlSW5wdXRJbWFnZScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGZpbGVJbnB1dEltYWdlOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZXJJbWFnZScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIHVzZXJJbWFnZTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcblxyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY3VycmVudEltYWdlO1xyXG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICcnID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XHJcbiAgQElucHV0KCkgYWRkSW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0NsaWNrIHRvIGFkZCBhbiBpbWFnZSc7XHJcbiAgQElucHV0KCkgbWF4SW1hZ2VTaXplOiBzdHJpbmcgPSAnMTAyNDAnO1xyXG4gIEBJbnB1dCgpIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgc2l6ZS4gVGhlIG1heCBhbGxvd2VkIHNpemUgaXMnO1xyXG4gIEBJbnB1dCgpIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBmb3JtYXQhJztcclxuICBASW5wdXQoKSBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQWRkIGltYWdlJztcclxuICBASW5wdXQoKSByZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUmVtb3ZlIGltYWdlJztcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXHJcbiAgICAgIHRoaXMuZmlsZUlucHV0SW1hZ2UubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy51c2VySW1hZ2UubmF0aXZlRWxlbWVudCxcclxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUkLFxyXG4gICAgICB0aGlzLmludmFsaWRTaXplRGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMuaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLFxyXG4gICAgICB0aGlzLmFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMucmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvblxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVJbWFnZSgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSAhPSBudWxsICYmIHRoaXMuY3VycmVudEltYWdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXJ2aWNlLnNldEltYWdlKHRoaXMuY3VycmVudEltYWdlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19