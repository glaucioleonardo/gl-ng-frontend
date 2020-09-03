import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
let GlSharedComponentButtonAttachmentFileComponent = class GlSharedComponentButtonAttachmentFileComponent {
    constructor(service) {
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
    ngAfterViewInit() {
        this.service.initialize(this.fileInput.nativeElement, this.currentValue$, this.attachments, this.duplicatedDescription, this.invalidSizeDescription, this.invalidFormatDescription, this.attachmentIconSrc);
    }
};
GlSharedComponentButtonAttachmentFileComponent.ctorParameters = () => [
    { type: GlSharedComponentButtonAttachmentFileService }
];
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
export { GlSharedComponentButtonAttachmentFileComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvZmlsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdHLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBUXBILElBQWEsOENBQThDLEdBQTNELE1BQWEsOENBQThDO0lBb0J6RCxZQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQWpCeEU7OztXQUdHO1FBQ00sZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFFOUIsVUFBSyxHQUFXLDRCQUE0QixDQUFDO1FBQzdDLFNBQUksR0FBVyw4Q0FBOEMsQ0FBQztRQUU5RCxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUNwQywwQkFBcUIsR0FBVyw0Q0FBNEMsQ0FBQztRQUM3RSwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUV6RCxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUEsQ0FBQztJQUU3RSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQzFCLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFiNkIsNENBQTRDOztBQW5CWjtJQUEzRCxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7aUZBQXlDO0FBTTNGO0lBQVIsS0FBSyxFQUFFO21GQUErQjtBQUM5QjtJQUFSLEtBQUssRUFBRTs4RUFBa0I7QUFDakI7SUFBUixLQUFLLEVBQUU7NkVBQThDO0FBQzdDO0lBQVIsS0FBSyxFQUFFOzRFQUErRDtBQUM5RDtJQUFSLEtBQUssRUFBRTt5RkFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7bUZBQXdDO0FBQ3ZDO0lBQVIsS0FBSyxFQUFFO21GQUFxQztBQUNwQztJQUFSLEtBQUssRUFBRTs2RkFBOEU7QUFDN0U7SUFBUixLQUFLLEVBQUU7OEZBQStFO0FBQzlFO0lBQVIsS0FBSyxFQUFFO2dHQUEyRDtBQUV6RDtJQUFULE1BQU0sRUFBRTtxRkFBbUU7QUFsQmpFLDhDQUE4QztJQUwxRCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNENBQTRDO1FBQ3RELDZiQUEwRTs7S0FFM0UsQ0FBQztHQUNXLDhDQUE4QyxDQWlDMUQ7U0FqQ1ksOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2UgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5zZXJ2aWNlJztcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gXCJnbC1zcC1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KSBmaWxlSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBtYXhGaWxlU2l6ZSBTaXplIGluIEtCLlxuICAgKiBAcGFyYW0gYXR0YWNobWVudEljb25TcmMgKE9wdGlvbmFsKSBJbiBjYXNlIHRoZSBzb3VyY2UgaXMgbm90IGluZm9ybWVkLCB0aGUgZGVmYXVsdCBwYXRoIHdpbGwgYmUgdGhlIG9uZSBpbiBnbC13LWZyb250ZW5kIHBhY2thZ2UuXG4gICAqL1xuICBASW5wdXQoKSBtYXhGaWxlU2l6ZTogc3RyaW5nID0gJzQ2MDgwJztcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZyA9ICdDbGljayB0byBhZGQgYW4gYXR0YWNobWVudCc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcuLi9hc3NldHMvaW1nL2ljb24vYXR0YWNobWVudC9hdHRhY2htZW50LnN2Zyc7XG4gIEBJbnB1dCgpIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnQWRkIGF0dGFjaG1lbnQnO1xuICBASW5wdXQoKSBhdHRhY2htZW50czogSUF0dGFjaG1lbnREYXRhW10gPSBbXTtcbiAgQElucHV0KCkgZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnRmlsZSBkdXBsaWNhdGVkLiBQbGVhc2UsIGFkZCBhbm90aGVyIGZpbGUhJztcbiAgQElucHV0KCkgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBzaXplLiBUaGUgbWF4IGFsbG93ZWQgc2l6ZSBpcyc7XG4gIEBJbnB1dCgpIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ludmFsaWQgZmlsZSBmb3JtYXQhJztcblxuICBAT3V0cHV0KCkgY3VycmVudFZhbHVlJDogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXG4gICAgICB0aGlzLmZpbGVJbnB1dC5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUkLFxuICAgICAgdGhpcy5hdHRhY2htZW50cyxcbiAgICAgIHRoaXMuZHVwbGljYXRlZERlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbnZhbGlkU2l6ZURlc2NyaXB0aW9uLFxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24sXG4gICAgICB0aGlzLmF0dGFjaG1lbnRJY29uU3JjXG4gICAgKTtcbiAgfVxufVxuIl19