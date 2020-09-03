import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let GlSharedComponentPagingComponent = class GlSharedComponentPagingComponent {
    constructor() {
        this.type = 'dark';
        this.firstPageTitle = 'First page';
        this.previousPageTitle = 'Previous page';
        this.nextPageTitle = 'Next page';
        this.lastPageTitle = 'Last page';
        this.pageDescription = 'Page';
        this.itemsPerPageDescriptions = 'Items per page';
        this.pageSizeValue1 = 5;
        this.pageSizeValue2 = 10;
        this.pageSizeValue3 = 15;
        this.pageSizeValue4 = 20;
        this.pageSizeValue5 = 25;
        this.pageButtons = [];
        this.onPageChange$ = new EventEmitter();
        this.setNumberOfItems$ = new EventEmitter();
        this.setPage$ = new EventEmitter();
        this.itemsPerPage = [];
        this.firstIcon = '../assets/img/icon/paging/first.svg';
        this.previousIcon = '../assets/img/icon/paging/previous.svg';
        this.nextIcon = '../assets/img/icon/paging/next.svg';
        this.lastIcon = '../assets/img/icon/paging/last.svg';
    }
    ngAfterViewInit() {
        for (let i = 1; i <= 5; i++) {
            const pageSize = +this[`pageSizeValue${i}`];
            this.itemsPerPage.push({
                title: `${pageSize} ${this.itemsPerPageDescriptions.toLowerCase()}`,
                innerValue: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                value: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                class: this.pageSize == pageSize ? 'active' : '',
                pageSize
            });
        }
    }
    onPageChange(event, type) {
        this.onPageChange$.emit({ event, type });
    }
    setNumberOfItems(items) {
        this.itemsPerPage.map(x => x.class = x.pageSize == items ? 'active' : '');
        this.setNumberOfItems$.emit(items);
    }
    setPage(page) {
        this.setPage$.emit(page);
    }
};
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageInfo", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "hasNext", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "hasPrevious", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "type", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "firstPageTitle", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "previousPageTitle", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "nextPageTitle", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "lastPageTitle", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageDescription", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSize", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "itemsPerPageDescriptions", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSizeValue1", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSizeValue2", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSizeValue3", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSizeValue4", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageSizeValue5", void 0);
__decorate([
    Input()
], GlSharedComponentPagingComponent.prototype, "pageButtons", void 0);
__decorate([
    Output()
], GlSharedComponentPagingComponent.prototype, "onPageChange$", void 0);
__decorate([
    Output()
], GlSharedComponentPagingComponent.prototype, "setNumberOfItems$", void 0);
__decorate([
    Output()
], GlSharedComponentPagingComponent.prototype, "setPage$", void 0);
GlSharedComponentPagingComponent = __decorate([
    Component({
        selector: 'gl-shared-component-paging',
        template: "<div class=\"pagination-container {{ type }}\">\n  <div class=\"pagination-buttons-container\">\n    <a id=\"first-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\n       [title]=\"firstPageTitle\">\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\n    </a>\n    <a id=\"prev-page\" class=\"anchor-button\"\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\n       [title]=\"previousPageTitle\">\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\n    </a>\n    <span id=\"page-info\">{{ pageInfo }}</span>\n    <div class=\"page-buttons-container\">\n      <gl-shared-component-input-button-simple\n        *ngFor=\"let button of pageButtons\"\n        [value]=\"button.page.toString()\"\n        [innerValue]=\"button.page.toString()\"\n        (click)=\"setPage(button.page)\"\n        [class]=\"button.active ? 'active' : ''\"\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\n       [title]=\"nextPageTitle\">\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\n    </a>\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\n       [title]=\"lastPageTitle\">\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\n    </a>\n  </div>\n\n  <div class=\"number-items-page\" >\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\n    <gl-shared-component-input-button-simple\n      *ngFor=\"let item of itemsPerPage\"\n        [title]=\"item.title\"\n        [innerValue]=\"item.innerValue\"\n        [value]=\"item.value\"\n        [class]=\"item.class\"\n        (click)=\"setNumberOfItems(item.pageSize)\"\n    ></gl-shared-component-input-button-simple>\n  </div>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{max-width:100vw;position:relative;background-color:#1a1b1d;font-size:.5em;display:flex;align-items:center;justify-content:center;height:2.5em}:host::ng-deep .pagination-container .pagination-buttons-container{flex-grow:1;justify-content:center;display:flex;align-items:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{color:#fff;margin:auto 1.2em;font-size:.8em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;display:flex}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;border-radius:.2em;font-size:.8em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:700;background-color:#fff;color:#64666c;transition:.5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{width:1.5em;height:1.5em;padding:.5em 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:.2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{position:absolute;right:.4em;top:.5em;display:flex;align-items:center;height:1.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{font-family:Montserrat,sans-serif;font-weight:300;padding:.8em 1em .3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.8em;color:#fff;opacity:1;text-transform:uppercase;margin:0 .5em 0 0}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{height:1.5em;width:1.5em;margin:0 .2em;flex:1 1 .2em;display:flex;justify-content:center}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{font-family:Montserrat,sans-serif;font-weight:300;min-height:1.5em;min-width:1.5em;flex:1 1 .2em;border-radius:.2em;font-size:.6em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:rgba(255,255,255,.1);transition:.5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{font-family:Montserrat,sans-serif;font-weight:900;font-size:.7em;background-color:#fff;color:#4b4d52;transition:.5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
    })
], GlSharedComponentPagingComponent);
export { GlSharedComponentPagingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9wYWdpbmcvZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF0RixJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQThCM0M7UUExQlMsU0FBSSxHQUErQixNQUFNLENBQUM7UUFDMUMsbUJBQWMsR0FBVyxZQUFZLENBQUM7UUFDdEMsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO1FBQzVDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLG9CQUFlLEdBQVcsTUFBTSxDQUFDO1FBRWpDLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDO1FBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFXLHFDQUFxQyxDQUFDO1FBQzFELGlCQUFZLEdBQVcsd0NBQXdDLENBQUM7UUFDaEUsYUFBUSxHQUFXLG9DQUFvQyxDQUFDO1FBQ3hELGFBQVEsR0FBVyxvQ0FBb0MsQ0FBQztJQUVsRCxDQUFDO0lBRWhCLGVBQWU7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNuRSxVQUFVLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVEsRUFBRTtnQkFDaEMsS0FBSyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxRQUFRO2FBQ1QsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWlCLEVBQUUsSUFBaUI7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGLENBQUE7QUF2RFU7SUFBUixLQUFLLEVBQUU7a0VBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO2lFQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtxRUFBc0I7QUFDckI7SUFBUixLQUFLLEVBQUU7OERBQTJDO0FBQzFDO0lBQVIsS0FBSyxFQUFFO3dFQUF1QztBQUN0QztJQUFSLEtBQUssRUFBRTsyRUFBNkM7QUFDNUM7SUFBUixLQUFLLEVBQUU7dUVBQXFDO0FBQ3BDO0lBQVIsS0FBSyxFQUFFO3VFQUFxQztBQUNwQztJQUFSLEtBQUssRUFBRTt5RUFBa0M7QUFDakM7SUFBUixLQUFLLEVBQUU7a0VBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO2tGQUFxRDtBQUNwRDtJQUFSLEtBQUssRUFBRTt3RUFBNEI7QUFDM0I7SUFBUixLQUFLLEVBQUU7d0VBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO3dFQUE2QjtBQUM1QjtJQUFSLEtBQUssRUFBRTt3RUFBNkI7QUFDNUI7SUFBUixLQUFLLEVBQUU7d0VBQTZCO0FBRTVCO0lBQVIsS0FBSyxFQUFFO3FFQUFrQztBQUVoQztJQUFULE1BQU0sRUFBRTt1RUFBMkQ7QUFDMUQ7SUFBVCxNQUFNLEVBQUU7MkVBQThEO0FBQzdEO0lBQVQsTUFBTSxFQUFFO2tFQUFxRDtBQXRCbkQsZ0NBQWdDO0lBTDVDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsczlEQUEwRDs7S0FFM0QsQ0FBQztHQUNXLGdDQUFnQyxDQXdENUM7U0F4RFksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElJdGVtc1BlclBhZ2UsIElQYWdlQnV0dG9ucywgSVBhZ2luZywgVFBhZ2luZ1R5cGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFBhZ2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwYWdlSW5mbzogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNOZXh0OiBib29sZWFuO1xuICBASW5wdXQoKSBoYXNQcmV2aW91czogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGZpcnN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnRmlyc3QgcGFnZSc7XG4gIEBJbnB1dCgpIHByZXZpb3VzUGFnZVRpdGxlOiBzdHJpbmcgPSAnUHJldmlvdXMgcGFnZSc7XG4gIEBJbnB1dCgpIG5leHRQYWdlVGl0bGU6IHN0cmluZyA9ICdOZXh0IHBhZ2UnO1xuICBASW5wdXQoKSBsYXN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnTGFzdCBwYWdlJztcbiAgQElucHV0KCkgcGFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFnZSc7XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZURlc2NyaXB0aW9uczogc3RyaW5nID0gJ0l0ZW1zIHBlciBwYWdlJztcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTE6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUyOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTM6IG51bWJlciA9IDE1O1xuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlNDogbnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWU1OiBudW1iZXIgPSAyNTtcblxuICBASW5wdXQoKSBwYWdlQnV0dG9uczogSVBhZ2VCdXR0b25zW10gPSBbXTtcblxuICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlJDogRXZlbnRFbWl0dGVyPElQYWdpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0TnVtYmVyT2ZJdGVtcyQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0UGFnZSQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGl0ZW1zUGVyUGFnZTogSUl0ZW1zUGVyUGFnZVtdID0gW107XG4gIHJlYWRvbmx5IGZpcnN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvZmlyc3Quc3ZnJztcbiAgcmVhZG9ubHkgcHJldmlvdXNJY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL3BhZ2luZy9wcmV2aW91cy5zdmcnO1xuICByZWFkb25seSBuZXh0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbmV4dC5zdmcnO1xuICByZWFkb25seSBsYXN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbGFzdC5zdmcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBjb25zdCBwYWdlU2l6ZSA9ICt0aGlzW2BwYWdlU2l6ZVZhbHVlJHtpfWBdO1xuXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZS5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGAke3BhZ2VTaXplfSAke3RoaXMuaXRlbXNQZXJQYWdlRGVzY3JpcHRpb25zLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgaW5uZXJWYWx1ZTogcGFnZVNpemU/LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBwYWdlU2l6ZT8udG9TdHJpbmcoKSxcbiAgICAgICAgY2xhc3M6IHRoaXMucGFnZVNpemUgPT0gcGFnZVNpemUgPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICBwYWdlU2l6ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6IFRQYWdpbmdUeXBlKSB7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UkLmVtaXQoeyBldmVudCwgdHlwZSB9KTtcbiAgfVxuICBzZXROdW1iZXJPZkl0ZW1zKGl0ZW1zOiBudW1iZXIpIHtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZS5tYXAoeCA9PiB4LmNsYXNzID0geC5wYWdlU2l6ZSA9PSBpdGVtcyA/ICdhY3RpdmUnIDogJycpXG4gICAgdGhpcy5zZXROdW1iZXJPZkl0ZW1zJC5lbWl0KGl0ZW1zKTtcbiAgfVxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuc2V0UGFnZSQuZW1pdChwYWdlKTtcbiAgfVxufVxuIl19