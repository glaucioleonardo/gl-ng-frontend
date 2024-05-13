import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TAttachmentItemType } from './gl-component-attachment-item.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'gl-component-attachment-item',
    templateUrl: './gl-component-attachment-item.component.html',
    styleUrls: ['./gl-component-attachment-item.component.scss'],
    standalone: true,
  imports: [NgOptimizedImage]
})
export class GlComponentAttachmentItemComponent {
  @Input() disabled = false;
  @Input() attachmentUrl: string;
  @Input() fileName: string;
  @Input() fileIcon: string;
  @Input() id: number;
  @Input() type: TAttachmentItemType = 'file';
  @Input() addingSmooth: boolean;

  @Output() click$: EventEmitter<void> = new EventEmitter();
  @Output() removeCurrentItem$: EventEmitter<{ id: number }> = new EventEmitter();
  @Output() editCurrentItem$: EventEmitter<{ id: number }> = new EventEmitter();

  constructor() { }

  removeItem(id: number): void {
    this.removeCurrentItem$.emit({ id });
  }
  editItem(id: number): void {
    this.editCurrentItem$.emit({ id });
  }

  onButtonClick(e: Event): void {
    e.preventDefault();
    this.click$.emit();
  }
}
