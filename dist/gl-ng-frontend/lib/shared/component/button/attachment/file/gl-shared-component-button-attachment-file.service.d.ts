import { EventEmitter } from '@angular/core';
import { IAttachmentData } from 'gl-w-frontend/lib/es5/scripts/core/services/attachment/core-services-attachment.interface';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
export declare class GlSharedComponentButtonAttachmentFileService {
    _alert: GlSharedComponentModalAlertService;
    private _input;
    private _accepts;
    private _currentValue;
    private _attachments;
    constructor(_alert: GlSharedComponentModalAlertService);
    initialize(input: HTMLInputElement, currentValue: EventEmitter<IAttachmentData>, attachments: IAttachmentData[], duplicatedDescription: string, invalidSizeDescription: string, invalidFormatDescription: string, attachmentIconSrc: string): void;
    addAttachment(): void;
    onChange(duplicatedDescription: string, invalidSizeDescription: string, invalidFormatDescription: string, attachmentIconSrc: string): void;
    clearInput(): void;
}
