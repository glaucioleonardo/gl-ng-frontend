import { __awaiter, __decorate, __generator } from "tslib";
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
        return __awaiter(this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validData()];
                    case 1:
                        if (_a.sent()) {
                            values = {
                                name: this._name,
                                url: this._url,
                                icon: this.linkIcon,
                                editing: this.editing,
                                editId: this.editId
                            };
                            this.currentValue.next(values);
                            this.modal(false);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onName = function (e) {
        this._name = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.onUrl = function (e) {
        this._url = e.currentTarget.value;
    };
    GlSharedComponentModalAttachmentLinkService.prototype.validData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlRegex, tempUrl, validUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
                        tempUrl = this._url != null && !this._url.includes('http://') && !this._url.includes('https://') ? "http://" + this._url : this._url;
                        validUrl = new RegExp(urlRegex).test(this._url);
                        if (!(this._name == null || this._name.trim().length === 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._alert.show('Por favor, informe o nome do arquivo!')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 2:
                        if (!(this._url == null || this._url.trim().length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._alert.show('Por favor, informe o url do arquivo!')];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, false];
                    case 4:
                        if (!!validUrl) return [3 /*break*/, 6];
                        return [4 /*yield*/, this._alert.show('Por favor, informe um url válido!')];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        this._url = tempUrl;
                        return [2 /*return*/, true];
                    case 7: return [2 /*return*/];
                }
            });
        });
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
            return this.onConfirm();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1tb2RhbC1hdHRhY2htZW50LWxpbmsuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dsLW5nLWZyb250ZW5kLyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9jb21wb25lbnQvbW9kYWwvYXR0YWNobWVudC9saW5rL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7O0FBTXpHO0lBZUUscURBQW9CLE1BQTBDO1FBQTFDLFdBQU0sR0FBTixNQUFNLENBQW9DO1FBWjlELGFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztRQUVwRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQTZCLElBQUksT0FBTyxFQUFFLENBQUM7SUFRVyxDQUFDO0lBRW5FLDJEQUFLLEdBQUwsVUFBTSxJQUFzQixFQUFFLEdBQXFCO1FBQ2pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCw4REFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUssK0RBQVMsR0FBZjs7Ozs7NEJBQ00scUJBQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBMUIsSUFBSSxTQUFzQixFQUFFOzRCQUNwQixNQUFNLEdBQUc7Z0NBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO2dDQUNoQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0NBQ2QsSUFBSSxFQUFFLElBQUksQ0FB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O1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzVELEtBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBRTVELEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztZQUNoQixLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVELGtFQUFZLEdBQVosVUFBYSxDQUFnQjtRQUMzQixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO2FBQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7SUFDSCxDQUFDOztnQkE1RjJCLGtDQUFrQzs7O0lBZm5ELDJDQUEyQztRQUh2RCxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMkNBQTJDLENBNEd2RDtzREFwSEQ7Q0FvSEMsQUE1R0QsSUE0R0M7U0E1R1ksMkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSB9IGZyb20gJy4uLy4uL2FsZXJ0L2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYWxlcnQuc2VydmljZSc7XG5pbXBvcnQgeyBJQXR0YWNobWVudExpbmsgfSBmcm9tICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbW9kYWwtYXR0YWNobWVudC1saW5rLmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50TW9kYWxBdHRhY2htZW50TGlua1NlcnZpY2Uge1xuICBuYW1lOiBIVE1MSW5wdXRFbGVtZW50O1xuICB1cmw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGxpbmtJY29uID0gJy4uL2Fzc2V0cy9pbWcvaWNvbi9hdHRhY2htZW50L2xpbmsuc3ZnJztcblxuICBzaG93TW9kYWwgPSBmYWxzZTtcbiAgbW9kYWxDbGFzczogc3RyaW5nO1xuICBjdXJyZW50VmFsdWU6IFN1YmplY3Q8SUF0dGFjaG1lbnRMaW5rPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZWRpdGluZzogYm9vbGVhbjtcbiAgZWRpdElkOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF91cmw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbGVydDogR2xTaGFyZWRDb21wb25lbnRNb2RhbEFsZXJ0U2VydmljZSkgeyB9XG5cbiAgc2V0dXAobmFtZTogSFRNTElucHV0RWxlbWVudCwgdXJsOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnVybCA9IHVybDtcbiAgfVxuXG4gIG9uQ2FuY2VsKCkge1xuICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICB9XG5cbiAgYXN5bmMgb25Db25maXJtKCkge1xuICAgIGlmIChhd2FpdCB0aGlzLnZhbGlkRGF0YSgpKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWUsXG4gICAgICAgIHVybDogdGhpcy5fdXJsLFxuICAgICAgICBpY29uOiB0aGlzLmxpbmtJY29uLFxuICAgICAgICBlZGl0aW5nOiB0aGlzLmVkaXRpbmcsXG4gICAgICAgIGVkaXRJZDogdGhpcy5lZGl0SWRcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuY3VycmVudFZhbHVlLm5leHQodmFsdWVzKTtcbiAgICAgIHRoaXMubW9kYWwoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uTmFtZShlOiBFdmVudCkge1xuICAgIHRoaXMuX25hbWUgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgb25VcmwoZTogRXZlbnQpIHtcbiAgICB0aGlzLl91cmwgPSAoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWREYXRhKCkge1xuICAgIGNvbnN0IHVybFJlZ2V4ID0gL14oZnRwfGh0dHB8aHR0cHMpOlxcL1xcL1teIFwiXSskLztcbiAgICBjb25zdCB0ZW1wVXJsID0gdGhpcy5fdXJsICE9IG51bGwgJiYgIXRoaXMuX3VybC5pbmNsdWRlcygnaHR0cDovLycpICYmICF0aGlzLl91cmwuaW5jbHVkZXMoJ2h0dHBzOi8vJykgPyBgaHR0cDovLyR7dGhpcy5fdXJsfWAgOiB0aGlzLl91cmw7XG4gICAgY29uc3QgdmFsaWRVcmwgPSBuZXcgUmVnRXhwKHVybFJlZ2V4KS50ZXN0KHRoaXMuX3VybCk7XG5cbiAgICBpZiAodGhpcy5fbmFtZSA9PSBudWxsIHx8IHRoaXMuX25hbWUudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXdhaXQgdGhpcy5fYWxlcnQuc2hvdygnUG9yIGZhdm9yLCBpbmZvcm1lIG8gbm9tZSBkbyBhcnF1aXZvIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fdXJsID09IG51bGwgfHwgdGhpcy5fdXJsLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGF3YWl0IHRoaXMuX2FsZXJ0LnNob3coJ1BvciBmYXZvciwgaW5mb3JtZSBvIHVybCBkbyBhcnF1aXZvIScpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoIXZhbGlkVXJsKSB7XG4gICAgICBhd2FpdCB0aGlzLl9hbGVydC5zaG93KCdQb3IgZmF2b3IsIGluZm9ybWUgdW0gdXJsIHbDoWxpZG8hJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VybCA9IHRlbXBVcmw7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBtb2RhbChzaG93KSB7XG4gICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lZGl0SWQgPSBudWxsO1xuXG4gICAgaWYgKHNob3cpIHtcbiAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdoaWRlLW1vZGFsJztcbiAgICAgIHRoaXMuc2hvd01vZGFsID0gdHJ1ZTtcbiAgICAgIHRoaXMubW9kYWxDbGFzcyA9ICdzaG93LW1vZGFsJztcblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGFsQ2xhc3MgPSAnaGlkZS1tb2RhbCc7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgZWRpdChuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBlZGl0SWQ6IG51bWJlcikge1xuICAgIHRoaXMubW9kYWwodHJ1ZSk7XG4gICAgdGhpcy5lZGl0aW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVkaXRJZCA9IGVkaXRJZDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F0dGFjaG1lbnQtbGluay1uYW1lJyk7XG4gICAgICB0aGlzLnVybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdHRhY2htZW50LWxpbmstdmFsdWUnKTtcblxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLm5hbWUudmFsdWUgPSBuYW1lO1xuICAgICAgdGhpcy5fdXJsID0gdXJsO1xuICAgICAgdGhpcy51cmwudmFsdWUgPSB1cmw7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIG9uTW9kYWxLZXlVcChlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbkNvbmZpcm0oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5vbkNhbmNlbCgpO1xuICAgIH1cbiAgfVxufVxuIl19