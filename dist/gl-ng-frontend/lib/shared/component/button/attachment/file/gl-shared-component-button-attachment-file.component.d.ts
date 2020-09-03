import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
import { IAttachmentData } from "gl-sp-frontend";
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentButtonAttachmentFileComponent implements AfterViewInit {
    service: GlSharedComponentButtonAttachmentFileService;
    fileInput: ElementRef<HTMLInputElement>;
    /**
     * @param maxFileSize Size in KB.
     * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
     */
    maxFileSize: string;
    accept: string[];
    title: string;
    icon: string;
    attachmentIconSrc: string;
    description: string;
    attachments: IAttachmentData[];
    duplicatedDescription: string;
    invalidSizeDescription: string;
    invalidFormatDescription: string;
    currentValue$: EventEmitter<IAttachmentData>;
    constructor(service: GlSharedComponentButtonAttachmentFileService);
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentButtonAttachmentFileComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentButtonAttachmentFileComponent, "gl-shared-component-button-attachment-file", never, { "maxFileSize": "maxFileSize"; "title": "title"; "icon": "icon"; "description": "description"; "attachments": "attachments"; "duplicatedDescription": "duplicatedDescription"; "invalidSizeDescription": "invalidSizeDescription"; "invalidFormatDescription": "invalidFormatDescription"; "accept": "accept"; "attachmentIconSrc": "attachmentIconSrc"; }, { "currentValue$": "currentValue$"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gXCJnbC1zcC1mcm9udGVuZFwiO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlU2VydmljZTtcclxuICAgIGZpbGVJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG1heEZpbGVTaXplIFNpemUgaW4gS0IuXHJcbiAgICAgKiBAcGFyYW0gYXR0YWNobWVudEljb25TcmMgKE9wdGlvbmFsKSBJbiBjYXNlIHRoZSBzb3VyY2UgaXMgbm90IGluZm9ybWVkLCB0aGUgZGVmYXVsdCBwYXRoIHdpbGwgYmUgdGhlIG9uZSBpbiBnbC13LWZyb250ZW5kIHBhY2thZ2UuXHJcbiAgICAgKi9cclxuICAgIG1heEZpbGVTaXplOiBzdHJpbmc7XHJcbiAgICBhY2NlcHQ6IHN0cmluZ1tdO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGljb246IHN0cmluZztcclxuICAgIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdO1xyXG4gICAgZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGN1cnJlbnRWYWx1ZSQ6IEV2ZW50RW1pdHRlcjxJQXR0YWNobWVudERhdGE+O1xyXG4gICAgY29uc3RydWN0b3Ioc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2UpO1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XHJcbn1cclxuIl19