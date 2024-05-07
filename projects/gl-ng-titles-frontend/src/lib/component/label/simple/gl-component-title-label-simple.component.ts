import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { THorizontalAlignment, TLabelTheme } from './gl-component-title-label-simple.interface';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-title-label-simple',
    templateUrl: './gl-component-title-label-simple.component.html',
    styleUrls: ['./gl-component-title-label-simple.component.scss'],
    standalone: true,
  imports: [NgIf, NgOptimizedImage]
})
export class GlComponentTitleLabelSimpleComponent implements AfterViewInit {
  @ViewChild('label') label: ElementRef<HTMLLabelElement>;

  @Input() labelValue;
  @Input() id;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() theme: TLabelTheme = '';

  @Input() required = false;
  @Input() requiredLabel = 'Required field';

  constructor() { }

  ngAfterViewInit(): void {
    const label: HTMLLabelElement = this.label.nativeElement;
    const host = label.parentElement;

    if (this.theme === 'category-title') {
      host.style.flexGrow = '0';
    }
  }
}
