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
                template: "<div #mainContainer class=\"main-container\">\r\n  <gl-shared-component-logo-square\r\n    [horizontalPosition]=\"logoHorizontalPosition\"\r\n    [verticalPosition]=\"logoVerticalPosition\"\r\n    [imageAlt]=\"logoImageAlt\"\r\n    [imageScr]=\"logoImageScr\"\r\n  ></gl-shared-component-logo-square>\r\n  <gl-shared-component-error-message\r\n    [position]=\"errorPosition\"\r\n    [errorCode]=\"errorCode\"\r\n    [errorMessage]=\"errorMessage\"\r\n    [buttonLabel]=\"errorButtonLabel\"\r\n    (buttonAction$)=\"errorButtonAction()\"\r\n  ></gl-shared-component-error-message>\r\n  <gl-shared-component-footer-container [description]=\"footerMainDescription\">\r\n    <gl-shared-component-input-button-hyperlink\r\n      *ngIf=\"footerShowContainer\"\r\n      [description]=\"footerDescription\"\r\n      [imageDescription]=\"footerImageDescription\"\r\n      [imageSrc]=\"footerImageSrc\"\r\n      [link]=\"footerLink\"\r\n    ></gl-shared-component-input-button-hyperlink>\r\n  </gl-shared-component-footer-container>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9nbC1uZy1mcm9udGVuZC9zcmMvbGliL3NoYXJlZC92aWV3L2Vycm9yLW1lc3NhZ2UvZ2wtc2hhcmVkLXZpZXctZXJyb3ItbWVzc2FnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzdHLE1BQU0sT0FBTyxpQ0FBaUM7SUF3QjVDO1FBaEJTLDJCQUFzQixHQUFxQixNQUFNLENBQUM7UUFDbEQseUJBQW9CLEdBQXFCLEtBQUssQ0FBQztRQUUvQyxrQkFBYSxHQUFxQixNQUFNLENBQUM7UUFJeEMsdUJBQWtCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLN0QsMkJBQXNCLEdBQVcsWUFBWSxDQUFDO0lBSXZDLENBQUM7SUFFakIsZUFBZTtRQUNiLE1BQU0sYUFBYSxHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztRQUN2RSxNQUFNLG1CQUFtQixHQUFtQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUE0QixDQUFDO1FBRTFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE9BQU8sSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO1FBQ2hFLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUM7SUFDNUUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLHloQ0FBNEQ7O2FBRTdEOzs7OzRCQUVFLFNBQVMsU0FBQyxlQUFlOzZCQUV6QixLQUFLO3lCQUNMLEtBQUs7MkJBRUwsS0FBSzsyQkFDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSzs0QkFFTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLE1BQU07b0NBRU4sS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7cUNBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dsLXNoYXJlZC12aWV3LWVycm9yLW1lc3NhZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nbC1zaGFyZWQtdmlldy1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsU2hhcmVkVmlld0Vycm9yTWVzc2FnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIEBWaWV3Q2hpbGQoJ21haW5Db250YWluZXInKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcclxuXHJcbiAgQElucHV0KCkgYmx1ckJhY2tncm91bmQ6IHN0cmluZztcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGxvZ29JbWFnZVNjcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxvZ29JbWFnZUFsdDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxvZ29Ib3Jpem9udGFsUG9zaXRpb246ICdsZWZ0JyB8ICdyaWdodCcgPSAnbGVmdCc7XHJcbiAgQElucHV0KCkgbG9nb1ZlcnRpY2FsUG9zaXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAndG9wJztcclxuXHJcbiAgQElucHV0KCkgZXJyb3JQb3NpdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcclxuICBASW5wdXQoKSBlcnJvckNvZGU6IHN0cmluZyB8IG51bWJlcjtcclxuICBASW5wdXQoKSBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBASW5wdXQoKSBlcnJvckJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIGVycm9yQnV0dG9uQWN0aW9uJDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSBmb290ZXJNYWluRGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBmb290ZXJTaG93Q29udGFpbmVyOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvb3RlckRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9vdGVySW1hZ2VEZXNjcmlwdGlvbjogc3RyaW5nID0gJ0ltYWdlIGxvZ28nO1xyXG4gIEBJbnB1dCgpIGZvb3RlckltYWdlU3JjOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9vdGVyTGluazogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lclBhcmVudDogSFRNTERpdkVsZW1lbnQgPSB0aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICAgIG1haW5Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuYmFja2dyb3VuZH0pYDtcclxuICAgIG1haW5Db250YWluZXJQYXJlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuYmx1ckJhY2tncm91bmR9KWA7XHJcbiAgfVxyXG5cclxuICBlcnJvckJ1dHRvbkFjdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuZXJyb3JCdXR0b25BY3Rpb24kLmVtaXQoKTtcclxuICB9XHJcbn1cclxuIl19