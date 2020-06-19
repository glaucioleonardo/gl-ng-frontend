import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AttachmentConvert, AttachmentParser, AttachmentValidate } from 'gl-w-frontend/lib/es5/scripts/core/services/attachment/core-services-attachment.service';
import { StringConverter } from 'gl-w-frontend/lib/es5/scripts/core/services/string/core-services-string.service';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../../modal/alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../modal/alert/gl-shared-component-modal-alert.service";
let GlSharedComponentAttachmentImagePreviewService = class GlSharedComponentAttachmentImagePreviewService {
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
};
GlSharedComponentAttachmentImagePreviewService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentAttachmentImagePreviewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentAttachmentImagePreviewService_Factory() { return new GlSharedComponentAttachmentImagePreviewService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentAttachmentImagePreviewService, providedIn: "root" });
GlSharedComponentAttachmentImagePreviewService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlSharedComponentAttachmentImagePreviewService);
export { GlSharedComponentAttachmentImagePreviewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pbWFnZS9wcmV2aWV3L2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNuQixNQUFNLHlGQUF5RixDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpRkFBaUYsQ0FBQztBQUNsSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7QUFNbEgsSUFBYSw4Q0FBOEMsR0FBM0QsTUFBYSw4Q0FBOEM7SUErQnpELFlBQW9CLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBOUI3QyxVQUFLLEdBQUcsNkNBQTZDLENBQUM7UUFFdkUsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoRCxlQUFVLEdBQUcsMkJBQTJCLENBQUM7UUFFekMsWUFBTyxHQUEwQjtZQUMvQjtnQkFDRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxXQUFXO2dCQUNsQyxFQUFFLEVBQUUsc0JBQXNCO2dCQUMxQixHQUFHLEVBQUUsV0FBVztnQkFDaEIsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFO29CQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7YUFDRjtZQUNEO2dCQUNFLEdBQUcsRUFB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QUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Q0FDRixDQUFBOztZQS9FNkIsa0NBQWtDOzs7QUEvQm5ELDhDQUE4QztJQUgxRCxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csOENBQThDLENBOEcxRDtTQTlHWSw4Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEF0dGFjaG1lbnRDb252ZXJ0LFxuICBBdHRhY2htZW50UGFyc2VyLFxuICBBdHRhY2htZW50VmFsaWRhdGVcbn0gZnJvbSAnZ2wtdy1mcm9udGVuZC9saWIvZXM1L3NjcmlwdHMvY29yZS9zZXJ2aWNlcy9hdHRhY2htZW50L2NvcmUtc2VydmljZXMtYXR0YWNobWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cmluZ0NvbnZlcnRlciB9IGZyb20gJ2dsLXctZnJvbnRlbmQvbGliL2VzNS9zY3JpcHRzL2NvcmUvc2VydmljZXMvc3RyaW5nL2NvcmUtc2VydmljZXMtc3RyaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUltYWdlQnV0dG9uVG9vbHRpcCB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbi9pbWFnZS90b29sdGlwL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXRvb2x0aXAuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSUltYWdlU3RyaW5nIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaW1hZ2UtcHJldmlldy5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZSA9ICcuLi9hc3NldHMvaW1nL2ljb24vaW1hZ2UvaW1hZ2UtdGVtcGxhdGUuc3ZnJztcblxuICByZXRyaWV2ZVVwZGF0ZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcbiAgbGFiZWxJY29ucyA9ICcuLi9hc3NldHMvaW1nL2ljb24vbGFiZWwvJztcblxuICBidXR0b25zOiBJSW1hZ2VCdXR0b25Ub29sdGlwW10gPSBbXG4gICAge1xuICAgICAgc3JjOiBgJHt0aGlzLmxhYmVsSWNvbnN9aW1hZ2Uuc3ZnYCxcbiAgICAgIGlkOiAnYWRkLWltYWdlLWZyb20tbGFiZWwnLFxuICAgICAgYWx0OiAnQWRkIGltYWdlJyxcbiAgICAgIHNob3c6IHRydWUsIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIHNyYzogYCR7dGhpcy5sYWJlbEljb25zfXJlbW92ZS1pbWFnZS5zdmdgLFxuICAgICAgaWQ6ICdjbGVhci1pbWFnZS1mcm9tLWxhYmVsJyxcbiAgICAgIGFsdDogJ1JlbW92ZSBpbWFnZScsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlSW1hZ2UoKTtcbiAgICAgIH1cbiAgICB9LFxuICBdO1xuXG4gIHByaXZhdGUgX2FjY2VwdHM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcbiAgcHJpdmF0ZSBfdXNlckltYWdlOiBIVE1MRGl2RWxlbWVudDtcbiAgcHJpdmF0ZSBfY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUltYWdlU3RyaW5nPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkge1xuICAgIHRoaXMucmV0cmlldmVVcGRhdGUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2UodmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnModHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEltYWdlKCcnKTtcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGluaXRpYWxpemUoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHVzZXJJbWFnZTogSFRNTERpdkVsZW1lbnQsIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElJbWFnZVN0cmluZz4sXG4gIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZywgcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLl9hY2NlcHRzID0gQXR0YWNobWVudFBhcnNlci5wYXJzZUFjY2VwdEZpbGVzKChpbnB1dC5hdHRyaWJ1dGVzIGFzIGFueSkuYWNjZXB0LnZhbHVlKTtcbiAgICB0aGlzLl91c2VySW1hZ2UgPSB1c2VySW1hZ2U7XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gY3VycmVudFZhbHVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmJ1dHRvbnNbMF0uYWx0ID0gYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuYnV0dG9uc1sxXS5hbHQgPSByZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uO1xuICAgIH0sIDEwMCk7XG5cbiAgICB0aGlzLl9pbnB1dC5vbmlucHV0ID0gKCkgPT4geyB0aGlzLm9uQ2hhbmdlKGludmFsaWRTaXplRGVzY3JpcHRpb24sIGludmFsaWRGb3JtYXREZXNjcmlwdGlvbik7IH07XG4gICAgdGhpcy5yZW1vdmVJbWFnZSh0cnVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpc1ZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGUodGhpcy5faW5wdXQsIHRoaXMuX2FjY2VwdHMpO1xuICAgIGNvbnN0IHNpemVWYWxpZCA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5maWxlU2l6ZSh0aGlzLl9pbnB1dCk7XG5cbiAgICBpZiAoIXNpemVWYWxpZCkge1xuICAgICAgY29uc3QgbWF4U2l6ZTogbnVtYmVyID0gQXR0YWNobWVudFZhbGlkYXRlLm1heFNpemUodGhpcy5faW5wdXQpO1xuICAgICAgY29uc3QgbWF4U2l6ZVN0ciA9IFN0cmluZ0NvbnZlcnRlci5mb3JtYXROdW1iZXIobWF4U2l6ZSk7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KGAke2ludmFsaWRTaXplRGVzY3JpcHRpb259ICR7bWF4U2l6ZVN0cn1LQmApLnRoZW4oKCkgPT4ge30pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICBBdHRhY2htZW50Q29udmVydC50ZXh0RmlsZVRvVXJsSW1hZ2UodGhpcy5faW5wdXQuZmlsZXNbMF0pLnRoZW4oKGltYWdlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZShpbWFnZSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWU6IGltYWdlIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnModHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pLnRoZW4oKCkgPT4ge30pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlQnV0dG9ucyhoYXNWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYnV0dG9uc1swXS5zaG93ID0gIWhhc1ZhbHVlO1xuICAgIHRoaXMuYnV0dG9uc1sxXS5zaG93ID0gaGFzVmFsdWU7XG4gIH1cblxuICBzZXRJbWFnZShpbWFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXNlckltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltYWdlfVwiKWA7XG4gICAgdGhpcy5fdXNlckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTtcbiAgfVxuXG4gIGFkZEltYWdlKCkge1xuICAgIHRoaXMuX2lucHV0LmNsaWNrKCk7XG4gIH1cblxuICByZW1vdmVJbWFnZShpbml0PzogYm9vbGVhbikge1xuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5pbWFnZSk7XG5cbiAgICBpZiAoIWluaXQpIHtcbiAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWU6IG51bGwgfSk7XG4gICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoZmFsc2UpO1xuICAgIH1cbiAgfVxufVxuIl19