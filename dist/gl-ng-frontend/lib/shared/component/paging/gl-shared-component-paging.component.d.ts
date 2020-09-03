import { AfterViewInit, EventEmitter } from '@angular/core';
import { IItemsPerPage, IPageButtons, IPaging, TPagingType } from './gl-shared-component-paging.interface';
import * as ɵngcc0 from '@angular/core';
export declare class GlSharedComponentPagingComponent implements AfterViewInit {
    pageInfo: string;
    hasNext: boolean;
    hasPrevious: boolean;
    type: 'translucid' | 'dark' | '';
    firstPageTitle: string;
    previousPageTitle: string;
    nextPageTitle: string;
    lastPageTitle: string;
    pageDescription: string;
    pageSize: number;
    itemsPerPageDescriptions: string;
    pageSizeValue1: number;
    pageSizeValue2: number;
    pageSizeValue3: number;
    pageSizeValue4: number;
    pageSizeValue5: number;
    pageButtons: IPageButtons[];
    onPageChange$: EventEmitter<IPaging>;
    setNumberOfItems$: EventEmitter<number>;
    setPage$: EventEmitter<number>;
    itemsPerPage: IItemsPerPage[];
    readonly firstIcon: string;
    readonly previousIcon: string;
    readonly nextIcon: string;
    readonly lastIcon: string;
    constructor();
    ngAfterViewInit(): void;
    onPageChange(event: MouseEvent, type: TPagingType): void;
    setNumberOfItems(items: number): void;
    setPage(page: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlSharedComponentPagingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GlSharedComponentPagingComponent, "gl-shared-component-paging", never, { "type": "type"; "firstPageTitle": "firstPageTitle"; "previousPageTitle": "previousPageTitle"; "nextPageTitle": "nextPageTitle"; "lastPageTitle": "lastPageTitle"; "pageDescription": "pageDescription"; "itemsPerPageDescriptions": "itemsPerPageDescriptions"; "pageSizeValue1": "pageSizeValue1"; "pageSizeValue2": "pageSizeValue2"; "pageSizeValue3": "pageSizeValue3"; "pageSizeValue4": "pageSizeValue4"; "pageSizeValue5": "pageSizeValue5"; "pageButtons": "pageButtons"; "pageInfo": "pageInfo"; "hasNext": "hasNext"; "hasPrevious": "hasPrevious"; "pageSize": "pageSize"; }, { "onPageChange$": "onPageChange$"; "setNumberOfItems$": "setNumberOfItems$"; "setPage$": "setPage$"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImdsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElJdGVtc1BlclBhZ2UsIElQYWdlQnV0dG9ucywgSVBhZ2luZywgVFBhZ2luZ1R5cGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmludGVyZmFjZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50UGFnaW5nQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBwYWdlSW5mbzogc3RyaW5nO1xyXG4gICAgaGFzTmV4dDogYm9vbGVhbjtcclxuICAgIGhhc1ByZXZpb3VzOiBib29sZWFuO1xyXG4gICAgdHlwZTogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJyc7XHJcbiAgICBmaXJzdFBhZ2VUaXRsZTogc3RyaW5nO1xyXG4gICAgcHJldmlvdXNQYWdlVGl0bGU6IHN0cmluZztcclxuICAgIG5leHRQYWdlVGl0bGU6IHN0cmluZztcclxuICAgIGxhc3RQYWdlVGl0bGU6IHN0cmluZztcclxuICAgIHBhZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcGFnZVNpemU6IG51bWJlcjtcclxuICAgIGl0ZW1zUGVyUGFnZURlc2NyaXB0aW9uczogc3RyaW5nO1xyXG4gICAgcGFnZVNpemVWYWx1ZTE6IG51bWJlcjtcclxuICAgIHBhZ2VTaXplVmFsdWUyOiBudW1iZXI7XHJcbiAgICBwYWdlU2l6ZVZhbHVlMzogbnVtYmVyO1xyXG4gICAgcGFnZVNpemVWYWx1ZTQ6IG51bWJlcjtcclxuICAgIHBhZ2VTaXplVmFsdWU1OiBudW1iZXI7XHJcbiAgICBwYWdlQnV0dG9uczogSVBhZ2VCdXR0b25zW107XHJcbiAgICBvblBhZ2VDaGFuZ2UkOiBFdmVudEVtaXR0ZXI8SVBhZ2luZz47XHJcbiAgICBzZXROdW1iZXJPZkl0ZW1zJDogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICBzZXRQYWdlJDogRXZlbnRFbWl0dGVyPG51bWJlcj47XHJcbiAgICBpdGVtc1BlclBhZ2U6IElJdGVtc1BlclBhZ2VbXTtcclxuICAgIHJlYWRvbmx5IGZpcnN0SWNvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgcHJldmlvdXNJY29uOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBuZXh0SWNvbjogc3RyaW5nO1xyXG4gICAgcmVhZG9ubHkgbGFzdEljb246IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKCk7XHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcclxuICAgIG9uUGFnZUNoYW5nZShldmVudDogTW91c2VFdmVudCwgdHlwZTogVFBhZ2luZ1R5cGUpOiB2b2lkO1xyXG4gICAgc2V0TnVtYmVyT2ZJdGVtcyhpdGVtczogbnVtYmVyKTogdm9pZDtcclxuICAgIHNldFBhZ2UocGFnZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG4iXX0=