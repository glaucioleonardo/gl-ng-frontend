import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

function GlSharedComponentAttachmentItemComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 4);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentAttachmentItemComponent_img_4_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r3); var ctx_r2 = ɵngcc0.ɵɵnextContext(); return ctx_r2.editItem(ctx_r2.id); });
    ɵngcc0.ɵɵelementEnd();
} }
function GlSharedComponentAttachmentItemComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "img", 5);
    ɵngcc0.ɵɵlistener("click", function GlSharedComponentAttachmentItemComponent_img_5_Template_img_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r5); var ctx_r4 = ɵngcc0.ɵɵnextContext(); return ctx_r4.removeItem(ctx_r4.id); });
    ɵngcc0.ɵɵelementEnd();
} }
var GlSharedComponentAttachmentItemComponent = /** @class */ (function () {
    function GlSharedComponentAttachmentItemComponent() {
        this.disabled = false;
        this.onItemClick = new EventEmitter();
        this.removeCurrentItem = new EventEmitter();
        this.editCurrentItem = new EventEmitter();
    }
    GlSharedComponentAttachmentItemComponent.prototype.removeItem = function (id) { this.removeCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.editItem = function (id) { this.editCurrentItem.emit({ id: id }); };
    GlSharedComponentAttachmentItemComponent.prototype.onButtonClick = function (e) {
        e.preventDefault();
        this.onItemClick.emit();
    };
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
    return GlSharedComponentAttachmentItemComponent;
}());
export { GlSharedComponentAttachmentItemComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1hdHRhY2htZW50LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvYXR0YWNobWVudC9pdGVtL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RTt1Q0FhRTs7eURBWlMsYUFBUSxHQUFHLEtBQUssQ0FBQyxTQVFQO2NBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUM5RCxzQkFBaUIsR0FBaUMsSUFBSTtLQUFZLEVBQUUsQ0FBQyxTQUNyRSxvQkFBZSxHQUFpQyxJQUFJLFlBQVksRUFBRSxDQUFDLEtBRTdELENBQUMsS0FFakIsNkRBQVUsR0FBVixVQUFXLEVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUMvRDs7O0VBQVEsR0FBUixVQUFTLEVBQVUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFFM0Q7O0FBQWEsR0FBYixVQUFjLENBQVEsWUFDcEIsQ0FBQyxDQUFDO0VBQWMsRUFBRSxDQUFDLFNBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FDMUIsQ0FBQyxNQXBCUSxxQkFBUixLQUFLLEVBQUUsK0VBQWtCLE1BQ2pCLHFCQUFSLEtBQUssRUFBRTs7O2tCQUF1QixNQUN0QixxQkFBUixLQUFLLEVBQUUscERBSFY7dURBRzRCLHZEQUZSLElBWWxCO0dBVFMscUJBQVIsS0FBSyw3QkFXMkIsUUFkeEIsYUFBUSxHQUFHLEtBQUssQ0FBQztBQUdsQixBQUZWLFFBT3FCLGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7QUFDMUUsUUFBWSxzQkFBaUIsR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNqRixRQUFZLG9CQUFlLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUM7QUFDL0UsSUFDa0IsQ0FBQztBQUNuQixJQUNFLDZEQUFVLEdBQVYsVUFBVyxFQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEUsSUFBQywyREFBUSxHQUFSLFVBQVMsRUFBVSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3RCxJQUFFLGdFQUFhLEdBQWIsVUFBYyxDQUFRO0FBQ3hCLFFBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLFFBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1QixJQUFFLENBQUM7QUFFSCxJQXRCVztBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLDhFQUFpQjtBQUMzQixJQUFVO0FBQWEsUUFBckIsS0FBSyxFQUFFO0FBQUMsbUZBQXNCO0FBQ2hDLElBQVU7QUFBYSxRQUFyQixLQUFLLEVBQUU7QUFBQyw4RUFBaUI7O0FBQ0osUUFBckIsS0FBSyxFQUFFOzhFQUFrQiw5RUFBakIsOEVBQWlCO0lBQ2pCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUNULFFBREUsS0FBSyxFQUFFO3dFQUFZLHhFQUFYLHdFQUFXO0lBQ1gsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOzBFQUFjLDFFQUFiLDBFQUFhO0lBQ2IsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO2tGQUF1QixsRkFBdEIsa0ZBQXNCO0lBRVosSkFBckIsSUFBcUI7UUFBbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyx6QkFBYyxRQUEvQixNQUFNLENBQUMsU0FBUyxDQUFDO2lGQUFzRCxqRkFBckQsaUZBQXFEO0lBQzlELEpBQVgsSUFBVztRQUFULE1BQU0sRUFBRSxoQkFBYyxRQUF0QixNQUFNLEVBQUU7dUZBQXNFLHZGQUFyRSx1RkFBcUU7SUFDckUsSkFBWCxJQUFXO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTtxRkFBb0UsckZBQW5FLHFGQUFtRTtJQVhsRSx3Q0FBd0Msd0JBTHBELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSxxQ0FBcUMsY0FDL0MsckpBR1csd0NBQXdDLHdCQUxwRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUscUNBQXFDLGNBQy9DOzJxQkFBbUUsQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVwRSxDQUFDLERBQUQsQ0FBQztNQUNXLHdDQUF3QyxDQXVCcEQsTUFBRCwvQ0F2QmEsd0NBQXdDLENBdUJwRDsyQkFBQTtDQUFBLEFBdkJELElBdUJDLFVBdkJZO0tBQXdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF3QnJEO0FBQUMsSUFERCwrQ0FBQztBQUNBLENBREEsQUF2QkQsSUF1QkM7O0FBOUJBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWF0dGFjaG1lbnQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC1jb21wb25lbnQtYXR0YWNobWVudC1pdGVtLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRBdHRhY2htZW50SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF0dGFjaG1lbnRVcmw6IHN0cmluZztcbiAgQElucHV0KCkgZmlsZU5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZmlsZUljb246IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IG51bWJlcjtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBhZGRpbmdTbW9vdGg6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgnb25DbGljaycpIG9uSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDdXJyZW50SXRlbTogRXZlbnRFbWl0dGVyPHsgaWQ6IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVkaXRDdXJyZW50SXRlbTogRXZlbnRFbWl0dGVyPHsgaWQ6IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHJlbW92ZUl0ZW0oaWQ6IG51bWJlcikgeyB0aGlzLnJlbW92ZUN1cnJlbnRJdGVtLmVtaXQoeyBpZCB9KTsgfVxuICBlZGl0SXRlbShpZDogbnVtYmVyKSB7IHRoaXMuZWRpdEN1cnJlbnRJdGVtLmVtaXQoeyBpZCB9KTsgfVxuXG4gIG9uQnV0dG9uQ2xpY2soZTogRXZlbnQpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vbkl0ZW1DbGljay5lbWl0KCk7XG4gIH1cblxufVxuIl19