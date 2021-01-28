import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AttachmentConvert, AttachmentParser, AttachmentValidate, ImageResize, StringConverter } from "gl-w-frontend";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9hdHRhY2htZW50L2ltYWdlL3ByZXZpZXcvZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWdCLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3RILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDhEQUE4RCxDQUFDOzs7QUFNbEgsTUFBTSxPQUFPLDhDQUE4QztJQStCekQsWUFBb0IsTUFBMEM7UUFBMUMsV0FBTSxHQUFOLE1BQU0sQ0FBb0M7UUE5QjdDLFVBQUssR0FBRyw2Q0FBNkMsQ0FBQztRQUV2RSxtQkFBYyxHQUEwQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3RELGVBQVUsR0FBRywyQkFBMkIsQ0FBQztRQUV6QyxZQUFPLEdBQTBCO1lBQy9CO2dCQUNFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLFdBQVc7Z0JBQ2xDLEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEIsQ0FBQzthQUNGO1lBQ0Q7Z0JBQ0UsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsa0JBQWtCO2dCQUN6QyxFQUFFLEVBQUUsd0JBQXdCO2dCQUM1QixHQUFHLEVBQUUsY0FBYztnQkFDbkIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLEdBQUcsRUFBRTtvQkFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7YUFDRjtTQUNGLENBQUM7UUFRQSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzFCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUF1QixFQUFFLFNBQXlCLEVBQUUsWUFBd0MsRUFDdkcsc0JBQThCLEVBQUUsd0JBQWdDLEVBQUUseUJBQWlDLEVBQUUsNEJBQW9DO1FBQ3ZJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUUsS0FBSyxDQUFDLFVBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBRWxDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyw0QkFBNEIsQ0FBQztRQUNyRCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUSxDQUFDLHNCQUE4QixFQUFFLHdCQUFnQztRQUN2RSxNQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEUsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxPQUFPLEdBQVcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRSxNQUFNLFVBQVUsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsc0JBQXNCLElBQUksVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0UsT0FBTztTQUNSO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO2dCQUNoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhLENBQUMsUUFBaUI7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBa0I7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUvRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBYztRQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztZQWxIRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdHRhY2htZW50Q29udmVydCwgQXR0YWNobWVudFBhcnNlciwgQXR0YWNobWVudFZhbGlkYXRlLCBJbWFnZVJlc2l6ZSwgU3RyaW5nQ29udmVydGVyIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcblxuaW1wb3J0IHsgSUltYWdlQnV0dG9uVG9vbHRpcCB9IGZyb20gJy4uLy4uLy4uL2J1dHRvbi9pbWFnZS90b29sdGlwL2dsLXNoYXJlZC1jb21wb25lbnQtYnV0dG9uLWltYWdlLXRvb2x0aXAuaW50ZXJmYWNlJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RhbC9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSUltYWdlU3RyaW5nLCBJSW1hZ2VVcGRhdGUgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9pbWFnZS9pbWFnZS10ZW1wbGF0ZS5zdmcnO1xuXG4gIHJldHJpZXZlVXBkYXRlOiBTdWJqZWN0PElJbWFnZVVwZGF0ZT4gPSBuZXcgU3ViamVjdCgpO1xuICBsYWJlbEljb25zID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9sYWJlbC8nO1xuXG4gIGJ1dHRvbnM6IElJbWFnZUJ1dHRvblRvb2x0aXBbXSA9IFtcbiAgICB7XG4gICAgICBzcmM6IGAke3RoaXMubGFiZWxJY29uc31pbWFnZS5zdmdgLFxuICAgICAgaWQ6ICdhZGQtaW1hZ2UtZnJvbS1sYWJlbCcsXG4gICAgICBhbHQ6ICdBZGQgaW1hZ2UnLFxuICAgICAgc2hvdzogdHJ1ZSwgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRJbWFnZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBgJHt0aGlzLmxhYmVsSWNvbnN9cmVtb3ZlLWltYWdlLnN2Z2AsXG4gICAgICBpZDogJ2NsZWFyLWltYWdlLWZyb20tbGFiZWwnLFxuICAgICAgYWx0OiAnUmVtb3ZlIGltYWdlJyxcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVJbWFnZSgpO1xuICAgICAgfVxuICAgIH0sXG4gIF07XG5cbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XG4gIHByaXZhdGUgX2lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBwcml2YXRlIF91c2VySW1hZ2U6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJSW1hZ2VTdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZXRyaWV2ZVVwZGF0ZS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmltYWdlICE9IG51bGwgJiYgZGF0YS5pbWFnZS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldEltYWdlKGRhdGEpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnModHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEltYWdlKHsgaW1hZ2U6ICcnIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgdXNlckltYWdlOiBIVE1MRGl2RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUltYWdlU3RyaW5nPixcbiAgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZywgYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nLCByZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2FjY2VwdHMgPSBBdHRhY2htZW50UGFyc2VyLnBhcnNlQWNjZXB0RmlsZXMoKGlucHV0LmF0dHJpYnV0ZXMgYXMgYW55KS5hY2NlcHQudmFsdWUpO1xuICAgIHRoaXMuX3VzZXJJbWFnZSA9IHVzZXJJbWFnZTtcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYnV0dG9uc1swXS5hbHQgPSBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5idXR0b25zWzFdLmFsdCA9IHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb247XG4gICAgfSwgMTAwKTtcblxuICAgIHRoaXMuX2lucHV0Lm9uaW5wdXQgPSAoKSA9PiB7IHRoaXMub25DaGFuZ2UoaW52YWxpZFNpemVEZXNjcmlwdGlvbiwgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uKTsgfTtcbiAgICB0aGlzLnJlbW92ZUltYWdlKHRydWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIGNvbnN0IGlzVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZSh0aGlzLl9pbnB1dCwgdGhpcy5fYWNjZXB0cyk7XG4gICAgY29uc3Qgc2l6ZVZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGVTaXplKHRoaXMuX2lucHV0KTtcblxuICAgIGlmICghc2l6ZVZhbGlkKSB7XG4gICAgICBjb25zdCBtYXhTaXplOiBudW1iZXIgPSBBdHRhY2htZW50VmFsaWRhdGUubWF4U2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgICBjb25zdCBtYXhTaXplU3RyID0gU3RyaW5nQ29udmVydGVyLmZvcm1hdE51bWJlcihtYXhTaXplKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn0gJHttYXhTaXplU3RyfUtCYCkudGhlbigoKSA9PiB7fSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIEF0dGFjaG1lbnRDb252ZXJ0LnRleHRGaWxlVG9VcmxJbWFnZSh0aGlzLl9pbnB1dC5maWxlc1swXSkudGhlbigoaW1hZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnNldEltYWdlKHsgaW1hZ2UgfSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWU6IGltYWdlIH0pO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnModHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdyhpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb24pLnRoZW4oKCkgPT4ge30pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5faW5wdXQudmFsdWUgPSBudWxsO1xuICB9XG5cbiAgdXBkYXRlQnV0dG9ucyhoYXNWYWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuYnV0dG9uc1swXS5zaG93ID0gIWhhc1ZhbHVlO1xuICAgIHRoaXMuYnV0dG9uc1sxXS5zaG93ID0gaGFzVmFsdWU7XG4gIH1cblxuICBzZXRJbWFnZShkYXRhOiBJSW1hZ2VVcGRhdGUpIHtcbiAgICBjb25zdCBpbWcgPSBkYXRhLnJlc2l6ZSA/IEltYWdlUmVzaXplLmJhc2U2NChkYXRhKTogZGF0YS5pbWFnZTtcblxuICAgIHRoaXMuX3VzZXJJbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHtpbWd9XCIpYDtcbiAgICB0aGlzLl91c2VySW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQtZmlsbCcpO1xuICB9XG5cbiAgYWRkSW1hZ2UoKSB7XG4gICAgdGhpcy5faW5wdXQuY2xpY2soKTtcbiAgfVxuXG4gIHJlbW92ZUltYWdlKGluaXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgdGhpcy5zZXRJbWFnZSh7IGltYWdlOiB0aGlzLmltYWdlIH0pO1xuXG4gICAgaWYgKCFpbml0KSB7XG4gICAgICB0aGlzLl9jdXJyZW50VmFsdWUuZW1pdCh7IHZhbHVlOiBudWxsIH0pO1xuICAgICAgdGhpcy51cGRhdGVCdXR0b25zKGZhbHNlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==