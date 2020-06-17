import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import { IAttachmentLink } from './gl-shared-component-modal-attachment-link.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentModalAttachmentLinkService {
    private _alert;
    name: HTMLInputElement;
    url: HTMLInputElement;
    linkIcon: string;
    showModal: boolean;
    modalClass: string;
    currentValue: Subject<IAttachmentLink>;
    editing: boolean;
    editId: number;
    private _name;
    private _url;
    constructor(_alert: GlSharedComponentModalAlertService);
    setup(name: HTMLInputElement, url: HTMLInputElement): void;
    onCancel(): void;
    onConfirm(): void;
    onName(e: Event): void;
    onUrl(e: Event): void;
    validData(): boolean;
    modal(show: any): void;
    edit(name: string, url: string, editId: number): void;
    onModalKeyUp(e: KeyboardEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentModalAttachmentLinkService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSUF0dGFjaG1lbnRMaW5rIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQXR0YWNobWVudExpbmtTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2FsZXJ0O1xyXG4gICAgbmFtZTogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHVybDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIGxpbmtJY29uOiBzdHJpbmc7XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgICBtb2RhbENsYXNzOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8SUF0dGFjaG1lbnRMaW5rPjtcclxuICAgIGVkaXRpbmc6IGJvb2xlYW47XHJcbiAgICBlZGl0SWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX25hbWU7XHJcbiAgICBwcml2YXRlIF91cmw7XHJcbiAgICBjb25zdHJ1Y3RvcihfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpO1xyXG4gICAgc2V0dXAobmFtZTogSFRNTElucHV0RWxlbWVudCwgdXJsOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZDtcclxuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XHJcbiAgICBvbkNvbmZpcm0oKTogdm9pZDtcclxuICAgIG9uTmFtZShlOiBFdmVudCk6IHZvaWQ7XHJcbiAgICBvblVybChlOiBFdmVudCk6IHZvaWQ7XHJcbiAgICB2YWxpZERhdGEoKTogYm9vbGVhbjtcclxuICAgIG1vZGFsKHNob3c6IGFueSk6IHZvaWQ7XHJcbiAgICBlZGl0KG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGVkaXRJZDogbnVtYmVyKTogdm9pZDtcclxuICAgIG9uTW9kYWxLZXlVcChlOiBLZXlib2FyZEV2ZW50KTogdm9pZDtcclxufVxyXG4iXX0=