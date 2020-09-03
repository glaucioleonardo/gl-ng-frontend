import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedViewErrorMessageComponent implements AfterViewInit {
    mainContainer: ElementRef<HTMLDivElement>;
    blurBackground: string;
    background: string;
    logoImageScr: string;
    logoImageAlt: string;
    logoHorizontalPosition: 'left' | 'right';
    logoVerticalPosition: 'top' | 'bottom';
    errorPosition: 'left' | 'right';
    errorCode: string | number;
    errorMessage: string;
    errorButtonLabel: string;
    errorButtonAction$: EventEmitter<void>;
    footerMainDescription: string;
    footerShowContainer: boolean;
    footerDescription: string;
    footerImageDescription: string;
    footerImageSrc: string;
    footerLink: string;
    constructor();
    ngAfterViewInit(): void;
    errorButtonAction(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedViewErrorMessageComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedViewErrorMessageComponent, "gl-shared-view-error-message", never, { "logoHorizontalPosition": "logoHorizontalPosition"; "logoVerticalPosition": "logoVerticalPosition"; "errorPosition": "errorPosition"; "footerImageDescription": "footerImageDescription"; "blurBackground": "blurBackground"; "background": "background"; "logoImageScr": "logoImageScr"; "logoImageAlt": "logoImageAlt"; "errorCode": "errorCode"; "errorMessage": "errorMessage"; "errorButtonLabel": "errorButtonLabel"; "footerMainDescription": "footerMainDescription"; "footerShowContainer": "footerShowContainer"; "footerDescription": "footerDescription"; "footerImageSrc": "footerImageSrc"; "footerLink": "footerLink"; }, { "errorButtonAction$": "errorButtonAction$"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRWaWV3RXJyb3JNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIGJsdXJCYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcbiAgICBsb2dvSW1hZ2VTY3I6IHN0cmluZztcclxuICAgIGxvZ29JbWFnZUFsdDogc3RyaW5nO1xyXG4gICAgbG9nb0hvcml6b250YWxQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JztcclxuICAgIGxvZ29WZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nO1xyXG4gICAgZXJyb3JQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JztcclxuICAgIGVycm9yQ29kZTogc3RyaW5nIHwgbnVtYmVyO1xyXG4gICAgZXJyb3JNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICBlcnJvckJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgICBlcnJvckJ1dHRvbkFjdGlvbiQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcclxuICAgIGZvb3Rlck1haW5EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgZm9vdGVyU2hvd0NvbnRhaW5lcjogYm9vbGVhbjtcclxuICAgIGZvb3RlckRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmb290ZXJJbWFnZURlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBmb290ZXJJbWFnZVNyYzogc3RyaW5nO1xyXG4gICAgZm9vdGVyTGluazogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgZXJyb3JCdXR0b25BY3Rpb24oKTogdm9pZDtcclxufVxyXG4iXX0=