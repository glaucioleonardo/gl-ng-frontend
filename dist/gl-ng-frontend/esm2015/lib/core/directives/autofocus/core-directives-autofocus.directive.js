import { __decorate } from "tslib";
import { Directive, ElementRef, OnInit } from '@angular/core';
let CoreDirectivesAutofocusDirective = class CoreDirectivesAutofocusDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.elementRef.nativeElement.focus();
    }
};
CoreDirectivesAutofocusDirective.ctorParameters = () => [
    { type: ElementRef }
];
CoreDirectivesAutofocusDirective = __decorate([
    Directive({
        selector: '[glAutoFocus]'
    })
], CoreDirectivesAutofocusDirective);
export { CoreDirectivesAutofocusDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1kaXJlY3RpdmVzLWF1dG9mb2N1cy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzL2NvcmUtZGlyZWN0aXZlcy1hdXRvZm9jdXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsSUFBYSxnQ0FBZ0MsR0FBN0MsTUFBYSxnQ0FBZ0M7SUFFM0MsWUFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUFJLENBQUM7SUFFL0MsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFBOztZQUxpQyxVQUFVOztBQUYvQixnQ0FBZ0M7SUFINUMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7S0FDMUIsQ0FBQztHQUNXLGdDQUFnQyxDQU81QztTQVBZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tnbEF1dG9Gb2N1c10nXG59KVxuZXhwb3J0IGNsYXNzIENvcmVEaXJlY3RpdmVzQXV0b2ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==