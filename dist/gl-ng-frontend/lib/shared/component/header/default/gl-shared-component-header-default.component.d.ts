import { EventEmitter } from '@angular/core';
import { IMenuButton } from '../../button/menu/simple/gl-shared-component-button-menu-simple.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentHeaderDefaultComponent {
    systemLogo: boolean;
    labelModel: string;
    labelId: number;
    labelArea: string;
    type: 'only-buttons' | '';
    title: string;
    subtitle: string;
    menuButtons: IMenuButton[];
    keyDown: EventEmitter<any>;
    readonly: boolean;
    constructor();
    onKeyDown(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentHeaderDefaultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentHeaderDefaultComponent, "gl-shared-component-header-default", never, { "systemLogo": "systemLogo"; "labelModel": "labelModel"; "labelId": "labelId"; "labelArea": "labelArea"; "type": "type"; "title": "title"; "subtitle": "subtitle"; "menuButtons": "menuButtons"; "readonly": "readonly"; }, { "keyDown": "keyDown"; }, never, ["[slot=default-logo]", "[slot=system-logo]", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbi9tZW51L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5pbnRlcmZhY2UnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEhlYWRlckRlZmF1bHRDb21wb25lbnQge1xyXG4gICAgc3lzdGVtTG9nbzogYm9vbGVhbjtcclxuICAgIGxhYmVsTW9kZWw6IHN0cmluZztcclxuICAgIGxhYmVsSWQ6IG51bWJlcjtcclxuICAgIGxhYmVsQXJlYTogc3RyaW5nO1xyXG4gICAgdHlwZTogJ29ubHktYnV0dG9ucycgfCAnJztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJ0aXRsZTogc3RyaW5nO1xyXG4gICAgbWVudUJ1dHRvbnM6IElNZW51QnV0dG9uW107XHJcbiAgICBrZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgIHJlYWRvbmx5OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoKTtcclxuICAgIG9uS2V5RG93bihldmVudDogYW55KTogdm9pZDtcclxufVxyXG4iXX0=