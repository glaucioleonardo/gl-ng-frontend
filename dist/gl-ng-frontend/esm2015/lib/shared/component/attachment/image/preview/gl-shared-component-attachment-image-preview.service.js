import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AttachmentConvert, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
export class GlSharedComponentAttachmentImagePreviewService {
    constructor(_alert) {
        this._alert = _alert;
        this.image = '../assets/img/icon/image/image-template.svg';
        this.retrieveUpdate = new Subject();
        this.labelIcons = '../assets/img/icon/label/';
        this.buttons = [
            {
                src: `${this.labelIcons}image.svg`,
                id: 'add-image-from-label',
                alt: 'Add image',
                show: true, callback: () => {
                    this.addImage();
                }
            },
            {
                src: `${this.labelIcons}remove-image.svg`,
                id: 'clear-image-from-label',
                alt: 'Remove image',
                show: false,
                callback: () => {
                    this.removeImage();
                }
            },
        ];
        this.retrieveUpdate.subscribe(value => {
            if (value != null && value.trim().length > 0) {
                this.setImage(value);
                this.updateButtons(true);
            }
            else {
                this.setImage('');
                this.updateButtons(false);
            }
        });
    }
    initialize(input, userImage, currentValue, invalidSizeDescription, invalidFormatDescription, addImageButtonDescription, removeImageButtonDescription) {
        this._input = input;
        this._accepts = AttachmentParser.parseAcceptFiles(input.attributes.accept.value);
        this._userImage = userImage;
        this._currentValue = currentValue;
        setTimeout(() => {
            this.buttons[0].alt = addImageButtonDescription;
            this.buttons[1].alt = removeImageButtonDescription;
        }, 100);
        this._input.oninput = () => { this.onChange(invalidSizeDescription, invalidFormatDescription); };
        this.removeImage(true);
    }
    onChange(invalidSizeDescription, invalidFormatDescription) {
        const isValid = AttachmentValidate.file(this._input, this._accepts);
        const sizeValid = AttachmentValidate.fileSize(this._input);
        if (!sizeValid) {
            const maxSize = AttachmentValidate.maxSize(this._input);
            const maxSizeStr = StringConverter.formatNumber(maxSize);
            this._alert.show(`${invalidSizeDescription} ${maxSizeStr}KB`).then(() => { });
            return;
        }
        if (isValid) {
            AttachmentConvert.textFileToUrlImage(this._input.files[0]).then((image) => {
                this.setImage(image);
                this._currentValue.emit({ value: image });
                this.updateButtons(true);
                this.clearInput();
            });
        }
        else {
            this.clearInput();
            this._alert.show(invalidFormatDescription).then(() => { });
        }
    }
    clearInput() {
        this._input.value = null;
    }
    updateButtons(hasValue) {
        this.buttons[0].show = !hasValue;
        this.buttons[1].show = hasValue;
    }
    setImage(image) {
        this._userImage.style.backgroundImage = `url("${image}")`;
        this._userImage.classList.remove('required-fill');
    }
    addImage() {
        this._input.click();
    }
    removeImage(init) {
        this.clearInput();
        this.setImage(this.image);
        if (!init) {
            this._currentValue.emit({ value: null });
            this.updateButtons(false);
        }
    }
}
GlSharedComponentAttachmentImagePreviewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
GlSharedComponentAttachmentImagePreviewService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentAttachmentImagePreviewService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2ltYWdlL3ByZXZpZXcvZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHekcsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sOERBQThELENBQUM7OztBQU1sSCxNQUFNLE9BQU8sOENBQThDO0lBK0J6RCxZQUFvQixNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQTlCN0MsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBRXZFLG1CQUFjLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEQsZUFBVSxHQUFHLDJCQUEyQixDQUFDO1FBRXpDLFlBQU8sR0FBMEI7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsV0FBVztnQkFDbEMsRUFBRSxFQUFFLHNCQUFzQjtnQkFDMUIsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMs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LElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O1lBaEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF0dGFjaG1lbnRDb252ZXJ0LCBBdHRhY2htZW50UGFyc2VyLCBBdHRhY2htZW50VmFsaWRhdGUsIFN0cmluZ0NvbnZlcnRlciB9IGZyb20gXCJnbC13LWZyb250ZW5kXCI7XG5cbmltcG9ydCB7IElJbWFnZUJ1dHRvblRvb2x0aXAgfSBmcm9tICcuLi8uLi8uLi9idXR0b24vaW1hZ2UvdG9vbHRpcC9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1pbWFnZS10b29sdGlwLmludGVyZmFjZSc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IElJbWFnZVN0cmluZyB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SW1hZ2VQcmV2aWV3U2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2UgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2ltYWdlL2ltYWdlLXRlbXBsYXRlLnN2Zyc7XG5cbiAgcmV0cmlldmVVcGRhdGU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0KCk7XG4gIGxhYmVsSWNvbnMgPSAnLi4vYXNzZXRzL2ltZy9pY29uL2xhYmVsLyc7XG5cbiAgYnV0dG9uczogSUltYWdlQnV0dG9uVG9vbHRpcFtdID0gW1xuICAgIHtcbiAgICAgIHNyYzogYCR7dGhpcy5sYWJlbEljb25zfWltYWdlLnN2Z2AsXG4gICAgICBpZDogJ2FkZC1pbWFnZS1mcm9tLWxhYmVsJyxcbiAgICAgIGFsdDogJ0FkZCBpbWFnZScsXG4gICAgICBzaG93OiB0cnVlLCBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEltYWdlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBzcmM6IGAke3RoaXMubGFiZWxJY29uc31yZW1vdmUtaW1hZ2Uuc3ZnYCxcbiAgICAgIGlkOiAnY2xlYXItaW1hZ2UtZnJvbS1sYWJlbCcsXG4gICAgICBhbHQ6ICdSZW1vdmUgaW1hZ2UnLFxuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUltYWdlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgXTtcblxuICBwcml2YXRlIF9hY2NlcHRzOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgX3VzZXJJbWFnZTogSFRNTERpdkVsZW1lbnQ7XG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElJbWFnZVN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpIHtcbiAgICB0aGlzLnJldHJpZXZlVXBkYXRlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEltYWdlKHZhbHVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZSgnJyk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWFsaXplKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCB1c2VySW1hZ2U6IEhUTUxEaXZFbGVtZW50LCBjdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJSW1hZ2VTdHJpbmc+LFxuICBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nLCBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcsIHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgdGhpcy5fYWNjZXB0cyA9IEF0dGFjaG1lbnRQYXJzZXIucGFyc2VBY2NlcHRGaWxlcygoaW5wdXQuYXR0cmlidXRlcyBhcyBhbnkpLmFjY2VwdC52YWx1ZSk7XG4gICAgdGhpcy5fdXNlckltYWdlID0gdXNlckltYWdlO1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5idXR0b25zWzBdLmFsdCA9IGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb247XG4gICAgICB0aGlzLmJ1dHRvbnNbMV0uYWx0ID0gcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjtcbiAgICB9LCAxMDApO1xuXG4gICAgdGhpcy5faW5wdXQub25pbnB1dCA9ICgpID0+IHsgdGhpcy5vbkNoYW5nZShpbnZhbGlkU2l6ZURlc2NyaXB0aW9uLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pOyB9O1xuICAgIHRoaXMucmVtb3ZlSW1hZ2UodHJ1ZSk7XG4gIH1cblxuICBvbkNoYW5nZShpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlKHRoaXMuX2lucHV0LCB0aGlzLl9hY2NlcHRzKTtcbiAgICBjb25zdCBzaXplVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemUodGhpcy5faW5wdXQpO1xuXG4gICAgaWYgKCFzaXplVmFsaWQpIHtcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcbiAgICAgIGNvbnN0IG1heFNpemVTdHIgPSBTdHJpbmdDb252ZXJ0ZXIuZm9ybWF0TnVtYmVyKG1heFNpemUpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhgJHtpbnZhbGlkU2l6ZURlc2NyaXB0aW9ufSAke21heFNpemVTdHJ9S0JgKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgQXR0YWNobWVudENvbnZlcnQudGV4dEZpbGVUb1VybEltYWdlKHRoaXMuX2lucHV0LmZpbGVzWzBdKS50aGVuKChpbWFnZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2UoaW1hZ2UpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBpbWFnZSB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKHRydWUpO1xuICAgICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICB9XG4gIH1cblxuICBjbGVhcklucHV0KCkge1xuICAgIHRoaXMuX2lucHV0LnZhbHVlID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZUJ1dHRvbnMoaGFzVmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmJ1dHRvbnNbMF0uc2hvdyA9ICFoYXNWYWx1ZTtcbiAgICB0aGlzLmJ1dHRvbnNbMV0uc2hvdyA9IGhhc1ZhbHVlO1xuICB9XG5cbiAgc2V0SW1hZ2UoaW1hZ2U6IHN0cmluZykge1xuICAgIHRoaXMuX3VzZXJJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWFnZX1cIilgO1xuICAgIHRoaXMuX3VzZXJJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlZC1maWxsJyk7XG4gIH1cblxuICBhZGRJbWFnZSgpIHtcbiAgICB0aGlzLl9pbnB1dC5jbGljaygpO1xuICB9XG5cbiAgcmVtb3ZlSW1hZ2UoaW5pdD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMuaW1hZ2UpO1xuXG4gICAgaWYgKCFpbml0KSB7XG4gICAgICB0aGlzLl9jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBudWxsIH0pO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==