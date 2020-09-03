import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
import * as ɵngcc2 from '../simple/gl-shared-component-input-text-simple.component';
var GlSharedComponentInputTextLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputTextLabelComponent() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.requiredLabel = 'Required field';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextLabelComponent.prototype.onKeyUp = function (values) { this.currentValue.emit(values); };
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "mask", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "maskSymbol", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "maxLength", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextLabelComponent.prototype, "requiredLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextLabelComponent.prototype, "currentValue", void 0);
GlSharedComponentInputTextLabelComponent.ɵfac = function GlSharedComponentInputTextLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextLabelComponent)(); };
GlSharedComponentInputTextLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextLabelComponent, selectors: [["gl-shared-component-input-text-label"]], inputs: { disabled: "disabled", autocomplete: "autocomplete", value: "value", maxLength: "maxLength", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", mask: "mask", maskSymbol: "maskSymbol", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 3, vars: 18, consts: [[1, "item-container"], [3, "id", "labelValue", "labelAlignment", "required", "requiredLabel"], [3, "value", "id", "itemContentAlignment", "placeholder", "disabled", "autocomplete", "mask", "maskSymbol", "maxLength", "currentValue"]], template: function GlSharedComponentInputTextLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementStart(2, "gl-shared-component-input-text-simple", 2);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextLabelComponent_Template_gl_shared_component_input_text_simple_currentValue_2_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("labelValue", ctx.labelValue)("labelAlignment", ctx.labelAlignment)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("value", ctx.value)("id", ctx.id)("itemContentAlignment", ctx.itemContentAlignment)("placeholder", ctx.placeholder)("disabled", ctx.disabled)("autocomplete", ctx.autocomplete)("mask", ctx.mask)("maskSymbol", ctx.maskSymbol)("maxLength", ctx.maxLength);
    } }, directives: [ɵngcc1.GlSharedComponentTitleLabelSimpleComponent, ɵngcc2.GlSharedComponentInputTextSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex:1 0 auto}[_nghost-%COMP%]  .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}[_nghost-%COMP%]  .item-container   gl-shared-component-input-text-simple{margin:0}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextLabelComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-label',
                template: "<div class=\"item-container\">\n  <gl-shared-component-title-label-simple\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [labelAlignment]=\"labelAlignment\"\n    [required]=\"required\"\n    [class]=\"class\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n  <gl-shared-component-input-text-simple\n    [class]=\"class\"\n    [value]=\"value\"\n    [id]=\"id\"\n    [itemContentAlignment]=\"itemContentAlignment\"\n    [placeholder]=\"placeholder\"\n    (currentValue)=\"onKeyUp($event)\"\n    [disabled]=\"disabled\"\n    [autocomplete]=\"autocomplete\"\n\n    [mask]=\"mask\"\n    [maskSymbol]=\"maskSymbol\"\n    [maxLength]=\"maxLength\"\n  ></gl-shared-component-input-text-simple>\n</div>\n",
                styles: [":host::ng-deep{display:flex;flex:1 0 auto}:host::ng-deep .item-container{position:relative;display:flex;flex-direction:column;align-items:stretch;flex:1 0 auto}:host::ng-deep .item-container ::ng-deep gl-shared-component-input-text-simple{margin:0}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], autocomplete: [{
            type: Input
        }], value: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], requiredLabel: [{
            type: Input
        }], currentValue: [{
            type: Output
        }], id: [{
            type: Input
        }], labelAlignment: [{
            type: Input
        }], labelValue: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], itemContentAlignment: [{
            type: Input
        }], class: [{
            type: Input
        }], mask: [{
            type: Input
        }], maskSymbol: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
    return GlSharedComponentInputTextLabelComponent;
}());
export { GlSharedComponentInputTextLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsibmc6L2dsLW5nLWZyb250ZW5kL2xpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvbGFiZWwvZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RTt1Q0FvQkUsOERBbkJTO1VBQVEsR0FBRyxLQUFLLENBQUMsU0FDakIsaUJBQVksR0FBRyxLQUFLLENBQUMsU0FPckIsVUFBSyxHQUFXLElBQUksQ0FBQztLQUlyQixjQUFTLEdBQUcsR0FBRyxDQUFDLFNBR2hCLGtCQUFhLEdBQUcsZ0JBQWdCLENBQUMsekVBaEI1QztNQWtCWSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUMsS0FFNUIsQ0FBQyxLQUVqQix4REFyQmtCLElBbUJsQjtBQUVpQyxRQXJCeEIsYUFBUSxHQUFHLEtBQUssQ0FBQzt5QkFxQm5CLEdBQVAsNUJBcEJGLFFBQVcsaUJBQVksR0FBRyxLQUFLLENBQUM7R0FvQnRCLE1BQU0sSUFBSSxJQUFJLENBQUMsbEJBbkJ6QixRQU1XLFVBQUssR0FBVyxJQUFJLENBQUM7R0FhSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFyQjFDLHpCQVNYLFFBR1csY0FBUyxHQUFHLEdBQUcsQ0FBQztnQkFaeEIsS0FBSyxFQUFFLHZCQWFWLFFBRVcsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztBQUM1QyxRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5QyxJQUNrQixDQUFDO0NBbkJTLE1BQ2pCLHFCQUFSLEtBQUssRUFBRSxtRkFBc0IsdEhBbUJoQyxJQUNFLDBEQUFPLEdBQVAsVUFBUSxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBbkIxQyxKQW9CVixJQXRCVTtRQUVSLEtBQUssRUFBRSxmQUZjLFFBQXJCLEtBQUssRUFBRTt3RUFFWSxNQUNYLDlFQUhBLDhFQUFpQjtBQUMzQixJQUFVO0VBRVIsS0FBSyxFQUFFLFRBRmMsUUFBckIsS0FBSyxFQUFFOzhFQUV3Qiw5RUFGdkIsa0ZBQXFCO0FBR3JCLEFBRlYsSUFBVTtJQUVSLEtBQUssRUFBRSxYQURULFFBREUsS0FBSyxFQUFFO0FBQUMsd0VBQVc7RUFFUSxNQUNuQixSQUZWLElBQVU7WUFFUixaQUZxQixRQUFyQixLQUFLLEVBQUU7Q0FFRixFQUFFLGtGQUFxQixyRkFGcEIsb0ZBQXVCO0tBR3ZCLExBRlYsSUFBVTtTQUVSLEtBQUssZEFGZ0IsUUFBckIsS0FBSyxFQUFFO0FBRUEsQUFGQyxnRkFBbUI7QUFDN0IsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLGlGQUFvQjs7QUFDUCxRQUFyQixLQUFLLEVBQUU7MEZBQThCLDFGQUE3QiwwRkFBNkI7SUFDN0IsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOzJFQUFlLDNFQUFkLDJFQUFjO0lBQ2QsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOzJFQUFzQiwzRUFBckIsMkVBQXFCO0lBRXJCLEpBQVgsSUFBVztRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTswRUFBK0IsMUVBQTlCLDBFQUE4QjtJQUM5QixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7Z0ZBQW9CLGhGQUFuQixnRkFBbUI7SUFDbkIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOytFQUFpQiwvRUFBaEIsK0VBQWdCO0lBQ2hCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTs4RUFBbUIsOUVBQWxCLDhFQUFrQjtJQUVsQixKQUFYLElBQVc7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7bUZBQWtDLG5GQUFqQyxtRkFBaUM7SUFFaEMsSkFBWixJQUFZO1FBQVQsTUFBTSxFQUFFLGhCQUFjLFFBQXRCLE1BQU0sRUFBRTtrRkFBbUMsbEZBQWxDLGtGQUFrQztJQWxCakMsd0NBQXdDLHdCQUxwRCxTQUFTLENBQUMsY0FDVCxRQUFRLEVBQUUsc0NBQXNDLGNBQ2hELHRKQUdXLHdDQUF3Qyx3QkFMcEQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLHNDQUFzQyxjQUNoRDs0dEJBQW9FLEFBQUE7O29DQUVyRSxDQUFDLFFBQ1csVEFEWixDQUFDLFFBQ1c7V0FBd0MsQ0F1QnBELE1BQUQsK0NBQUMsR0FBQSxBQXZCRCxJQXVCQyw3REF2Qm9ELENBdUJwRDtJQXZCWSx3Q0FBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkF3QnJEO0FBQUMsSUFERCwrQ0FBQztBQUNBLENBREEsQUF2QkQsSUF1QkM7O0FBL0JBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSUN1cnJlbmN5VHlwZXMgfSBmcm9tIFwiZ2wtdy1mcm9udGVuZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWxhYmVsLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRMYWJlbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbFZhbHVlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGl0ZW1Db250ZW50QWxpZ25tZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuXG4gIEBJbnB1dCgpIG1hc2s6IHN0cmluZyB8IElDdXJyZW5jeVR5cGVzO1xuICBASW5wdXQoKSBtYXNrU3ltYm9sOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aCA9IDI1NTtcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBmaWVsZCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5VXAodmFsdWVzKSB7IHRoaXMuY3VycmVudFZhbHVlLmVtaXQodmFsdWVzKTsgfVxufVxuIl19