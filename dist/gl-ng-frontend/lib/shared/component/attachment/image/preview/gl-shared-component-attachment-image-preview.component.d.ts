import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentAttachmentImagePreviewComponent implements AfterViewInit {
    service: GlSharedComponentAttachmentImagePreviewService;
    fileInputImage: ElementRef<HTMLInputElement>;
    userImage: ElementRef<HTMLDivElement>;
    disabled: boolean;
    currentImage: any;
    required: boolean;
    type: 'light' | 'dark' | '';
    showLabel: boolean;
    requiredFieldDescription: string;
    addImageDescription: string;
    maxImageSize: string;
    invalidSizeDescription: string;
    invalidFormatDescription: string;
    addImageButtonDescription: string;
    removeImageButtonDescription: string;
    currentValue$: EventEmitter<any>;
    constructor(service: GlSharedComponentAttachmentImagePreviewService);
    ngAfterViewInit(): void;
    updateImage(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentAttachmentImagePreviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentAttachmentImagePreviewComponent, "gl-shared-component-attachment-image-preview", never, { "disabled": "disabled"; "required": "required"; "type": "type"; "showLabel": "showLabel"; "requiredFieldDescription": "requiredFieldDescription"; "addImageDescription": "addImageDescription"; "maxImageSize": "maxImageSize"; "invalidSizeDescription": "invalidSizeDescription"; "invalidFormatDescription": "invalidFormatDescription"; "addImageButtonDescription": "addImageButtonDescription"; "removeImageButtonDescription": "removeImageButtonDescription"; "currentImage": "currentImage"; }, { "currentValue$": "currentValue$"; }, never, ["top", "bottom"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZTtcclxuICAgIGZpbGVJbnB1dEltYWdlOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgdXNlckltYWdlOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgY3VycmVudEltYWdlOiBhbnk7XHJcbiAgICByZXF1aXJlZDogYm9vbGVhbjtcclxuICAgIHR5cGU6ICdsaWdodCcgfCAnZGFyaycgfCAnJztcclxuICAgIHNob3dMYWJlbDogYm9vbGVhbjtcclxuICAgIHJlcXVpcmVkRmllbGREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYWRkSW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgbWF4SW1hZ2VTaXplOiBzdHJpbmc7XHJcbiAgICBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGN1cnJlbnRWYWx1ZSQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSk7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIHVwZGF0ZUltYWdlKCk6IHZvaWQ7XHJcbn1cclxuIl19