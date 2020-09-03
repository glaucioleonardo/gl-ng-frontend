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
            const validUrl = new RegExp(urlRegex).test(this._url);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2dsLW5nLWZyb250ZW5kL3NyYy9saWIvc2hhcmVkL2NvbXBvbmVudC9tb2RhbC9hdHRhY2htZW50L2xpbmsvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDOzs7QUFNekcsTUFBTSxPQUFPLDJDQUEyQztJQWV0RCxZQUFvQixNQUEwQztRQUExQyxXQUFNLEdBQU4sTUFBTSxDQUFvQztRQVo5RCxhQUFRLEdBQUcsd0NBQXdDLENBQUM7UUFFcEQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixpQkFBWSxHQUE2QixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUVcsQ0FBQztJQUVuRSxLQUFLLENBQUMsSUFBc0IsRUFBRSxHQUFxQjtRQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVLLFNBQVM7O1lBQ2IsSUFBSSxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDMUIsTUFBTSxNQUFNLEdBQUc7b0JBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2QsSUFB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O1FBRXJCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUU1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxZQUFZLENBQUMsQ0FBZ0I7UUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTtZQUNyQixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN6QjthQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztZQTlHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbGVydC9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWFsZXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSUF0dGFjaG1lbnRMaW5rIH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW1vZGFsLWF0dGFjaG1lbnQtbGluay5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQXR0YWNobWVudExpbmtTZXJ2aWNlIHtcbiAgbmFtZTogSFRNTElucHV0RWxlbWVudDtcbiAgdXJsOiBIVE1MSW5wdXRFbGVtZW50O1xuICBsaW5rSWNvbiA9ICcuLi9hc3NldHMvaW1nL2ljb24vYXR0YWNobWVudC9saW5rLnN2Zyc7XG5cbiAgc2hvd01vZGFsID0gZmFsc2U7XG4gIG1vZGFsQ2xhc3M6IHN0cmluZztcbiAgY3VycmVudFZhbHVlOiBTdWJqZWN0PElBdHRhY2htZW50TGluaz4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGVkaXRpbmc6IGJvb2xlYW47XG4gIGVkaXRJZDogbnVtYmVyO1xuXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfdXJsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWxlcnQ6IEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBbGVydFNlcnZpY2UpIHsgfVxuXG4gIHNldHVwKG5hbWU6IEhUTUxJbnB1dEVsZW1lbnQsIHVybDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy51cmwgPSB1cmw7XG4gIH1cblxuICBvbkNhbmNlbCgpIHtcbiAgICB0aGlzLm1vZGFsKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ29uZmlybSgpIHtcbiAgICBpZiAoYXdhaXQgdGhpcy52YWxpZERhdGEoKSkge1xuICAgICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICB1cmw6IHRoaXMuX3VybCxcbiAgICAgICAgaWNvbjogdGhpcy5saW5rSWNvbixcbiAgICAgICAgZWRpdGluZzogdGhpcy5lZGl0aW5nLFxuICAgICAgICBlZGl0SWQ6IHRoaXMuZWRpdElkXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZS5uZXh0KHZhbHVlcyk7XG4gICAgICB0aGlzLm1vZGFsKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBvbk5hbWUoZTogRXZlbnQpIHtcbiAgICB0aGlzLl9uYW1lID0gKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgfVxuXG4gIG9uVXJsKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5fdXJsID0gKGUuY3VycmVudFRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkRGF0YSgpIHtcbiAgICBjb25zdCB1cmxSZWdleCA9IC9eKGZ0cHxodHRwfGh0dHBzKTpcXC9cXC9bXiBcIl0rJC87XG4gICAgY29uc3QgdGVtcFVybCA9IHRoaXMuX3VybCAhPSBudWxsICYmICF0aGlzLl91cmwuaW5jbHVkZXMoJ2h0dHA6Ly8nKSAmJiAhdGhpcy5fdXJsLmluY2x1ZGVzKCdodHRwczovLycpID8gYGh0dHA6Ly8ke3RoaXMuX3VybH1gIDogdGhpcy5fdXJsO1xuICAgIGNvbnN0IHZhbGlkVXJsID0gbmV3IFJlZ0V4cCh1cmxSZWdleCkudGVzdCh0aGlzLl91cmwpO1xuXG4gICAgaWYgKHRoaXMuX25hbWUgPT0gbnVsbCB8fCB0aGlzLl9uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSBvIG5vbWUgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3VybCA9PSBudWxsIHx8IHRoaXMuX3VybC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyB1cmwgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCF2YWxpZFVybCkge1xuICAgICAgYXdhaXQgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIHVtIHVybCB2w6FsaWRvIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cmwgPSB0ZW1wVXJsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbW9kYWwoc2hvdykge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnc2hvdy1tb2RhbCc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGVkaXQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZWRpdElkOiBudW1iZXIpIHtcbiAgICB0aGlzLm1vZGFsKHRydWUpO1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0SWQgPSBlZGl0SWQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstbmFtZScpO1xuICAgICAgdGhpcy51cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNobWVudC1saW5rLXZhbHVlJyk7XG5cbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5uYW1lLnZhbHVlID0gbmFtZTtcbiAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgIHRoaXMudXJsLnZhbHVlID0gdXJsO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcmV0dXJuIHRoaXMub25Db25maXJtKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMub25DYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==