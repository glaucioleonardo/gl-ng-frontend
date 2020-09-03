import { Injectable } from '@angular/core';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import { AttachmentIcon, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tYXR0YWNobWVudC1maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvYnV0dG9uL2F0dGFjaG1lbnQvZmlsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1hdHRhY2htZW50LWZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNsSCxPQUFPLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXRHLE1BQU0sT0FBTyw0Q0FBNEM7SUFNdkQsWUFDUyxNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztJQUMvQyxDQUFDO0lBRUwsVUFBVSxDQUFDLEtBQXVCLEVBQUUsWUFBMkMsRUFBRSxXQUE4QixFQUMvRyxxQkFBNkIsRUFBRSxzQkFBOEIsRUFBRSx3QkFBZ0MsRUFBRSxpQkFBeUI7UUFDeEgsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFFaEMsMEJBQTBCO1FBQzFCLE1BQU0sTUFBTSxHQUFJLEtBQUssQ0FBQyxVQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxXQUFXLElBQUksTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxH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OztZQWhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRhY2htZW50SWNvbiwgQXR0YWNobWVudFBhcnNlciwgQXR0YWNobWVudFZhbGlkYXRlLCBTdHJpbmdDb252ZXJ0ZXIgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuaW1wb3J0IHsgSUF0dGFjaG1lbnREYXRhIH0gZnJvbSBcImdsLXNwLWZyb250ZW5kXCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QnV0dG9uQXR0YWNobWVudEZpbGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHByaXZhdGUgX2FjY2VwdHM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9jdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJQXR0YWNobWVudERhdGE+O1xuICBwcml2YXRlIF9hdHRhY2htZW50czogSUF0dGFjaG1lbnREYXRhW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZVxuICApIHsgfVxuXG4gIGluaXRpYWxpemUoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElBdHRhY2htZW50RGF0YT4sIGF0dGFjaG1lbnRzOiBJQXR0YWNobWVudERhdGFbXSxcbiAgZHVwbGljYXRlZERlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGF0dGFjaG1lbnRJY29uU3JjOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2N1cnJlbnRWYWx1ZSA9IGN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLl9hdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzO1xuXG4gICAgLy8gVG9kbyBCbG9jayBzcGVjaWYgZmlsZXNcbiAgICBjb25zdCBhY2NlcHQgPSAoaW5wdXQuYXR0cmlidXRlcyBhcyBhbnkpLmFjY2VwdC52YWx1ZTtcbiAgICB0aGlzLl9hY2NlcHRzID0gYWNjZXB0ID09IG51bGwgfHwgYWNjZXB0ID09ICd1bmRlZmluZWQnIHx8IGFjY2VwdCA9PT0gJycgPyBbJyonXSA6IEF0dGFjaG1lbnRQYXJzZXIucGFyc2VBY2NlcHRGaWxlcygoaW5wdXQuYXR0cmlidXRlcyBhcyBhbnkpLmFjY2VwdC52YWx1ZSk7XG4gICAgdGhpcy5faW5wdXQub25pbnB1dCA9ICgpID0+IHsgdGhpcy5vbkNoYW5nZShkdXBsaWNhdGVkRGVzY3JpcHRpb24sIGludmFsaWRTaXplRGVzY3JpcHRpb24sIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbiwgYXR0YWNobWVudEljb25TcmMpOyB9O1xuICB9XG5cbiAgYWRkQXR0YWNobWVudCgpIHtcbiAgICB0aGlzLl9pbnB1dC5jbGljaygpO1xuICB9XG4gIG9uQ2hhbmdlKGR1cGxpY2F0ZWREZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkU2l6ZURlc2NyaXB0aW9uOiBzdHJpbmcsIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbjogc3RyaW5nLCBhdHRhY2htZW50SWNvblNyYzogc3RyaW5nKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlKHRoaXMuX2lucHV0LCB0aGlzLl9hY2NlcHRzKTtcbiAgICBjb25zdCBzaXplVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemUodGhpcy5faW5wdXQpO1xuICAgIGNvbnN0IGR1cGxpY2F0ZWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZHVwbGljYXRlZCh0aGlzLl9pbnB1dC5maWxlc1swXS5uYW1lLCB0aGlzLl9hdHRhY2htZW50cyk7XG5cbiAgICBpZiAoZHVwbGljYXRlZCkge1xuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KGR1cGxpY2F0ZWREZXNjcmlwdGlvbikudGhlbigoKSA9PiB7fSk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICghc2l6ZVZhbGlkKSB7XG4gICAgICBjb25zdCBtYXhTaXplOiBudW1iZXIgPSBBdHRhY2htZW50VmFsaWRhdGUubWF4U2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgICBjb25zdCBtYXhTaXplU3RyOiBzdHJpbmcgPSBTdHJpbmdDb252ZXJ0ZXIuZm9ybWF0TnVtYmVyKG1heFNpemUpO1xuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KGAke2ludmFsaWRTaXplRGVzY3JpcHRpb259OiAke21heFNpemVTdHJ9S0JgKS50aGVuKCgpID0+IHt9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uKS50aGVuKCgpID0+IHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZTogSUF0dGFjaG1lbnREYXRhID0ge1xuICAgICAgICBuYW1lOiB0aGlzLl9pbnB1dC5maWxlc1swXS5uYW1lLFxuICAgICAgICBmaWxlOiB0aGlzLl9pbnB1dC5maWxlc1swXSxcbiAgICAgICAgaWNvbjogQXR0YWNobWVudEljb24uZ2V0KHRoaXMuX2lucHV0LmZpbGVzWzBdLm5hbWUsIGF0dGFjaG1lbnRJY29uU3JjKSxcbiAgICAgICAgbmV3OiB0cnVlLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICByZW1vdmU6IGZhbHNlLFxuICAgICAgICBpZDogdGhpcy5fYXR0YWNobWVudHMubGVuZ3RoXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNsZWFySW5wdXQoKTtcbiAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZS5lbWl0KGZpbGUpO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xuICB9XG59XG4iXX0=