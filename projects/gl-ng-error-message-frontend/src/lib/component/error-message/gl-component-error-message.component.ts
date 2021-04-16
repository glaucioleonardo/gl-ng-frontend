import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TErrorMessagePosition } from './gl-component-error-message.component.interface';

@Component({
  selector: 'gl-component-error-message',
  templateUrl: './gl-component-error-message.component.html',
  styleUrls: ['./gl-component-error-message.component.scss']
})
export class GlComponentErrorMessageComponent {
  @Input() position: TErrorMessagePosition = 'left';
  @Input() errorCode: string | number;
  @Input() errorMessage: string;
  @Input() buttonLabel: string;
  @Output() buttonAction$: EventEmitter<void> = new EventEmitter();

  constructor() { }

  buttonAction(): void {
    this.buttonAction$.emit();
  }
}
