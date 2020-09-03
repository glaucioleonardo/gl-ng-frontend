import { Component, EventEmitter, Input, Output } from '@angular/core';
export class GlSharedComponentHeaderDefaultComponent {
    constructor() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    onKeyDown(event) {
        this.keyDown.emit(event);
    }
}
GlSharedComponentHeaderDefaultComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-component-header-default',
                template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
                styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{background-color:#1a1b1d;max-width:100vw;position:relative}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,.3))}:host::ng-deep .header-container .header-content{align-items:center;display:flex}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8));border-top:.2em solid}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-slice:.5;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8),rgba(97,61,149,.8))}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{align-items:center;display:flex;flex-grow:1;height:2.3em;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{align-items:center;display:flex;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
            },] }
];
GlSharedComponentHeaderDefaultComponent.ctorParameters = () => [];
GlSharedComponentHeaderDefaultComponent.propDecorators = {
    systemLogo: [{ type: Input }],
    labelModel: [{ type: Input }],
    labelId: [{ type: Input }],
    labelArea: [{ type: Input }],
    type: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    menuButtons: [{ type: Input }],
    keyDown: [{ type: Output }],
    readonly: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC9jb21wb25lbnQvaGVhZGVyL2RlZmF1bHQvZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF2RSxNQUFNLE9BQU8sdUNBQXVDO0lBYWxEO1FBWlMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQVEzQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7SUFJMUMsQ0FBQztJQUVqQixTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7OztZQXRCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsa3NDQUFrRTs7YUFFbkU7Ozs7eUJBRUUsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLE1BQU07dUJBRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL2J1dHRvbi9tZW51L3NpbXBsZS9nbC1zaGFyZWQtY29tcG9uZW50LWJ1dHRvbi1tZW51LXNpbXBsZS5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWhlYWRlci1kZWZhdWx0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWhlYWRlci1kZWZhdWx0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRIZWFkZXJEZWZhdWx0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc3lzdGVtTG9nbzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbE1vZGVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsSWQ6IG51bWJlcjtcbiAgQElucHV0KCkgbGFiZWxBcmVhOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHR5cGU6ICdvbmx5LWJ1dHRvbnMnIHwgJyc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YnRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1lbnVCdXR0b25zOiBJTWVudUJ1dHRvbltdO1xuICBAT3V0cHV0KCkga2V5RG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmtleURvd24uZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==