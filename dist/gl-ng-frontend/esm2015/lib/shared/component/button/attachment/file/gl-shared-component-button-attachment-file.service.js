import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { AttachmentIcon, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
let GlSharedComponentButtonAttachmentFileService = class GlSharedComponentButtonAttachmentFileService {
    constructor(_alert) {
        this._alert = _alert;
    }
    initialize(input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        const accept = input.attributes.accept.value;
        this._accepts = accept == null || accept == 'undefined' || accept === '' ? ['*'] : AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._input.oninput = () => { this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc); };
    }
    addAttachment() {
        this._input.click();
    }
    onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        const duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);
        if (duplicated) {
            this.clearInput();
            this._alert.show(duplicatedDescription).then(() => { });
            return;
        }
        else if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this.clearInput();
            this._alert.show(`${invalidSizeDescription}: ${maxSizeStr}KB`).then(() => { });
            return;
        }
        else if (!isValid) {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
        else {
            const file = {
                name: this._input.files[0].name,
                file: this._input.files[0],
                icon: AttachmentIcon.get(this._input.files[0].name, attachmentIconSrc),
                new: true,
                url: '',
                remove: false,
                id: this._attachments.length
            };
            this.clearInput();
            this._currentValue.emit(file);
        }
    }
    clearInput() {
        this._input.value = null;
    }
};
GlSharedComponentButtonAttachmentFileService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentButtonAttachmentFileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
GlSharedComponentButtonAttachmentFileService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlSharedComponentButtonAttachmentFileService);
export { GlSharedComponentButtonAttachmentFileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9hdHRhY2htZW50L2ZpbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNdEcsSUFBYSw0Q0FBNEMsR0FBekQsTUFBYSw0Q0FBNEM7SUFNdkQsWUFDUyxNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUMvQyxDQUFDO0lBRUwsVUFBVSxDQUFDLEtBQXVCLEVBQUUsWUFBMkMsRUFBRSxXQUE4QixFQUMvRyxxQkFBNkIsRUFBRSxzQkFBOEIsRUFBRSx3QkFBZ0MsRUFBRSxpQkFBeUI7UUFDeEgsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFFaEMsMEJBQTBCO1FBQzFCLE1BQU0sTUFBTSxHQUFJLEtBQUssQ0FBQyxVQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENB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a0M7OztBQVB4Qyw0Q0FBNEM7SUFIeEQsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLDRDQUE0QyxDQThEeEQ7U0E5RFksNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uLCBBdHRhY2htZW50UGFyc2VyLCBBdHRhY2htZW50VmFsaWRhdGUsIFN0cmluZ0NvbnZlcnRlciB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tIFwiZ2wtc3AtZnJvbnRlbmRcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT47XG4gIHByaXZhdGUgX2F0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPiwgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdLFxuICBkdXBsaWNhdGVkRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZywgYXR0YWNobWVudEljb25TcmM6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgIHRoaXMuX2F0dGFjaG1lbnRzID0gYXR0YWNobWVudHM7XG5cbiAgICAvLyBUb2RvIEJsb2NrIHNwZWNpZiBmaWxlc1xuICAgIGNvbnN0IGFjY2VwdCA9IChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlO1xuICAgIHRoaXMuX2FjY2VwdHMgPSBhY2NlcHQgPT0gbnVsbCB8fCBhY2NlcHQgPT0gJ3VuZGVmaW5lZCcgfHwgYWNjZXB0ID09PSAnJyA/IFsnKiddIDogQXR0YWNobWVudFBhcnNlci5wYXJzZUFjY2VwdEZpbGVzKChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlKTtcbiAgICB0aGlzLl9pbnB1dC5vbmlucHV0ID0gKCkgPT4geyB0aGlzLm9uQ2hhbmdlKGR1cGxpY2F0ZWREZXNjcmlwdGlvbiwgaW52YWxpZFNpemVEZXNjcmlwdGlvbiwgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLCBhdHRhY2htZW50SWNvblNyYyk7IH07XG4gIH1cblxuICBhZGRBdHRhY2htZW50KCkge1xuICAgIHRoaXMuX2lucHV0LmNsaWNrKCk7XG4gIH1cbiAgb25DaGFuZ2UoZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpc1ZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGUodGhpcy5faW5wdXQsIHRoaXMuX2FjY2VwdHMpO1xuICAgIGNvbnN0IHNpemVWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsIHRoaXMuX2F0dGFjaG1lbnRzKTtcblxuICAgIGlmIChkdXBsaWNhdGVkKSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coZHVwbGljYXRlZERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFzaXplVmFsaWQpIHtcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcbiAgICAgIGNvbnN0IG1heFNpemVTdHI6IHN0cmluZyA9IFN0cmluZ0NvbnZlcnRlci5mb3JtYXROdW1iZXIobWF4U2l6ZSk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn06ICR7bWF4U2l6ZVN0cn1LQmApLnRoZW4oKCkgPT4ge30pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pLnRoZW4oKCkgPT4ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlOiBJQXR0YWNobWVudERhdGEgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsXG4gICAgICAgIGZpbGU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLFxuICAgICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQodGhpcy5faW5wdXQuZmlsZXNbMF0ubmFtZSwgYXR0YWNobWVudEljb25TcmMpLFxuICAgICAgICBuZXc6IHRydWUsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHJlbW92ZTogZmFsc2UsXG4gICAgICAgIGlkOiB0aGlzLl9hdHRhY2htZW50cy5sZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==