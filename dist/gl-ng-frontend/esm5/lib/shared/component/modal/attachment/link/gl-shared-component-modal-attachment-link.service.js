import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlSharedComponentModalAlertService } from '../../alert/gl-shared-component-modal-alert.service';
import * as i0 from "@angular/core";
import * as i1 from "../../alert/gl-shared-component-modal-alert.service";
var GlSharedComponentModalAttachmentLinkService = /** @class */ (function () {
    function GlSharedComponentModalAttachmentLinkService(_alert) {
        this._alert = _alert;
        this.linkIcon = '../assets/img/icon/attachment/link.svg';
        this.showModal = false;
        this.currentValue = new Subject();
    }
    GlSharedComponentModalAttachmentLinkService.prototype.setup = function (name, url) {
        this.name = name;
        this.url = url;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onCancel = function () {
        this.modal(false);
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onConfirm = function () {
        if (this.validData()) {
            var values = {
                name: this._name,
                url: this._url,
                icon: this.linkIcon,
                editing: this.editing,
                editId: this.editId
            };
            this.currentValue.next(values);
            this.modal(false);
        }
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onName = function (e) {
        this._name = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onUrl = function (e) {
        this._url = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.validData = function () {
        var urlRegex = /^(http|https):\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/;
        var tempUrl = this._url != null && !this._url.includes('http://') ? "http://" + this._url : this._url;
        var validUrl = new RegExp(urlRegex).test(tempUrl);
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
    };
    GlSharedComponentModalAttachmentLinkService.prototype.modal = function (show) {
        var _this = this;
        this.editing = false;
        this.editId = null;
        if (show) {
            this.modalClass = 'hide-modal';
            this.showModal = true;
            this.modalClass = 'show-modal';
        }
        else {
            this.modalClass = 'hide-modal';
            setTimeout(function () {
                _this.showModal = false;
            }, 300);
        }
    };
    GlSharedComponentModalAttachmentLinkService.prototype.edit = function (name, url, editId) {
        var _this = this;
        this.modal(true);
        this.editing = true;
        this.editId = editId;
        setTimeout(function () {
            _this.name = document.querySelector('#attachment-link-name');
            _this.url = document.querySelector('#attachment-link-value');
            _this._name = name;
            _this.name.value = name;
            _this._url = url;
            _this.url.value = url;
        }, 100);
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onModalKeyUp = function (e) {
        if (e.key === 'Enter') {
            this.onConfirm();
        }
        else if (e.key === 'Escape') {
            this.onCancel();
        }
    };
    GlSharedComponentModalAttachmentLinkService.ctorParameters = function () { return [
        { type: GlSharedComponentModalAlertService }
    ]; };
    GlSharedComponentModalAttachmentLinkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlSharedComponentModalAttachmentLinkService_Factory() { return new GlSharedComponentModalAttachmentLinkService(i0.ɵɵinject(i1.GlSharedComponentModalAlertService)); }, token: GlSharedComponentModalAttachmentLinkService, providedIn: "root" });
    GlSharedComponentModalAttachmentLinkService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], GlSharedComponentModalAttachmentLinkService);
    return GlSharedComponentModalAttachmentLinkService;
}());
export { GlSharedComponentModalAttachmentLinkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBTXpHO0lBZUUscURBQW9CLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBWjlELGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUVwRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQTZCLElBQUksT0FBTyxFQUFFLENBQUM7SUFRVyxDQUFDO0lBRW5FLDJEQUFLLEdBQUwsVUFBTSxJQUFzQixFQUFFLEdBQXFCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4REFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsK0RBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3BCLElBQU0sTUFBTSxHQUFHO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNkLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDbkIsT0FBTyxFQUFFLElB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RyxRQUFRLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFNUQsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLEtBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsa0VBQVksR0FBWixVQUFhLENBQWdCO1FBQzNCLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOztnQkE1RjJCLGtDQUFrQzs7O0lBZm5ELDJDQUEyQztRQUh2RCxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMkNBQTJDLENBNEd2RDtzREFwSEQ7Q0FvSEMsQUE1R0QsSUE0R0M7U0E1R1ksMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBJQXR0YWNobWVudExpbmsgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBdHRhY2htZW50TGlua1NlcnZpY2Uge1xuICBuYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuICB1cmw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGxpbmtJY29uID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9hdHRhY2htZW50L2xpbmsuc3ZnJztcblxuICBzaG93TW9kYWwgPSBmYWxzZTtcbiAgbW9kYWxDbGFzczogc3RyaW5nO1xuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8SUF0dGFjaG1lbnRMaW5rPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZWRpdGluZzogYm9vbGVhbjtcbiAgZWRpdElkOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF91cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgc2V0dXAobmFtZTogSFRNTElucHV0RWxlbWVudCwgdXJsOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgb25Db25maXJtKCkge1xuICAgIGlmICh0aGlzLnZhbGlkRGF0YSgpKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICBpY29uOiB0aGlzLmxpbmtJY29uLFxuICAgICAgICBlZGl0aW5nOiB0aGlzLmVkaXRpbmcsXG4gICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWRcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodmFsdWVzKTtcbiAgICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmFtZShlOiBFdmVudCkge1xuICAgIHRoaXMuX25hbWUgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgb25VcmwoZTogRXZlbnQpIHtcbiAgICB0aGlzLl91cmwgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgdmFsaWREYXRhKCkge1xuICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oaHR0cHxodHRwcyk6XFwvXFwvKChbYS16QS1aMC05JFxcLV8uKyEqJygpLDs6Jj1dfCVbMC05YS1mQS1GXXsyfSkrQCk/KCgoMjVbMC01XXwyWzAtNF1bMC05XXxbMC0xXVswLTldWzAtOV18WzEtOV1bMC05XXxbMC05XSkoXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAtMV1bMC05XVswLTldfFsxLTldWzAtOV18WzAtOV0pKXszfSl8bG9jYWxob3N0fChbYS16QS1aMC05XFwtXFx1MDBDMC1cXHUwMTdGXStcXC4pKyhbYS16QS1aXXsyLH0pKSg6WzAtOV0rKT8oXFwvKChbYS16QS1aMC05JFxcLV8uKyEqJygpLDs6QCY9XXwlWzAtOWEtZkEtRl17Mn0pKihcXC8oW2EtekEtWjAtOSRcXC1fLishKicoKSw7OkAmPV18JVswLTlhLWZBLUZdezJ9KSopKik/KFxcPyhbYS16QS1aMC05JFxcLV8uKyEqJygpLDs6QCY9XFwvP118JVswLTlhLWZBLUZdezJ9KSopPygjKFthLXpBLVowLTkkXFwtXy4rISonKCksOzpAJj1cXC8/XXwlWzAtOWEtZkEtRl17Mn0pKik/KT8kLztcbiAgICBjb25zdCB0ZW1wVXJsID0gdGhpcy5fdXJsICE9IG51bGwgJiYgIXRoaXMuX3VybC5pbmNsdWRlcygnaHR0cDovLycpID8gYGh0dHA6Ly8ke3RoaXMuX3VybH1gIDogdGhpcy5fdXJsO1xuICAgIGNvbnN0IHZhbGlkVXJsID0gbmV3IFJlZ0V4cCh1cmxSZWdleCkudGVzdCh0ZW1wVXJsKTtcblxuICAgIGlmICh0aGlzLl9uYW1lID09IG51bGwgfHwgdGhpcy5fbmFtZS50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgbyBub21lIGRvIGFycXVpdm8hJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLl91cmwgPT0gbnVsbCB8fCB0aGlzLl91cmwudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIG8gdXJsIGRvIGFycXVpdm8hJyk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghdmFsaWRVcmwpIHtcbiAgICAgIHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSB1bSB1cmwgdsOhbGlkbyEnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXJsID0gdGVtcFVybDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG1vZGFsKHNob3cpIHtcbiAgICB0aGlzLmVkaXRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVkaXRJZCA9IG51bGw7XG5cbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ2hpZGUtbW9kYWwnO1xuICAgICAgdGhpcy5zaG93TW9kYWwgPSB0cnVlO1xuICAgICAgdGhpcy5tb2RhbENsYXNzID0gJ3Nob3ctbW9kYWwnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdoaWRlLW1vZGFsJztcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNob3dNb2RhbCA9IGZhbHNlO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBlZGl0KG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcsIGVkaXRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5tb2RhbCh0cnVlKTtcbiAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xuICAgIHRoaXMuZWRpdElkID0gZWRpdElkO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXR0YWNobWVudC1saW5rLW5hbWUnKTtcbiAgICAgIHRoaXMudXJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFjaG1lbnQtbGluay12YWx1ZScpO1xuXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMubmFtZS52YWx1ZSA9IG5hbWU7XG4gICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICB0aGlzLnVybC52YWx1ZSA9IHVybDtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgb25Nb2RhbEtleVVwKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMub25Db25maXJtKCk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMub25DYW5jZWwoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==