import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '../../../title/label/button/container/gl-shared-component-title-label-button-container.component';
import * as ɵngcc3 from '../../../button/image/tooltip/gl-shared-component-button-image-tooltip.component';

const _c0 = ["fileInputImage"];
const _c1 = ["userImage"];
function GlSharedComponentAttachmentImagePreviewComponent_gl_shared_component_title_label_button_container_1_gl_shared_component_button_image_tooltip_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "gl-shared-component-button-image-tooltip", 9);
} if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const ctx_r3 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("src", b_r4.src)("alt", b_r4.alt)("id", b_r4.id)("show", b_r4.show && !ctx_r3.disabled || b_r4.id === "expand-container-2")("callback", b_r4.callback);
} }
function GlSharedComponentAttachmentImagePreviewComponent_gl_shared_component_title_label_button_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "gl-shared-component-title-label-button-container", 7);
    ɵngcc0.ɵɵprojection(1);
    ɵngcc0.ɵɵtemplate(2, GlSharedComponentAttachmentImagePreviewComponent_gl_shared_component_title_label_button_container_1_gl_shared_component_button_image_tooltip_2_Template, 1, 5, "gl-shared-component-button-image-tooltip", 8);
    ɵngcc0.ɵɵprojection(3, 1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.type);
    ɵngcc0.ɵɵproperty("requiredFieldDescription", ctx_r0.requiredFieldDescription)("required", ctx_r0.required);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r0.service.buttons);
} }
const _c2 = [[["top"]], [["bottom"]]];
const _c3 = ["top", "bottom"];
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
GlSharedComponentAttachmentImagePreviewComponent.ɵfac = function GlSharedComponentAttachmentImagePreviewComponent_Factory(t) { return new (t || GlSharedComponentAttachmentImagePreviewComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentAttachmentImagePreviewService)); };
GlSharedComponentAttachmentImagePreviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentAttachmentImagePreviewComponent, selectors: [["gl-shared-component-attachment-image-preview"]], viewQuery: function GlSharedComponentAttachmentImagePreviewComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
        ɵngcc0.ɵɵstaticViewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fileInputImage = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.userImage = _t.first);
    } }, inputs: { disabled: "disabled", required: "required", type: "type", showLabel: "showLabel", requiredFieldDescription: "requiredFieldDescription", addImageDescription: "addImageDescription", maxImageSize: "maxImageSize", invalidSizeDescription: "invalidSizeDescription", invalidFormatDescription: "invalidFormatDescription", addImageButtonDescription: "addImageButtonDescription", removeImageButtonDescription: "removeImageButtonDescription", currentImage: "currentImage" }, outputs: { currentValue$: "currentValue$" }, ngContentSelectors: _c3, decls: 8, vars: 6, consts: [["labelValue", "Image", "labelAlignment", "left", 3, "class", "requiredFieldDescription", "required", 4, "ngIf"], [1, "attachment-container-content"], ["id", "file-input-image", "name", "file-input-image", "type", "file", "accept", "image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml", "maxlength", "1", 1, "input-image", 3, "title"], ["fileInputImage", ""], [1, "image-container"], ["id", "image"], ["userImage", ""], ["labelValue", "Image", "labelAlignment", "left", 3, "requiredFieldDescription", "required"], [3, "src", "alt", "id", "show", "callback", 4, "ngFor", "ngForOf"], [3, "src", "alt", "id", "show", "callback"]], template: function GlSharedComponentAttachmentImagePreviewComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef(_c2);
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, GlSharedComponentAttachmentImagePreviewComponent_gl_shared_component_title_label_button_container_1_Template, 4, 5, "gl-shared-component-title-label-button-container", 0);
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelement(3, "input", 2, 3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(5, "div", 4);
        ɵngcc0.ɵɵelement(6, "div", 5, 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("item-container ", ctx.type, "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.showLabel);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("title", ctx.addImageDescription);
        ɵngcc0.ɵɵattribute("data-maxsize", ctx.maxImageSize);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.GlSharedComponentTitleLabelButtonContainerComponent, ɵngcc1.NgForOf, ɵngcc3.GlSharedComponentButtonImageTooltipComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}[_nghost-%COMP%]  .item-container{background-color:#333437;display:flex;flex-grow:1;flex-direction:column}[_nghost-%COMP%]  .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}[_nghost-%COMP%]  .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:1.5em}[_nghost-%COMP%]  .item-container.light{background-color:transparent;border-right:.5px solid rgba(255,255,255,.1)}[_nghost-%COMP%]  .item-container.dark{background-color:#161617}[_nghost-%COMP%]  .item-container.dark label{background-color:#111112}[_nghost-%COMP%]  .item-container .attachment-container-content .input-image{display:none}[_nghost-%COMP%]  .item-container .image-container{flex-grow:1;display:flex;justify-content:center;align-content:center}[_nghost-%COMP%]  .item-container .image-container #image{content:\"\";background-size:auto 100%;background-repeat:no-repeat;min-width:100%;min-height:30vh;border:0;background-position-x:center;background-position-y:center;flex-grow:1}"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentAttachmentImagePreviewComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-attachment-image-preview',
                template: "<div class=\"item-container {{ type }}\">\n  <gl-shared-component-title-label-button-container\n    *ngIf=\"showLabel\"\n    labelValue=\"Image\"\n    labelAlignment=\"left\"\n    [class]=\"type\"\n    [requiredFieldDescription]=\"requiredFieldDescription\"\n    [required]=\"required\">\n    <ng-content select=\"top\"></ng-content>\n    <gl-shared-component-button-image-tooltip\n      *ngFor=\"let b of service.buttons\"\n      [src]=\"b.src\"\n      [alt]=\"b.alt\"\n      [id]=\"b.id\"\n      [show]=\"b.show && !disabled || b.id === 'expand-container-2'\"\n      [callback]=\"b.callback\"\n    ></gl-shared-component-button-image-tooltip>\n    <ng-content select=\"bottom\"></ng-content>\n  </gl-shared-component-title-label-button-container>\n\n  <div class=\"attachment-container-content\">\n    <input\n      #fileInputImage\n      id=\"file-input-image\"\n      name=\"file-input-image\"\n      type=\"file\"\n      class=\"input-image\"\n      accept=\"image/tif, image/tiff, image/x-png, image/jpeg, image/jpg, image/bmp, image/gif, image/svg+xml\"\n      maxlength=\"1\"\n      [attr.data-maxsize]=\"maxImageSize\"\n      [title]=\"addImageDescription\"\n    />\n  </div>\n  <div class=\"image-container\">\n    <div #userImage id=\"image\"></div>\n  </div>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}:host::ng-deep .item-container{background-color:#333437;display:flex;flex-grow:1;flex-direction:column}:host::ng-deep .item-container gl-shared-component-title-label-button-container{flex-grow:0;position:relative}:host::ng-deep .item-container gl-shared-component-title-label-button-container .required-fill-dot{right:1.5em}:host::ng-deep .item-container.light{background-color:transparent;border-right:.5px solid rgba(255,255,255,.1)}:host::ng-deep .item-container.dark{background-color:#161617}:host::ng-deep .item-container.dark label{background-color:#111112}:host::ng-deep .item-container .attachment-container-content .input-image{display:none}:host::ng-deep .item-container .image-container{flex-grow:1;display:flex;justify-content:center;align-content:center}:host::ng-deep .item-container .image-container #image{content:\"\";background-size:auto 100%;background-repeat:no-repeat;min-width:100%;min-height:30vh;border:0;background-position-x:center;background-position-y:center;flex-grow:1}"]
            }]
    }], function () { return [{ type: GlSharedComponentAttachmentImagePreviewService }]; }, { disabled: [{
            type: Input
        }], required: [{
            type: Input
        }], type: [{
            type: Input
        }], showLabel: [{
            type: Input
        }], requiredFieldDescription: [{
            type: Input
        }], addImageDescription: [{
            type: Input
        }], maxImageSize: [{
            type: Input
        }], invalidSizeDescription: [{
            type: Input
        }], invalidFormatDescription: [{
            type: Input
        }], addImageButtonDescription: [{
            type: Input
        }], removeImageButtonDescription: [{
            type: Input
        }], currentValue$: [{
            type: Output
        }], fileInputImage: [{
            type: ViewChild,
            args: ['fileInputImage', { read: ElementRef, static: true }]
        }], userImage: [{
            type: ViewChild,
            args: ['userImage', { read: ElementRef, static: true }]
        }], currentImage: [{
            type: Input
        }] }); })();
