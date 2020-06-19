import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AttachmentIcon, AttachmentParser, AttachmentValidate } from 'gl-w-frontend/lib/es5/scripts/core/services/attachment/core-services-attachment.service';
import { StringConverter } from 'gl-w-frontend/lib/es5/scripts/core/services/string/core-services-string.service';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2J1dHRvbi9hdHRhY2htZW50L2ZpbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5RkFBeUYsQ0FBQztBQUMvSixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDbEgsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7OztBQUtsSDtJQU1FLHNEQUNTLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO0lBQy9DLENBQUM7SUFFTCxpRUFBVSxHQUFWLFVBQVcsS0FBdUIsRUFBRSxZQUEyQyxFQUFFLFdBQThCLEVBQy9HLHFCQUE2QixFQUFFLHNCQUE4QixFQUFFLHdCQUFnQyxFQUFFLGlCQUF5QjtRQUQxSCxpQkFVQztRQVJDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBRWhDLDBCQUEwQjtRQUMxQixJQUFNLE1BQU0sR0FBSSxLQUFLLENBQUMsVUFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFFLEtBQUssQ0FBQyxVQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3SixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFRLEtBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsd0JBQXdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SSxDQUFDO0lBRUQsb0VBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELCtEQUFRLEdBQVIsVUFBUyxxQkFBNkIsRUFBRSxzQkFBOEIsRUFBRSx3QkFBZ0MsRUFBRSxpQkFBeUI7UUFDakksSUFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBTSxVQUFVLEdBQUcsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFL0YsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RCxPQUFPO1NBQ1I7YUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQU0sT0FBTyxHQUFXLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBTSxVQUFVLEdBQVcsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUksc0JBQXNCLFVBQUssVUFBVSxPQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5RSxPQUFPO1NBQ1I7YUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNEO2FBQU07WUFDTCxJQUFNLElBQUksR0FBb0I7Z0JBQzVCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3RFLEdBQUcsRUFBRSxJQUFJO2dCQUNULEdBQUcsRUFBRSxFQUFFO2dCQUNQLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07YUFDN0IsQ0FBQztZQUVGLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxpRUFBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7O2dCQXREZ0Isa0NBQWtDOzs7SUFQeEMsNENBQTRDO1FBSHhELFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyw0Q0FBNEMsQ0E4RHhEO3VEQXZFRDtDQXVFQyxBQTlERCxJQThEQztTQTlEWSw0Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElBdHRhY2htZW50RGF0YSB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uLCBBdHRhY2htZW50UGFyc2VyLCBBdHRhY2htZW50VmFsaWRhdGUgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9lczUvc2NyaXB0cy9jb3JlL3NlcnZpY2VzL2F0dGFjaG1lbnQvY29yZS1zZXJ2aWNlcy1hdHRhY2htZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RyaW5nQ29udmVydGVyIH0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9zdHJpbmcvY29yZS1zZXJ2aWNlcy1zdHJpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRCdXR0b25BdHRhY2htZW50RmlsZVNlcnZpY2Uge1xuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT47XG4gIHByaXZhdGUgX2F0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlXG4gICkgeyB9XG5cbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPiwgYXR0YWNobWVudHM6IElBdHRhY2htZW50RGF0YVtdLFxuICBkdXBsaWNhdGVkRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZywgYXR0YWNobWVudEljb25TcmM6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlO1xuICAgIHRoaXMuX2F0dGFjaG1lbnRzID0gYXR0YWNobWVudHM7XG5cbiAgICAvLyBUb2RvIEJsb2NrIHNwZWNpZiBmaWxlc1xuICAgIGNvbnN0IGFjY2VwdCA9IChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlO1xuICAgIHRoaXMuX2FjY2VwdHMgPSBhY2NlcHQgPT0gbnVsbCB8fCBhY2NlcHQgPT0gJ3VuZGVmaW5lZCcgfHwgYWNjZXB0ID09PSAnJyA/IFsnKiddIDogQXR0YWNobWVudFBhcnNlci5wYXJzZUFjY2VwdEZpbGVzKChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlKTtcbiAgICB0aGlzLl9pbnB1dC5vbmlucHV0ID0gKCkgPT4geyB0aGlzLm9uQ2hhbmdlKGR1cGxpY2F0ZWREZXNjcmlwdGlvbiwgaW52YWxpZFNpemVEZXNjcmlwdGlvbiwgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uLCBhdHRhY2htZW50SWNvblNyYyk7IH07XG4gIH1cblxuICBhZGRBdHRhY2htZW50KCkge1xuICAgIHRoaXMuX2lucHV0LmNsaWNrKCk7XG4gIH1cbiAgb25DaGFuZ2UoZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpc1ZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGUodGhpcy5faW5wdXQsIHRoaXMuX2FjY2VwdHMpO1xuICAgIGNvbnN0IHNpemVWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgY29uc3QgZHVwbGljYXRlZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5kdXBsaWNhdGVkKHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsIHRoaXMuX2F0dGFjaG1lbnRzKTtcblxuICAgIGlmIChkdXBsaWNhdGVkKSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coZHVwbGljYXRlZERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFzaXplVmFsaWQpIHtcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcbiAgICAgIGNvbnN0IG1heFNpemVTdHI6IHN0cmluZyA9IFN0cmluZ0NvbnZlcnRlci5mb3JtYXROdW1iZXIobWF4U2l6ZSk7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn06ICR7bWF4U2l6ZVN0cn1LQmApLnRoZW4oKCkgPT4ge30pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pLnRoZW4oKCkgPT4ge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlOiBJQXR0YWNobWVudERhdGEgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsXG4gICAgICAgIGZpbGU6IHRoaXMuX2lucHV0LmZpbGVzWzBdLFxuICAgICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQodGhpcy5faW5wdXQuZmlsZXNbMF0ubmFtZSwgYXR0YWNobWVudEljb25TcmMpLFxuICAgICAgICBuZXc6IHRydWUsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHJlbW92ZTogZmFsc2UsXG4gICAgICAgIGlkOiB0aGlzLl9hdHRhY2htZW50cy5sZW5ndGhcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoZmlsZSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IG51bGw7XG4gIH1cbn1cbiJdfQ==