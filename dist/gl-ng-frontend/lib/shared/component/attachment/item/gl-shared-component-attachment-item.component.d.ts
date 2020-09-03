import { EventEmitter } from '@angular/core';
export declare class GlSharedComponentAttachmentItemComponent {
    disabled: boolean;
    attachmentUrl: string;
    fileName: string;
    fileIcon: string;
    id: number;
    type: string;
    addingSmooth: boolean;
    onItemClick: EventEmitter<void>;
    removeCurrentItem: EventEmitter<{
        id: number;
    }>;
    editCurrentItem: EventEmitter<{
        id: number;
    }>;
    constructor();
    removeItem(id: number): void;
    editItem(id: number): void;
    onButtonClick(e: Event): void;
}
