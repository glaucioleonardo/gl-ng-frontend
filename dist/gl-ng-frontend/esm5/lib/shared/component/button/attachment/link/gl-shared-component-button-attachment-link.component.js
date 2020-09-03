import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlSharedComponentModalAttachmentLinkService } from '../../../modal/attachment/link/gl-shared-component-modal-attachment-link.service';
var GlSharedComponentButtonAttachmentLinkComponent = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentLinkComponent(service) {
        this.service = service;
    }
    GlSharedComponentButtonAttachmentLinkComponent.ctorParameters = function () { return [
        { type: GlSharedComponentModalAttachmentLinkService }
    ]; };
    GlSharedComponentButtonAttachmentLinkComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-attachment-link',
            template: "<div\n  class=\"attachment-container dark link-container\"\n  (click)=\"service.modal(true)\">\n  <img\n    class=\"attachment-icon\"\n    src=\"../assets/img/icon/menu/attachment/link-white.svg\"\n    alt=\"Attachment Icon\">\n  <span\n    id=\"add-attachment-link\"\n    class=\"attachment-file-button\">Adicionar link</span>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.8em .8em .8em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
        })
    ], GlSharedComponentButtonAttachmentLinkComponent);
    return GlSharedComponentButtonAttachmentLinkComponent;
}());
export { GlSharedComponentButtonAttachmentLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvbGluay9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBTy9JO0lBRUUsd0RBQW1CLE9BQW9EO1FBQXBELFlBQU8sR0FBUCxPQUFPLENBQTZDO0lBQUksQ0FBQzs7Z0JBQWhELDJDQUEyQzs7SUFGNUQsOENBQThDO1FBTDFELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0Q0FBNEM7WUFDdEQsNlZBQTBFOztTQUUzRSxDQUFDO09BQ1csOENBQThDLENBSTFEO0lBQUQscURBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBdHRhY2htZW50TGlua1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RhbC9hdHRhY2htZW50L2xpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRMaW5rQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSkgeyB9XG5cbn1cbiJdfQ==