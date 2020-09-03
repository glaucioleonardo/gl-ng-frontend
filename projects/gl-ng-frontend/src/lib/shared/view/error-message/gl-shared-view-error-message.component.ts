import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'gl-shared-view-error-message',
  templateUrl: './gl-shared-view-error-message.component.html',
  styleUrls: ['./gl-shared-view-error-message.component.scss']
})
export class GlSharedViewErrorMessageComponent implements AfterViewInit {
  @ViewChild('mainContainer') mainContainer: ElementRef<HTMLDivElement>;

  @Input() blurBackground: string;
  @Input() background: string;

  @Input() logoImageScr: string;
  @Input() logoImageAlt: string;
  @Input() logoHorizontalPosition: 'left' | 'right' = 'left';
  @Input() logoVerticalPosition: 'top' | 'bottom' = 'top';

  @Input() errorPosition: 'left' | 'right' = 'left';
  @Input() errorCode: string | number;
  @Input() errorMessage: string;
  @Input() errorButtonLabel: string;
  @Output() errorButtonAction$: EventEmitter<void> = new EventEmitter();

  @Input() footerMainDescription: string;
  @Input() footerShowContainer: boolean;
  @Input() footerDescription: string;
  @Input() footerImageDescription: string = 'Image logo';
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
