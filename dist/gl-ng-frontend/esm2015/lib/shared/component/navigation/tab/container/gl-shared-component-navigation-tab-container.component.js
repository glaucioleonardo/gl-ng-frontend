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
                template: "<gl-shared-component-navigation-tab-simple\n  *ngFor=\"let tab of navigationTabs; let i = index\"\n  [tabEnabled]=\"tab.enabled\"\n  [tabSequence]=\"tab.sequence\"\n  [tabDescription]=\"tab.description\"\n  [tabActive]=\"tab.active\"\n  [showSeparator]=\"tab.showSeparator\"\n  [tabIsTheFirst]=\"tab.isTheFirst\"\n  [tabIsTheLast]=\"tab.isTheLast\"\n  [ngStyle]=\"{\n    'z-index': tab.active ? 1000 : (100 - tab.sequence)\n  }\"\n  [id]=\"'navigation-tab-' + tab.sequence\"\n  (mouseover)=\"tabHovering(true, tab.sequence, tab.active)\"\n  (mouseleave)=\"tabHovering(false, tab.sequence, tab.active)\"\n  (activate$)=\"activate($event)\"\n></gl-shared-component-navigation-tab-simple>\n",
                styles: [":host::ng-deep{display:flex;flex-direction:row}"]
            },] }
];
GlSharedComponentNavigationTabContainerComponent.ctorParameters = () => [];
GlSharedComponentNavigationTabContainerComponent.propDecorators = {
    navigationTabs: [{ type: Input }],
    activatedTab$: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZ2wtbmctZnJvbnRlbmQvc3JjL2xpYi9zaGFyZWQvY29tcG9uZW50L25hdmlnYXRpb24vdGFiL2NvbnRhaW5lci9nbC1zaGFyZWQtY29tcG9uZW50LW5hdmlnYXRpb24tdGFiLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sZ0RBQWdEO0lBSzNEO1FBRlUsa0JBQWEsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUVuRCxDQUFDO0lBRWpCLFFBQVEsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUs7UUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWlCLEVBQUUsUUFBZ0IsRUFBRSxNQUFlO1FBQzlELE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLFFBQVEsRUFBRSxDQUFtQixDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxJQUFJLFFBQVEsRUFBRTtnQkFDWixHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDMUI7aUJBQU07Z0JBQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDaEQ7U0FDRjtJQUNILENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhDQUE4QztnQkFDeEQsMnJCQUE0RTs7YUFFN0U7Ozs7NkJBR0UsS0FBSzs0QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElOYXZpZ2F0aW9uVGFiIH0gZnJvbSAnLi4vc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtbmF2aWdhdGlvbi10YWItc2ltcGxlLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC1jb21wb25lbnQtbmF2aWdhdGlvbi10YWItY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtbmF2aWdhdGlvbi10YWItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1uYXZpZ2F0aW9uLXRhYi1jb250YWluZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZENvbXBvbmVudE5hdmlnYXRpb25UYWJDb250YWluZXJDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hdmlnYXRpb25UYWJzOiBJTmF2aWdhdGlvblRhYltdO1xuICBAT3V0cHV0KCkgYWN0aXZhdGVkVGFiJDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBhY3RpdmF0ZShzZXF1ZW5jZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMubmF2aWdhdGlvblRhYnMuZmlsdGVyKHggPT4geC5zZXF1ZW5jZSA9PT0gc2VxdWVuY2UpO1xuICAgIGFjdGl2ZVswXS5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYWN0aXZhdGVkVGFiJC5lbWl0KHNlcXVlbmNlKTtcbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLm5hdmlnYXRpb25UYWJzKSB7XG4gICAgICBpdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHRhYkhvdmVyaW5nKGhvdmVyaW5nOiBib29sZWFuLCBzZXF1ZW5jZTogbnVtYmVyLCBhY3RpdmU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjbmF2aWdhdGlvbi10YWItJHtzZXF1ZW5jZX1gKSBhcyBIVE1MRGl2RWxlbWVudDtcblxuICAgIGlmICghYWN0aXZlKSB7XG4gICAgICBpZiAoaG92ZXJpbmcpIHtcbiAgICAgICAgdGFiLnN0eWxlLnpJbmRleCA9ICc5OTAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGFiLnN0eWxlLnpJbmRleCA9ICgxMDAgLSBzZXF1ZW5jZSkudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==