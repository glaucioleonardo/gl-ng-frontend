import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-input-switch',
    templateUrl: './gl-component-input-switch.component.html',
    styleUrls: ['./gl-component-input-switch.component.scss'],
    standalone: true,
  imports: [NgIf, NgOptimizedImage]
})
export class GlComponentInputSwitchComponent {
  @Input() enabled = true;
  @Input() active = false;
  @Input() label: string;
  @Input() labelColor: 'white' | 'black' = 'white';
  @Input() showLabel = true;
  @Input() showAsInputButton = false;

  @Input() buttonIconSrc: string;

  @Output() active$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  activate(): void {
    if (this.enabled) {
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
