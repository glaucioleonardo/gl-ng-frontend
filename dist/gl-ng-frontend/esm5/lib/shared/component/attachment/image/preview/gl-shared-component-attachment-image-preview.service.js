import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AttachmentConvert, AttachmentParser, AttachmentValidate } from 'gl-w-frontend/lib/es5/scripts/core/services/attachment/core-services-attachment.service';
import { StringConverter } from 'gl-w-frontend/lib/es5/scripts/core/services/string/core-services-string.service';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
var GlSharedComponentAttachmentImagePreviewService = /** @class */ (function () {
    function GlSharedComponentAttachmentImagePreviewService(_alert) {
        var _this = this;
        this._alert = _alert;
        this.image = '../assets/img/icon/image/image-template.svg';
        this.retrieveUpdate = new Subject();
        this.labelIcons = '../assets/img/icon/label/';
        this.buttons = [
            {
                src: this.labelIcons + "image.svg",
                id: 'add-image-from-label',
                alt: 'Add image',
                show: true, callback: function () {
                    _this.addImage();
                }
            },
            {
                src: this.labelIcons + "remove-image.svg",
                id: 'clear-image-from-label',
                alt: 'Remove image',
                show: false,
                callback: function () {
                    _this.removeImage();
                }
            },
        ];
        this.retrieveUpdate.subscribe(function (value) {
            if (value != null && value.trim().length > 0) {
                _this.setImage(value);
                _this.updateButtons(true);
            }
            else {
                _this.setImage('');
                _this.updateButtons(false);
            }
        });
    }
    GlSharedComponentAttachmentImagePreviewService.prototype.initialize = function (input, userImage, currentValue, invalidSizeDescription, invalidFormatDescription, addImageButtonDescription, removeImageButtonDescription) {
        var _this = this;
        this._input = input;
        this._accepts = AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._userImage = userImage;
        this._currentValue = currentValue;
        setTimeout(function () {
            _this.buttons[0].alt = addImageButtonDescription;
            _this.buttons[1].alt = removeImageButtonDescription;
        }, 100);
        this._input.oninput = function () { _this.onChange(invalidSizeDescription, invalidFormatDescription); };
        this.removeImage(true);
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.onChange = function (invalidSizeDescription, invalidFormatDescription) {
        var _this = this;
        var isValid = AttachmentValidate.file(this._input, this._accepts);
        var sizeValid = AttachmentValidate.fileSize(this._input);
        if (!sizeValid) {
            var maxSize = AttachmentValidate.maxSize(this._input);
            var maxSizeStr = StringConverter.formatNumber(maxSize);
            this._alert.show(invalidSizeDescription + " " + maxSizeStr + "KB").then(function () { });
            return;
        }
        if (isValid) {
            AttachmentConvert.textFileToUrlImage(this._input.files[0]).then(function (image) {
                _this.setImage(image);
                _this._currentValue.emit({ value: image });
                _this.updateButtons(true);
                _this.clearInput();
            });
        }
        else {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(function () { });
        }
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.clearInput = function () {
        this._input.value = null;
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.updateButtons = function (hasValue) {
        this.buttons[0].show = !hasValue;
        this.buttons[1].show = hasValue;
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.setImage = function (image) {
        this._userImage.style.backgroundImage = "url(\"" + image + "\")";
        this._userImage.classList.remove('required-fill');
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.addImage = function () {
        this._input.click();
    };
    GlSharedComponentAttachmentImagePreviewService.prototype.removeImage = function (init) {
        this.clearInput();
        this.setImage(this.image);
        if (!init) {
            this._currentValue.emit({ value: null });
            this.updateButtons(false);
        }
    };
    GlSharedComponentAttachmentImagePreviewService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentAttachmentImagePreviewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
    GlSharedComponentAttachmentImagePreviewService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentAttachmentImagePreviewService);
    return GlSharedComponentAttachmentImagePreviewService;
}());
export { GlSharedComponentAttachmentImagePreviewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pbWFnZS9wcmV2aWV3L2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNuQixNQUFNLHlGQUF5RixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNsSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7QUFNbEg7SUErQkUsd0RBQW9CLE1BQTBDO1FBQTlELGlCQVVDO1FBVm1CLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBOUI3QyxVQUFLLEdBQUcsNkNBQTZDLENBQUM7UUFFdkUsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoRCxlQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFFekMsWUFBTyxHQUEwQjtZQUMvQjtnQkFDRSxHQUFHLEVBQUssSUFBSSxDQUFDLFVBQVUsY0FBVztnQkFDbEMsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO29CQUNwQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFBSyxJQUFJLENBQUMsVUFBVSxxQkFBa0I7Z0JBQ3pDLEVB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LElBQUksRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7O2dCQTlFMkIsa0NBQWtDOzs7SUEvQm5ELDhDQUE4QztRQUgxRCxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csOENBQThDLENBOEcxRDt5REE3SEQ7Q0E2SEMsQUE5R0QsSUE4R0M7U0E5R1ksOENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdHRhY2htZW50Q29udmVydCxcbiAgQXR0YWNobWVudFBhcnNlcixcbiAgQXR0YWNobWVudFZhbGlkYXRlXG59IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvYXR0YWNobWVudC9jb3JlLXNlcnZpY2VzLWF0dGFjaG1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJpbmdDb252ZXJ0ZXIgfSBmcm9tICdnbC13LWZyb250ZW5kL2xpYi9lczUvc2NyaXB0cy9jb3JlL3NlcnZpY2VzL3N0cmluZy9jb3JlLXNlcnZpY2VzLXN0cmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElJbWFnZUJ1dHRvblRvb2x0aXAgfSBmcm9tICcuLi8uLi8uLi9idXR0b24vaW1hZ2UvdG9vbHRpcC9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS10b29sdGlwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IElJbWFnZVN0cmluZyB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2UgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2ltYWdlL2ltYWdlLXRlbXBsYXRlLnN2Zyc7XG5cbiAgcmV0cmlldmVVcGRhdGU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGxhYmVsSWNvbnMgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2xhYmVsLyc7XG5cbiAgYnV0dG9uczogSUltYWdlQnV0dG9uVG9vbHRpcFtdID0gW1xuICAgIHtcbiAgICAgIHNyYzogYCR7dGhpcy5sYWJlbEljb25zfWltYWdlLnN2Z2AsXG4gICAgICBpZDogJ2FkZC1pbWFnZS1mcm9tLWxhYmVsJyxcbiAgICAgIGFsdDogJ0FkZCBpbWFnZScsXG4gICAgICBzaG93OiB0cnVlLCBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEltYWdlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IGAke3RoaXMubGFiZWxJY29uc31yZW1vdmUtaW1hZ2Uuc3ZnYCxcbiAgICAgIGlkOiAnY2xlYXItaW1hZ2UtZnJvbS1sYWJlbCcsXG4gICAgICBhbHQ6ICdSZW1vdmUgaW1hZ2UnLFxuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUltYWdlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgXTtcblxuICBwcml2YXRlIF9hY2NlcHRzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgX3VzZXJJbWFnZTogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElJbWFnZVN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpIHtcbiAgICB0aGlzLnJldHJpZXZlVXBkYXRlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEltYWdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZSgnJyk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCB1c2VySW1hZ2U6IEhUTUxEaXZFbGVtZW50LCBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJSW1hZ2VTdHJpbmc+LFxuICBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nLCBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcsIHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fYWNjZXB0cyA9IEF0dGFjaG1lbnRQYXJzZXIucGFyc2VBY2NlcHRGaWxlcygoaW5wdXQuYXR0cmlidXRlcyBhcyBhbnkpLmFjY2VwdC52YWx1ZSk7XG4gICAgdGhpcy5fdXNlckltYWdlID0gdXNlckltYWdlO1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5idXR0b25zWzBdLmFsdCA9IGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb247XG4gICAgICB0aGlzLmJ1dHRvbnNbMV0uYWx0ID0gcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjtcbiAgICB9LCAxMDApO1xuXG4gICAgdGhpcy5faW5wdXQub25pbnB1dCA9ICgpID0+IHsgdGhpcy5vbkNoYW5nZShpbnZhbGlkU2l6ZURlc2NyaXB0aW9uLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pOyB9O1xuICAgIHRoaXMucmVtb3ZlSW1hZ2UodHJ1ZSk7XG4gIH1cblxuICBvbkNoYW5nZShpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlKHRoaXMuX2lucHV0LCB0aGlzLl9hY2NlcHRzKTtcbiAgICBjb25zdCBzaXplVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemUodGhpcy5faW5wdXQpO1xuXG4gICAgaWYgKCFzaXplVmFsaWQpIHtcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcbiAgICAgIGNvbnN0IG1heFNpemVTdHIgPSBTdHJpbmdDb252ZXJ0ZXIuZm9ybWF0TnVtYmVyKG1heFNpemUpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhgJHtpbnZhbGlkU2l6ZURlc2NyaXB0aW9ufSAke21heFNpemVTdHJ9S0JgKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgQXR0YWNobWVudENvbnZlcnQudGV4dEZpbGVUb1VybEltYWdlKHRoaXMuX2lucHV0LmZpbGVzWzBdKS50aGVuKChpbWFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2UoaW1hZ2UpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBpbWFnZSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKHRydWUpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0KCkge1xuICAgIHRoaXMuX2lucHV0LnZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZUJ1dHRvbnMoaGFzVmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmJ1dHRvbnNbMF0uc2hvdyA9ICFoYXNWYWx1ZTtcbiAgICB0aGlzLmJ1dHRvbnNbMV0uc2hvdyA9IGhhc1ZhbHVlO1xuICB9XG5cbiAgc2V0SW1hZ2UoaW1hZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZX1cIilgO1xuICAgIHRoaXMuX3VzZXJJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlZC1maWxsJyk7XG4gIH1cblxuICBhZGRJbWFnZSgpIHtcbiAgICB0aGlzLl9pbnB1dC5jbGljaygpO1xuICB9XG5cbiAgcmVtb3ZlSW1hZ2UoaW5pdD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xuXG4gICAgaWYgKCFpbml0KSB7XG4gICAgICB0aGlzLl9jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBudWxsIH0pO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==