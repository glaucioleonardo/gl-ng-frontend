import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ISimpleTextResult, TInputTextMask } from './gl-shared-component-input-text-simple.interface';
import { InputMask, TCurrencySymbolTypes, TCurrencyTypes, TDecimalSeparators, TPercentageTypes } from 'gl-w-frontend';

@Component({
  selector: 'gl-shared-component-input-text-simple',
  templateUrl: './gl-shared-component-input-text-simple.component.html',
  styleUrls: ['./gl-shared-component-input-text-simple.component.scss']
})
export class GlSharedComponentInputTextSimpleComponent implements AfterViewInit {
  @ViewChild('inputElement', { read: ElementRef, static: true }) inputElement: ElementRef<HTMLInputElement>;

  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: string;
  @Input() class: string;
  @Input() value: string = null;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() allowMinus: boolean = true;
  @Input() rightAlign: boolean = true;
  @Input() step: number = 5;

  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<ISimpleTextResult> = new EventEmitter();
  @Output() onKeyUp(args) {
    if (args.target.value.trim().length > 0) { args.target.classList.remove('required-fill'); }
    this.currentValue.emit({ value: args.target.value });
  }

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const input = this.inputElement.nativeElement;

      if (this.mask != null) {
        if (this.mask.includes('currency')) {
          this.inputElement.nativeElement.placeholder = InputMask.currency(
            this.inputElement.nativeElement,
            this.mask as TCurrencyTypes,
            this.maskSymbol
          );
        } else if (this.mask === 'percentage' || this.mask === 'numeric') {
          this.placeholder = InputMask[this.mask](
            input,
            this.allowMinus,
            this.decimalSeparator,
            this.rightAlign,
            this.step
          );
        } else if (this.mask === 'integer') {
          this.placeholder = InputMask.integer(
            input,
            this.allowMinus,
            this.rightAlign,
            this.step
          );
        }
      }
    }, 0);
  }
}
