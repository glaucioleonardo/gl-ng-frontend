import { AfterViewChecked, ElementRef } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';
export declare class GlSharedComponentModalLoadingComponent implements AfterViewChecked {
    service: GlSharedComponentModalLoadingService;
    mainLoading: ElementRef<HTMLDivElement>;
    defaultMessage: string;
    loaded: boolean;
    constructor(service: GlSharedComponentModalLoadingService);
    ngAfterViewChecked(): void;
}
