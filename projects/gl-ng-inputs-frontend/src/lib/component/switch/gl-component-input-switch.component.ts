import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-input-switch',
    templateUrl: './gl-component-input-switch.component.html',
    styleUrls: ['./gl-component-input-switch.component.scss'],
    standalone: true,
  imports: [NgOptimizedImage]
})
export class GlComponentInputSwitchComponent {
  @Input() disabled = false;
  @Input() active = false;
  @Input() label: string;
  @Input() labelColor: 'white' | 'black' = 'white';
  @Input() showLabel = true;
  @Input() showAsInputButton = false;

  @Input() buttonIconSrc: string;

  @Output() active$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  activate(): void {
    if (this.disabled) {
      this.active = !this.active;
      this.active$.emit(this.active);
    }
  }

  onContainerClick(): void {
    if (this.showAsInputButton) {
      this.activate();
    }
  }
}
