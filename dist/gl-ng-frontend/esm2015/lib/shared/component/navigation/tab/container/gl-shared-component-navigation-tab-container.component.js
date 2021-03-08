import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentNavigationTabContainerComponent {
    constructor() {
        this.activatedTab$ = new EventEmitter();
    }
    activate(sequence) {
        this.reset();
        const active = this.navigationTabs.filter(x => x.sequence === sequence);
        active[0].active = true;
        this.activatedTab$.emit(sequence);
    }
    reset() {
        for (const item of this.navigationTabs) {
            item.active = false;
        }
    }
    tabHovering(hovering, sequence, active) {
        const tab = document.querySelector(`#navigation-tab-${sequence}`);
        if (!active) {
            if (hovering) {
                tab.style.zIndex = '990';
            }
            else {
                tab.style.zIndex = (100 - sequence).toString();
            }
        }
    }
}
GlSharedComponentNavigationTabContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-navigation-tab-container',
                template: "<gl-shared-component-navigation-tab-simple\r\n  *ngFor=\"let tab of navigationTabs; let i = index\"\r\n  [tabEnabled]=\"tab.enabled\"\r\n  [tabSequence]=\"tab.sequence\"\r\n  [tabDescription]=\"tab.description\"\r\n  [tabActive]=\"tab.active\"\r\n  [showSeparator]=\"tab.showSeparator\"\r\n  [tabIsTheFirst]=\"tab.isTheFirst\"\r\n  [tabIsTheLast]=\"tab.isTheLast\"\r\n  [ngStyle]=\"{\r\n    'z-index': tab.active ? 1000 : (100 - tab.sequence)\r\n  }\"\r\n  [id]=\"'navigation-tab-' + tab.sequence\"\r\n  (mouseover)=\"tabHovering(true, tab.sequence, tab.active)\"\r\n  (mouseleave)=\"tabHovering(false, tab.sequence, tab.active)\"\r\n  (activate$)=\"activate($event)\"\r\n></gl-shared-component-navigation-tab-simple>\r\n",
                styles: [":host::ng-deep{display:flex;flex-direction:row}"]
            },] }
];
GlSharedComponentNavigationTabContainerComponent.ctorParameters = () => [];
GlSharedComponentNavigationTabContainerComponent.propDecorators = {
    navigationTabs: [{ type: Input }],
    activatedTab$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L25hdmlnYXRpb24vdGFiL2NvbnRhaW5lci9nbC1zaGFyZWQtY29tcG9uZW50LW5hdmlnYXRpb24tdGFiLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sZ0RBQWdEO0lBSzNEO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRCxDQUFDO0lBRWpCLFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUs7UUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWlCLEVBQUUsUUFBZ0IsRUFBRSxNQUFlO1FBQzlELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLFFBQVEsRUFBRSxDQUFtQixDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLFFBQVEsRUFBRTtnQkFDWixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztnQkFDeEQsNnRCQUE0RTs7YUFFN0U7Ozs7NkJBR0UsS0FBSzs0QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSU5hdmlnYXRpb25UYWIgfSBmcm9tICcuLi9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1zaW1wbGUuaW50ZXJmYWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LW5hdmlnYXRpb24tdGFiLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnROYXZpZ2F0aW9uVGFiQ29udGFpbmVyQ29tcG9uZW50IHtcclxuXHJcbiAgQElucHV0KCkgbmF2aWdhdGlvblRhYnM6IElOYXZpZ2F0aW9uVGFiW107XHJcbiAgQE91dHB1dCgpIGFjdGl2YXRlZFRhYiQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBhY3RpdmF0ZShzZXF1ZW5jZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICBjb25zdCBhY3RpdmUgPSB0aGlzLm5hdmlnYXRpb25UYWJzLmZpbHRlcih4ID0+IHguc2VxdWVuY2UgPT09IHNlcXVlbmNlKTtcclxuICAgIGFjdGl2ZVswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRUYWIkLmVtaXQoc2VxdWVuY2UpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5uYXZpZ2F0aW9uVGFicykge1xyXG4gICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGFiSG92ZXJpbmcoaG92ZXJpbmc6IGJvb2xlYW4sIHNlcXVlbmNlOiBudW1iZXIsIGFjdGl2ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI25hdmlnYXRpb24tdGFiLSR7c2VxdWVuY2V9YCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKCFhY3RpdmUpIHtcclxuICAgICAgaWYgKGhvdmVyaW5nKSB7XHJcbiAgICAgICAgdGFiLnN0eWxlLnpJbmRleCA9ICc5OTAnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhYi5zdHlsZS56SW5kZXggPSAoMTAwIC0gc2VxdWVuY2UpLnRvU3RyaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19