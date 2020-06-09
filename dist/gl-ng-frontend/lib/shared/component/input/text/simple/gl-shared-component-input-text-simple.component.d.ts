import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ICurrencyTypes } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.interface';
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
    currentValue: EventEmitter<any>;
    onKeyUp(args: any): void;
    constructor();
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentInputTextSimpleComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentInputTextSimpleComponent, "gl-shared-component-input-text-simple", never, { "disabled": "disabled"; "autocomplete": "autocomplete"; "value": "value"; "maxLength": "maxLength"; "id": "id"; "placeholder": "placeholder"; "itemContentAlignment": "itemContentAlignment"; "class": "class"; "mask": "mask"; "maskSymbol": "maskSymbol"; }, { "currentValue": "currentValue"; "onKeyUp": "onKeyUp"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJQ3VycmVuY3lUeXBlcyB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvaW5wdXQvY29yZS1zZXJ2aWNlcy1pbnB1dC5pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0VGV4dFNpbXBsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBhdXRvY29tcGxldGU6IGJvb2xlYW47XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xyXG4gICAgbWFza1N5bWJvbDogc3RyaW5nO1xyXG4gICAgbWF4TGVuZ3RoOiBudW1iZXI7XHJcbiAgICBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gICAgb25LZXlVcChhcmdzOiBhbnkpOiB2b2lkO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xyXG59XHJcbiJdfQ==