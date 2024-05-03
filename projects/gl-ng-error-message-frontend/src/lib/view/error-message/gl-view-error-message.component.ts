import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TErrorMessageErrorPosition, TErrorMessageLogoHorizontalPosition, TErrorMessageLogoVerticalPosition } from './gl-view-error-message.interface';
import { GlComponentInputButtonHyperlinkComponent } from '../../../../../gl-ng-inputs-frontend/src/lib/component/button/hyperlink/gl-component-input-button-hyperlink.component';
import { NgIf } from '@angular/common';
import { GlComponentFooterContainerComponent } from '../../../../../gl-ng-footer-frontend/src/lib/component/container/gl-component-footer-container.component';
import { GlComponentErrorMessageComponent } from '../../component/error-message/gl-component-error-message.component';
import { GlComponentLogoSquareComponent } from '../../../../../gl-ng-logos-frontend/src/lib/component/square/gl-component-logo-square.component';

@Component({
    selector: 'gl-view-error-message',
    templateUrl: './gl-view-error-message.component.html',
    styleUrls: ['./gl-view-error-message.component.scss'],
    standalone: true,
    imports: [GlComponentLogoSquareComponent, GlComponentErrorMessageComponent, GlComponentFooterContainerComponent, NgIf, GlComponentInputButtonHyperlinkComponent]
})
export class GlViewErrorMessageComponent implements AfterViewInit {
  @ViewChild('mainContainer') mainContainer: ElementRef<HTMLDivElement>;

  @Input() blurBackground: string;
  @Input() background: string;

  @Input() logoImageScr: string;
  @Input() logoImageAlt: string;
  @Input() logoHorizontalPosition: TErrorMessageLogoHorizontalPosition = 'left';
  @Input() logoVerticalPosition: TErrorMessageLogoVerticalPosition = 'top';

  @Input() errorPosition: TErrorMessageErrorPosition = 'left';
  @Input() errorCode: string | number;
  @Input() errorMessage: string;
  @Input() errorButtonLabel: string;
  @Output() errorButtonAction$: EventEmitter<void> = new EventEmitter();

  @Input() footerMainDescription: string;
  @Input() footerShowContainer: boolean;
  @Input() footerDescription: string;
  @Input() footerImageDescription = 'Image logo';
  @Input() footerImageSrc: string;
  @Input() footerLink: string;

  constructor() { }

  ngAfterViewInit(): void {
    const mainContainer: HTMLDivElement = this.mainContainer.nativeElement;
    const mainContainerParent: HTMLDivElement = this.mainContainer.nativeElement.parentNode as HTMLDivElement;

    mainContainer.style.backgroundImage = `url(${this.background})`;
    mainContainerParent.style.backgroundImage = `url(${this.blurBackground})`;
  }

  errorButtonAction(): void {
    this.errorButtonAction$.emit();
  }
}
