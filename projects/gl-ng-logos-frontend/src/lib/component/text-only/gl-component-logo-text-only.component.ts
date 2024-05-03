import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-logo-text-only',
    templateUrl: './gl-component-logo-text-only.component.html',
    styleUrls: ['./gl-component-logo-text-only.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentLogoTextOnlyComponent {
  @Output() click$: EventEmitter<boolean> = new EventEmitter();

  @Input() clickable = false;
  @Input() formType: string = null;
  @Input() showRelease = false;
  @Input() columnView = false;

  @Input() title: string = null;
  @Input() subtitle: string = null;
  @Input() releaseName: string = null;

  constructor() { }

  onClick(): void {
    this.click$.emit(true);
  }
}
