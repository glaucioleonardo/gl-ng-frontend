import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentAttachmentItemComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentAttachmentItemComponent_img_4_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); const ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.editItem(ctx_r2.id); });
    ɵngcc0.ɵɵelementEnd();
} }
function GlSharedComponentAttachmentItemComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentAttachmentItemComponent_img_5_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); const ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.removeItem(ctx_r4.id); });
    ɵngcc0.ɵɵelementEnd();
} }
let GlSharedComponentAttachmentItemComponent = class GlSharedComponentAttachmentItemComponent {
    constructor() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    removeItem(id) { this.removeCurrentItem.emit({ id }); }
    editItem(id) { this.editCurrentItem.emit({ id }); }
    onButtonClick(e) {
        e.preventDefault();
        this.onItemClick.emit();
    }
};
GlSharedComponentAttachmentItemComponent.ɵfac = function GlSharedComponentAttachmentItemComponent_Factory(t) { return new (t || GlSharedComponentAttachmentItemComponent)(); };
GlSharedComponentAttachmentItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentAttachmentItemComponent, selectors: [["gl-shared-component-attachment-item"]], inputs: { disabled: "disabled", attachmentUrl: "attachmentUrl", fileName: "fileName", fileIcon: "fileIcon", id: "id", type: "type", addingSmooth: "addingSmooth" }, outputs: { onItemClick: "onClick", removeCurrentItem: "removeCurrentItem", editCurrentItem: "editCurrentItem" }, decls: 6, vars: 9, consts: [["alt", "\u00CDcone anexo", 1, "attachment-icon", 3, "src"], [1, "file", 3, "id", "href", "click"], ["class", "edit-item", "src", "../assets/img/icon/menu/attachment/edit.svg", "alt", "Editar anexo", 3, "click", 4, "ngIf"], ["class", "remove-item", "src", "../assets/img/icon/menu/attachment/delete.svg", "alt", "Apagar anexo", 3, "click", 4, "ngIf"], ["src", "../assets/img/icon/menu/attachment/edit.svg", "alt", "Editar anexo", 1, "edit-item", 3, "click"], ["src", "../assets/img/icon/menu/attachment/delete.svg", "alt", "Apagar anexo", 1, "remove-item", 3, "click"]], template: function GlSharedComponentAttachmentItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵelement(1, "img", 0);
        ɵngcc0.ɵɵelementStart(2, "a", 1);
        ɵngcc0.ɵɵlistener("click", function GlSharedComponentAttachmentItemComponent_Template_a_click_2_listener($event) { return ctx.onButtonClick($event); });
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, GlSharedComponentAttachmentItemComponent_img_4_Template, 1, 0, "img", 2);
        ɵngcc0.ɵɵtemplate(5, GlSharedComponentAttachmentItemComponent_img_5_Template, 1, 0, "img", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMapInterpolate1("attachment-container ", ctx.addingSmooth ? "adding-row-animated" : "", "");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("src", ctx.fileIcon, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("id", ctx.id)("href", ctx.attachmentUrl, ɵngcc0.ɵɵsanitizeUrl);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate(ctx.fileName);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled && ctx.type === "link");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.disabled);
    } }, directives: [ɵngcc1.NgIf], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);[_nghost-%COMP%]  .attachment-container{display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}[_nghost-%COMP%]  .attachment-container:not(hover){background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container:not(hover) .file{color:#333437}[_nghost-%COMP%]  .attachment-container:hover{background:#fff;transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container:hover .file{color:#333437}[_nghost-%COMP%]  .attachment-container .attachment-icon{padding:0;height:2.15em;width:2.15em;margin:0 .6em 0 .1em}[_nghost-%COMP%]  .attachment-container .edit-item, [_nghost-%COMP%]  .attachment-container .remove-item{padding:0;height:2.15em;width:2.15em;margin:0 0 0 .1em}[_nghost-%COMP%]  .attachment-container .edit-item:not(hover), [_nghost-%COMP%]  .attachment-container .remove-item:not(hover){opacity:.5;transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container .edit-item:hover, [_nghost-%COMP%]  .attachment-container .remove-item:hover{opacity:1;transition:.2s ease-in-out}[_nghost-%COMP%]  .attachment-container .edit-item{margin:0 .2em 0 0}[_nghost-%COMP%]  .attachment-container .file{font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:80%;padding:1em 0}"] });
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "disabled", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "attachmentUrl", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "fileName", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "fileIcon", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "id", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "type", void 0);
__decorate([
    Input()
], GlSharedComponentAttachmentItemComponent.prototype, "addingSmooth", void 0);
__decorate([
    Output('onClick')
], GlSharedComponentAttachmentItemComponent.prototype, "onItemClick", void 0);
__decorate([
    Output()
], GlSharedComponentAttachmentItemComponent.prototype, "removeCurrentItem", void 0);
__decorate([
    Output()
], GlSharedComponentAttachmentItemComponent.prototype, "editCurrentItem", void 0);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentAttachmentItemComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-attachment-item',
                template: "<div class=\"attachment-container {{ addingSmooth ? 'adding-row-animated' : '' }}\">\n  <img\n    class=\"attachment-icon\"\n    [src]=\"fileIcon\"\n    alt=\"\u00CDcone anexo\">\n  <a\n    (click)=\"onButtonClick($event)\"\n    [id]=\"id\"\n    [href]=\"attachmentUrl\"\n    class=\"file\"\n  >{{ fileName }}</a>\n  <img\n    *ngIf=\"!disabled && type === 'link'\"\n    (click)=\"editItem(id)\"\n    class=\"edit-item\"\n    src=\"../assets/img/icon/menu/attachment/edit.svg\"\n    alt=\"Editar anexo\"/>\n  <img\n    *ngIf=\"!disabled\"\n    (click)=\"removeItem(id)\"\n    class=\"remove-item\"\n    src=\"../assets/img/icon/menu/attachment/delete.svg\"\n    alt=\"Apagar anexo\"/>\n</div>\n",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);:host::ng-deep .attachment-container{display:flex;padding:.4em .3em;border-radius:.5em;align-items:center;margin:.2em 0;cursor:pointer}:host::ng-deep .attachment-container:not(hover){background-color:rgba(255,255,255,.3);transition:.2s ease-in-out}:host::ng-deep .attachment-container:not(hover) .file{color:#333437}:host::ng-deep .attachment-container:hover{background:#fff;transition:.2s ease-in-out}:host::ng-deep .attachment-container:hover .file{color:#333437}:host::ng-deep .attachment-container .attachment-icon{padding:0;height:2.15em;width:2.15em;margin:0 .6em 0 .1em}:host::ng-deep .attachment-container .edit-item,:host::ng-deep .attachment-container .remove-item{padding:0;height:2.15em;width:2.15em;margin:0 0 0 .1em}:host::ng-deep .attachment-container .edit-item:not(hover),:host::ng-deep .attachment-container .remove-item:not(hover){opacity:.5;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item:hover,:host::ng-deep .attachment-container .remove-item:hover{opacity:1;transition:.2s ease-in-out}:host::ng-deep .attachment-container .edit-item{margin:0 .2em 0 0}:host::ng-deep .attachment-container .file{font-family:Montserrat,sans-serif;font-weight:400;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:80%;padding:1em 0}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], onItemClick: [{
            type: Output,
            args: ['onClick']
        }], removeCurrentItem: [{
            type: Output
        }], editCurrentItem: [{
            type: Output
        }], attachmentUrl: [{
            type: Input
        }], fileName: [{
            type: Input
        }], fileIcon: [{
            type: Input
        }], id: [{
            type: Input
        }], type: [{
            type: Input
        }], addingSmooth: [{
            type: Input
        }] }); })();
export { GlSharedComponentAttachmentItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RSxJQUFhO0dBQXdDLEdBQXJELE1BQWE7O1FBQXdDLE9BYW5ELHdCQVpTLGFBQVEsR0FBRyxLQUFLLENBQUMsU0FRUCxnQkFBVyxHQUF1QjtHQUFJLFlBQVksRUFBRSxDQUFDLFNBQzlEO01BQWlCLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUMsU0FDckU7aUJBQWUsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUU3RCxDQUFDLEtBRWpCLFVBQVUsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQy9ELFFBQVEsQ0FBQyxFQUFVLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUUzRCxhQUFhLENBQUMsQ0FBUSxZQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsU0FDbkIsSUFBSTtBQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUMxQixDQUFDO0FBRUYsQ0FBQSxDQXRCVTtlQUFSLEtBQUssRUFBRTtPQUFrQixFQUNqQixpQkFBUixLQUFLLEVBQUU7OzhCQUF1QixFQUN0QixpQkFBUixLQUFLLEVBQUUsMkVBQWtCOzs7QUFINUIsSUFBYSx3Q0FBd0MsR0FBckQsTUFBYSx3Q0FBd0M7QUFDckQsSUFZRTtBQUFnQixRQVpQLGFBQVEsR0FBRyxLQUFLLENBQUM7QUFDNUIsUUFPcUIsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMxRSxRQUFZLHNCQUFpQixHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDO0FBQ2pGLFFBQVksb0JBQWUsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUMvRSxJQUNrQixDQUFDO0FBQ25CLElBQ0UsVUFBVSxDQUFDLEVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakUsSUFBRSxRQUFRLENBQUMsRUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsSUFDRSxhQUFhLENBQUMsQ0FBUTtBQUN4QixRQUFJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixRQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDNUIsSUFBRSxDQUFDO0FBQ0gsQ0FDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NoREFBQTtBQXRCVTtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLDBFQUFpQjtBQUNqQjtBQUFhLElBQXJCLEtBQUssRUFBRTtBQUFDLCtFQUFzQjtBQUN0Qjs7QUFBQSwwRUFBaUI7QUFDakIsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTswRUFBa0IsMUVBQWpCLDBFQUFpQjtBQUNqQixBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQ1QsSUFERSxLQUFLLEVBQUU7b0VBQVkscEVBQVgsb0VBQVc7QUFDWCxBQUFBO0lBQVIsS0FBSyxFQUFFLFhBQWMsSUFBckIsS0FBSyxFQUFFO3NFQUFjLHRFQUFiLHNFQUFhO0FBQ2IsQUFBQTtJQUFSLEtBQUssRUFBRSxYQUFjLElBQXJCLEtBQUssRUFBRTs4RUFBdUIsOUVBQXRCLDhFQUFzQjtBQUVaLEFBQUE7SUFBbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxyQkFBYyxJQUEvQixNQUFNLENBQUMsU0FBUyxDQUFDOzZFQUFzRCw3RUFBckQsNkVBQXFEO0FBQzlELEFBQUE7SUFBVCxNQUFNLEVBQUUsWkFBYyxJQUF0QixNQUFNLEVBQUU7bUZBQXNFLG5GQUFyRSxtRkFBcUU7QUFDckUsQUFBQTtJQUFULE1BQU0sRUFBRSxaQUFjLElBQXRCLE1BQU0sRUFBRTtpRkFBb0UsakZBQW5FLGlGQUFtRTtBQVhsRSx3Q0FBd0Msb0JBTHBELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRSwxRkFJQyx3Q0FBd0Msb0JBTHBELFNBQVMsQ0FBQyxVQUNULFFBQVEsRUFBRTs7R0FBcUMsVUFDL0MsVkFEK0MsVUFDL0M7OzZuQkFBbUUsQUFBQTswM0NBRXBFLENBQUMsSUFDVyx3Q0FBd0MsQ0F1QnBELFdBdkJZLHpEQURaLENBQUMsSUFDVyx3Q0FBd0MsQ0F1QnBEO1NBdkJvRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF3QnJEOztBQS9CQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50QXR0YWNobWVudEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBhdHRhY2htZW50VXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGVOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZpbGVJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgYWRkaW5nU21vb3RoOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoJ29uQ2xpY2snKSBvbkl0ZW1DbGljazogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlQ3VycmVudEl0ZW06IEV2ZW50RW1pdHRlcjx7IGlkOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlZGl0Q3VycmVudEl0ZW06IEV2ZW50RW1pdHRlcjx7IGlkOiBudW1iZXIgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICByZW1vdmVJdGVtKGlkOiBudW1iZXIpIHsgdGhpcy5yZW1vdmVDdXJyZW50SXRlbS5lbWl0KHsgaWQgfSk7IH1cbiAgZWRpdEl0ZW0oaWQ6IG51bWJlcikgeyB0aGlzLmVkaXRDdXJyZW50SXRlbS5lbWl0KHsgaWQgfSk7IH1cblxuICBvbkJ1dHRvbkNsaWNrKGU6IEV2ZW50KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25JdGVtQ2xpY2suZW1pdCgpO1xuICB9XG5cbn1cbiJdfQ==