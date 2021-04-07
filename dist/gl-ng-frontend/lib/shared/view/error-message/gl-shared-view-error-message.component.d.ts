import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
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
}
