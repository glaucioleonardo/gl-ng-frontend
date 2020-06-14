import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ICurrencyTypes } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.interface';
import { ISimpleTextResult } from './gl-shared-component-input-text-simple.interface';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElDdXJyZW5jeVR5cGVzIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9pbnB1dC9jb3JlLXNlcnZpY2VzLWlucHV0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IElTaW1wbGVUZXh0UmVzdWx0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0U2ltcGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcbiAgICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIGF1dG9jb21wbGV0ZTogYm9vbGVhbjtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgaXRlbUNvbnRlbnRBbGlnbm1lbnQ6IHN0cmluZztcclxuICAgIGNsYXNzOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG4gICAgbWFzazogc3RyaW5nIHwgSUN1cnJlbmN5VHlwZXM7XHJcbiAgICBtYXNrU3ltYm9sOiBzdHJpbmc7XHJcbiAgICBtYXhMZW5ndGg6IG51bWJlcjtcclxuICAgIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElTaW1wbGVUZXh0UmVzdWx0PjtcclxuICAgIG9uS2V5VXAoYXJnczogYW55KTogdm9pZDtcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxufVxyXG4iXX0=