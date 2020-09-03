import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
var GlSharedComponentHeaderDefaultComponent = /** @class */ (function () {
    function GlSharedComponentHeaderDefaultComponent() {
        this.systemLogo = false;
        this.keyDown = new EventEmitter();
    }
    GlSharedComponentHeaderDefaultComponent.prototype.onKeyDown = function (event) {
        this.keyDown.emit(event);
    };
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "systemLogo", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelModel", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelId", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "labelArea", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "type", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "title", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "subtitle", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "menuButtons", void 0);
    __decorate([
        Output()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "keyDown", void 0);
    __decorate([
        Input()
    ], GlSharedComponentHeaderDefaultComponent.prototype, "readonly", void 0);
    GlSharedComponentHeaderDefaultComponent = __decorate([
        Component({
            selector: 'gl-shared-component-header-default',
            template: "<section class=\"header-container {{ type }}\" [attr.type]=\"type\" (window:keydown)=\"onKeyDown($event)\">\n  <div class=\"header-content {{ type }}\" >\n    <div class=\"default-logo\" *ngIf=\"type != 'only-buttons'\">\n      <ng-content select=\"[slot=default-logo]\"></ng-content>\n    </div>\n    <gl-shared-component-title-page\n      *ngIf=\"type != 'only-buttons' && !systemLogo\"\n      [title]=\"title\"\n      [subtitle]=\"subtitle\"\n    ></gl-shared-component-title-page>\n    <ng-content class=\"system-logo\" select=\"[slot=system-logo]\"></ng-content>\n\n    <div class=\"menu-bar\">\n      <div class=\"menu-buttons-container\">\n        <ng-content></ng-content>\n        <gl-shared-component-button-menu-tooltip\n          *ngFor=\"let menuButton of menuButtons;\"\n          [disabled]=\"(readonly && !menuButton.canReadonly) || (!readonly && menuButton.canReadonly && menuButton.readonly)\"\n          [tooltip]=\"menuButton.alt\"\n          [src]=\"menuButton.src\"\n          [id]=\"menuButton.id\"\n          [alt]=\"menuButton.alt\"\n          [callback]=\"menuButton.callback\">\n        </gl-shared-component-button-menu-tooltip>\n      </div>\n    </div>\n  </div>\n</section>\n",
            styles: [":host::ng-deep{max-width:100vw}:host::ng-deep .header-container{max-width:100vw;position:relative;background-color:#1a1b1d}:host::ng-deep .header-container.inverted,:host::ng-deep .header-container.light{background:linear-gradient(90deg,rgba(0,0,0,.2) 0,rgba(0,0,0,.3) 100%)}:host::ng-deep .header-container .header-content{display:flex;align-items:center}:host::ng-deep .header-container .header-content.dark,:host::ng-deep .header-container .header-content.light{border-top:.2em solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content.inverted{border-bottom:.5px solid;border-image-source:linear-gradient(90deg,rgba(210,64,119,.8) 0,rgba(97,61,149,.8) 100%);border-image-slice:.5}:host::ng-deep .header-container .header-content .default-logo{margin:0 .5em 0 0}:host::ng-deep .header-container .header-content .menu-bar{height:2.3em;display:flex;align-items:center;flex-grow:1;justify-content:flex-end}:host::ng-deep .header-container .header-content .menu-bar .menu-buttons-container{display:flex;align-items:center;margin:0 .5em}:host::ng-deep .header-container.only-buttons{background-color:transparent}"]
        })
    ], GlSharedComponentHeaderDefaultComponent);
    return GlSharedComponentHeaderDefaultComponent;
}());
export { GlSharedComponentHeaderDefaultComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2hlYWRlci9kZWZhdWx0L2dsLXNoYXJlZC1jb21wb25lbnQtaGVhZGVyLWRlZmF1bHQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUXZFO0lBYUU7UUFaUyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBUTNCLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUkxQyxDQUFDO0lBRWpCLDJEQUFTLEdBQVQsVUFBVSxLQUFLO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWhCUTtRQUFSLEtBQUssRUFBRTsrRUFBNkI7SUFDNUI7UUFBUixLQUFLLEVBQUU7K0VBQW9CO0lBQ25CO1FBQVIsS0FBSyxFQUFFOzRFQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTs4RUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7eUVBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFOzBFQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7NkVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO2dGQUE0QjtJQUMxQjtRQUFULE1BQU0sRUFBRTs0RUFBaUQ7SUFFakQ7UUFBUixLQUFLLEVBQUU7NkVBQW1CO0lBWGhCLHVDQUF1QztRQUxuRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsb0NBQW9DO1lBQzlDLGtzQ0FBa0U7O1NBRW5FLENBQUM7T0FDVyx1Q0FBdUMsQ0FrQm5EO0lBQUQsOENBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi9idXR0b24vbWVudS9zaW1wbGUvZ2wtc2hhcmVkLWNvbXBvbmVudC1idXR0b24tbWVudS1zaW1wbGUuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWhlYWRlci1kZWZhdWx0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2wtc2hhcmVkLWNvbXBvbmVudC1oZWFkZXItZGVmYXVsdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkQ29tcG9uZW50SGVhZGVyRGVmYXVsdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHN5c3RlbUxvZ286IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWxNb2RlbDogc3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbElkOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxhYmVsQXJlYTogc3RyaW5nO1xuICBASW5wdXQoKSB0eXBlOiAnb25seS1idXR0b25zJyB8ICcnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdWJ0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBtZW51QnV0dG9uczogSU1lbnVCdXR0b25bXTtcbiAgQE91dHB1dCgpIGtleURvd246IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgdGhpcy5rZXlEb3duLmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=