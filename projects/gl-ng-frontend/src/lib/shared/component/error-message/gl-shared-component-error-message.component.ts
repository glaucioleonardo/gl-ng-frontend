import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-error-message',
  templateUrl: './gl-shared-component-error-message.component.html',
  styleUrls: ['./gl-shared-component-error-message.component.scss']
})
export class GlSharedComponentErrorMessageComponent {
  @Input() position: 'left' | 'right' = 'left';
  @Input() errorCode: string | number;
  @Input() errorMessage: string;
  @Input() buttonLabel: string;
  @Output() buttonAction$: EventEmitter<void> = new EventEmitter();

  constructor() { }

  buttonAction(): void {
    this.buttonAction$.emit();
  }
}
