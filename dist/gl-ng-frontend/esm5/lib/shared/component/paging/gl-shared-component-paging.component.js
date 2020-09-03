import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var GlSharedComponentPagingComponent = /** @class */ (function () {
    function GlSharedComponentPagingComponent() {
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
    GlSharedComponentPagingComponent.prototype.ngAfterViewInit = function () {
        for (var i = 1; i <= 5; i++) {
            var pageSize = +this["pageSizeValue" + i];
            this.itemsPerPage.push({
                title: pageSize + " " + this.itemsPerPageDescriptions.toLowerCase(),
                innerValue: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                value: pageSize === null || pageSize === void 0 ? void 0 : pageSize.toString(),
                class: this.pageSize == pageSize ? 'active' : '',
                pageSize: pageSize
            });
        }
    };
    GlSharedComponentPagingComponent.prototype.onPageChange = function (event, type) {
        this.onPageChange$.emit({ event: event, type: type });
    };
    GlSharedComponentPagingComponent.prototype.setNumberOfItems = function (items) {
        this.itemsPerPage.map(function (x) { return x.class = x.pageSize == items ? 'active' : ''; });
        this.setNumberOfItems$.emit(items);
    };
    GlSharedComponentPagingComponent.prototype.setPage = function (page) {
        this.setPage$.emit(page);
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
    return GlSharedComponentPagingComponent;
}());
export { GlSharedComponentPagingComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2wtbmctZnJvbnRlbmQvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9wYWdpbmcvZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF0RjtJQThCRTtRQTFCUyxTQUFJLEdBQStCLE1BQU0sQ0FBQztRQUMxQyxtQkFBYyxHQUFXLFlBQVksQ0FBQztRQUN0QyxzQkFBaUIsR0FBVyxlQUFlLENBQUM7UUFDNUMsa0JBQWEsR0FBVyxXQUFXLENBQUM7UUFDcEMsa0JBQWEsR0FBVyxXQUFXLENBQUM7UUFDcEMsb0JBQWUsR0FBVyxNQUFNLENBQUM7UUFFakMsNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7UUFDcEQsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0IsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBRWhDLGtCQUFhLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUQsc0JBQWlCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0QsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlELGlCQUFZLEdBQW9CLEVBQUUsQ0FBQztRQUMxQixjQUFTLEdBQVcscUNBQXFDLENBQUM7UUFDMUQsaUJBQVksR0FBVyx3Q0FBd0MsQ0FBQztRQUNoRSxhQUFRLEdBQVcsb0NBQW9DLENBQUM7UUFDeEQsYUFBUSxHQUFXLG9DQUFvQyxDQUFDO0lBRWxELENBQUM7SUFFaEIsMERBQWUsR0FBZjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsSUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWdCLENBQUcsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLLEVBQUssUUFBUSxTQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUk7Z0JBQ25FLFVBQVUsRUFBRSxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsUUFBUSxFQUFFO2dCQUNoQyxLQUFLLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVEsRUFBRTtnQkFDM0IsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hELFFBQVEsVUFBQTthQUNULENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELHVEQUFZLEdBQVosVUFBYSxLQUFpQixFQUFFLElBQWlCO1FBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFDRCwyREFBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUE3QyxDQUE2QyxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsa0RBQU8sR0FBUCxVQUFRLElBQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXREUTtRQUFSLEtBQUssRUFBRTtzRUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7cUVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO3lFQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtrRUFBMkM7SUFDMUM7UUFBUixLQUFLLEVBQUU7NEVBQXVDO0lBQ3RDO1FBQVIsS0FBSyxFQUFFOytFQUE2QztJQUM1QztRQUFSLEtBQUssRUFBRTsyRUFBcUM7SUFDcEM7UUFBUixLQUFLLEVBQUU7MkVBQXFDO0lBQ3BDO1FBQVIsS0FBSyxFQUFFOzZFQUFrQztJQUNqQztRQUFSLEtBQUssRUFBRTtzRUFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7c0ZBQXFEO0lBQ3BEO1FBQVIsS0FBSyxFQUFFOzRFQUE0QjtJQUMzQjtRQUFSLEtBQUssRUFBRTs0RUFBNkI7SUFDNUI7UUFBUixLQUFLLEVBQUU7NEVBQTZCO0lBQzVCO1FBQVIsS0FBSyxFQUFFOzRFQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTs0RUFBNkI7SUFFNUI7UUFBUixLQUFLLEVBQUU7eUVBQWtDO0lBRWhDO1FBQVQsTUFBTSxFQUFFOzJFQUEyRDtJQUMxRDtRQUFULE1BQU0sRUFBRTsrRUFBOEQ7SUFDN0Q7UUFBVCxNQUFNLEVBQUU7c0VBQXFEO0lBdEJuRCxnQ0FBZ0M7UUFMNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxzOURBQTBEOztTQUUzRCxDQUFDO09BQ1csZ0NBQWdDLENBd0Q1QztJQUFELHVDQUFDO0NBQUEsQUF4REQsSUF3REM7U0F4RFksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElJdGVtc1BlclBhZ2UsIElQYWdlQnV0dG9ucywgSVBhZ2luZywgVFBhZ2luZ1R5cGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFBhZ2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBwYWdlSW5mbzogc3RyaW5nO1xuICBASW5wdXQoKSBoYXNOZXh0OiBib29sZWFuO1xuICBASW5wdXQoKSBoYXNQcmV2aW91czogYm9vbGVhbjtcbiAgQElucHV0KCkgdHlwZTogJ3RyYW5zbHVjaWQnIHwgJ2RhcmsnIHwgJycgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGZpcnN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnRmlyc3QgcGFnZSc7XG4gIEBJbnB1dCgpIHByZXZpb3VzUGFnZVRpdGxlOiBzdHJpbmcgPSAnUHJldmlvdXMgcGFnZSc7XG4gIEBJbnB1dCgpIG5leHRQYWdlVGl0bGU6IHN0cmluZyA9ICdOZXh0IHBhZ2UnO1xuICBASW5wdXQoKSBsYXN0UGFnZVRpdGxlOiBzdHJpbmcgPSAnTGFzdCBwYWdlJztcbiAgQElucHV0KCkgcGFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFnZSc7XG4gIEBJbnB1dCgpIHBhZ2VTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1zUGVyUGFnZURlc2NyaXB0aW9uczogc3RyaW5nID0gJ0l0ZW1zIHBlciBwYWdlJztcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTE6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUyOiBudW1iZXIgPSAxMDtcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTM6IG51bWJlciA9IDE1O1xuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlNDogbnVtYmVyID0gMjA7XG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWU1OiBudW1iZXIgPSAyNTtcblxuICBASW5wdXQoKSBwYWdlQnV0dG9uczogSVBhZ2VCdXR0b25zW10gPSBbXTtcblxuICBAT3V0cHV0KCkgb25QYWdlQ2hhbmdlJDogRXZlbnRFbWl0dGVyPElQYWdpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0TnVtYmVyT2ZJdGVtcyQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2V0UGFnZSQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGl0ZW1zUGVyUGFnZTogSUl0ZW1zUGVyUGFnZVtdID0gW107XG4gIHJlYWRvbmx5IGZpcnN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvZmlyc3Quc3ZnJztcbiAgcmVhZG9ubHkgcHJldmlvdXNJY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL3BhZ2luZy9wcmV2aW91cy5zdmcnO1xuICByZWFkb25seSBuZXh0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbmV4dC5zdmcnO1xuICByZWFkb25seSBsYXN0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbGFzdC5zdmcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBjb25zdCBwYWdlU2l6ZSA9ICt0aGlzW2BwYWdlU2l6ZVZhbHVlJHtpfWBdO1xuXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZS5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGAke3BhZ2VTaXplfSAke3RoaXMuaXRlbXNQZXJQYWdlRGVzY3JpcHRpb25zLnRvTG93ZXJDYXNlKCl9YCxcbiAgICAgICAgaW5uZXJWYWx1ZTogcGFnZVNpemU/LnRvU3RyaW5nKCksXG4gICAgICAgIHZhbHVlOiBwYWdlU2l6ZT8udG9TdHJpbmcoKSxcbiAgICAgICAgY2xhc3M6IHRoaXMucGFnZVNpemUgPT0gcGFnZVNpemUgPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICBwYWdlU2l6ZVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblBhZ2VDaGFuZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIHR5cGU6IFRQYWdpbmdUeXBlKSB7XG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UkLmVtaXQoeyBldmVudCwgdHlwZSB9KTtcbiAgfVxuICBzZXROdW1iZXJPZkl0ZW1zKGl0ZW1zOiBudW1iZXIpIHtcbiAgICB0aGlzLml0ZW1zUGVyUGFnZS5tYXAoeCA9PiB4LmNsYXNzID0geC5wYWdlU2l6ZSA9PSBpdGVtcyA/ICdhY3RpdmUnIDogJycpXG4gICAgdGhpcy5zZXROdW1iZXJPZkl0ZW1zJC5lbWl0KGl0ZW1zKTtcbiAgfVxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIHRoaXMuc2V0UGFnZSQuZW1pdChwYWdlKTtcbiAgfVxufVxuIl19