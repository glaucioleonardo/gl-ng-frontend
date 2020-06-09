import { AfterViewChecked, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';

@Component({
  selector: 'gl-shared-component-modal-loading',
  templateUrl: './gl-shared-component-modal-loading.component.html',
  styleUrls: ['./gl-shared-component-modal-loading.component.scss']
})
export class GlSharedComponentModalLoadingComponent implements AfterViewChecked {
  @ViewChild('mainLoading', { read: ElementRef, static: true }) mainLoading: ElementRef<HTMLDivElement>;

  @Input() defaultMessage: string;

  loaded = false;

  constructor(public service: GlSharedComponentModalLoadingService) {
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