export { GlSharedComponentAttachmentImagePreviewComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pbWFnZS9wcmV2aWV3L2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsOENBQThDLEVBQUUsTUFBTSx3REFBd0QsQ0FBQyx4SEFBeEgsT0FBTyxFQUFFLDhDQUE4QyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFPeEgsSUFBYTtXQUFnRCxHQUE3RCxNQUFhO3lCQUFnRCxPQW1CM0QsWUFBbUIsT0FBdUQsWUFBdkQsWUFBTyxHQUFQLE9BQU8sQ0FBZ0QsU0FmakUsYUFBUSxHQUFHLEtBQUssQ0FBQztFQUVqQixhQUFRLEdBQUcsS0FBSyxDQUFDLFNBQ2pCLFNBQUksR0FBMEIsRUFBRSxDQUFDLFNBQ2pDLGNBQVMsR0FBWSxJQUFJLENBQUMsU0FDMUI7O1FBQXdCLEdBQVcsZ0JBQWdCLENBQUM7S0FDcEQ7RUFBbUIsR0FBVyx1QkFBdUIsQ0FBQyxTQUN0RCxpQkFBWSxHQUFXLE9BQU8sQ0FBQyxTQUMvQiwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQyxTQUM5RTtFQUF3QixHQUFXLHNCQUFzQixDQUFDLFNBQzFELDhCQUF5QixHQUFXO1NBQVcsQ0FBQztHQUNoRDtJQUE0QixHQUFXLGNBQWMsQ0FBQyxTQUVyRDtLQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUVpQyxDQUFDLEtBRS9FLGVBQWUsYUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FD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RUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTt1RkFBb0MsdkZBQW5DLHVGQUFtQztBQWpCbEMsZ0RBQWdELG9CQUw1RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUUsbEdBSUMsZ0RBQWdELG9CQUw1RCxTQUFTLENBQUMsVUFDVCxRQUFRLEVBQUU7O1lBQThDLEFBQUE7S0FDeEQsQUFBQTt1c0NBQTRFLEFBQUE7bzlCQUU3RSxDQUFDLElBQ1csZ0RBQWdELENBd0M1RCxXQXhDWSxqRUFEWixDQUFDLElBQ1csZ0RBQWdELENBd0M1RDs7VUF4QzREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF5QzdEOztBQWpEQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dEltYWdlJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZmlsZUlucHV0SW1hZ2U6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3VzZXJJbWFnZScsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIHVzZXJJbWFnZTogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VycmVudEltYWdlO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSB0eXBlOiAnbGlnaHQnIHwgJ2RhcmsnIHwgJycgPSAnJztcbiAgQElucHV0KCkgc2hvd0xhYmVsOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgcmVxdWlyZWRGaWVsZERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUmVxdWlyZWQgZmllbGQnO1xuICBASW5wdXQoKSBhZGRJbWFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQ2xpY2sgdG8gYWRkIGFuIGltYWdlJztcbiAgQElucHV0KCkgbWF4SW1hZ2VTaXplOiBzdHJpbmcgPSAnMTAyNDAnO1xuICBASW5wdXQoKSBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW52YWxpZCBmaWxlIHNpemUuIFRoZSBtYXggYWxsb3dlZCBzaXplIGlzJztcbiAgQElucHV0KCkgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW52YWxpZCBmaWxlIGZvcm1hdCEnO1xuICBASW5wdXQoKSBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQWRkIGltYWdlJztcbiAgQElucHV0KCkgcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nID0gJ1JlbW92ZSBpbWFnZSc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld1NlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UuaW5pdGlhbGl6ZShcbiAgICAgIHRoaXMuZmlsZUlucHV0SW1hZ2UubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMudXNlckltYWdlLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSQsXG4gICAgICB0aGlzLmludmFsaWRTaXplRGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmludmFsaWRGb3JtYXREZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbixcbiAgICAgIHRoaXMucmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvblxuICAgICk7XG5cbiAgICB0aGlzLnVwZGF0ZUltYWdlKCk7XG4gIH1cblxuICB1cGRhdGVJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2UgIT0gbnVsbCAmJiB0aGlzLmN1cnJlbnRJbWFnZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNlcnZpY2Uuc2V0SW1hZ2UodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgIH1cbiAgfVxufVxuIl19