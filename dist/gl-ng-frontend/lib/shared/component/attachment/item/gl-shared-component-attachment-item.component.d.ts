import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentAttachmentItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentAttachmentItemComponent, "gl-shared-component-attachment-item", never, { "disabled": "disabled"; "attachmentUrl": "attachmentUrl"; "fileName": "fileName"; "fileIcon": "fileIcon"; "id": "id"; "type": "type"; "addingSmooth": "addingSmooth"; }, { "onItemClick": "onClick"; "removeCurrentItem": "removeCurrentItem"; "editCurrentItem": "editCurrentItem"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJdGVtQ29tcG9uZW50IHtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgYXR0YWNobWVudFVybDogc3RyaW5nO1xyXG4gICAgZmlsZU5hbWU6IHN0cmluZztcclxuICAgIGZpbGVJY29uOiBzdHJpbmc7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgYWRkaW5nU21vb3RoOiBib29sZWFuO1xyXG4gICAgb25JdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIHJlbW92ZUN1cnJlbnRJdGVtOiBFdmVudEVtaXR0ZXI8e1xyXG4gICAgICAgIGlkOiBudW1iZXI7XHJcbiAgICB9PjtcclxuICAgIGVkaXRDdXJyZW50SXRlbTogRXZlbnRFbWl0dGVyPHtcclxuICAgICAgICBpZDogbnVtYmVyO1xyXG4gICAgfT47XHJcbiAgICBjb25zdHJ1Y3RvcigpO1xyXG4gICAgcmVtb3ZlSXRlbShpZDogbnVtYmVyKTogdm9pZDtcclxuICAgIGVkaXRJdGVtKGlkOiBudW1iZXIpOiB2b2lkO1xyXG4gICAgb25CdXR0b25DbGljayhlOiBFdmVudCk6IHZvaWQ7XHJcbn1cclxuIl19