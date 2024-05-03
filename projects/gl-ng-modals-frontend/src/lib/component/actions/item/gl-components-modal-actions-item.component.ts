import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'gl-components-modal-actions-item',
  templateUrl: './gl-components-modal-actions-item.component.html',
  styleUrls: ['./gl-components-modal-actions-item.component.scss']
})
export class GlComponentsModalActionsItemComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() red: boolean;
  @Input() action: () => void;
  @Input() hide: boolean;

  @Output() $clicked: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.action();
    this.$clicked.emit();
  }

}
