import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gl-component-modal-actions-item',
  templateUrl: './gl-component-modal-actions-item.component.html',
  styleUrls: ['./gl-component-modal-actions-item.component.scss']
})
export class GlComponentModalActionsItemComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() red = false;
  @Input() green = false;
  @Input() action: () => void;
  @Input() hide = true;
  @Input() groupSplit = false;

  @Output() $clicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  private static checkField(field: string | boolean | (() => void), name: string): void {
    if (name == null) {
      throw Error('The name param must be filled!');
    }

    const fieldEmptyMessage = `The ${name} field cannot be null or empty!`;
    if (field == null) {
      throw Error(fieldEmptyMessage);
    }

    if (typeof field === 'string') {
      if (field.trim().length === 0) {
        throw Error(fieldEmptyMessage);
      }
    }
  }

  ngOnInit(): void {
    GlComponentModalActionsItemComponent.checkField(this.title, 'title');
    GlComponentModalActionsItemComponent.checkField(this.icon, 'icon');
    GlComponentModalActionsItemComponent.checkField(this.red, 'red');
    GlComponentModalActionsItemComponent.checkField(this.green, 'green');
    GlComponentModalActionsItemComponent.checkField(this.action, 'action');
    GlComponentModalActionsItemComponent.checkField(this.hide, 'hide');

    if (this.red && this.green) {
      throw Error('You cannot set the item as green and red!');
    }
  }

  onClick(): void {
    this.action();
    this.$clicked.emit();
  }
}
