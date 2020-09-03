import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let GlSharedComponentHeaderDefaultComponent = class GlSharedComponentHeaderDefaultComponent {
    constructor() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
};
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "systemLogo", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelModel", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelId", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "labelArea", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "type", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "title", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "subtitle", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "menuButtons", void 0);
__decorate([
    Output()
], GlSharedComponentHeaderDefaultComponent.prototype, "keyDown", void 0);
__decorate([
    Input()
], GlSharedComponentHeaderDefaultComponent.prototype, "readonly", void 0);
GlSharedComponentHeaderDefaultComponent = __decorate([
    Component({
        selector: 'gl-shared-component-header-default',
        template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
        styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{max-width:100vw;position:relative;background-color:#1a1b1d}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 100%)}:host::ng-deep .header-container .header-content{display:flex;align-items:center}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-top:.2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{height:2.3em;display:flex;align-items:center;flex-grow:1;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{display:flex;align-items:center;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
    })
], GlSharedComponentHeaderDefaultComponent);
export { GlSharedComponentHeaderDefaultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2hlYWRlci9kZWZhdWx0L2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFLElBQWEsdUNBQXVDLEdBQXBELE1BQWEsdUNBQXVDO0lBYWxEO1FBWlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVEzQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJMUMsQ0FBQztJQUVqQixTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Q0FDRixDQUFBO0FBakJVO0lBQVIsS0FBSyxFQUFFOzJFQUE2QjtBQUM1QjtJQUFSLEtBQUssRUFBRTsyRUFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7d0VBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzBFQUFtQjtBQUNsQjtJQUFSLEtBQUssRUFBRTtxRUFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7c0VBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTt5RUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7NEVBQTRCO0FBQzFCO0lBQVQsTUFBTSxFQUFFO3dFQUFpRDtBQUVqRDtJQUFSLEtBQUssRUFBRTt5RUFBbUI7QUFYaEIsdUNBQXVDO0lBTG5ELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQ0FBb0M7UUFDOUMsa3NDQUFrRTs7S0FFbkUsQ0FBQztHQUNXLHVDQUF1QyxDQWtCbkQ7U0FsQlksdUNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vYnV0dG9uL21lbnUvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLW1lbnUtc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEhlYWRlckRlZmF1bHRDb21wb25lbnQge1xuICBASW5wdXQoKSBzeXN0ZW1Mb2dvOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGxhYmVsTW9kZWw6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxJZDogbnVtYmVyO1xuICBASW5wdXQoKSBsYWJlbEFyZWE6IHN0cmluZztcbiAgQElucHV0KCkgdHlwZTogJ29ubHktYnV0dG9ucycgfCAnJztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbWVudUJ1dHRvbnM6IElNZW51QnV0dG9uW107XG4gIEBPdXRwdXQoKSBrZXlEb3duOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHRoaXMua2V5RG93bi5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19