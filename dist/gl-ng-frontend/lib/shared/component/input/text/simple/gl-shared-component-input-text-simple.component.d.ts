import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ISimpleTextResult } from './gl-shared-component-input-text-simple.interface';
import { ICurrencyTypes } from "gl-w-frontend";
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentInputTextSimpleComponent implements AfterViewInit {
    inputElement: ElementRef<HTMLInputElement>;
    disabled: boolean;
    autocomplete: boolean;
    id: string;
    placeholder: string;
    itemContentAlignment: string;
    class: string;
    value: string;
    mask: string | ICurrencyTypes;
    maskSymbol: string;
    maxLength: number;
    currentValue: EventEmitter<ISimpleTextResult>;
    onKeyUp(args: any): void;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputTextSimpleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputTextSimpleComponent, "gl-shared-component-input-text-simple", never, { "disabled": "disabled"; "autocomplete": "autocomplete"; "value": "value"; "maxLength": "maxLength"; "id": "id"; "placeholder": "placeholder"; "itemContentAlignment": "itemContentAlignment"; "class": "class"; "mask": "mask"; "maskSymbol": "maskSymbol"; }, { "currentValue": "currentValue"; "onKeyUp": "onKeyUp"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElTaW1wbGVUZXh0UmVzdWx0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICAgIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgYXV0b2NvbXBsZXRlOiBib29sZWFuO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xyXG4gICAgY2xhc3M6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbiAgICBtYXNrOiBzdHJpbmcgfCBJQ3VycmVuY3lUeXBlcztcclxuICAgIG1hc2tTeW1ib2w6IHN0cmluZztcclxuICAgIG1heExlbmd0aDogbnVtYmVyO1xyXG4gICAgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SVNpbXBsZVRleHRSZXN1bHQ+O1xyXG4gICAgb25LZXlVcChhcmdzOiBhbnkpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==