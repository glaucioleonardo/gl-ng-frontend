import { Subject } from 'rxjs';
export declare class GlSharedComponentModalAlertService {
    message: string;
    isOK: boolean;
    showModal: boolean;
    modalClass: string;
    currentValue: Subject<boolean>;
    resolvePromise: any;
    customYes: string;
    customNo: string;
    constructor();
    show(message: any): Promise<unknown>;
    showYesNo(message: any, customYes?: string, customNo?: string): Promise<unknown>;
    hide(): void;
    onNo(): void;
    onYes(): void;
    onOk(): void;
    private modal;
    onModalKeyUp(e: KeyboardEvent): void;
}
