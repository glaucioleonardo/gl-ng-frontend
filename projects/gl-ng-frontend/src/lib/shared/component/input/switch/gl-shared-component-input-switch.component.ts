import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-input-switch',
  templateUrl: './gl-shared-component-input-switch.component.html',
  styleUrls: ['./gl-shared-component-input-switch.component.scss']
})
export class GlSharedComponentInputSwitchComponent {
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
