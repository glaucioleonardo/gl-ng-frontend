import { EventEmitter } from '@angular/core';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { IAttachmentData } from 'gl-sp-frontend';
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
