import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';
export class GlSharedComponentButtonAttachmentFileComponent {
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
}
GlSharedComponentButtonAttachmentFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-button-attachment-file',
                template: "<div class=\"attachment-container\" (click)=\"service.addAttachment()\">\r\n  <input\r\n    #fileInput\r\n    id=\"file-input\"\r\n    name=\"file-input\"\r\n    type=\"file\"\r\n    class=\"file-input\"\r\n    [accept]=\"accept\"\r\n    [title]=\"title\"\r\n    [attr.data-maxsize]=\"maxFileSize\"/>\r\n  <img class=\"attachment-icon\" [src]=\"icon\" alt=\"Attachment Icon\">\r\n  <span class=\"attachment-file-button\">{{ description }}</span>\r\n</div>\r\n",
                styles: ["@import url(\"https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900\");:host::ng-deep .attachment-container{align-items:center;border-radius:.5em;cursor:pointer;display:flex;margin:.2em 0;padding:.4em .3em;position:relative}:host::ng-deep .attachment-container:not(hover){background:rgba(63,64,68,.6);transition:all .2s ease-in-out}:host::ng-deep .attachment-container:hover{background:rgba(63,64,68,.9);transition:all .2s ease-in-out}:host::ng-deep .attachment-container .file-input{display:none;font-size:1em}:host::ng-deep .attachment-container .attachment-icon{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;height:2em;margin:.5em .8em .5em .2em;padding:0;user-select:none;width:2em}:host::ng-deep .attachment-container .file{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#1e1e1e;font-size:.8em;overflow:hidden;padding:1em 0;text-overflow:ellipsis;user-select:none;white-space:nowrap;width:75%}:host::ng-deep .attachment-container .attachment-file-button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;color:#fff;font-family:Montserrat,sans-serif;font-weight:400;user-select:none}"]
            },] }
];
GlSharedComponentButtonAttachmentFileComponent.ctorParameters = () => [
    { type: GlSharedComponentButtonAttachmentFileService }
];
GlSharedComponentButtonAttachmentFileComponent.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { read: ElementRef, static: true },] }],
    maxFileSize: [{ type: Input }],
    accept: [{ type: Input }],
    title: [{ type: Input }],
    icon: [{ type: Input }],
    attachmentIconSrc: [{ type: Input }],
    description: [{ type: Input }],
    attachments: [{ type: Input }],
    duplicatedDescription: [{ type: Input }],
    invalidSizeDescription: [{ type: Input }],
    invalidFormatDescription: [{ type: Input }],
    currentValue$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9idXR0b24vYXR0YWNobWVudC9maWxlL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQVFwSCxNQUFNLE9BQU8sOENBQThDO0lBb0J6RCxZQUFtQixPQUFxRDtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUE4QztRQWpCeEU7OztXQUdHO1FBQ00sZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFFOUIsVUFBSyxHQUFXLDRCQUE0QixDQUFDO1FBQzdDLFNBQUksR0FBVyw4Q0FBOEMsQ0FBQztRQUU5RCxnQkFBVyxHQUFXLGdCQUFnQixDQUFDO1FBQ3ZDLGdCQUFXLEdBQXNCLEVBQUUsQ0FBQztRQUNwQywwQkFBcUIsR0FBVyw0Q0FBNEMsQ0FBQztRQUM3RSwyQkFBc0IsR0FBVyw0Q0FBNEMsQ0FBQztRQUM5RSw2QkFBd0IsR0FBVyxzQkFBc0IsQ0FBQztRQUV6RCxrQkFBYSxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRUEsQ0FBQztJQUU3RSxlQUFlO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUM1QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQzFCLElBQUksQ0FBQyxzQkFBc0IsRUFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0Q0FBNEM7Z0JBQ3RELHVkQUEwRTs7YUFFM0U7OztZQVBRLDRDQUE0Qzs7O3dCQVNsRCxTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzBCQU16RCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO29DQUNMLEtBQUs7cUNBQ0wsS0FBSzt1Q0FDTCxLQUFLOzRCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gXCJnbC1zcC1mcm9udGVuZFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWF0dGFjaG1lbnQtZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgZmlsZUlucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gbWF4RmlsZVNpemUgU2l6ZSBpbiBLQi5cclxuICAgKiBAcGFyYW0gYXR0YWNobWVudEljb25TcmMgKE9wdGlvbmFsKSBJbiBjYXNlIHRoZSBzb3VyY2UgaXMgbm90IGluZm9ybWVkLCB0aGUgZGVmYXVsdCBwYXRoIHdpbGwgYmUgdGhlIG9uZSBpbiBnbC13LWZyb250ZW5kIHBhY2thZ2UuXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4RmlsZVNpemU6IHN0cmluZyA9ICc0NjA4MCc7XHJcbiAgQElucHV0KCkgYWNjZXB0OiBzdHJpbmdbXTtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJ0NsaWNrIHRvIGFkZCBhbiBhdHRhY2htZW50JztcclxuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2F0dGFjaG1lbnQvYXR0YWNobWVudC5zdmcnO1xyXG4gIEBJbnB1dCgpIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZyA9ICdBZGQgYXR0YWNobWVudCc7XHJcbiAgQElucHV0KCkgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdID0gW107XHJcbiAgQElucHV0KCkgZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcgPSAnRmlsZSBkdXBsaWNhdGVkLiBQbGVhc2UsIGFkZCBhbm90aGVyIGZpbGUhJztcclxuICBASW5wdXQoKSBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcgPSAnSW52YWxpZCBmaWxlIHNpemUuIFRoZSBtYXggYWxsb3dlZCBzaXplIGlzJztcclxuICBASW5wdXQoKSBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZyA9ICdJbnZhbGlkIGZpbGUgZm9ybWF0ISc7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VmFsdWUkOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXJ2aWNlLmluaXRpYWxpemUoXHJcbiAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHRoaXMuY3VycmVudFZhbHVlJCxcclxuICAgICAgdGhpcy5hdHRhY2htZW50cyxcclxuICAgICAgdGhpcy5kdXBsaWNhdGVkRGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMuaW52YWxpZFNpemVEZXNjcmlwdGlvbixcclxuICAgICAgdGhpcy5pbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24sXHJcbiAgICAgIHRoaXMuYXR0YWNobWVudEljb25TcmNcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==