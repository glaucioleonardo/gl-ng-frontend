import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentPagingComponent {
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
}
GlSharedComponentPagingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-paging',
                template: "<div class=\"pagination-container {{ type }}\">\r\n  <div class=\"pagination-buttons-container\">\r\n    <a id=\"first-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'first')\"\r\n       [title]=\"firstPageTitle\">\r\n      <img [src]=\"firstIcon\" [alt]=\"firstPageTitle\">\r\n    </a>\r\n    <a id=\"prev-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasPrevious\" (click)=\"onPageChange($event, 'previous')\"\r\n       [title]=\"previousPageTitle\">\r\n      <img [src]=\"previousIcon\" [alt]=\"previousPageTitle\">\r\n    </a>\r\n    <span id=\"page-info\">{{ pageInfo }}</span>\r\n    <div class=\"page-buttons-container\">\r\n      <gl-shared-component-input-button-simple\r\n        *ngFor=\"let button of pageButtons\"\r\n        [value]=\"button.page.toString()\"\r\n        [innerValue]=\"button.page.toString()\"\r\n        (click)=\"setPage(button.page)\"\r\n        [class]=\"button.active ? 'active' : ''\"\r\n        [title]=\"pageDescription + ' ' + button.page.toString()\"\r\n      ></gl-shared-component-input-button-simple>\r\n    </div>\r\n    <a href=\"#\" id=\"next-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'next')\"\r\n       [title]=\"nextPageTitle\">\r\n      <img [src]=\"nextIcon\" [alt]=\"nextPageTitle\">\r\n    </a>\r\n    <a href=\"#\" id=\"last-page\" class=\"anchor-button\"\r\n       *ngIf=\"hasNext\" (click)=\"onPageChange($event, 'last')\"\r\n       [title]=\"lastPageTitle\">\r\n      <img [src]=\"lastIcon\" [alt]=\"lastPageTitle\">\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"number-items-page\" >\r\n    <span class=\"label-page-items\">{{ itemsPerPageDescriptions }}</span>\r\n    <gl-shared-component-input-button-simple\r\n      *ngFor=\"let item of itemsPerPage\"\r\n        [title]=\"item.title\"\r\n        [innerValue]=\"item.innerValue\"\r\n        [value]=\"item.value\"\r\n        [class]=\"item.class\"\r\n        (click)=\"setNumberOfItems(item.pageSize)\"\r\n    ></gl-shared-component-input-button-simple>\r\n  </div>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep{max-width:100vw}:host::ng-deep .pagination-container{align-items:center;background-color:#1a1b1d;display:flex;font-size:.5em;height:2.5em;justify-content:center;max-width:100vw;position:relative}:host::ng-deep .pagination-container .pagination-buttons-container{align-items:center;display:flex;flex-grow:1;justify-content:center}:host::ng-deep .pagination-container .pagination-buttons-container #page-info{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;display:none;font-size:.8em;margin:auto 1.2em;user-select:none}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container{display:flex;padding:0 1em;width:30%}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple{display:flex;height:1.5em;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button{border-radius:.2em;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .page-buttons-container gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#64666c;font-family:Montserrat,sans-serif;font-weight:700;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button{height:1.5em;padding:.5em 0;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#first-page{margin:0 .5em 0 0}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button#last-page{margin:0 0 0 .5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button img{height:1.5em;width:1.5em}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:not(hover){opacity:.2;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .pagination-buttons-container .anchor-button:hover{opacity:1;transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page{align-items:center;display:flex;height:1.5em;position:absolute;right:.4em;top:.5em;width:20em}:host::ng-deep .pagination-container .number-items-page .label-page-items{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-size:.8em;font-weight:300;margin:0 .5em 0 0;opacity:1;padding:.8em 1em .3em;text-transform:uppercase;user-select:none}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple{display:flex;flex:1 1 0.2em;height:1.5em;justify-content:center;margin:0 .2em;width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button{border-radius:.2em;flex:1 1 0.2em;font-family:Montserrat,sans-serif;font-size:.6em;font-weight:300;min-height:1.5em;min-width:1.5em}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:not(hover){background-color:hsla(0,0%,100%,.1);color:#fff;transition:all .5s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button:hover{background-color:hsla(0,0%,100%,.3);transition:all .2s ease-in-out}:host::ng-deep .pagination-container .number-items-page gl-shared-component-input-button-simple .default-button.active{background-color:#fff;color:#4b4d52;font-family:Montserrat,sans-serif;font-size:.7em;font-weight:900;transition:all .5s ease-in-out}:host::ng-deep .pagination-container.translucid{background-color:rgba(0,0,0,.2)}"]
            },] }
];
GlSharedComponentPagingComponent.ctorParameters = () => [];
GlSharedComponentPagingComponent.propDecorators = {
    pageInfo: [{ type: Input }],
    hasNext: [{ type: Input }],
    hasPrevious: [{ type: Input }],
    type: [{ type: Input }],
    firstPageTitle: [{ type: Input }],
    previousPageTitle: [{ type: Input }],
    nextPageTitle: [{ type: Input }],
    lastPageTitle: [{ type: Input }],
    pageDescription: [{ type: Input }],
    pageSize: [{ type: Input }],
    itemsPerPageDescriptions: [{ type: Input }],
    pageSizeValue1: [{ type: Input }],
    pageSizeValue2: [{ type: Input }],
    pageSizeValue3: [{ type: Input }],
    pageSizeValue4: [{ type: Input }],
    pageSizeValue5: [{ type: Input }],
    pageButtons: [{ type: Input }],
    onPageChange$: [{ type: Output }],
    setNumberOfItems$: [{ type: Output }],
    setPage$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1wYWdpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L3BhZ2luZy9nbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRdEYsTUFBTSxPQUFPLGdDQUFnQztJQThCM0M7UUExQlMsU0FBSSxHQUErQixNQUFNLENBQUM7UUFDMUMsbUJBQWMsR0FBVyxZQUFZLENBQUM7UUFDdEMsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO1FBQzVDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQVcsV0FBVyxDQUFDO1FBQ3BDLG9CQUFlLEdBQVcsTUFBTSxDQUFDO1FBRWpDLDZCQUF3QixHQUFXLGdCQUFnQixDQUFDO1FBQ3BELG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCLGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxrQkFBYSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFELHNCQUFpQixHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdELGFBQVEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxpQkFBWSxHQUFvQixFQUFFLENBQUM7UUFDMUIsY0FBUyxHQUFXLHFDQUFxQyxDQUFDO1FBQzFELGlCQUFZLEdBQVcsd0NBQXdDLENBQUM7UUFDaEUsYUFBUSxHQUFXLG9DQUFvQyxDQUFDO1FBQ3hELGFBQVEsR0FBVyxvQ0FBb0MsQ0FBQztJQUVsRCxDQUFDO0lBRWhCLGVBQWU7UUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzNCLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNuRSxVQUFVLEVBQUUsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVEsRUFBRTtnQkFDaEMsS0FBSyxFQUFFLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxRQUFRO2FBQ1QsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWlCLEVBQUUsSUFBaUI7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0QsZ0JBQWdCLENBQUMsS0FBYTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxvakVBQTBEOzthQUUzRDs7Ozt1QkFFRSxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFDTCxLQUFLOzZCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsTUFBTTtnQ0FDTixNQUFNO3VCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJSXRlbXNQZXJQYWdlLCBJUGFnZUJ1dHRvbnMsIElQYWdpbmcsIFRQYWdpbmdUeXBlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZy5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtcGFnaW5nLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LXBhZ2luZy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudFBhZ2luZ0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHBhZ2VJbmZvOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGFzTmV4dDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoYXNQcmV2aW91czogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0eXBlOiAndHJhbnNsdWNpZCcgfCAnZGFyaycgfCAnJyA9ICdkYXJrJztcclxuICBASW5wdXQoKSBmaXJzdFBhZ2VUaXRsZTogc3RyaW5nID0gJ0ZpcnN0IHBhZ2UnO1xyXG4gIEBJbnB1dCgpIHByZXZpb3VzUGFnZVRpdGxlOiBzdHJpbmcgPSAnUHJldmlvdXMgcGFnZSc7XHJcbiAgQElucHV0KCkgbmV4dFBhZ2VUaXRsZTogc3RyaW5nID0gJ05leHQgcGFnZSc7XHJcbiAgQElucHV0KCkgbGFzdFBhZ2VUaXRsZTogc3RyaW5nID0gJ0xhc3QgcGFnZSc7XHJcbiAgQElucHV0KCkgcGFnZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnUGFnZSc7XHJcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlcjtcclxuICBASW5wdXQoKSBpdGVtc1BlclBhZ2VEZXNjcmlwdGlvbnM6IHN0cmluZyA9ICdJdGVtcyBwZXIgcGFnZSc7XHJcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTE6IG51bWJlciA9IDU7XHJcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTI6IG51bWJlciA9IDEwO1xyXG4gIEBJbnB1dCgpIHBhZ2VTaXplVmFsdWUzOiBudW1iZXIgPSAxNTtcclxuICBASW5wdXQoKSBwYWdlU2l6ZVZhbHVlNDogbnVtYmVyID0gMjA7XHJcbiAgQElucHV0KCkgcGFnZVNpemVWYWx1ZTU6IG51bWJlciA9IDI1O1xyXG5cclxuICBASW5wdXQoKSBwYWdlQnV0dG9uczogSVBhZ2VCdXR0b25zW10gPSBbXTtcclxuXHJcbiAgQE91dHB1dCgpIG9uUGFnZUNoYW5nZSQ6IEV2ZW50RW1pdHRlcjxJUGFnaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2V0TnVtYmVyT2ZJdGVtcyQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZXRQYWdlJDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGl0ZW1zUGVyUGFnZTogSUl0ZW1zUGVyUGFnZVtdID0gW107XHJcbiAgcmVhZG9ubHkgZmlyc3RJY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL3BhZ2luZy9maXJzdC5zdmcnO1xyXG4gIHJlYWRvbmx5IHByZXZpb3VzSWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvcHJldmlvdXMuc3ZnJztcclxuICByZWFkb25seSBuZXh0SWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9wYWdpbmcvbmV4dC5zdmcnO1xyXG4gIHJlYWRvbmx5IGxhc3RJY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL3BhZ2luZy9sYXN0LnN2Zyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VTaXplID0gK3RoaXNbYHBhZ2VTaXplVmFsdWUke2l9YF07XHJcblxyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZS5wdXNoKHtcclxuICAgICAgICB0aXRsZTogYCR7cGFnZVNpemV9ICR7dGhpcy5pdGVtc1BlclBhZ2VEZXNjcmlwdGlvbnMudG9Mb3dlckNhc2UoKX1gLFxyXG4gICAgICAgIGlubmVyVmFsdWU6IHBhZ2VTaXplPy50b1N0cmluZygpLFxyXG4gICAgICAgIHZhbHVlOiBwYWdlU2l6ZT8udG9TdHJpbmcoKSxcclxuICAgICAgICBjbGFzczogdGhpcy5wYWdlU2l6ZSA9PSBwYWdlU2l6ZSA/ICdhY3RpdmUnIDogJycsXHJcbiAgICAgICAgcGFnZVNpemVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFnZUNoYW5nZShldmVudDogTW91c2VFdmVudCwgdHlwZTogVFBhZ2luZ1R5cGUpIHtcclxuICAgIHRoaXMub25QYWdlQ2hhbmdlJC5lbWl0KHsgZXZlbnQsIHR5cGUgfSk7XHJcbiAgfVxyXG4gIHNldE51bWJlck9mSXRlbXMoaXRlbXM6IG51bWJlcikge1xyXG4gICAgdGhpcy5pdGVtc1BlclBhZ2UubWFwKHggPT4geC5jbGFzcyA9IHgucGFnZVNpemUgPT0gaXRlbXMgPyAnYWN0aXZlJyA6ICcnKVxyXG4gICAgdGhpcy5zZXROdW1iZXJPZkl0ZW1zJC5lbWl0KGl0ZW1zKTtcclxuICB9XHJcbiAgc2V0UGFnZShwYWdlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2V0UGFnZSQuZW1pdChwYWdlKTtcclxuICB9XHJcbn1cclxuIl19