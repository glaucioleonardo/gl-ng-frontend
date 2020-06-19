import { __decorate } from "tslib";
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
        if (this.validData()) {
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
    }
    onName(e) {
        this._name = e.currentTarget.value;
    }
    onUrl(e) {
        this._url = e.currentTarget.value;
    }
    validData() {
        const urlRegex = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;
        const tempUrl = this._url != null && !this._url.includes('http://') ? `http://${this._url}` : this._url;
        const validUrl = new RegExp(urlRegex).test(tempUrl);
        if (this._name == null || this._name.trim().length === 0) {
            this._alert.show('Por favor, informe o nome do arquivo!');
            return false;
        }
        else if (this._url == null || this._url.trim().length === 0) {
            this._alert.show('Por favor, informe o url do arquivo!');
            return false;
        }
        else if (!validUrl) {
            this._alert.show('Por favor, informe um url válido!');
        }
        else {
            this._url = tempUrl;
            return true;
        }
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
            this.onConfirm();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBTXpHLElBQWEsMkNBQTJDLEdBQXhELE1BQWEsMkNBQTJDO0lBZXRELFlBQW9CLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBWjlELGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUVwRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQTZCLElBQUksT0FBTyxFQUFFLENBQUM7SUFRVyxDQUFDO0lBRW5FLEtBQUssQ0FBQyxJQUFzQixFQUFFLEdBQXFCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BCLE1BQU0sTUFBTSxHQUFHO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQztZQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQVE7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFJLENBQUMsQ0FBQyxhQUFrQyxDQUFDLEtBQUssQ0FBQztJQUMzRCxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQVE7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFJLENBQUMsQ0FBQyxhQUFrQyxDQUFDLEtBQUssQ0FBQztJQUMxRCxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sUUFBUSxHQUFHLHlkQUF5ZCxDQUFDO1FBQzNlLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hHLE1BQU0sUUFBUSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQzFELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQUk7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDO1NBRWhDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQztZQUMvQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFZLEVBQUUsR0FBVyxFQUFFLE1BQWM7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQWdCO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE3RjZCLGtDQUFrQzs7O0FBZm5ELDJDQUEyQztJQUh2RCxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csMkNBQTJDLENBNEd2RDtTQTVHWSwyQ0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYWxlcnQvZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hbGVydC5zZXJ2aWNlJztcbmltcG9ydCB7IElBdHRhY2htZW50TGluayB9IGZyb20gJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuaW50ZXJmYWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRNb2RhbEF0dGFjaG1lbnRMaW5rU2VydmljZSB7XG4gIG5hbWU6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIHVybDogSFRNTElucHV0RWxlbWVudDtcbiAgbGlua0ljb24gPSAnLi4vYXNzZXRzL2ltZy9pY29uL2F0dGFjaG1lbnQvbGluay5zdmcnO1xuXG4gIHNob3dNb2RhbCA9IGZhbHNlO1xuICBtb2RhbENsYXNzOiBzdHJpbmc7XG4gIGN1cnJlbnRWYWx1ZTogU3ViamVjdDxJQXR0YWNobWVudExpbms+ID0gbmV3IFN1YmplY3QoKTtcblxuICBlZGl0aW5nOiBib29sZWFuO1xuICBlZGl0SWQ6IG51bWJlcjtcblxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3VybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FsZXJ0OiBHbFNoYXJlZENvbXBvbmVudE1vZGFsQWxlcnRTZXJ2aWNlKSB7IH1cblxuICBzZXR1cChuYW1lOiBIVE1MSW5wdXRFbGVtZW50LCB1cmw6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICB9XG5cbiAgb25DYW5jZWwoKSB7XG4gICAgdGhpcy5tb2RhbChmYWxzZSk7XG4gIH1cblxuICBvbkNvbmZpcm0oKSB7XG4gICAgaWYgKHRoaXMudmFsaWREYXRhKCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlcyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5fbmFtZSxcbiAgICAgICAgdXJsOiB0aGlzLl91cmwsXG4gICAgICAgIGljb246IHRoaXMubGlua0ljb24sXG4gICAgICAgIGVkaXRpbmc6IHRoaXMuZWRpdGluZyxcbiAgICAgICAgZWRpdElkOiB0aGlzLmVkaXRJZFxuICAgICAgfTtcblxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUubmV4dCh2YWx1ZXMpO1xuICAgICAgdGhpcy5tb2RhbChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25OYW1lKGU6IEV2ZW50KSB7XG4gICAgdGhpcy5fbmFtZSA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gIH1cblxuICBvblVybChlOiBFdmVudCkge1xuICAgIHRoaXMuX3VybCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gIH1cblxuICB2YWxpZERhdGEoKSB7XG4gICAgY29uc3QgdXJsUmVnZXggPSAvXihodHRwfGh0dHBzKTpcXC9cXC8oKFthLXpBLVowLTkkXFwtXy4rISonKCksOzomPV18JVswLTlhLWZBLUZdezJ9KStAKT8oKCgyNVswLTVdfDJbMC00XVswLTldfFswLTFdWzAtOV1bMC05XXxbMS05XVswLTldfFswLTldKShcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkpezN9KXxsb2NhbGhvc3R8KFthLXpBLVowLTlcXC1cXHUwMEMwLVxcdTAxN0ZdK1xcLikrKFthLXpBLVpdezIsfSkpKDpbMC05XSspPyhcXC8oKFthLXpBLVowLTkkXFwtXy4rISonKCksOzpAJj1dfCVbMC05YS1mQS1GXXsyfSkqKFxcLyhbYS16QS1aMC05JFxcLV8uKyEqJygpLDs6QCY9XXwlWzAtOWEtZkEtRl17Mn0pKikqKT8oXFw/KFthLXpBLVowLTkkXFwtXy4rISonKCksOzpAJj1cXC8/XXwlWzAtOWEtZkEtRl17Mn0pKik/KCMoW2EtekEtWjAtOSRcXC1fLishKicoKSw7OkAmPVxcLz9dfCVbMC05YS1mQS1GXXsyfSkqKT8pPyQvO1xuICAgIGNvbnN0IHRlbXBVcmwgPSB0aGlzLl91cmwgIT0gbnVsbCAmJiAhdGhpcy5fdXJsLmluY2x1ZGVzKCdodHRwOi8vJykgPyBgaHR0cDovLyR7dGhpcy5fdXJsfWAgOiB0aGlzLl91cmw7XG4gICAgY29uc3QgdmFsaWRVcmwgPSBuZXcgUmVnRXhwKHVybFJlZ2V4KS50ZXN0KHRlbXBVcmwpO1xuXG4gICAgaWYgKHRoaXMuX25hbWUgPT0gbnVsbCB8fCB0aGlzLl9uYW1lLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSBvIG5vbWUgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3VybCA9PSBudWxsIHx8IHRoaXMuX3VybC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyB1cmwgZG8gYXJxdWl2byEnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKCF2YWxpZFVybCkge1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIHVtIHVybCB2w6FsaWRvIScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91cmwgPSB0ZW1wVXJsO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgbW9kYWwoc2hvdykge1xuICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZWRpdElkID0gbnVsbDtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICB0aGlzLnNob3dNb2RhbCA9IHRydWU7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnc2hvdy1tb2RhbCc7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIGVkaXQobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgZWRpdElkOiBudW1iZXIpIHtcbiAgICB0aGlzLm1vZGFsKHRydWUpO1xuICAgIHRoaXMuZWRpdGluZyA9IHRydWU7XG4gICAgdGhpcy5lZGl0SWQgPSBlZGl0SWQ7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstbmFtZScpO1xuICAgICAgdGhpcy51cmwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNobWVudC1saW5rLXZhbHVlJyk7XG5cbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5uYW1lLnZhbHVlID0gbmFtZTtcbiAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgIHRoaXMudXJsLnZhbHVlID0gdXJsO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBvbk1vZGFsS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5vbkNvbmZpcm0oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5vbkNhbmNlbCgpO1xuICAgIH1cbiAgfVxufVxuIl19