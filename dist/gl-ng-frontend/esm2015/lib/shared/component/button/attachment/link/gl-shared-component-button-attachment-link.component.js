import { Component } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from '../../../modal/attachment/link/gl-shared-component-modal-attachment-link.service';
export class GlSharedComponentButtonAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
    }
}
GlSharedComponentButtonAttachmentLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-link',
                template: "<div\r\n  class=\"attachment-container dark link-container\"\r\n  (click)=\"service.modal(true)\">\r\n  <img\r\n    class=\"attachment-icon\"\r\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\r\n    alt=\"Attachment Icon\">\r\n  <span\r\n    id=\"add-attachment-link\"\r\n    class=\"attachment-file-button\">Adicionar link</span>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.8em .8em .8em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSxrRkFBa0YsQ0FBQztBQU8vSSxNQUFNLE9BQU8sOENBQThDO0lBRXpELFlBQW1CLE9BQW9EO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQTZDO0lBQUksQ0FBQzs7O1lBUDdFLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNENBQTRDO2dCQUN0RCxtWEFBMEU7O2FBRTNFOzs7WUFOUSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2F0dGFjaG1lbnQvbGluay9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50TGlua0NvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQXR0YWNobWVudExpbmtTZXJ2aWNlKSB7IH1cclxuXHJcbn1cclxuIl19