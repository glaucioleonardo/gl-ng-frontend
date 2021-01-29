import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';
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
}
