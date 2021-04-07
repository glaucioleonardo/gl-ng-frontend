import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AttachmentConvert, AttachmentParser, AttachmentValidate, ImageResize, StringConverter } from 'gl-w-frontend';
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
        this.retrieveUpdate.subscribe((data) => {
            if (data.image != null && data.image.trim().length > 0) {
                this.setImage(data);
                this.updateButtons(true);
            }
            else {
                this.setImage({ image: '' });
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
                this.setImage({ image });
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
    setImage(data) {
        const img = data.resize ? ImageResize.base64(data) : data.image;
        this._userImage.style.backgroundImage = `url("${img}")`;
        this._userImage.classList.remove('required-fill');
    }
    addImage() {
        this._input.click();
    }
    removeImage(init) {
        this.clearInput();
        this.setImage({ image: this.image });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2ltYWdlL3ByZXZpZXcvZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7QUFNbEgsTUFBTSxPQUFPLDhDQUE4QztJQStCekQsWUFBb0IsTUFBMEM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7UUE5QjdDLFVBQUssR0FBRyw2Q0FBNkMsQ0FBQztRQUV2RSxtQkFBYyxHQUEwQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUV6QyxZQUFPLEdBQTBCO1lBQy9CO2dCQUNFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLFdBQVc7Z0JBQ2xDLEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQzthQUNGO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUcs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QUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztZQWxIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBBdHRhY2htZW50Q29udmVydCwgQXR0YWNobWVudFBhcnNlciwgQXR0YWNobWVudFZhbGlkYXRlLCBJbWFnZVJlc2l6ZSwgU3RyaW5nQ29udmVydGVyIH0gZnJvbSAnZ2wtdy1mcm9udGVuZCc7XHJcblxyXG5pbXBvcnQgeyBJSW1hZ2VCdXR0b25Ub29sdGlwIH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uL2ltYWdlL3Rvb2x0aXAvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2UtdG9vbHRpcC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kYWwvYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSUltYWdlU3RyaW5nLCBJSW1hZ2VVcGRhdGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudEF0dGFjaG1lbnRJbWFnZVByZXZpZXdTZXJ2aWNlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9pbWFnZS9pbWFnZS10ZW1wbGF0ZS5zdmcnO1xyXG5cclxuICByZXRyaWV2ZVVwZGF0ZTogU3ViamVjdDxJSW1hZ2VVcGRhdGU+ID0gbmV3IFN1YmplY3QoKTtcclxuICBsYWJlbEljb25zID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9sYWJlbC8nO1xyXG5cclxuICBidXR0b25zOiBJSW1hZ2VCdXR0b25Ub29sdGlwW10gPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogYCR7dGhpcy5sYWJlbEljb25zfWltYWdlLnN2Z2AsXHJcbiAgICAgIGlkOiAnYWRkLWltYWdlLWZyb20tbGFiZWwnLFxyXG4gICAgICBhbHQ6ICdBZGQgaW1hZ2UnLFxyXG4gICAgICBzaG93OiB0cnVlLCBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWRkSW1hZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiBgJHt0aGlzLmxhYmVsSWNvbnN9cmVtb3ZlLWltYWdlLnN2Z2AsXHJcbiAgICAgIGlkOiAnY2xlYXItaW1hZ2UtZnJvbS1sYWJlbCcsXHJcbiAgICAgIGFsdDogJ1JlbW92ZSBpbWFnZScsXHJcbiAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucmVtb3ZlSW1hZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBwcml2YXRlIF9hY2NlcHRzOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF9pbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIF91c2VySW1hZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgX2N1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElJbWFnZVN0cmluZz47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnJldHJpZXZlVXBkYXRlLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5pbWFnZSAhPSBudWxsICYmIGRhdGEuaW1hZ2UudHJpbSgpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKGRhdGEpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyh0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKHsgaW1hZ2U6ICcnIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgdXNlckltYWdlOiBIVE1MRGl2RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUltYWdlU3RyaW5nPixcclxuICAgICAgICAgICAgIGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcsIGFkZEltYWdlQnV0dG9uRGVzY3JpcHRpb246IHN0cmluZywgcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xyXG4gICAgdGhpcy5fYWNjZXB0cyA9IEF0dGFjaG1lbnRQYXJzZXIucGFyc2VBY2NlcHRGaWxlcygoaW5wdXQuYXR0cmlidXRlcyBhcyBhbnkpLmFjY2VwdC52YWx1ZSk7XHJcbiAgICB0aGlzLl91c2VySW1hZ2UgPSB1c2VySW1hZ2U7XHJcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWU7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1swXS5hbHQgPSBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbMV0uYWx0ID0gcmVtb3ZlSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjtcclxuICAgIH0sIDEwMCk7XHJcblxyXG4gICAgdGhpcy5faW5wdXQub25pbnB1dCA9ICgpID0+IHsgdGhpcy5vbkNoYW5nZShpbnZhbGlkU2l6ZURlc2NyaXB0aW9uLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pOyB9O1xyXG4gICAgdGhpcy5yZW1vdmVJbWFnZSh0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGludmFsaWRTaXplRGVzY3JpcHRpb246IHN0cmluZywgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZSh0aGlzLl9pbnB1dCwgdGhpcy5fYWNjZXB0cyk7XHJcbiAgICBjb25zdCBzaXplVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZVNpemUodGhpcy5faW5wdXQpO1xyXG5cclxuICAgIGlmICghc2l6ZVZhbGlkKSB7XHJcbiAgICAgIGNvbnN0IG1heFNpemU6IG51bWJlciA9IEF0dGFjaG1lbnRWYWxpZGF0ZS5tYXhTaXplKHRoaXMuX2lucHV0KTtcclxuICAgICAgY29uc3QgbWF4U2l6ZVN0ciA9IFN0cmluZ0NvbnZlcnRlci5mb3JtYXROdW1iZXIobWF4U2l6ZSk7XHJcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn0gJHttYXhTaXplU3RyfUtCYCkudGhlbigoKSA9PiB7fSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICBBdHRhY2htZW50Q29udmVydC50ZXh0RmlsZVRvVXJsSW1hZ2UodGhpcy5faW5wdXQuZmlsZXNbMF0pLnRoZW4oKGltYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB0aGlzLnNldEltYWdlKHsgaW1hZ2UgfSk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogaW1hZ2UgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCdXR0b25zKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gICAgICB0aGlzLl9hbGVydC5zaG93KGludmFsaWRGb3JtYXREZXNjcmlwdGlvbikudGhlbigoKSA9PiB7fSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhcklucHV0KCkge1xyXG4gICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQnV0dG9ucyhoYXNWYWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5idXR0b25zWzBdLnNob3cgPSAhaGFzVmFsdWU7XHJcbiAgICB0aGlzLmJ1dHRvbnNbMV0uc2hvdyA9IGhhc1ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0SW1hZ2UoZGF0YTogSUltYWdlVXBkYXRlKSB7XHJcbiAgICBjb25zdCBpbWcgPSBkYXRhLnJlc2l6ZSA/IEltYWdlUmVzaXplLmJhc2U2NChkYXRhKSA6IGRhdGEuaW1hZ2U7XHJcblxyXG4gICAgdGhpcy5fdXNlckltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2ltZ31cIilgO1xyXG4gICAgdGhpcy5fdXNlckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3JlcXVpcmVkLWZpbGwnKTtcclxuICB9XHJcblxyXG4gIGFkZEltYWdlKCkge1xyXG4gICAgdGhpcy5faW5wdXQuY2xpY2soKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUltYWdlKGluaXQ/OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmNsZWFySW5wdXQoKTtcclxuICAgIHRoaXMuc2V0SW1hZ2UoeyBpbWFnZTogdGhpcy5pbWFnZSB9KTtcclxuXHJcbiAgICBpZiAoIWluaXQpIHtcclxuICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogbnVsbCB9KTtcclxuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19