import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';

@Component({
  selector: 'gl-shared-component-input-text-area-simple',
  templateUrl: './gl-shared-component-input-text-area-simple.component.html',
  styleUrls: ['./gl-shared-component-input-text-area-simple.component.scss']
})
export class GlSharedComponentInputTextAreaSimpleComponent {
  @ViewChild('textArea', { read: ElementRef, static: true }) textArea: ElementRef<HTMLTextAreaElement>;

  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() class: string;

  @Input() value = '';
  @Input() maxLength: number;
  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(args) {
    const value = args.target.value;

    if (value.trim().length > 0) {
      this.textArea.nativeElement.classList.remove('required-fill');
    }

    this.currentValue.emit({ value });
  }
}
