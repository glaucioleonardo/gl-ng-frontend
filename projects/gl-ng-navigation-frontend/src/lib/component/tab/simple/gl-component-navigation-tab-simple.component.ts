import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'gl-component-navigation-tab-simple',
    templateUrl: './gl-component-navigation-tab-simple.component.html',
    styleUrls: ['./gl-component-navigation-tab-simple.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class GlComponentNavigationTabSimpleComponent {
  @Input() tabActive: boolean;
  @Input() showSeparator: boolean;
  @Input() tabSequence: number;
  @Input() tabDescription: string;
  @Input() tabIsTheFirst: boolean;
  @Input() tabIsTheLast: boolean;
  @Input() tabEnabled = true;
  @Input() safariStyle = true;

  @Input() srcIcon: string = null;
  @Input() showIcon = false;

  @Output() activate$: EventEmitter<number> = new EventEmitter();

  constructor() { }

  activate(sequence: number): void {
    if (this.tabEnabled) {
      this.activate$.emit(sequence);
    }
  }
}
