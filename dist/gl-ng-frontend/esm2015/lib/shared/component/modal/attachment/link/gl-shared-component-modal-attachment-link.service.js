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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hdHRhY2htZW50L2xpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFNekcsTUFBTSxPQUFPLDJDQUEyQztJQWV0RCxZQUFvQixNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQVo5RCxhQUFRLEdBQUcsd0NBQXdDLENBQUM7UUFFcEQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixpQkFBWSxHQUE2QixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUVcsQ0FBQztJQUVuRSxLQUFLLENBQUMsSUFBc0IsRUFBRSxHQUFxQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVLLFNBQVM7O1lBQ2IsSUFBSSxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxNQUFNLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2QsSUFBSSxFQUFFLElBQUksQ0FB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RTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOzs7O1lBOUdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBJQXR0YWNobWVudExpbmsgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBdHRhY2htZW50TGlua1NlcnZpY2Uge1xuICBuYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuICB1cmw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGxpbmtJY29uID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9hdHRhY2htZW50L2xpbmsuc3ZnJztcblxuICBzaG93TW9kYWwgPSBmYWxzZTtcbiAgbW9kYWxDbGFzczogc3RyaW5nO1xuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8SUF0dGFjaG1lbnRMaW5rPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZWRpdGluZzogYm9vbGVhbjtcbiAgZWRpdElkOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF91cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgc2V0dXAobmFtZTogSFRNTElucHV0RWxlbWVudCwgdXJsOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgb25Db25maXJtKCkge1xuICAgIGlmIChhd2FpdCB0aGlzLnZhbGlkRGF0YSgpKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICBpY29uOiB0aGlzLmxpbmtJY29uLFxuICAgICAgICBlZGl0aW5nOiB0aGlzLmVkaXRpbmcsXG4gICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWRcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodmFsdWVzKTtcbiAgICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmFtZShlOiBFdmVudCkge1xuICAgIHRoaXMuX25hbWUgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgb25VcmwoZTogRXZlbnQpIHtcbiAgICB0aGlzLl91cmwgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWREYXRhKCkge1xuICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcL1teIFwiXSskLztcbiAgICBjb25zdCB0ZW1wVXJsID0gdGhpcy5fdXJsICE9IG51bGwgJiYgIXRoaXMuX3VybC5pbmNsdWRlcygnaHR0cDovLycpICYmICF0aGlzLl91cmwuaW5jbHVkZXMoJ2h0dHBzOi8vJykgPyBgaHR0cDovLyR7dGhpcy5fdXJsfWAgOiB0aGlzLl91cmw7XG4gICAgY29uc3QgdmFsaWRVcmwgPSBuZXcgUmVnRXhwKHVybFJlZ2V4KS50ZXN0KHRlbXBVcmwpO1xuXG4gICAgaWYgKHRoaXMuX25hbWUgPT0gbnVsbCB8fCB0aGlzLl9uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSBvIG5vbWUgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3VybCA9PSBudWxsIHx8IHRoaXMuX3VybC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyB1cmwgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCF2YWxpZFVybCkge1xuICAgICAgYXdhaXQgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIHVtIHVybCB2w6FsaWRvIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cmwgPSB0ZW1wVXJsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbW9kYWwoc2hvdykge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnc2hvdy1tb2RhbCc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGVkaXQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZWRpdElkOiBudW1iZXIpIHtcbiAgICB0aGlzLm1vZGFsKHRydWUpO1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0SWQgPSBlZGl0SWQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstbmFtZScpO1xuICAgICAgdGhpcy51cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNobWVudC1saW5rLXZhbHVlJyk7XG5cbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5uYW1lLnZhbHVlID0gbmFtZTtcbiAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgIHRoaXMudXJsLnZhbHVlID0gdXJsO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub25Db25maXJtKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMub25DYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==