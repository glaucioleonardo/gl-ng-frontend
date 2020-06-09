import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '../simple/gl-shared-component-input-text-area-simple.component';
import * as ɵngcc2 from '../../../title/label/simple/gl-shared-component-title-label-simple.component';
var GlSharedComponentInputTextAreaLabelComponent = /** @class */ (function () {
    function GlSharedComponentInputTextAreaLabelComponent() {
        this.disabled = false;
        this.value = '';
        this.requiredLabel = 'Required label';
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextAreaLabelComponent.prototype.onKeyUp = function (values) {
        this.currentValue.emit(values);
    };
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "labelValue", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "maxLength", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "required", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "requiredLabel", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextAreaLabelComponent.prototype, "currentValue", void 0);
GlSharedComponentInputTextAreaLabelComponent.ɵfac = function GlSharedComponentInputTextAreaLabelComponent_Factory(t) { return new (t || GlSharedComponentInputTextAreaLabelComponent)(); };
GlSharedComponentInputTextAreaLabelComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: GlSharedComponentInputTextAreaLabelComponent, selectors: [["gl-shared-component-input-text-area-label"]], inputs: { disabled: "disabled", value: "value", requiredLabel: "requiredLabel", id: "id", labelAlignment: "labelAlignment", labelValue: "labelValue", placeholder: "placeholder", itemContentAlignment: "itemContentAlignment", class: "class", maxLength: "maxLength", required: "required" }, outputs: { currentValue: "currentValue" }, decls: 2, vars: 15, consts: [[3, "id", "placeholder", "itemContentAlignment", "value", "disabled", "maxLength", "currentValue"], [3, "labelAlignment", "id", "labelValue", "required", "requiredLabel"]], template: function GlSharedComponentInputTextAreaLabelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "gl-shared-component-input-text-area-simple", 0);
        ɵngcc0.ɵɵlistener("currentValue", function GlSharedComponentInputTextAreaLabelComponent_Template_gl_shared_component_input_text_area_simple_currentValue_0_listener($event) { return ctx.onKeyUp($event); });
        ɵngcc0.ɵɵelement(1, "gl-shared-component-title-label-simple", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("id", ctx.id)("placeholder", ctx.placeholder)("itemContentAlignment", ctx.itemContentAlignment)("value", ctx.value)("disabled", ctx.disabled)("maxLength", ctx.maxLength);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassMap(ctx.class);
        ɵngcc0.ɵɵproperty("labelAlignment", ctx.labelAlignment)("id", ctx.id)("labelValue", ctx.labelValue)("required", ctx.required)("requiredLabel", ctx.requiredLabel);
    } }, directives: [ɵngcc1.GlSharedComponentInputTextAreaSimpleComponent, ɵngcc2.GlSharedComponentTitleLabelSimpleComponent], styles: ["[_nghost-%COMP%] {display:flex;flex-grow:1}"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(GlSharedComponentInputTextAreaLabelComponent, [{
        type: Component,
        args: [{
                selector: 'gl-shared-component-input-text-area-label',
                template: "<gl-shared-component-input-text-area-simple\n  [class]=\"class\"\n  [id]=\"id\"\n  [placeholder]=\"placeholder\"\n  [itemContentAlignment]=\"itemContentAlignment\"\n  (currentValue)=\"onKeyUp($event)\"\n  [value]=\"value\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n  <gl-shared-component-title-label-simple\n    [class]=\"class\"\n    [labelAlignment]=\"labelAlignment\"\n    [id]=\"id\"\n    [labelValue]=\"labelValue\"\n    [required]=\"required\"\n    [requiredLabel]=\"requiredLabel\"\n  ></gl-shared-component-title-label-simple>\n</gl-shared-component-input-text-area-simple>\n",
                styles: [":host::ng-deep{display:flex;flex-grow:1}"]
            }]
    }], function () { return []; }, { disabled: [{
            type: Input
        }], value: [{
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
        }], maxLength: [{
            type: Input
        }], required: [{
            type: Input
        }] }); })();
    return GlSharedComponentInputTextAreaLabelComponent;
}());
export { GlSharedComponentInputTextAreaLabelComponent };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJuZzovZ2wtbmctZnJvbnRlbmQvbGliL3NoYXJlZC9jb21wb25lbnQvaW5wdXQvdGV4dC1hcmVhL2xhYmVsL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1hcmVhLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RTsyQ0FnQkU7bUJBZlMsYUFBUSxHQUFHLEtBQUssQ0FBQyxTQVFqQixVQUFLLEdBQUcsRUFBRSxDQUFDLFNBR1gsa0JBQWEsR0FBRztRQUFnQixDQUFDLFNBRWhDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQyxLQUU1QixDQUFDLEtBRWpCLHBFQWxCRjtrREFrQlMsR0FBUCxyREFqQmtCLElBZWxCO0NBRVEsTUFBTSxZQUNaLElBQUksQ0FBQyx4QkFBVSxRQWxCUixhQUFRLEdBQUcsS0FBSyxDQUFDO0tBa0JQLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQ2pDLHhCQWxCRixRQU9XLFVBQUssR0FBRyxFQUFFLENBQUM7QUFXbkIsTUFuQlEscUJBQVIsS0FBSyxFQUFFLGxDQVNWLFFBRVcsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQztBQUM1QyxRQUNZLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUM5QyxJQUNrQixDQUFDO2dCQWZTLE1BQ2pCLHFCQUFSLEtBQUssRUFBRSxsREFlVixJQUNFLDhEQUFPLEdBQVAsVUFBUSxNQUFNO3NDQWhCTSx0Q0FpQnRCLFFBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFoQnhCLEpBaUJYLElBQUUsQ0FBQztBQUNGLElBcEJVO0NBRVIsS0FBSyxFQUFFLFJBRmMsUUFBckIsS0FBSyxFQUFFO2lGQUV3QixqRkFGdkIsa0ZBQWlCO0dBR2pCLEhBRlYsSUFBVTtPQUVSLEtBQUssRUFBRSxkQURULFFBREUsS0FBSyxFQUFFO0FBQUMsNEVBQVc7S0FFUSxNQUNuQixYQUZWLElBQVU7ZUFFUixmQUZxQixRQUFyQixLQUFLLEVBQUU7SUFFRixFQUFFLE5BRkMsd0ZBQXVCO0VBRUgsRkFEOUIsSUFBVTtBQUFhLFFBQXJCLEtBQUssRUFBRTtBQUFDLG9GQUFtQjtBQUM3QixJQUFVOztBQUFBLHFGQUFvQjtJQUNwQixKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7OEZBQThCLDlGQUE3Qiw4RkFBNkI7SUFDN0IsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFOytFQUFlLC9FQUFkLCtFQUFjO0lBRWQsSkFBWCxJQUFXO1FBQVIsS0FBSyxFQUFFLGZBQ1QsUUFERSxLQUFLLEVBQUU7K0VBQVksL0VBQVgsK0VBQVc7SUFDWCxKQUFWLElBQVU7UUFBUixLQUFLLEVBQUUsZkFBYyxRQUFyQixLQUFLLEVBQUU7bUZBQW1CLG5GQUFsQixtRkFBa0I7SUFDbEIsSkFBVixJQUFVO1FBQVIsS0FBSyxFQUFFLGZBQWMsUUFBckIsS0FBSyxFQUFFO2tGQUFtQixsRkFBbEIsa0ZBQWtCO0lBQ2xCLEpBQVYsSUFBVTtRQUFSLEtBQUssRUFBRSxmQUFjLFFBQXJCLEtBQUssRUFBRTt1RkFBa0MsdkZBQWpDLHVGQUFpQztJQUVoQyxKQUFaLElBQVk7UUFBVCxNQUFNLEVBQUUsaEJBQWMsUUFBdEIsTUFBTSxFQUFFO3NGQUFtQyx0RkFBbEMsc0ZBQWtDO0lBZGpDLDRDQUE0Qyx3QkFMeEQsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLDJDQUEyQyxjQUNyRCwvSkFHVyw0Q0FBNEMsd0JBTHhELFNBQVMsQ0FBQyxjQUNULFFBQVEsRUFBRSwyQ0FBMkMsY0FDckQ7MGtCQUF5RSw0RUFFMUUsQ0FBQyxRQUNXLDRDQUE0QyxDQXFCeEQsTUFBRCxtREFBQyxHQUFBLEFBckJELElBcUJDLFVBckJZLDVNQUg4RCw0RUFFMUUsQ0FBQyxRQUNXLDRDQUE0QyxDQXFCeEQ7WUFyQndEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBc0J6RDtBQUFDLElBREQsbURBQUM7QUFDQSxDQURBLEFBckJELElBcUJDOztBQTVCQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LWFyZWEtbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtYXJlYS1sYWJlbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SW5wdXRUZXh0QXJlYUxhYmVsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxBbGlnbm1lbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWxWYWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcmVxdWlyZWRMYWJlbCA9ICdSZXF1aXJlZCBsYWJlbCc7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG9uS2V5VXAodmFsdWVzKSB7XG4gICAgdGhpcy5jdXJyZW50VmFsdWUuZW1pdCh2YWx1ZXMpO1xuICB9XG59XG4iXX0=