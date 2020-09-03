import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AttachmentConvert, AttachmentParser, AttachmentValidate, StringConverter } from "gl-w-frontend";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWltYWdlLXByZXZpZXcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pbWFnZS9wcmV2aWV3L2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQzs7O0FBTWxIO0lBK0JFLHdEQUFvQixNQUEwQztRQUE5RCxpQkFVQztRQVZtQixXQUFNLEdBQU4sTUFBTSxDQUFvQztRQTlCN0MsVUFBSyxHQUFHLDZDQUE2QyxDQUFDO1FBRXZFLG1CQUFjLEdBQW9CLElBQUksT0FBTyxFQUFFLENBQUM7UUFDaEQsZUFBVSxHQUFHLDJCQUEyQixDQUFDO1FBRXpDLFlBQU8sR0FBMEI7WUFDL0I7Z0JBQ0UsR0FBRyxFQUFLLElBQUksQ0FBQyxVQUFVLGNBQVc7Z0JBQ2xDLEVBQUUsRUFBRSxzQkFBc0I7Z0JBQzFCLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtvQkFDcEIsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2FBQ0Y7WUFDRDtnQkFDRSxHQUFHLEVBQUssSUFBSSxDQUFDLFVBQVUscUJBQWtCO2dCQUN6QyxFQUFFLEVBQUUsd0JBQXdCO2dCQUM1QixHQUFHLEVBQUUsY0FBYztnQkFDbkIsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFO29CQUNSLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsQ0FBQzthQUNGO1NBQ0YsQ0FBQztRQVFBLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqQyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzVDLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1FQUFVLEdBQVYsVUFBVyxLQUF1QixFQUFFLFNBQXlCLEVBQUUsWUFBd0MsRUFDdkcsc0JBQThCLEVBQUUsd0JBQWdDLEVBQUUseUJBQWlDLEVBQUUsNEJBQW9DO1FBRHpJLGlCQWNDO1FBWkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLENBQUMsVUFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUM7UUFFbEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcseUJBQXlCLENBQUM7WUFDaEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsNEJBQTRCLENBQUM7UUFDckQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsY0FBUSxLQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUVBQVEsR0FBUixVQUFTLHNCQUE4QixFQUFFLHdCQUFnQztRQUF6RSxpQkFzQkM7UUFyQkMsSUFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BFLElBQU0sU0FBUyxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQU0sT0FBTyxHQUFXLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBSSxzQkFBc0IsU0FBSSxVQUFVLE9BQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdFLE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFhO2dCQUM1RSxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsbUVBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsc0VBQWEsR0FBYixVQUFjLFFBQWlCO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUVBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFdBQVEsS0FBSyxRQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxpRUFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsb0VBQVcsR0FBWCxVQUFZLElBQWM7UUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDOztnQkE5RTJCLGtDQUFrQzs7O0lBL0JuRCw4Q0FBOEM7UUFIMUQsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLDhDQUE4QyxDQThHMUQ7eURBMUhEO0NBMEhDLEFBOUdELElBOEdDO1NBOUdZLDhDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdHRhY2htZW50Q29udmVydCwgQXR0YWNobWVudFBhcnNlciwgQXR0YWNobWVudFZhbGlkYXRlLCBTdHJpbmdDb252ZXJ0ZXIgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5pbXBvcnQgeyBJSW1hZ2VCdXR0b25Ub29sdGlwIH0gZnJvbSAnLi4vLi4vLi4vYnV0dG9uL2ltYWdlL3Rvb2x0aXAvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24taW1hZ2UtdG9vbHRpcC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGFsL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBJSW1hZ2VTdHJpbmcgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pbWFnZS1wcmV2aWV3LmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEltYWdlUHJldmlld1NlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9pbWFnZS9pbWFnZS10ZW1wbGF0ZS5zdmcnO1xuXG4gIHJldHJpZXZlVXBkYXRlOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdCgpO1xuICBsYWJlbEljb25zID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9sYWJlbC8nO1xuXG4gIGJ1dHRvbnM6IElJbWFnZUJ1dHRvblRvb2x0aXBbXSA9IFtcbiAgICB7XG4gICAgICBzcmM6IGAke3RoaXMubGFiZWxJY29uc31pbWFnZS5zdmdgLFxuICAgICAgaWQ6ICdhZGQtaW1hZ2UtZnJvbS1sYWJlbCcsXG4gICAgICBhbHQ6ICdBZGQgaW1hZ2UnLFxuICAgICAgc2hvdzogdHJ1ZSwgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5hZGRJbWFnZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgc3JjOiBgJHt0aGlzLmxhYmVsSWNvbnN9cmVtb3ZlLWltYWdlLnN2Z2AsXG4gICAgICBpZDogJ2NsZWFyLWltYWdlLWZyb20tbGFiZWwnLFxuICAgICAgYWx0OiAnUmVtb3ZlIGltYWdlJyxcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVJbWFnZSgpO1xuICAgICAgfVxuICAgIH0sXG4gIF07XG5cbiAgcHJpdmF0ZSBfYWNjZXB0czogc3RyaW5nW107XG4gIHByaXZhdGUgX2lucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICBwcml2YXRlIF91c2VySW1hZ2U6IEhUTUxEaXZFbGVtZW50O1xuICBwcml2YXRlIF9jdXJyZW50VmFsdWU6IEV2ZW50RW1pdHRlcjxJSW1hZ2VTdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZXRyaWV2ZVVwZGF0ZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0SW1hZ2UoJycpO1xuICAgICAgICB0aGlzLnVwZGF0ZUJ1dHRvbnMoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGl6ZShpbnB1dDogSFRNTElucHV0RWxlbWVudCwgdXNlckltYWdlOiBIVE1MRGl2RWxlbWVudCwgY3VycmVudFZhbHVlOiBFdmVudEVtaXR0ZXI8SUltYWdlU3RyaW5nPixcbiAgaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZywgYWRkSW1hZ2VCdXR0b25EZXNjcmlwdGlvbjogc3RyaW5nLCByZW1vdmVJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dCA9IGlucHV0O1xuICAgIHRoaXMuX2FjY2VwdHMgPSBBdHRhY2htZW50UGFyc2VyLnBhcnNlQWNjZXB0RmlsZXMoKGlucHV0LmF0dHJpYnV0ZXMgYXMgYW55KS5hY2NlcHQudmFsdWUpO1xuICAgIHRoaXMuX3VzZXJJbWFnZSA9IHVzZXJJbWFnZTtcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYnV0dG9uc1swXS5hbHQgPSBhZGRJbWFnZUJ1dHRvbkRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5idXR0b25zWzFdLmFsdCA9IHJlbW92ZUltYWdlQnV0dG9uRGVzY3JpcHRpb247XG4gICAgfSwgMTAwKTtcblxuICAgIHRoaXMuX2lucHV0Lm9uaW5wdXQgPSAoKSA9PiB7IHRoaXMub25DaGFuZ2UoaW52YWxpZFNpemVEZXNjcmlwdGlvbiwgaW52YWxpZEZvcm1hdERlc2NyaXB0aW9uKTsgfTtcbiAgICB0aGlzLnJlbW92ZUltYWdlKHRydWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoaW52YWxpZFNpemVEZXNjcmlwdGlvbjogc3RyaW5nLCBpbnZhbGlkRm9ybWF0RGVzY3JpcHRpb246IHN0cmluZykge1xuICAgIGNvbnN0IGlzVmFsaWQgPSBBdHRhY2htZW50VmFsaWRhdGUuZmlsZSh0aGlzLl9pbnB1dCwgdGhpcy5fYWNjZXB0cyk7XG4gICAgY29uc3Qgc2l6ZVZhbGlkID0gQXR0YWNobWVudFZhbGlkYXRlLmZpbGVTaXplKHRoaXMuX2lucHV0KTtcblxuICAgIGlmICghc2l6ZVZhbGlkKSB7XG4gICAgICBjb25zdCBtYXhTaXplOiBudW1iZXIgPSBBdHRhY2htZW50VmFsaWRhdGUubWF4U2l6ZSh0aGlzLl9pbnB1dCk7XG4gICAgICBjb25zdCBtYXhTaXplU3RyID0gU3RyaW5nQ29udmVydGVyLmZvcm1hdE51bWJlcihtYXhTaXplKTtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coYCR7aW52YWxpZFNpemVEZXNjcmlwdGlvbn0gJHttYXhTaXplU3RyfUtCYCkudGhlbigoKSA9PiB7fSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgIEF0dGFjaG1lbnRDb252ZXJ0LnRleHRGaWxlVG9VcmxJbWFnZSh0aGlzLl9pbnB1dC5maWxlc1swXSkudGhlbigoaW1hZ2U6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnNldEltYWdlKGltYWdlKTtcbiAgICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogaW1hZ2UgfSk7XG4gICAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyh0cnVlKTtcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KGludmFsaWRGb3JtYXREZXNjcmlwdGlvbikudGhlbigoKSA9PiB7fSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJJbnB1dCgpIHtcbiAgICB0aGlzLl9pbnB1dC52YWx1ZSA9IG51bGw7XG4gIH1cblxuICB1cGRhdGVCdXR0b25zKGhhc1ZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5idXR0b25zWzBdLnNob3cgPSAhaGFzVmFsdWU7XG4gICAgdGhpcy5idXR0b25zWzFdLnNob3cgPSBoYXNWYWx1ZTtcbiAgfVxuXG4gIHNldEltYWdlKGltYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl91c2VySW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7aW1hZ2V9XCIpYDtcbiAgICB0aGlzLl91c2VySW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgncmVxdWlyZWQtZmlsbCcpO1xuICB9XG5cbiAgYWRkSW1hZ2UoKSB7XG4gICAgdGhpcy5faW5wdXQuY2xpY2soKTtcbiAgfVxuXG4gIHJlbW92ZUltYWdlKGluaXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5jbGVhcklucHV0KCk7XG4gICAgdGhpcy5zZXRJbWFnZSh0aGlzLmltYWdlKTtcblxuICAgIGlmICghaW5pdCkge1xuICAgICAgdGhpcy5fY3VycmVudFZhbHVlLmVtaXQoeyB2YWx1ZTogbnVsbCB9KTtcbiAgICAgIHRoaXMudXBkYXRlQnV0dG9ucyhmYWxzZSk7XG4gICAgfVxuICB9XG59XG4iXX0=