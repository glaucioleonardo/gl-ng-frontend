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
                template: "<div class=\"item-container {{ type }}\">\n  <gl-shared-component-title-label-button-container\n    *ngIf=\"showLabel\"\n    labelValue=\"Image\"\n    labelAlignment=\"left\"\n    [class]=\"type\"\n    [requiredFieldDescription]=\"requiredFieldDescription\"\n    [required]=\"required\">\n    <ng-content select=\"top\"></ng-content>\n      <gl-shared-component-button-image-tooltip\n        *ngFor=\"let b of service.buttons\"\n        [src]=\"b.src\"\n        [alt]=\"b.alt\"\n        [id]=\"b.id\"\n        [show]=\"b.show && !disabled || b.id === 'expand-with-step-2'\"\n        [callback]=\"b.callback\"\n      ></gl-shared-component-button-image-tooltip>\n      <ng-content select=\"[slot=buttons]\"></ng-content>\n    <ng-content select=\"bottom\"></ng-content>\n  </gl-shared-component-title-label-button-container>\n\n  <div class=\"attachment-container-content\">\n    <input\n      #fileInputImage\n      id=\"file-input-image\"\n      name=\"file-input-image\"\n      type=\"file\"\n      class=\"input-image\"\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\n      maxlength=\"1\"\n      [attr.data-maxsize]=\"maxImageSize\"\n      [title]=\"addImageDescription\"\n    />\n  </div>\n  <div class=\"image-container\">\n    <div #userImage id=\"image\"></div>\n  </div>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L2F0dGFjaG1lbnQvaW1hZ2UvcHJldmlldy9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOENBQThDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQU94SCxNQUFNLE9BQU8sZ0RBQWdEO0lBbUIzRCxZQUFtQixPQUF1RDtRQUF2RCxZQUFPLEdBQVAsT0FBTyxDQUFnRDtRQWZqRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUEwQixFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQiw2QkFBd0IsR0FBVyxnQkFBZ0IsQ0FBQztRQUNwRCx3QkFBbUIsR0FBVyx1QkFBdUIsQ0FBQztRQUN0RCxpQkFBWSxHQUFXLE9BQU8sQ0FBQztRQUMvQiwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUMxRCw4QkFBeUIsR0FBVyxXQUFXLENBQUM7UUFDaEQsaUNBQTRCLEdBQVcsY0FBYyxDQUFDO1FBRXJELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVpQyxDQUFDO0lBRS9FLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsc0JBQXNCLEVBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFDN0IsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsNEJBQTRCLENBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4Q0FBOEM7Z0JBQ3hELHUxQ0FBNEU7O2FBRTdFOzs7WUFOUSw4Q0FBOEM7Ozs2QkFRcEQsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3dCQUM5RCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUV6RCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUNBQ0wsS0FBSztrQ0FDTCxLQUFLOzJCQUNMLEtBQUs7cUNBQ0wsS0FBSzt1Q0FDTCxLQUFLO3dDQUNMLEtBQUs7MkNBQ0wsS0FBSzs0QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0e1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXRJbWFnZScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGZpbGVJbnB1dEltYWdlOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBAVmlld0NoaWxkKCd1c2VySW1hZ2UnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSB1c2VySW1hZ2U6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGN1cnJlbnRJbWFnZTtcbiAgQElucHV0KCkgcmVxdWlyZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdHlwZTogJ2xpZ2h0JyB8ICdkYXJrJyB8ICcnID0gJyc7XG4gIEBJbnB1dCgpIHNob3dMYWJlbDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlcXVpcmVkIGZpZWxkJztcbiAgQElucHV0KCkgYWRkSW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0NsaWNrIHRvIGFkZCBhbiBpbWFnZSc7XG4gIEBJbnB1dCgpIG1heEltYWdlU2l6ZTogc3RyaW5nID0gJzEwMjQwJztcbiAgQElucHV0KCkgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBzaXplLiBUaGUgbWF4IGFsbG93ZWQgc2l6ZSBpcyc7XG4gIEBJbnB1dCgpIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBmb3JtYXQhJztcbiAgQElucHV0KCkgYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nID0gJ0FkZCBpbWFnZSc7XG4gIEBJbnB1dCgpIHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZW1vdmUgaW1hZ2UnO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmZpbGVJbnB1dEltYWdlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLnVzZXJJbWFnZS5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUkLFxuICAgICAgdGhpcy5pbnZhbGlkU2l6ZURlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb24sXG4gICAgICB0aGlzLnJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb25cbiAgICApO1xuXG4gICAgdGhpcy51cGRhdGVJbWFnZSgpO1xuICB9XG5cbiAgdXBkYXRlSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlICE9IG51bGwgJiYgdGhpcy5jdXJyZW50SW1hZ2UubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLnNldEltYWdlKHRoaXMuY3VycmVudEltYWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==