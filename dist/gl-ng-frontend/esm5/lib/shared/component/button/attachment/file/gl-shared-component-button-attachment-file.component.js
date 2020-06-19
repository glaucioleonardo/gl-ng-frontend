import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
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
    GlSharedComponentButtonAttachmentFileComponent = __decorate([
        Component({
            selector: 'gl-shared-component-button-attachment-file',
            template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\n  <input\n    #fileInput\n    id=\"file-input\"\n    name=\"file-input\"\n    type=\"file\"\n    class=\"file-input\"\n    [accept]=\"accept\"\n    [title]=\"title\"\n    [attr.data-maxsize]=\"maxFileSize\"/>\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\n  <span class=\"attachment-file-button\">{{ description }}</span>\n</div>\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{position:relative;display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:.2s ease-in-out}:host::ng-deep .attachment-container .file-input{font-size:1em;display:none}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2em;width:2em;margin:.5em .8em .5em .2em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host::ng-deep .attachment-container .file{font-size:.8em;color:#1e1e1e;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:75%;padding:1em 0}:host::ng-deep .attachment-container .attachment-file-button{color:#fff;font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"]
        })
    ], GlSharedComponentButtonAttachmentFileComponent);
    return GlSharedComponentButtonAttachmentFileComponent;
}());
export { GlSharedComponentButtonAttachmentFileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvZmlsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBT3BIO0lBb0JFLHdEQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQWpCeEU7OztXQUdHO1FBQ00sZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFFOUIsVUFBSyxHQUFXLDRCQUE0QixDQUFDO1FBQzdDLFNBQUksR0FBVyw4Q0FBOEMsQ0FBQztRQUU5RCxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUNwQywwQkFBcUIsR0FBVyw0Q0FBNEMsQ0FBQztRQUM3RSwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUV6RCxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUEsQ0FBQztJQUU3RSx3RUFBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQzFCLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDOztnQkFaMkIsNENBQTRDOztJQW5CWjtRQUEzRCxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7cUZBQXlDO0lBTTNGO1FBQVIsS0FBSyxFQUFFO3VGQUErQjtJQUM5QjtRQUFSLEtBQUssRUFBRTtrRkFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7aUZBQThDO0lBQzdDO1FBQVIsS0FBSyxFQUFFO2dGQUErRDtJQUM5RDtRQUFSLEtBQUssRUFBRTs2RkFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7dUZBQXdDO0lBQ3ZDO1FBQVIsS0FBSyxFQUFFO3VGQUFxQztJQUNwQztRQUFSLEtBQUssRUFBRTtpR0FBOEU7SUFDN0U7UUFBUixLQUFLLEVBQUU7a0dBQStFO0lBQzlFO1FBQVIsS0FBSyxFQUFFO29HQUEyRDtJQUV6RDtRQUFULE1BQU0sRUFBRTt5RkFBbUU7SUFsQmpFLDhDQUE4QztRQUwxRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNENBQTRDO1lBQ3RELDZiQUEwRTs7U0FFM0UsQ0FBQztPQUNXLDhDQUE4QyxDQWlDMUQ7SUFBRCxxREFBQztDQUFBLEFBakNELElBaUNDO1NBakNZLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiB0cnVlIH0pIGZpbGVJbnB1dDogRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuICAvKipcbiAgICogQHBhcmFtIG1heEZpbGVTaXplIFNpemUgaW4gS0IuXG4gICAqIEBwYXJhbSBhdHRhY2htZW50SWNvblNyYyAoT3B0aW9uYWwpIEluIGNhc2UgdGhlIHNvdXJjZSBpcyBub3QgaW5mb3JtZWQsIHRoZSBkZWZhdWx0IHBhdGggd2lsbCBiZSB0aGUgb25lIGluIGdsLXctZnJvbnRlbmQgcGFja2FnZS5cbiAgICovXG4gIEBJbnB1dCgpIG1heEZpbGVTaXplOiBzdHJpbmcgPSAnNDYwODAnO1xuICBASW5wdXQoKSBhY2NlcHQ6IHN0cmluZ1tdO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ0NsaWNrIHRvIGFkZCBhbiBhdHRhY2htZW50JztcbiAgQElucHV0KCkgaWNvbjogc3RyaW5nID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9hdHRhY2htZW50L2F0dGFjaG1lbnQuc3ZnJztcbiAgQElucHV0KCkgYXR0YWNobWVudEljb25TcmM6IHN0cmluZztcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9ICdBZGQgYXR0YWNobWVudCc7XG4gIEBJbnB1dCgpIGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXSA9IFtdO1xuICBASW5wdXQoKSBkdXBsaWNhdGVkRGVzY3JpcHRpb246IHN0cmluZyA9ICdGaWxlIGR1cGxpY2F0ZWQuIFBsZWFzZSwgYWRkIGFub3RoZXIgZmlsZSEnO1xuICBASW5wdXQoKSBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW52YWxpZCBmaWxlIHNpemUuIFRoZSBtYXggYWxsb3dlZCBzaXplIGlzJztcbiAgQElucHV0KCkgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW52YWxpZCBmaWxlIGZvcm1hdCEnO1xuXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUkOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlcnZpY2UuaW5pdGlhbGl6ZShcbiAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSQsXG4gICAgICB0aGlzLmF0dGFjaG1lbnRzLFxuICAgICAgdGhpcy5kdXBsaWNhdGVkRGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmludmFsaWRTaXplRGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmludmFsaWRGb3JtYXREZXNjcmlwdGlvbixcbiAgICAgIHRoaXMuYXR0YWNobWVudEljb25TcmNcbiAgICApO1xuICB9XG59XG4iXX0=