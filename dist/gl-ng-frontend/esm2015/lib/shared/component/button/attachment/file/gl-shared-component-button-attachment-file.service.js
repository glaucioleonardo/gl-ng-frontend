import { Injectable } from '@angular/core';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { AttachmentIcon, AttachmentParser, AttachmentValidate, StringConverter } from 'gl-w-frontend';
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
export class GlSharedComponentButtonAttachmentFileService {
    constructor(_alert) {
        this._alert = _alert;
    }
    initialize(input, currentValue, attachments, duplicatedDescription, invalidSizeDescription, invalidFormatDescription, attachmentIconSrc) {
        this._input = input;
        this._currentValue = currentValue;
        this._attachments = attachments;
        // Todo Block specif files
        const accept = input.attributes.accept.value;
        // tslint:disable-next-line:triple-equals
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
}
GlSharedComponentButtonAttachmentFileService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentButtonAttachmentFileService_Factory() { return new GlSharedComponentButtonAttachmentFileService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentButtonAttachmentFileService, providedIn: "root" });
GlSharedComponentButtonAttachmentFileService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentButtonAttachmentFileService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvZmlsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXRHLE1BQU0sT0FBTyw0Q0FBNEM7SUFNdkQsWUFDUyxNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUMvQyxDQUFDO0lBRUwsVUFBVSxDQUFDLEtBQXVCLEVBQUUsWUFBMkMsRUFBRSxXQUE4QixFQUNwRyxxQkFBNkIsRUFBRSxzQkFBOEIsRUFBRSx3QkFBZ0MsRUFBRSxpQkFBeUI7UUFDbkksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFFaEMsMEJBQTBCO1FBQzFCLE1BQU0sTUFBTSxHQUFJLEtBQUssQ0FBQyxVQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUksV0FBVyxJQUFJLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FB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O0lBQzNCLENBQUM7Ozs7WUFqRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOUSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRJY29uLCBBdHRhY2htZW50UGFyc2VyLCBBdHRhY2htZW50VmFsaWRhdGUsIFN0cmluZ0NvbnZlcnRlciB9IGZyb20gJ2dsLXctZnJvbnRlbmQnO1xyXG5pbXBvcnQgeyBJQXR0YWNobWVudERhdGEgfSBmcm9tICdnbC1zcC1mcm9udGVuZCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEJ1dHRvbkF0dGFjaG1lbnRGaWxlU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XHJcbiAgcHJpdmF0ZSBfY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUF0dGFjaG1lbnREYXRhPjtcclxuICBwcml2YXRlIF9hdHRhY2htZW50czogSUF0dGFjaG1lbnREYXRhW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIGluaXRpYWxpemUoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT4sIGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXSxcclxuICAgICAgICAgICAgIGR1cGxpY2F0ZWREZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nLCBhdHRhY2htZW50SWNvblNyYzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xyXG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlO1xyXG4gICAgdGhpcy5fYXR0YWNobWVudHMgPSBhdHRhY2htZW50cztcclxuXHJcbiAgICAvLyBUb2RvIEJsb2NrIHNwZWNpZiBmaWxlc1xyXG4gICAgY29uc3QgYWNjZXB0ID0gKGlucHV0LmF0dHJpYnV0ZXMgYXMgYW55KS5hY2NlcHQudmFsdWU7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFsc1xyXG4gICAgdGhpcy5fYWNjZXB0cyA9IGFjY2VwdCA9PSBudWxsIHx8IGFjY2VwdCA9PSAndW5kZWZpbmVkJyB8fCBhY2NlcHQgPT09ICcnID8gWycqJ10gOiBBdHRhY2htZW50UGFyc2VyLnBhcnNlQWNjZXB0RmlsZXMoKGlucHV0LmF0dHJpYnV0ZXMgYXMgYW55KS5hY2NlcHQudmFsdWUpO1xyXG4gICAgdGhpcy5faW5wdXQub25pbnB1dCA9ICgpID0+IHsgdGhpcy5vbkNoYW5nZShkdXBsaWNhdGVkRGVzY3JpcHRpb24sIGludmFsaWRTaXplRGVzY3JpcHRpb24sIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbiwgYXR0YWNobWVudEljb25TcmMpOyB9O1xyXG4gIH1cclxuXHJcbiAgYWRkQXR0YWNobWVudCgpIHtcclxuICAgIHRoaXMuX2lucHV0LmNsaWNrKCk7XHJcbiAgfVxyXG4gIG9uQ2hhbmdlKGR1cGxpY2F0ZWREZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nLCBhdHRhY2htZW50SWNvblNyYzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGUodGhpcy5faW5wdXQsIHRoaXMuX2FjY2VwdHMpO1xyXG4gICAgY29uc3Qgc2l6ZVZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGVTaXplKHRoaXMuX2lucHV0KTtcclxuICAgIGNvbnN0IGR1cGxpY2F0ZWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZHVwbGljYXRlZCh0aGlzLl9pbnB1dC5maWxlc1swXS5uYW1lLCB0aGlzLl9hdHRhY2htZW50cyk7XHJcblxyXG4gICAgaWYgKGR1cGxpY2F0ZWQpIHtcclxuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coZHVwbGljYXRlZERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmICghc2l6ZVZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcclxuICAgICAgY29uc3QgbWF4U2l6ZVN0cjogc3RyaW5nID0gU3RyaW5nQ29udmVydGVyLmZvcm1hdE51bWJlcihtYXhTaXplKTtcclxuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn06ICR7bWF4U2l6ZVN0cn1LQmApLnRoZW4oKCkgPT4ge30pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB0aGlzLl9hbGVydC5zaG93KGludmFsaWRGb3JtYXREZXNjcmlwdGlvbikudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWxlOiBJQXR0YWNobWVudERhdGEgPSB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5faW5wdXQuZmlsZXNbMF0ubmFtZSxcclxuICAgICAgICBmaWxlOiB0aGlzLl9pbnB1dC5maWxlc1swXSxcclxuICAgICAgICBpY29uOiBBdHRhY2htZW50SWNvbi5nZXQodGhpcy5faW5wdXQuZmlsZXNbMF0ubmFtZSwgYXR0YWNobWVudEljb25TcmMpLFxyXG4gICAgICAgIG5ldzogdHJ1ZSxcclxuICAgICAgICB1cmw6ICcnLFxyXG4gICAgICAgIHJlbW92ZTogZmFsc2UsXHJcbiAgICAgICAgaWQ6IHRoaXMuX2F0dGFjaG1lbnRzLmxlbmd0aFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZS5lbWl0KGZpbGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dCgpIHtcclxuICAgIHRoaXMuX2lucHV0LnZhbHVlID0gbnVsbDtcclxuICB9XHJcbn1cclxuIl19