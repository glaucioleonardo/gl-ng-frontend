import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from '../../../modal/attachment/link/gl-shared-component-modal-attachment-link.service';
let GlSharedComponentButtonAttachmentLinkComponent = class GlSharedComponentButtonAttachmentLinkComponent {
    constructor(service) {
        this.service = service;
    }
};
GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = () => [
    { type: GlSharedComponentModalAttachmentLinkService }
];
GlSharedComponentButtonAttachmentLinkComponent = __decorate([
    Component({
        selector: 'gl-shared-component-button-attachment-link',
        template: "<div\n  class=\"attachment-container dark link-container\"\n  (click)=\"service.modal(true)\">\n  <img\n    class=\"attachment-icon\"\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\n    alt=\"Attachment Icon\">\n  <span\n    id=\"add-attachment-link\"\n    class=\"attachment-file-button\">Adicionar link</span>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.8em .8em .8em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
    })
], GlSharedComponentButtonAttachmentLinkComponent);
export { GlSharedComponentButtonAttachmentLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvbGluay9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBTy9JLElBQWEsOENBQThDLEdBQTNELE1BQWEsOENBQThDO0lBRXpELFlBQW1CLE9BQW9EO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQTZDO0lBQUksQ0FBQztDQUU3RSxDQUFBOztZQUY2QiwyQ0FBMkM7O0FBRjVELDhDQUE4QztJQUwxRCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNENBQTRDO1FBQ3RELDZWQUEwRTs7S0FFM0UsQ0FBQztHQUNXLDhDQUE4QyxDQUkxRDtTQUpZLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2F0dGFjaG1lbnQvbGluay9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtbGluay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudExpbmtDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQXR0YWNobWVudExpbmtTZXJ2aWNlKSB7IH1cblxufVxuIl19