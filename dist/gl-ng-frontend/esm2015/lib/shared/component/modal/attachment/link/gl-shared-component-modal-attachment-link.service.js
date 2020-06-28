import { __awaiter, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../alert/gl-shared-component-modal-alert.service";
let GlSharedComponentModalAttachmentLinkService = class GlSharedComponentModalAttachmentLinkService {
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
};
GlSharedComponentModalAttachmentLinkService.ctorParameters = () => [
    { type: GlSharedComponentModalAlertService }
];
GlSharedComponentModalAttachmentLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
GlSharedComponentModalAttachmentLinkService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GlSharedComponentModalAttachmentLinkService);
export { GlSharedComponentModalAttachmentLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBTXpHLElBQWEsMkNBQTJDLEdBQXhELE1BQWEsMkNBQTJDO0lBZXRELFlBQW9CLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBWjlELGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUVwRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQTZCLElBQUksT0FBTyxFQUFFLENBQUM7SUFRVyxDQUFDO0lBRW5FLEtBQUssQ0FBQyxJQUFzQixFQUFFLEdBQXFCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUssU0FBUzs7WUFDYixJQUFJLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUMxQixNQUFNLE1BQU0sR0FBRztvQkFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVE7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RUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELFlBQVksQ0FBQyxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE3RjZCLGtDQUFrQzs7O0FBZm5ELDJDQUEyQztJQUh2RCxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csMkNBQTJDLENBNEd2RDtTQTVHWSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IElBdHRhY2htZW50TGluayB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSB7XG4gIG5hbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHVybDogSFRNTElucHV0RWxlbWVudDtcbiAgbGlua0ljb24gPSAnLi4vYXNzZXRzL2ltZy9pY29uL2F0dGFjaG1lbnQvbGluay5zdmcnO1xuXG4gIHNob3dNb2RhbCA9IGZhbHNlO1xuICBtb2RhbENsYXNzOiBzdHJpbmc7XG4gIGN1cnJlbnRWYWx1ZTogU3ViamVjdDxJQXR0YWNobWVudExpbms+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlZGl0aW5nOiBib29sZWFuO1xuICBlZGl0SWQ6IG51bWJlcjtcblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7IH1cblxuICBzZXR1cChuYW1lOiBIVE1MSW5wdXRFbGVtZW50LCB1cmw6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5tb2RhbChmYWxzZSk7XG4gIH1cblxuICBhc3luYyBvbkNvbmZpcm0oKSB7XG4gICAgaWYgKGF3YWl0IHRoaXMudmFsaWREYXRhKCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgIGljb246IHRoaXMubGlua0ljb24sXG4gICAgICAgIGVkaXRpbmc6IHRoaXMuZWRpdGluZyxcbiAgICAgICAgZWRpdElkOiB0aGlzLmVkaXRJZFxuICAgICAgfTtcblxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh2YWx1ZXMpO1xuICAgICAgdGhpcy5tb2RhbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25OYW1lKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5fbmFtZSA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gIH1cblxuICBvblVybChlOiBFdmVudCkge1xuICAgIHRoaXMuX3VybCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gIH1cblxuICBhc3luYyB2YWxpZERhdGEoKSB7XG4gICAgY29uc3QgdXJsUmVnZXggPSAvXihmdHB8aHR0cHxodHRwcyk6XFwvXFwvW14gXCJdKyQvO1xuICAgIGNvbnN0IHRlbXBVcmwgPSB0aGlzLl91cmwgIT0gbnVsbCAmJiAhdGhpcy5fdXJsLmluY2x1ZGVzKCdodHRwOi8vJykgJiYgIXRoaXMuX3VybC5pbmNsdWRlcygnaHR0cHM6Ly8nKSA/IGBodHRwOi8vJHt0aGlzLl91cmx9YCA6IHRoaXMuX3VybDtcbiAgICBjb25zdCB2YWxpZFVybCA9IG5ldyBSZWdFeHAodXJsUmVnZXgpLnRlc3QodGhpcy5fdXJsKTtcblxuICAgIGlmICh0aGlzLl9uYW1lID09IG51bGwgfHwgdGhpcy5fbmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyBub21lIGRvIGFycXVpdm8hJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLl91cmwgPT0gbnVsbCB8fCB0aGlzLl91cmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIG8gdXJsIGRvIGFycXVpdm8hJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghdmFsaWRVcmwpIHtcbiAgICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSB1bSB1cmwgdsOhbGlkbyEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXJsID0gdGVtcFVybDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG1vZGFsKHNob3cpIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlO1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdoaWRlLW1vZGFsJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBlZGl0KG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGVkaXRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RhbCh0cnVlKTtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZWRpdElkID0gZWRpdElkO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNobWVudC1saW5rLW5hbWUnKTtcbiAgICAgIHRoaXMudXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFjaG1lbnQtbGluay12YWx1ZScpO1xuXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMubmFtZS52YWx1ZSA9IG5hbWU7XG4gICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICB0aGlzLnVybC52YWx1ZSA9IHVybDtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgb25Nb2RhbEtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHJldHVybiB0aGlzLm9uQ29uZmlybSgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgfVxuICB9XG59XG4iXX0=