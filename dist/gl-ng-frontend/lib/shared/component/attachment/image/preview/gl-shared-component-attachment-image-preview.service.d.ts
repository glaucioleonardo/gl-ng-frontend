import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { IImageButtonTooltip } from '../../../button/image/tooltip/gl-shared-component-button-image-tooltip.interface';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { IImageString, IImageUpdate } from './gl-shared-component-attachment-image-preview.interface';
export declare class GlSharedComponentAttachmentImagePreviewService {
    private _alert;
    private readonly image;
    retrieveUpdate: Subject<IImageUpdate>;
    labelIcons: string;
    buttons: IImageButtonTooltip[];
    private _accepts;
    private _input;
    private _userImage;
    private _currentValue;
    constructor(_alert: GlSharedComponentModalAlertService);
    initialize(input: HTMLInputElement, userImage: HTMLDivElement, currentValue: EventEmitter<IImageString>, invalidSizeDescription: string, invalidFormatDescription: string, addImageButtonDescription: string, removeImageButtonDescription: string): void;
    onChange(invalidSizeDescription: string, invalidFormatDescription: string): void;
    clearInput(): void;
    updateButtons(hasValue: boolean): void;
    setImage(data: IImageUpdate): void;
    addImage(): void;
    removeImage(init?: boolean): void;
}
