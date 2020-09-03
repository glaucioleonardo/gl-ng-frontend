import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
import { IAttachmentData } from "gl-sp-frontend";
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
}
