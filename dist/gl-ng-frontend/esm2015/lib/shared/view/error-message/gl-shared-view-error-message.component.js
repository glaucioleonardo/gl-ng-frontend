import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
export class GlSharedViewErrorMessageComponent {
    constructor() {
        this.logoHorizontalPosition = 'left';
        this.logoVerticalPosition = 'top';
        this.errorPosition = 'left';
        this.errorButtonAction$ = new EventEmitter();
        this.footerImageDescription = 'Image logo';
    }
    ngAfterViewInit() {
        const mainContainer = this.mainContainer.nativeElement;
        const mainContainerParent = this.mainContainer.nativeElement.parentNode;
        mainContainer.style.backgroundImage = `url(${this.background})`;
        mainContainerParent.style.backgroundImage = `url(${this.blurBackground})`;
    }
    errorButtonAction() {
        this.errorButtonAction$.emit();
    }
}
GlSharedViewErrorMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gl-shared-view-error-message',
                template: "<div #mainContainer class=\"main-container\">\n  <gl-shared-component-logo-square\n    [horizontalPosition]=\"logoHorizontalPosition\"\n    [verticalPosition]=\"logoVerticalPosition\"\n    [imageAlt]=\"logoImageAlt\"\n    [imageScr]=\"logoImageScr\"\n  ></gl-shared-component-logo-square>\n  <gl-shared-component-error-message\n    [position]=\"errorPosition\"\n    [errorCode]=\"errorCode\"\n    [errorMessage]=\"errorMessage\"\n    [buttonLabel]=\"errorButtonLabel\"\n    (buttonAction$)=\"errorButtonAction()\"\n  ></gl-shared-component-error-message>\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\n    <gl-shared-component-input-button-hyperlink\n      *ngIf=\"footerShowContainer\"\n      [description]=\"footerDescription\"\n      [imageDescription]=\"footerImageDescription\"\n      [imageSrc]=\"footerImageSrc\"\n      [link]=\"footerLink\"\n    ></gl-shared-component-input-button-hyperlink>\n  </gl-shared-component-footer-container>\n</div>\n",
                styles: [":host::ng-deep{background-color:#1a1b1d;display:flex;flex-grow:1}:host::ng-deep .main-container{-webkit-animation-duration:3s;-webkit-animation-fill-mode:forwards;-webkit-animation-name:start;-webkit-animation-play-state:running;animation-duration:3s;animation-fill-mode:forwards;animation-name:start;animation-play-state:running;background-position:top;background-repeat:no-repeat;background-size:101%;display:flex;flex-direction:column;flex-grow:1;height:100vh;justify-items:stretch;overflow:hidden;width:100vw}@-webkit-keyframes start{0%{opacity:0}to{opacity:1}}@keyframes start{0%{opacity:0}to{opacity:1}}"]
            },] }
];
GlSharedViewErrorMessageComponent.ctorParameters = () => [];
GlSharedViewErrorMessageComponent.propDecorators = {
    mainContainer: [{ type: ViewChild, args: ['mainContainer',] }],
    blurBackground: [{ type: Input }],
    background: [{ type: Input }],
    logoImageScr: [{ type: Input }],
    logoImageAlt: [{ type: Input }],
    logoHorizontalPosition: [{ type: Input }],
    logoVerticalPosition: [{ type: Input }],
    errorPosition: [{ type: Input }],
    errorCode: [{ type: Input }],
    errorMessage: [{ type: Input }],
    errorButtonLabel: [{ type: Input }],
    errorButtonAction$: [{ type: Output }],
    footerMainDescription: [{ type: Input }],
    footerShowContainer: [{ type: Input }],
    footerDescription: [{ type: Input }],
    footerImageDescription: [{ type: Input }],
    footerImageSrc: [{ type: Input }],
    footerLink: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC92aWV3L2Vycm9yLW1lc3NhZ2UvZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdHLE1BQU0sT0FBTyxpQ0FBaUM7SUF3QjVDO1FBaEJTLDJCQUFzQixHQUFxQixNQUFNLENBQUM7UUFDbEQseUJBQW9CLEdBQXFCLEtBQUssQ0FBQztRQUUvQyxrQkFBYSxHQUFxQixNQUFNLENBQUM7UUFJeEMsdUJBQWtCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLN0QsMkJBQXNCLEdBQVcsWUFBWSxDQUFDO0lBSXZDLENBQUM7SUFFakIsZUFBZTtRQUNiLE1BQU0sYUFBYSxHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN2RSxNQUFNLG1CQUFtQixHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUE0QixDQUFDO1FBRTFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1FBQ2hFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7SUFDNUUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLHkrQkFBNEQ7O2FBRTdEOzs7OzRCQUVFLFNBQVMsU0FBQyxlQUFlOzZCQUV6QixLQUFLO3lCQUNMLEtBQUs7MkJBRUwsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSzs0QkFFTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLE1BQU07b0NBRU4sS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7cUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHbFNoYXJlZFZpZXdFcnJvck1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFpbkNvbnRhaW5lcicpIG1haW5Db250YWluZXI6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpIGJsdXJCYWNrZ3JvdW5kOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGJhY2tncm91bmQ6IHN0cmluZztcblxuICBASW5wdXQoKSBsb2dvSW1hZ2VTY3I6IHN0cmluZztcbiAgQElucHV0KCkgbG9nb0ltYWdlQWx0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxvZ29Ib3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XG4gIEBJbnB1dCgpIGxvZ29WZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyB8ICdib3R0b20nID0gJ3RvcCc7XG5cbiAgQElucHV0KCkgZXJyb3JQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcbiAgQElucHV0KCkgZXJyb3JDb2RlOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKSBlcnJvckJ1dHRvbkxhYmVsOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBlcnJvckJ1dHRvbkFjdGlvbiQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBmb290ZXJNYWluRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyU2hvd0NvbnRhaW5lcjogYm9vbGVhbjtcbiAgQElucHV0KCkgZm9vdGVyRGVzY3JpcHRpb246IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ltYWdlIGxvZ28nO1xuICBASW5wdXQoKSBmb290ZXJJbWFnZVNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmb290ZXJMaW5rOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBtYWluQ29udGFpbmVyUGFyZW50OiBIVE1MRGl2RWxlbWVudCA9IHRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUgYXMgSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLmJhY2tncm91bmR9KWA7XG4gICAgbWFpbkNvbnRhaW5lclBhcmVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5ibHVyQmFja2dyb3VuZH0pYDtcbiAgfVxuXG4gIGVycm9yQnV0dG9uQWN0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuZXJyb3JCdXR0b25BY3Rpb24kLmVtaXQoKTtcbiAgfVxufVxuIl19