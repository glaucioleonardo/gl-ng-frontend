import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gl-shared-component-attachment-item',
  templateUrl: './gl-shared-component-attachment-item.component.html',
  styleUrls: ['./gl-shared-component-attachment-item.component.scss']
})
export class GlSharedComponentAttachmentItemComponent {
  @Input() disabled = false;
  @Input() attachmentUrl: string;
  @Input() fileName: string;
  @Input() fileIcon: string;
  @Input() id: number;
  @Input() type: string;
  @Input() addingSmooth: boolean;

  @Output('onClick') onItemClick: EventEmitter<void> = new EventEmitter();
  @Output() removeCurrentItem: EventEmitter<{ id: number }> = new EventEmitter();
  @Output() editCurrentItem: EventEmitter<{ id: number }> = new EventEmitter();

  constructor() { }

  removeItem(id: number) { this.removeCurrentItem.emit({ id }); }
  editItem(id: number) { this.editCurrentItem.emit({ id }); }

  onButtonClick(e: Event) {
    e.preventDefault();
    this.onItemClick.emit();
  }

}
