import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { AttachmentIcon, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
var GlSharedComponentButtonAttachmentFileService = /** @class */ (function () {
    function GlSharedComponentButtonAttachmentFileService(_alert) {
        this._alert = _alert;
    }
    GlSharedComponentButtonAttachmentFileService.prototype.initialize = function (input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        var _this = this;
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        var accept = input.attributes.accept.value;
        this._accepts = accept == null || accept == 'undefined' || accept === '' ? ['*'] : AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._input.oninput = function () { _this.onChange(duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc); };
    };
    GlSharedComponentButtonAttachmentFileService.prototype.addAttachment = function () {
        this._input.click();
    };
    GlSharedComponentButtonAttachmentFileService.prototype.onChange = function (duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        var isValid = AttachmentValidate.file(this._input, this._accepts);
        var sizeValid = AttachmentValidate.fileSize(this._input);
        var duplicated = AttachmentValidate.duplicated(this._input.files[0].name, this._attachments);
        if (duplicated) {
            this.clearInput();
            this._alert.show(duplicatedDescription).then(function () { });
            return;
        }
        else if (!sizeValid) {
            var maxSize = AttachmentValidate.maxSize(this._input);
            var maxSizeStr = StringConverter.formatNumber(maxSize);
            this.clearInput();
            this._alert.show(invalidSizeDescription + ": " + maxSizeStr + "KB").then(function () { });
            return;
        }
        else if (!isValid) {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(function () { });
        }
        else {
            var file = {
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
    };
    GlSharedComponentButtonAttachmentFileService.prototype.clearInput = function () {
        this._input.value = null;
    };
    GlSharedComponentButtonAttachmentFileService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentButtonAttachmentFileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
    GlSharedComponentButtonAttachmentFileService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentButtonAttachmentFileService);
    return GlSharedComponentButtonAttachmentFileService;
}());
export { GlSharedComponentButtonAttachmentFileService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9hdHRhY2htZW50L2ZpbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFNdEc7SUFNRSxzREFDUyxNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUMvQyxDQUFDO0lBRUwsaUVBQVUsR0FBVixVQUFXLEtBQXVCLEVBQUUsWUFBMkMsRUFBRSxXQUE4QixFQUMvRyxxQkFBNkIsRUFBRSxzQkFBOEIsRUFBRSx3QkFBZ0MsRUFBRSxpQkFBeUI7UUFEMUgsaUJBVUM7UUFSQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUVoQywwQkFBMEI7UUFDMUIsSUFBTSxNQUFNLEdBQUksS0FBSyxDQUFDLFVBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FB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TUFBTTtTQUNuQixDQUFDO09BQ1csNENBQTRDLENBOER4RDt1REF0RUQ7Q0FzRUMsQUE5REQsSUE4REM7U0E5RFksNENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uLCBBdHRhY2htZW50UGFyc2VyLCBBdHRhY2htZW50VmFsaWRhdGUsIFN0cmluZ0NvbnZlcnRlciB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tIFwiZ2wtc3AtZnJvbnRlbmRcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT47XG4gIHByaXZhdGUgX2F0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPiwgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdLFxuICBkdXBsaWNhdGVkRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZywgYXR0YWNobWVudEljb25TcmM6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgIHRoaXMuX2F0dGFjaG1lbnRzID0gYXR0YWNobWVudHM7XG5cbiAgICAvLyBUb2RvIEJsb2NrIHNwZWNpZiBmaWxlc1xuICAgIGNvbnN0IGFjY2VwdCA9IChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlO1xuICAgIHRoaXMuX2FjY2VwdHMgPSBhY2NlcHQgPT0gbnVsbCB8fCBhY2NlcHQgPT0gJ3VuZGVmaW5lZCcgfHwgYWNjZXB0ID09PSAnJyA/IFsnKiddIDogQXR0YWNobWVudFBhcnNlci5wYXJzZUFjY2VwdEZpbGVzKChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlKTtcbiAgICB0aGlzLl9pbnB1dC5vbmlucHV0ID0gKCkgPT4geyB0aGlzLm9uQ2hhbmdlKGR1cGxpY2F0ZWREZXNjcmlwdGlvbiwgaW52YWxpZFNpemVEZXNjcmlwdGlvbiwgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLCBhdHRhY2htZW50SWNvblNyYyk7IH07XG4gIH1cblxuICBhZGRBdHRhY2htZW50KCkge1xuICAgIHRoaXMuX2lucHV0LmNsaWNrKCk7XG4gIH1cbiAgb25DaGFuZ2UoZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpc1ZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGUodGhpcy5faW5wdXQsIHRoaXMuX2FjY2VwdHMpO1xuICAgIGNvbnN0IHNpemVWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsIHRoaXMuX2F0dGFjaG1lbnRzKTtcblxuICAgIGlmIChkdXBsaWNhdGVkKSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coZHVwbGljYXRlZERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFzaXplVmFsaWQpIHtcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcbiAgICAgIGNvbnN0IG1heFNpemVTdHI6IHN0cmluZyA9IFN0cmluZ0NvbnZlcnRlci5mb3JtYXROdW1iZXIobWF4U2l6ZSk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn06ICR7bWF4U2l6ZVN0cn1LQmApLnRoZW4oKCkgPT4ge30pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pLnRoZW4oKCkgPT4ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlOiBJQXR0YWNobWVudERhdGEgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsXG4gICAgICAgIGZpbGU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLFxuICAgICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQodGhpcy5faW5wdXQuZmlsZXNbMF0ubmFtZSwgYXR0YWNobWVudEljb25TcmMpLFxuICAgICAgICBuZXc6IHRydWUsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHJlbW92ZTogZmFsc2UsXG4gICAgICAgIGlkOiB0aGlzLl9hdHRhY2htZW50cy5sZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==