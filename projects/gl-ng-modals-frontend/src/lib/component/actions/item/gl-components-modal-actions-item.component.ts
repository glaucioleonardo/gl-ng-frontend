import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'gl-components-modal-actions-item',
  templateUrl: './gl-components-modal-actions-item.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./gl-components-modal-actions-item.component.scss']
})
export class GlComponentsModalActionsItemComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() red: boolean;
  @Input() action: () => void;
  @Input() hide: boolean;

  @Output() $clicked: EventEmitter<null> = new EventEmitter();

  constructor() { }

  onClick(): void {
    this.action();
    this.$clicked.emit();
  }
}
