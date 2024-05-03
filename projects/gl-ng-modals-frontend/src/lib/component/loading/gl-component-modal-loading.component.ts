import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlComponentModalLoadingService } from './gl-component-modal-loading.service';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-modal-loading',
    templateUrl: './gl-component-modal-loading.component.html',
    styleUrls: ['./gl-component-modal-loading.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentModalLoadingComponent implements AfterViewChecked {
  @ViewChild('mainLoading', { read: ElementRef, static: true }) mainLoading: ElementRef<HTMLDivElement>;

  @Input() defaultMessage: string;
  @Input() customLoading: false;

  loaded = false;

  constructor(public service: GlComponentModalLoadingService) {
    service.defaultMessage = this.defaultMessage;
  }

  ngAfterViewChecked(): void {
    const container = document.querySelector('.main-loading') as HTMLDivElement;

    if (container != null && !this.loaded) {
      this.service.setup(container);
      this.loaded = true;
    }
  }
}
