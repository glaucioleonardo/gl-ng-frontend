import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/es5/scripts/core/services/attachment/core-services-attachment.interface';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2U7XHJcbiAgICBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBtYXhGaWxlU2l6ZSBTaXplIGluIEtCLlxyXG4gICAgICogQHBhcmFtIGF0dGFjaG1lbnRJY29uU3JjIChPcHRpb25hbCkgSW4gY2FzZSB0aGUgc291cmNlIGlzIG5vdCBpbmZvcm1lZCwgdGhlIGRlZmF1bHQgcGF0aCB3aWxsIGJlIHRoZSBvbmUgaW4gZ2wtdy1mcm9udGVuZCBwYWNrYWdlLlxyXG4gICAgICovXHJcbiAgICBtYXhGaWxlU2l6ZTogc3RyaW5nO1xyXG4gICAgYWNjZXB0OiBzdHJpbmdbXTtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBpY29uOiBzdHJpbmc7XHJcbiAgICBhdHRhY2htZW50SWNvblNyYzogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXTtcclxuICAgIGR1cGxpY2F0ZWREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50VmFsdWUkOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPjtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==