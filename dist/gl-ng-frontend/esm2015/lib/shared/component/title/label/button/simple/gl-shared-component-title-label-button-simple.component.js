import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let GlSharedComponentTitleLabelButtonSimpleComponent = class GlSharedComponentTitleLabelButtonSimpleComponent {
    constructor() {
        this.required = false;
        this.requiredFieldDescription = 'Required field';
    }
};
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "alt", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "src", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "required", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "class", void 0);
__decorate([
    Input()
], GlSharedComponentTitleLabelButtonSimpleComponent.prototype, "requiredFieldDescription", void 0);
GlSharedComponentTitleLabelButtonSimpleComponent = __decorate([
    Component({
        selector: 'gl-shared-component-title-label-button-simple',
        template: "<div class=\"label-button-container {{ class }}\">\n  <div\n    [attr.alt]=\"alt\"\n    class=\"tooltip top\">\n    <img\n      class=\"label-button\"\n      [id]=\"id\"\n      [src]=\"src\"\n      [alt]=\"alt\">\n  </div>\n  <img\n    *ngIf=\"required\"\n    src=\"../assets/img/icon/label/dot.svg\"\n    class=\"required-fill-dot\"\n    [title]=\"requiredFieldDescription\"\n    alt=\"Required fill icon\">\n</div>\n",
        styles: [".required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}.label-button-container{display:flex;position:absolute;top:.19em;right:.2em}.label-button-container .label-button{cursor:pointer;height:1em;width:1em;margin:0 .1em}.label-button-container .label-button:hover{transform:scale(1.1);opacity:1;transition:.2s ease-in-out}.label-button-container .label-button:not(hover){transform:scale(1);opacity:.5;transition:.2s ease-in-out}"]
    })
], GlSharedComponentTitleLabelButtonSimpleComponent);
export { GlSharedComponentTitleLabelButtonSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvdGl0bGUvbGFiZWwvYnV0dG9uL3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LXRpdGxlLWxhYmVsLWJ1dHRvbi1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU9qRCxJQUFhLGdEQUFnRCxHQUE3RCxNQUFhLGdEQUFnRDtJQVMzRDtRQUpTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsNkJBQXdCLEdBQVcsZ0JBQWdCLENBQUM7SUFFN0MsQ0FBQztDQUNsQixDQUFBO0FBUlU7SUFBUixLQUFLLEVBQUU7NEVBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTs2RUFBYTtBQUNaO0lBQVIsS0FBSyxFQUFFOzZFQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7a0ZBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOytFQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7a0dBQXFEO0FBUGxELGdEQUFnRDtJQUw1RCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0NBQStDO1FBQ3pELDhhQUE2RTs7S0FFOUUsQ0FBQztHQUNXLGdEQUFnRCxDQVU1RDtTQVZZLGdEQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC10aXRsZS1sYWJlbC1idXR0b24tc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtdGl0bGUtbGFiZWwtYnV0dG9uLXNpbXBsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50VGl0bGVMYWJlbEJ1dHRvblNpbXBsZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZEZpZWxkRGVzY3JpcHRpb246IHN0cmluZyA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiJdfQ==