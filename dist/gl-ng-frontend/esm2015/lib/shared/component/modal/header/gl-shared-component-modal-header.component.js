import { Component, Input } from '@angular/core';
export class GlSharedComponentModalHeaderComponent {
    constructor() { }
}
GlSharedComponentModalHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-modal-header',
                template: "<div class=\"modal-title-container\">\r\n  <div class=\"modal-title-text-container\">\r\n    <h2 class=\"modal-title\">{{ title }}</h2>\r\n    <h2 class=\"modal-title\">{{ subtitle }}</h2>\r\n  </div>\r\n  <img class=\"modal-logo\" [src]=\"modalLogo\" alt=\"Header Logo\">\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .modal-title-container{align-items:center;background-color:#1a1b1d;border-bottom:1px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));display:flex;font-size:.65em;justify-content:flex-start;padding:.5em 0;text-align:left;width:100%}:host::ng-deep .modal-title-container .modal-logo{height:1.5em;margin:0 .5em;width:1.5em}:host::ng-deep .modal-title-container .modal-title-text-container{align-items:center;display:flex;flex-grow:1;margin:0 1em}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#64666c;font-family:Montserrat,sans-serif;font-weight:400;text-transform:uppercase;user-select:none}:host::ng-deep .modal-title-container .modal-title-text-container .modal-title:first-child{margin:0 .3em 0 0}"]
            },] }
];
GlSharedComponentModalHeaderComponent.ctorParameters = () => [];
GlSharedComponentModalHeaderComponent.propDecorators = {
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    modalLogo: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L21vZGFsL2hlYWRlci9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsTUFBTSxPQUFPLHFDQUFxQztJQUloRCxnQkFBZ0IsQ0FBQzs7O1lBVGxCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QywwU0FBZ0U7O2FBRWpFOzs7O29CQUVFLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWhlYWRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsSGVhZGVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbW9kYWxMb2dvOiBzdHJpbmc7XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxufVxyXG4iXX0=