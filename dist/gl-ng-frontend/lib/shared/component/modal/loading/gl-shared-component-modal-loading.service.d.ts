import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentModalLoadingService {
    private _defaultMessage;
    defaultMessage: string;
    _loadingStatus: string;
    _showLoading: boolean;
    _mainLoading: HTMLDivElement;
    constructor();
    checkElement(): Promise<unknown>;
    setup(mainLoading: HTMLDivElement): void;
    hide(): void;
    show(status?: string): void;
    status(message: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentModalLoadingService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1sb2FkaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbExvYWRpbmdTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRNZXNzYWdlO1xyXG4gICAgZGVmYXVsdE1lc3NhZ2U6IHN0cmluZztcclxuICAgIF9sb2FkaW5nU3RhdHVzOiBzdHJpbmc7XHJcbiAgICBfc2hvd0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBfbWFpbkxvYWRpbmc6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIGNoZWNrRWxlbWVudCgpOiBQcm9taXNlPHVua25vd24+O1xyXG4gICAgc2V0dXAobWFpbkxvYWRpbmc6IEhUTUxEaXZFbGVtZW50KTogdm9pZDtcclxuICAgIGhpZGUoKTogdm9pZDtcclxuICAgIHNob3coc3RhdHVzPzogc3RyaW5nKTogdm9pZDtcclxuICAgIHN0YXR1cyhtZXNzYWdlOiBhbnkpOiB2b2lkO1xyXG59XHJcbiJdfQ==