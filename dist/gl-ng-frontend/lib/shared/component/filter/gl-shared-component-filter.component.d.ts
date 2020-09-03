import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentFilterComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentFilterComponent, "gl-shared-component-filter", never, { "subtitle": "subtitle"; "type": "type"; "closeButton": "closeButton"; "partialResultDescription": "partialResultDescription"; "itemSingularDescription": "itemSingularDescription"; "itemPluralDescription": "itemPluralDescription"; "applyButtonDescription": "applyButtonDescription"; "clearButtonDescription": "clearButtonDescription"; "buttonClass": "buttonClass"; "isIE": "isIE"; "title": "title"; "partialResult": "partialResult"; "applyPartialResult": "applyPartialResult"; }, { "applyFilter$": "applyFilter$"; "clearFilter$": "clearFilter$"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1maWx0ZXIuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtZmlsdGVyLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWZpbHRlci5zZXJ2aWNlJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIHJvdXRlcjogUm91dGVyO1xyXG4gICAgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlO1xyXG4gICAgY29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuICAgIGJhY2tncm91bmQ6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xyXG4gICAgbWVudU5hdkNvbnRhaW5lcjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgc3VidGl0bGU6IHN0cmluZztcclxuICAgIHR5cGU6ICd0cmFuc2x1Y2lkJyB8ICcnO1xyXG4gICAgY2xvc2VCdXR0b246IHN0cmluZztcclxuICAgIHBhcnRpYWxSZXN1bHQ6IG51bWJlcjtcclxuICAgIHBhcnRpYWxSZXN1bHREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaXRlbVNpbmd1bGFyRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGl0ZW1QbHVyYWxEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYXBwbHlCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgY2xlYXJCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgYnV0dG9uQ2xhc3M6ICdsaWdodC10cmFuc2x1Y2lkJyB8ICcnO1xyXG4gICAgaXNJRTogYm9vbGVhbjtcclxuICAgIGFwcGx5UGFydGlhbFJlc3VsdDogKCkgPT4gUHJvbWlzZTx2b2lkPjtcclxuICAgIGFwcGx5RmlsdGVyJDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xyXG4gICAgY2xlYXJGaWx0ZXIkOiBFdmVudEVtaXR0ZXI8dm9pZD47XHJcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlciwgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRGaWx0ZXJTZXJ2aWNlKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG4gICAgb25BcHBseSgpOiB2b2lkO1xyXG4gICAgb25DbGVhcigpOiB2b2lkO1xyXG59XHJcbiJdfQ==