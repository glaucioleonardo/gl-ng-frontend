import { __decorate } from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { InputMask } from "gl-w-frontend";
var GlSharedComponentInputTextSimpleComponent = /** @class */ (function () {
    function GlSharedComponentInputTextSimpleComponent() {
        this.disabled = false;
        this.autocomplete = false;
        this.value = null;
        this.maxLength = 255;
        this.currentValue = new EventEmitter();
    }
    GlSharedComponentInputTextSimpleComponent.prototype.onKeyUp = function (args) {
        if (args.target.value.trim().length > 0) {
            args.target.classList.remove('required-fill');
        }
        this.currentValue.emit({ value: args.target.value });
    };
    GlSharedComponentInputTextSimpleComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.mask != null && _this.mask.includes('currency')) {
                _this.inputElement.nativeElement.placeholder = InputMask.currency(_this.inputElement.nativeElement, _this.mask, _this.maskSymbol);
            }
        }, 0);
    };
    __decorate([
        ViewChild('inputElement', { read: ElementRef, static: true })
    ], GlSharedComponentInputTextSimpleComponent.prototype, "inputElement", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "autocomplete", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "placeholder", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "itemContentAlignment", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "value", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "mask", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "maskSymbol", void 0);
    __decorate([
        Input()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "maxLength", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "currentValue", void 0);
    __decorate([
        Output()
    ], GlSharedComponentInputTextSimpleComponent.prototype, "onKeyUp", null);
    GlSharedComponentInputTextSimpleComponent = __decorate([
        Component({
            selector: 'gl-shared-component-input-text-simple',
            template: "<!--suppress HtmlFormInputWithoutLabel -->\n<input\n  #inputElement\n  class=\"item-content {{ itemContentAlignment }} {{ class }}\"\n  type=\"text\"\n  [id]=\"id\"\n  [value]=\"value\"\n  [autocomplete]=\"'off'\"\n  required\n  [placeholder]=\"placeholder\"\n  (keyup)=\"onKeyUp($event)\"\n  [disabled]=\"disabled\"\n  [maxLength]=\"maxLength\">\n",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900);.required-fill{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.required-fill::-moz-placeholder{color:rgba(255,255,255,.3)!important}.required-fill:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.required-fill::placeholder{color:rgba(255,255,255,.3)!important}.error-highlight{background-color:rgba(210,64,119,.3)!important;border-color:#e64949!important;color:#fff!important;transition:.2s ease-in-out}.error-highlight::-moz-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight:-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::-ms-input-placeholder{color:rgba(255,255,255,.3)!important}.error-highlight::placeholder{color:rgba(255,255,255,.3)!important}:host::ng-deep{display:flex;flex:1 0 auto;position:relative;flex-direction:column;align-items:stretch}:host::ng-deep .item-content{font-family:Montserrat,sans-serif;font-weight:400;padding:.8em;border:none;background-color:#333437;color:#fff;font-size:.45em;flex-grow:1}:host::ng-deep .item-content:focus{outline:0!important}:host::ng-deep .item-content::-moz-placeholder{color:#64666c!important}:host::ng-deep .item-content::-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content::placeholder{color:#64666c!important}:host::ng-deep .item-content.left{text-align:left}:host::ng-deep .item-content.center{text-align:center}:host::ng-deep .item-content.right{text-align:right}:host::ng-deep .item-content.light{background-color:rgba(0,0,0,.1)}:host::ng-deep .item-content.light::-moz-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::-ms-input-placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.light::placeholder{color:rgba(255,255,255,.2)!important}:host::ng-deep .item-content.dark{background-color:#161617}:host::ng-deep .item-content:-ms-input-placeholder{color:#64666c!important}:host::ng-deep .item-content.light:-ms-input-placeholder{color:gray!important}"]
        })
    ], GlSharedComponentInputTextSimpleComponent);
    return GlSharedComponentInputTextSimpleComponent;
}());
export { GlSharedComponentInputTextSimpleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLWNvbXBvbmVudC1pbnB1dC10ZXh0LXNpbXBsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nbC1uZy1mcm9udGVuZC8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvY29tcG9uZW50L2lucHV0L3RleHQvc2ltcGxlL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdHLE9BQU8sRUFBa0IsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFEO0lBcUJFO1FBbEJTLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFLckIsVUFBSyxHQUFXLElBQUksQ0FBQztRQUlyQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBRWYsaUJBQVksR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQU03RCxDQUFDO0lBTFAsMkRBQU8sR0FBUCxVQUFRLElBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQUU7UUFDM0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFJRCxtRUFBZSxHQUFmO1FBQUEsaUJBTUM7UUFMQyxVQUFVLENBQUM7WUFDVCxJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN2RCxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsSUFBc0IsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDako7UUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBNUI4RDtRQUE5RCxTQUFTLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7bUZBQTRDO0lBRWpHO1FBQVIsS0FBSyxFQUFFOytFQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTttRkFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7eUVBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTtrRkFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7MkZBQThCO0lBQzdCO1FBQVIsS0FBSyxFQUFFOzRFQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7NEVBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOzJFQUErQjtJQUM5QjtRQUFSLEtBQUssRUFBRTtpRkFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7Z0ZBQWlCO0lBRWY7UUFBVCxNQUFNLEVBQUU7bUZBQW9FO0lBQ25FO1FBQVQsTUFBTSxFQUFFOzRFQUdSO0lBbkJVLHlDQUF5QztRQUxyRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUNBQXVDO1lBQ2pELHdXQUFxRTs7U0FFdEUsQ0FBQztPQUNXLHlDQUF5QyxDQThCckQ7SUFBRCxnREFBQztDQUFBLEFBOUJELElBOEJDO1NBOUJZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTaW1wbGVUZXh0UmVzdWx0IH0gZnJvbSAnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ3VycmVuY3lUeXBlcywgSW5wdXRNYXNrIH0gZnJvbSBcImdsLXctZnJvbnRlbmRcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dsLXNoYXJlZC1jb21wb25lbnQtaW5wdXQtdGV4dC1zaW1wbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtY29tcG9uZW50LWlucHV0LXRleHQtc2ltcGxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2xTaGFyZWRDb21wb25lbnRJbnB1dFRleHRTaW1wbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXRFbGVtZW50JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRFbGVtZW50OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBpdGVtQ29udGVudEFsaWdubWVudDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nID0gbnVsbDtcblxuICBASW5wdXQoKSBtYXNrOiBzdHJpbmcgfCBJQ3VycmVuY3lUeXBlcztcbiAgQElucHV0KCkgbWFza1N5bWJvbDogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGggPSAyNTU7XG5cbiAgQE91dHB1dCgpIGN1cnJlbnRWYWx1ZTogRXZlbnRFbWl0dGVyPElTaW1wbGVUZXh0UmVzdWx0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uS2V5VXAoYXJncykge1xuICAgIGlmIChhcmdzLnRhcmdldC52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkgeyBhcmdzLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyZXF1aXJlZC1maWxsJyk7IH1cbiAgICB0aGlzLmN1cnJlbnRWYWx1ZS5lbWl0KHsgdmFsdWU6IGFyZ3MudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tYXNrICE9IG51bGwgJiYgdGhpcy5tYXNrLmluY2x1ZGVzKCdjdXJyZW5jeScpKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGxhY2Vob2xkZXIgPSBJbnB1dE1hc2suY3VycmVuY3kodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5tYXNrIGFzIElDdXJyZW5jeVR5cGVzLCB0aGlzLm1hc2tTeW1ib2wpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=