import { __decorate } from "tslib";
import { Directive, ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var CoreDirectivesAutofocusDirective = /** @class */ (function () {
    function CoreDirectivesAutofocusDirective(elementRef) {
        this.elementRef = elementRef;
    }
    CoreDirectivesAutofocusDirective.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    CoreDirectivesAutofocusDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
CoreDirectivesAutofocusDirective.ɵfac = function CoreDirectivesAutofocusDirective_Factory(t) { return new (t || CoreDirectivesAutofocusDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
CoreDirectivesAutofocusDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: CoreDirectivesAutofocusDirective, selectors: [["", "glAutoFocus", ""]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(CoreDirectivesAutofocusDirective, [{
        type: Directive,
        args: [{
                selector: '[glAutoFocus]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return CoreDirectivesAutofocusDirective;
}());
export { CoreDirectivesAutofocusDirective };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1kaXJlY3RpdmVzLWF1dG9mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIm5nOi9nbC1uZy1mcm9udGVuZC9saWIvY29yZS9kaXJlY3RpdmVzL2F1dG9mb2N1cy9jb3JlLWRpcmVjdGl2ZXMtYXV0b2ZvY3VzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlEOytCQUVFLC9CQUZGO0tBRXNCLFVBQXNCLFlBQXRCLGVBQVUsR0FBVixVQUFVLENBQVkseERBQTNDLElBQUMsMENBQW9CLFVBQXNCO0NBQUksQ0FBQyxLQUUvQyxQQUY4QyxRQUExQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsSUFBRyxDQUFDO2NBRXZDLEdBQVIsc0JBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsckVBRmxDLElBQ0UsbURBQVEsR0FBUjtFQUNxQyxFQUFFLENBQUMsS0FDeEMsQ0FBQztBQUFILElBQUUsQ0FBQztBQUNGO2dCQUxpQyxVQUFVLDFCQU1nQyxnQkFOMUMsVUFBVTtBQUFHO0lBRmxDLGdDQUFnQyx3QkFINUMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGVBQWUsVUFDMUIsQ0FBQyxRQUNXLGdDQUFnQyxDQU81QyxNQUFELG5LQVBhLGdDQUFnQyx3QkFINUMsU0FBUyxDQUFDLGNBQ1QsUUFBUSxFQUFFLGVBQWUsVUFDMUIsQ0FBQyxRQUNXLGdDQUFnQyxDQU81QztXQUFBLEdBQUEsQUFQRCxJQU9DLFVBUFksZ0NBQWdDOzs7Ozs7MkVBUTdDO0FBQUMsSUFERCx1Q0FBQztBQUNBLENBREEsQUFQRCxJQU9DOztBQVpBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnbEF1dG9Gb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIENvcmVEaXJlY3RpdmVzQXV0b2ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==