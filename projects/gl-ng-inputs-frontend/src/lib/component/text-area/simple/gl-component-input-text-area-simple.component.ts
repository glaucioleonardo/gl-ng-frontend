import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';

@Component({
  selector: 'gl-component-input-text-area-simple',
  templateUrl: './gl-component-input-text-area-simple.component.html',
  styleUrls: ['./gl-component-input-text-area-simple.component.scss']
})
export class GlComponentInputTextAreaSimpleComponent {
  @ViewChild('textArea', { read: ElementRef, static: true }) textArea: ElementRef<HTMLTextAreaElement>;

  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TTheme;

  @Input() value = '';
  @Input() maxLength: number;
  @Output() currentValue = new EventEmitter();

  constructor() { }

  onKeyUp(args): void {
    const value = args.target.value;

    if (value.trim().length > 0) {
      this.textArea.nativeElement.classList.remove('required-fill');
    }

    this.currentValue.emit({ value });
  }
}
