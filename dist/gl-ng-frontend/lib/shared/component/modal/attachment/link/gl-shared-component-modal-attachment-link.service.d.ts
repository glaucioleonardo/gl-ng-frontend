import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import { IAttachmentLink } from './gl-shared-component-modal-attachment-link.interface';
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
    onConfirm(): Promise<void>;
    onName(e: Event): void;
    onUrl(e: Event): void;
    validData(): Promise<boolean>;
    modal(show: any): void;
    edit(name: string, url: string, editId: number): void;
    onModalKeyUp(e: KeyboardEvent): Promise<void>;
}
