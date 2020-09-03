import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentInputButtonHyperlinkComponent = class GlSharedComponentInputButtonHyperlinkComponent {
    constructor() { }
};
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageSrc", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "imageDescription", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "description", void 0);
__decorate([
    Input()
], GlSharedComponentInputButtonHyperlinkComponent.prototype, "link", void 0);
GlSharedComponentInputButtonHyperlinkComponent = __decorate([
    Component({
        selector: 'gl-shared-component-input-button-hyperlink',
        template: "<div class=\"hyperlink-container\">\n  <img\n    class=\"logo\"\n    [src]=\"imageSrc\"\n    [alt]=\"imageDescription\">\n  <a\n    class=\"message\"\n    [href]=\"link\"\n    target=\"_blank\">{{ description }}</a>\n</div>\n",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .hyperlink-container{display:flex;flex-direction:row;align-items:center;position:absolute;right:.3em;bottom:.3em}:host::ng-deep .hyperlink-container .logo{width:.7em;height:.7em;margin:0 .2em 0 0}:host::ng-deep .hyperlink-container .message{margin:0 0 0 .2em;font-family:Montserrat,sans-serif;font-weight:400;font-size:.5em;color:#ff9800}"]
    })
], GlSharedComponentInputButtonHyperlinkComponent);
export { GlSharedComponentInputButtonHyperlinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC1idXR0b24taHlwZXJsaW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvYnV0dG9uL2h5cGVybGluay9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLDhDQUE4QyxHQUEzRCxNQUFhLDhDQUE4QztJQU16RCxnQkFBZ0IsQ0FBQztDQUNsQixDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7Z0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3dGQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTttRkFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7NEVBQWM7QUFKWCw4Q0FBOEM7SUFMMUQsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDRDQUE0QztRQUN0RCw2T0FBMEU7O0tBRTNFLENBQUM7R0FDVyw4Q0FBOEMsQ0FPMUQ7U0FQWSw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtYnV0dG9uLWh5cGVybGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LWJ1dHRvbi1oeXBlcmxpbmsuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudElucHV0QnV0dG9uSHlwZXJsaW5rQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaW1hZ2VTcmM6IHN0cmluZztcbiAgQElucHV0KCkgaW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBsaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==