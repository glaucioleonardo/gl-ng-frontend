import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';
let GlSharedComponentModalAlertComponent = class GlSharedComponentModalAlertComponent {
    constructor(service) {
        this.service = service;
        this.innerValueNo = 'No';
        this.innerValueYes = 'Yes';
        this.innerValueOK = 'OK';
        this.noValue = 'no';
        this.yesValue = 'yes';
        this.okValue = 'ok';
    }
};
GlSharedComponentModalAlertComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
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
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .modal-container{position:fixed;min-width:100vw;min-height:100vh;z-index:100000;top:0;left:0;display:flex;justify-items:center;align-items:center;height:0;-webkit-animation:.5s ease-in-out forwards show-modal;animation:.5s ease-in-out forwards show-modal;background:rgba(0,0,0,.8)}@-webkit-keyframes show-modal{from{opacity:0}to{opacity:1}}@keyframes show-modal{from{opacity:0}to{opacity:1}}:host::ng-deep .modal-container>.modal-main-content{opacity:1!important;transition:.5s ease-in-out .5s}:host::ng-deep .modal-container .modal-main-content{opacity:0;background:rgba(2,2,2,.5);margin:0 auto;word-wrap:break-word;display:flex;flex-direction:column;justify-content:stretch;width:90vw;max-width:36em;min-height:10em;height:1em;align-items:stretch}:host::ng-deep .modal-container .modal-main-content .modal-message-container{display:flex;align-items:center;justify-content:center;flex-grow:1;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .modal-container .modal-main-content .modal-message-container .modal-message{font-family:Montserrat,sans-serif;font-weight:700;text-transform:unset;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;text-align:center;width:100%;font-size:.6em;color:#fff;white-space:pre-wrap}:host::ng-deep .modal-container .modal-main-content .button-container{display:flex;justify-content:center;align-items:stretch;height:2em}:host::ng-deep .modal-container .modal-main-content .button-container gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(100% / 3)}:host::ng-deep .modal-container .modal-main-content .modal-footer{height:.5em;background-color:#0e0e0f;border-top:1px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5;margin:.2em 0 0;width:100%}:host::ng-deep .hide-modal{-webkit-animation:.3s ease-in-out forwards hide-modal;animation:.3s ease-in-out forwards hide-modal}@-webkit-keyframes hide-modal{from{opacity:1}to{opacity:0}}@keyframes hide-modal{from{opacity:1}to{opacity:0}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple .default-button{max-width:calc(30vw / 3)!important;min-width:calc(30vw / 3)!important}:host::ng-deep .modal-container .modal-main-content .modal-footer{position:relative;border-top:0 solid transparent!important}:host::ng-deep .modal-container .modal-main-content .modal-footer::before{width:100%;height:1px;left:0;top:1px;margin-top:-1px;content:\"\";position:absolute;background:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%)}}@media screen and (min-device-width:1024px) and (orientation:landscape){:host::ng-deep .modal-container .modal-main-content{width:30vw}:host::ng-deep .modal-container .modal-main-content gl-shared-component-input-button-simple{margin:0 .2em;max-width:calc(30vw / 3)}}"]
    })
], GlSharedComponentModalAlertComponent);
export { GlSharedComponentModalAlertComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQU8vRixJQUFhLG9DQUFvQyxHQUFqRCxNQUFhLG9DQUFvQztJQVkvQyxZQUFtQixPQUEyQztRQUEzQyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQVJyRCxpQkFBWSxHQUFHLElBQUksQ0FBQztRQUNwQixrQkFBYSxHQUFFLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFFLElBQUksQ0FBQztRQUVuQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFFLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUUsSUFBSSxDQUFDO0lBRTJDLENBQUM7Q0FFcEUsQ0FBQTs7WUFGNkIsa0NBQWtDOztBQVhyRDtJQUFSLEtBQUssRUFBRTttRUFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO3NFQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTt1RUFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7MEVBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFOzJFQUFzQjtBQUNyQjtJQUFSLEtBQUssRUFBRTswRUFBb0I7QUFFbkI7SUFBUixLQUFLLEVBQUU7cUVBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7c0VBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO3FFQUFlO0FBVlosb0NBQW9DO0lBTGhELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQ0FBaUM7UUFDM0MsdzRDQUErRDs7S0FFaEUsQ0FBQztHQUNXLG9DQUFvQyxDQWNoRDtTQWRZLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRDb21wb25lbnQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtb2RhbExvZ286IHN0cmluZztcbiAgQElucHV0KCkgaW5uZXJWYWx1ZU5vID0gJ05vJztcbiAgQElucHV0KCkgaW5uZXJWYWx1ZVllcz0gJ1llcyc7XG4gIEBJbnB1dCgpIGlubmVyVmFsdWVPSz0gJ09LJztcblxuICBASW5wdXQoKSBub1ZhbHVlID0gJ25vJztcbiAgQElucHV0KCkgeWVzVmFsdWU9ICd5ZXMnO1xuICBASW5wdXQoKSBva1ZhbHVlPSAnb2snO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7IH1cblxufVxuIl19