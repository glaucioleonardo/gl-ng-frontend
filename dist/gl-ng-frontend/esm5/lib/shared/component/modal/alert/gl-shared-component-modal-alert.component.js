import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';
var GlSharedComponentModalAlertComponent = /** @class */ (function () {
    function GlSharedComponentModalAlertComponent(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
    GlSharedComponentModalAlertComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "modalLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueNo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueYes", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "innerValueOK", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "noValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "yesValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentModalAlertComponent.prototype, "okValue", void 0);
    GlSharedComponentModalAlertComponent = __decorate([
        Component({
            selector: 'gl-shared-component-modal-alert',
            template: "<div\n  *ngIf=\"service.showModal\"\n  glAutoFocus\n  (keydown)=\"service.onModalKeyUp($event)\"\n  id=\"modal\"\n  class=\"modal-container {{ service.modalClass }}\"\n  tabindex=\"-1\">\n  <div class=\"modal-main-content\">\n    <gl-shared-component-modal-header\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n      [modalLogo]=\"modalLogo\"\n    ></gl-shared-component-modal-header>\n    <div class=\"modal-message-container\">\n      <span class=\"modal-message\">{{ service.message }}</span>\n    </div>\n    <div class=\"button-container\">\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"no\"\n        (click)=\"service.onNo()\"\n        [innerValue]=\"innerValueNo\"\n        [value]=\"noValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"!service.isOK\"\n        class=\"yes\"\n        (click)=\"service.onYes()\"\n        [innerValue]=\"innerValueYes\"\n        [value]=\"yesValue\"\n      ></gl-shared-component-input-button-simple>\n      <gl-shared-component-input-button-simple\n        *ngIf=\"service.isOK\"\n        class=\"ok\"\n        (click)=\"service.onOk()\"\n        [innerValue]=\"innerValueOK\"\n        [value]=\"okValue\"\n      ></gl-shared-component-input-button-simple>\n    </div>\n    <div class=\"modal-footer\"></div>\n  </div>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
        })
    ], GlSharedComponentModalAlertComponent);
    return GlSharedComponentModalAlertComponent;
}());
export { GlSharedComponentModalAlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU8vRjtJQVlFLDhDQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQVJyRCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixrQkFBYSxHQUFFLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFFLElBQUksQ0FBQztRQUVuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFFLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUUsSUFBSSxDQUFDO0lBRTJDLENBQUM7O2dCQUF2QyxrQ0FBa0M7O0lBWHJEO1FBQVIsS0FBSyxFQUFFO3VFQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7MEVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFOzJFQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTs4RUFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7K0VBQXNCO0lBQ3JCO1FBQVIsS0FBSyxFQUFFOzhFQUFvQjtJQUVuQjtRQUFSLEtBQUssRUFBRTt5RUFBZ0I7SUFDZjtRQUFSLEtBQUssRUFBRTswRUFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7eUVBQWU7SUFWWixvQ0FBb0M7UUFMaEQsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlDQUFpQztZQUMzQyx3NENBQStEOztTQUVoRSxDQUFDO09BQ1csb0NBQW9DLENBY2hEO0lBQUQsMkNBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgc3VidGl0bGU6IHN0cmluZztcbiAgQElucHV0KCkgbW9kYWxMb2dvOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVObyA9ICdObyc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVZZXM9ICdZZXMnO1xuICBASW5wdXQoKSBpbm5lclZhbHVlT0s9ICdPSyc7XG5cbiAgQElucHV0KCkgbm9WYWx1ZSA9ICdubyc7XG4gIEBJbnB1dCgpIHllc1ZhbHVlPSAneWVzJztcbiAgQElucHV0KCkgb2tWYWx1ZT0gJ29rJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cbn1cbiJdfQ==