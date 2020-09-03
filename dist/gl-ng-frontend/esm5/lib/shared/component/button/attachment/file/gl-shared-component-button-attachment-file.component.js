import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
import * as ɵngcc0 from '@angular/core';

var _c0 = ["fileInput"];
var GlSharedComponentButtonAttachmentFileComponent = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentFileComponent(service) {
        this.service = service;
        /**
         * @param maxFileSize Size in KB.
         * @param attachmentIconSrc (Optional) In case the source is not informed, the default path will be the one in gl-w-frontend package.
         */
        this.maxFileSize = '46080';
        this.title = 'Click to add an attachment';
        this.icon = '../assets/img/icon/attachment/attachment.svg';
        this.description = 'Add attachment';
        this.attachments = [];
        this.duplicatedDescription = 'File duplicated. Please, add another file!';
        this.invalidSizeDescription = 'Invalid file size. The max allowed size is';
        this.invalidFormatDescription = 'Invalid file format!';
        this.currentValue$ = new EventEmitter();
    }
    GlSharedComponentButtonAttachmentFileComponent.prototype.ngAfterViewInit = function () {
        this.service.initialize(this.fileInput.nativeElement, this.currentValue$, this.attachments, this.duplicatedDescription, this.invalidSizeDescription, this.invalidFormatDescription, this.attachmentIconSrc);
    };
    GlSharedComponentButtonAttachmentFileComponent.ctorParameters = function () { return [
        { type: GlSharedComponentButtonAttachmentFileService }
    ]; };
    __decorate([
        ViewChild('fileInput', { read: ElementRef, static: true })
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "fileInput", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "maxFileSize", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "accept", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "icon", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "attachmentIconSrc", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "description", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "attachments", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "duplicatedDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "invalidSizeDescription", void 0);
    __decorate([
        Input()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "invalidFormatDescription", void 0);
    __decorate([
        Output()
    ], GlSharedComponentButtonAttachmentFileComponent.prototype, "currentValue$", void 0);
GlSharedComponentButtonAttachmentFileComponent.ɵfac = function GlSharedComponentButtonAttachmentFileComponent_Factory(t) { return new (t || GlSharedComponentButtonAttachmentFileComponent)(ɵngcc0.ɵɵdirectiveInject(GlSharedComponentButtonAttachmentFileService)); };
GlSharedComponentButtonAttachmentFileComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentButtonAttachmentFileComponent, selectors: [["gl-shared-component-button-attachment-file"]], viewQuery: function GlSharedComponentButtonAttachmentFileComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
    } }, inputs: { maxFileSize: "maxFileSize", title: "title", icon: "icon", description: "description", attachments: "attachments", duplicatedDescription: "duplicatedDescription", invalidSizeDescription: "invalidSizeDescription", invalidFormatDescription: "invalidFormatDescription", accept: "accept", attachmentIconSrc: "attachmentIconSrc" }, outputs: { currentValue$: "currentValue$" }, decls: 6, vars: 5, consts: [[1, "attachment-container", 3, "click"], ["id", "file-input", "name", "file-input", "type", "file", 1, "file-input", 3, "accept", "title"], ["fileInput", ""], ["alt", "Attachment Icon", 1, "attachment-icon", 3, "src"], [1, "attachment-file-button"]], template: function GlSharedComponentButtonAttachmentFileComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentButtonAttachmentFileComponent_Template_div_click_0_listener() { return ctx.service.addAttachment(); });
        ɵngcc0.ɵɵelement(1, "input", 1, 2);
        ɵngcc0.ɵɵelement(3, "img", 3);
        ɵngcc0.ɵɵelementStart(4, "span", 4);
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("accept", ctx.accept)("title", ctx.title);
        ɵngcc0.ɵɵattribute("data-maxsize", ctx.maxFileSize);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("src", ctx.icon, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.description);
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}[_nghost-%COMP%]  .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container .file-input{font-size:1em;display:none}[_nghost-%COMP%]  .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.5em .8em .5em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[_nghost-%COMP%]  .attachment-container .file{font-size:.8em;color:#1e1e1e;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:75%;padding:1em 0}[_nghost-%COMP%]  .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentButtonAttachmentFileComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-button-attachment-file',
                template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\n  <input\n    #fileInput\n    id=\"file-input\"\n    name=\"file-input\"\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"accept\"\n    [title]=\"title\"\n    [attr.data-maxsize]=\"maxFileSize\"/>\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\n  <span class=\"attachment-file-button\">{{ description }}</span>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .file-input{font-size:1em;display:none}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.5em .8em .5em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .file{font-size:.8em;color:#1e1e1e;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:75%;padding:1em 0}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
            }]
    }], function () { return [{ type: GlSharedComponentButtonAttachmentFileService }]; }, { maxFileSize: [{
            type: Input
        }], title: [{
            type: Input
        }], icon: [{
            type: Input
        }], description: [{
            type: Input
        }], attachments: [{
            type: Input
        }], duplicatedDescription: [{
            type: Input
        }], invalidSizeDescription: [{
            type: Input
        }], invalidFormatDescription: [{
            type: Input
        }], currentValue$: [{
            type: Output
        }], fileInput: [{
            type: ViewChild,
            args: ['fileInput', { read: ElementRef, static: true }]
        }], accept: [{
            type: Input
        }], attachmentIconSrc: [{
            type: Input
        }] }); })();
    return GlSharedComponentButtonAttachmentFileComponent;
}());
export { GlSharedComponentButtonAttachmentFileComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9hdHRhY2htZW50L2ZpbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQyxwSEFBcEgsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFRcEg7OzttQkFvQkUsd0RBQW1CLDNFQXBCckI7QUFvQjBFLFlBQXJELFlBQU8sR0FBUCxPQUFPLENBQThDLFNBakJ4RSw1Q0FIZ0YsSUFvQmhGLHdEQUFtQixPQUFxRDtBQUFJLFFBQXpELFlBQU8sR0FBUCxPQUFPLENBQThDO0FBQUMsUUFqQnpFO0FBQ0Y7c0ZBRUssU0FDTSxnQkFBVyxHQUFXLE9BQU8sQ0FBQyxTQUU5QixVQUFLLDdJQUpWO0VBSXFCLEZBRnJCLFdBREQ7a0JBR2tELENBQUMsU0FDN0MsNUJBSFgsUUFBVyxnQkFBVyxHQUFXLE9BQU8sQ0FBQztDQUcxQixHQUFXLDhDQUE4QyxsREFGeEUsUUFDVyxVQUFLLEdBQVcsNEJBQTRCLENBQUM7QUFDaUIsU0FFOUQsZ0JBQVcsR0FBVyxnQkFBZ0IsQ0FBQyxTQUN2Qyx0REFIWCxRQUFXLFNBQUksR0FBVyw4Q0FBOEMsQ0FBQztFQUduRCxHQUFzQixFQUFFLENBQUMsU0FDcEMsMEJBQXFCLDNDQUhoQyxRQUNXLGdCQUFXLEdBQVcsZ0JBQWdCLENBQUM7Q0FFUCxEQUQzQyxRQUFXLGdCQUFXLEdB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dEIsTUFBTSxFQUFFO3lGQUFtRSx6RkFBbEUseUZBQWtFO0lBbEJqRSw4Q0FBOEMsd0JBTDFELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSw0Q0FBNEMsY0FDdEQsbEtBR1csOENBQThDLHdCQUwxRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsNENBQTRDLGNBQ3REOztxREFBMEUsQUFBQTs7Ozs7Ozs7O3NCQUUzRSxDQUFDLFFBQ1csVEFEWixDQUFDLFFBQ1c7O01BQThDLENBaUMxRCxNQUFELFBBakMyRCxDQWlDMUQ7O0lBQUEsR0FBQSxBQWpDRCxJQWlDQztDQWpDWTtrQkFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFrQzNEO0FBQUMsSUFERCxxREFBQztBQUNBLENBREEsQUFqQ0QsSUFpQ0M7O0FBMUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZSc7XG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tIFwiZ2wtc3AtZnJvbnRlbmRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZmlsZUlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gbWF4RmlsZVNpemUgU2l6ZSBpbiBLQi5cbiAgICogQHBhcmFtIGF0dGFjaG1lbnRJY29uU3JjIChPcHRpb25hbCkgSW4gY2FzZSB0aGUgc291cmNlIGlzIG5vdCBpbmZvcm1lZCwgdGhlIGRlZmF1bHQgcGF0aCB3aWxsIGJlIHRoZSBvbmUgaW4gZ2wtdy1mcm9udGVuZCBwYWNrYWdlLlxuICAgKi9cbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IHN0cmluZyA9ICc0NjA4MCc7XG4gIEBJbnB1dCgpIGFjY2VwdDogc3RyaW5nW107XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnQ2xpY2sgdG8gYWRkIGFuIGF0dGFjaG1lbnQnO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2F0dGFjaG1lbnQvYXR0YWNobWVudC5zdmcnO1xuICBASW5wdXQoKSBhdHRhY2htZW50SWNvblNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJ0FkZCBhdHRhY2htZW50JztcbiAgQElucHV0KCkgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdID0gW107XG4gIEBJbnB1dCgpIGR1cGxpY2F0ZWREZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ZpbGUgZHVwbGljYXRlZC4gUGxlYXNlLCBhZGQgYW5vdGhlciBmaWxlISc7XG4gIEBJbnB1dCgpIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgc2l6ZS4gVGhlIG1heCBhbGxvd2VkIHNpemUgaXMnO1xuICBASW5wdXQoKSBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgZm9ybWF0ISc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSQ6IEV2ZW50RW1pdHRlcjxJQXR0YWNobWVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlU2VydmljZSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5pbml0aWFsaXplKFxuICAgICAgdGhpcy5maWxlSW5wdXQubmF0aXZlRWxlbWVudCxcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlJCxcbiAgICAgIHRoaXMuYXR0YWNobWVudHMsXG4gICAgICB0aGlzLmR1cGxpY2F0ZWREZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuaW52YWxpZFNpemVEZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5hdHRhY2htZW50SWNvblNyY1xuICAgICk7XG4gIH1cbn1cbiJdfQ==