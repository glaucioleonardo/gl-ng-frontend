import { Subject } from 'rxjs';
export declare class GlSharedComponentModalAlertService {
    message: string;
    isOK: boolean;
    showModal: boolean;
    modalClass: string;
    currentValue: Subject<boolean>;
    resolvePromise: any;
    constructor();
    show(message: any): Promise<unknown>;
    showYesNo(message: any): Promise<unknown>;
    hide(): void;
    onNo(): void;
    onYes(): void;
    onOk(): void;
    private modal;
    onModalKeyUp(e: KeyboardEvent): void;
}
