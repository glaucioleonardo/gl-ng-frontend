import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';
export declare class GlSharedComponentFilterComponent implements AfterViewInit {
    router: Router;
    service: GlSharedComponentFilterService;
    container: ElementRef<HTMLDivElement>;
    background: ElementRef<HTMLDivElement>;
    menuNavContainer: ElementRef<HTMLDivElement>;
    title: string;
    subtitle: string;
    type: 'translucid' | '';
    closeButton: string;
    partialResult: number;
    partialResultDescription: string;
    itemSingularDescription: string;
    itemPluralDescription: string;
    applyButtonDescription: string;
    clearButtonDescription: string;
    buttonClass: 'light-translucid' | '';
    isIE: boolean;
    applyPartialResult: () => Promise<void>;
    applyFilter$: EventEmitter<void>;
    clearFilter$: EventEmitter<void>;
    constructor(router: Router, service: GlSharedComponentFilterService);
    ngAfterViewInit(): void;
    onApply(): void;
    onClear(): void;
}
