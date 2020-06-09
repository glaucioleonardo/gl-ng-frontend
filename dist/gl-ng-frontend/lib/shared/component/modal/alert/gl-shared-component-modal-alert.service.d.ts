import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentModalAlertService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIHtcclxuICAgIG1lc3NhZ2U6IHN0cmluZztcclxuICAgIGlzT0s6IGJvb2xlYW47XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgICBtb2RhbENsYXNzOiBzdHJpbmc7XHJcbiAgICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8Ym9vbGVhbj47XHJcbiAgICByZXNvbHZlUHJvbWlzZTogYW55O1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIHNob3cobWVzc2FnZTogYW55KTogUHJvbWlzZTx1bmtub3duPjtcclxuICAgIHNob3dZZXNObyhtZXNzYWdlOiBhbnkpOiBQcm9taXNlPHVua25vd24+O1xyXG4gICAgaGlkZSgpOiB2b2lkO1xyXG4gICAgb25ObygpOiB2b2lkO1xyXG4gICAgb25ZZXMoKTogdm9pZDtcclxuICAgIG9uT2soKTogdm9pZDtcclxuICAgIHByaXZhdGUgbW9kYWw7XHJcbiAgICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XHJcbn1cclxuIl19