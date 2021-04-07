import { __awaiter } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../alert/gl-shared-component-modal-alert.service";
export class GlSharedComponentModalAttachmentLinkService {
    constructor(_alert) {
        this._alert = _alert;
        this.linkIcon = '../assets/img/icon/attachment/link.svg';
        this.showModal = false;
        this.currentValue = new Subject();
    }
    setup(name, url) {
        this.name = name;
        this.url = url;
    }
    onCancel() {
        this.modal(false);
    }
    onConfirm() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.validData()) {
                const values = {
                    name: this._name,
                    url: this._url,
                    icon: this.linkIcon,
                    editing: this.editing,
                    editId: this.editId
                };
                this.currentValue.next(values);
                this.modal(false);
            }
        });
    }
    onName(e) {
        this._name = e.currentTarget.value;
    }
    onUrl(e) {
        this._url = e.currentTarget.value;
    }
    validData() {
        return __awaiter(this, void 0, void 0, function* () {
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
            const tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? `http://${this._url}` : this._url;
            const validUrl = new RegExp(urlRegex).test(tempUrl);
            if (this._name == null || this._name.trim().length === 0) {
                yield this._alert.show('Por favor, informe o nome do arquivo!');
                return false;
            }
            else if (this._url == null || this._url.trim().length === 0) {
                yield this._alert.show('Por favor, informe o url do arquivo!');
                return false;
            }
            else if (!validUrl) {
                yield this._alert.show('Por favor, informe um url válido!');
            }
            else {
                this._url = tempUrl;
                return true;
            }
        });
    }
    modal(show) {
        this.editing = false;
        this.editId = null;
        if (show) {
            this.modalClass = 'hide-modal';
            this.showModal = true;
            this.modalClass = 'show-modal';
        }
        else {
            this.modalClass = 'hide-modal';
            setTimeout(() => {
                this.showModal = false;
            }, 300);
        }
    }
    edit(name, url, editId) {
        this.modal(true);
        this.editing = true;
        this.editId = editId;
        setTimeout(() => {
            this.name = document.querySelector('#attachment-link-name');
            this.url = document.querySelector('#attachment-link-value');
            this._name = name;
            this.name.value = name;
            this._url = url;
            this.url.value = url;
        }, 100);
    }
    onModalKeyUp(e) {
        if (e.key === 'Enter') {
            return this.onConfirm();
        }
        else if (e.key === 'Escape') {
            this.onCancel();
        }
    }
}
GlSharedComponentModalAttachmentLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
GlSharedComponentModalAttachmentLinkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
GlSharedComponentModalAttachmentLinkService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hdHRhY2htZW50L2xpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFNekcsTUFBTSxPQUFPLDJDQUEyQztJQWV0RCxZQUFvQixNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQVo5RCxhQUFRLEdBQUcsd0NBQXdDLENBQUM7UUFFcEQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixpQkFBWSxHQUE2QixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUVcsQ0FBQztJQUVuRSxLQUFLLENBQUMsSUFBc0IsRUFBRSxHQUFxQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVLLFNBQVM7O1lBQ2IsSUFBSSxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxNQUFNLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2QsSUFB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VSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O1lBOUdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJQXR0YWNobWVudExpbmsgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQXR0YWNobWVudExpbmtTZXJ2aWNlIHtcclxuICBuYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHVybDogSFRNTElucHV0RWxlbWVudDtcclxuICBsaW5rSWNvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vYXR0YWNobWVudC9saW5rLnN2Zyc7XHJcblxyXG4gIHNob3dNb2RhbCA9IGZhbHNlO1xyXG4gIG1vZGFsQ2xhc3M6IHN0cmluZztcclxuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8SUF0dGFjaG1lbnRMaW5rPiA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGVkaXRpbmc6IGJvb2xlYW47XHJcbiAgZWRpdElkOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF91cmw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpIHsgfVxyXG5cclxuICBzZXR1cChuYW1lOiBIVE1MSW5wdXRFbGVtZW50LCB1cmw6IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnVybCA9IHVybDtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5tb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkNvbmZpcm0oKSB7XHJcbiAgICBpZiAoYXdhaXQgdGhpcy52YWxpZERhdGEoKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSB7XHJcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcclxuICAgICAgICB1cmw6IHRoaXMuX3VybCxcclxuICAgICAgICBpY29uOiB0aGlzLmxpbmtJY29uLFxyXG4gICAgICAgIGVkaXRpbmc6IHRoaXMuZWRpdGluZyxcclxuICAgICAgICBlZGl0SWQ6IHRoaXMuZWRpdElkXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5uZXh0KHZhbHVlcyk7XHJcbiAgICAgIHRoaXMubW9kYWwoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25OYW1lKGU6IEV2ZW50KSB7XHJcbiAgICB0aGlzLl9uYW1lID0gKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uVXJsKGU6IEV2ZW50KSB7XHJcbiAgICB0aGlzLl91cmwgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdmFsaWREYXRhKCkge1xyXG4gICAgY29uc3QgdXJsUmVnZXggPSAvXihmdHB8aHR0cHxodHRwcyk6XFwvXFwvW14gXCJdKyQvO1xyXG4gICAgY29uc3QgdGVtcFVybCA9IHRoaXMuX3VybCAhPSBudWxsICYmICF0aGlzLl91cmwuaW5jbHVkZXMoJ2h0dHA6Ly8nKSAmJiAhdGhpcy5fdXJsLmluY2x1ZGVzKCdodHRwczovLycpID8gYGh0dHA6Ly8ke3RoaXMuX3VybH1gIDogdGhpcy5fdXJsO1xyXG4gICAgY29uc3QgdmFsaWRVcmwgPSBuZXcgUmVnRXhwKHVybFJlZ2V4KS50ZXN0KHRlbXBVcmwpO1xyXG5cclxuICAgIGlmICh0aGlzLl9uYW1lID09IG51bGwgfHwgdGhpcy5fbmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSBvIG5vbWUgZG8gYXJxdWl2byEnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLl91cmwgPT0gbnVsbCB8fCB0aGlzLl91cmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyB1cmwgZG8gYXJxdWl2byEnKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICghdmFsaWRVcmwpIHtcclxuICAgICAgYXdhaXQgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIHVtIHVybCB2w6FsaWRvIScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdXJsID0gdGVtcFVybDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb2RhbChzaG93KSB7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcclxuXHJcbiAgICBpZiAoc2hvdykge1xyXG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XHJcbiAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdoaWRlLW1vZGFsJztcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVkaXQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZWRpdElkOiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kYWwodHJ1ZSk7XHJcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5lZGl0SWQgPSBlZGl0SWQ7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstbmFtZScpO1xyXG4gICAgICB0aGlzLnVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstdmFsdWUnKTtcclxuXHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLm5hbWUudmFsdWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl91cmwgPSB1cmw7XHJcbiAgICAgIHRoaXMudXJsLnZhbHVlID0gdXJsO1xyXG4gICAgfSwgMTAwKTtcclxuICB9XHJcblxyXG4gIG9uTW9kYWxLZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25Db25maXJtKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLm9uQ2FuY2VsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==