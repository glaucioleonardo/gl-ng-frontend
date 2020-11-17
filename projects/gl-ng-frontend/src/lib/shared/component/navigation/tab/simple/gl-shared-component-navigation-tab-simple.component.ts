import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-navigation-tab-simple',
  templateUrl: './gl-shared-component-navigation-tab-simple.component.html',
  styleUrls: ['./gl-shared-component-navigation-tab-simple.component.scss']
})
export class GlSharedComponentNavigationTabSimpleComponent {
  @Input() tabActive: boolean;
  @Input() showSeparator: boolean;
  @Input() tabSequence: number;
  @Input() tabDescription: string;
  @Input() tabIsTheFirst: boolean;
  @Input() tabIsTheLast: boolean;
  @Input() tabEnabled: boolean = true;

  @Output() activate$: EventEmitter<number> = new EventEmitter();

  constructor() { }

  activate(sequence: number): void {
    if (this.tabEnabled) {
      this.activate$.emit(sequence);
    }
  }
}
