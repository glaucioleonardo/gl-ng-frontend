import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';
import { ISimpleTextResult, TInputTextMask, TInputTextTheme, TInputType } from './gl-component-input-text-simple.interface';
import { InputMask, TCurrencySymbolTypes, TCurrencyTypes, TDecimalSeparators } from 'gl-w-frontend';
import { GlComponentInputTextSimpleService } from './gl-component-input-text-simple.service';

@Component({
  selector: 'gl-component-input-text-simple',
  templateUrl: './gl-component-input-text-simple.component.html',
  styleUrls: ['./gl-component-input-text-simple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: GlComponentInputTextSimpleComponent
    },
    // {
    //   provide: NG_VALIDATORS,
    //   multi: true,
    //   useExisting: GlComponentInputTextSimpleComponent
    // }
  ]
})
export class GlComponentInputTextSimpleComponent implements AfterViewInit, OnDestroy, ControlValueAccessor {
  @ViewChild('inputElement', { read: ElementRef, static: true }) inputElement: ElementRef<HTMLInputElement>;

  private _input: HTMLInputElement;
  private _touched: boolean;

  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TInputTextTheme = '';
  @Input() value: string = null;
  @Input() type: TInputType = 'text';

  @Input() showIcon = false;
  @Input() iconSrc: string = null;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() allowMinus = true;
  @Input() rightAlign = true;
  @Input() step = 5;

  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<ISimpleTextResult> = new EventEmitter();
  @Output() onKeyUp(args): void {
    if (args.target.value.trim().length > 0) {
      args.target.classList.remove('required-fill');
    }

    this.currentValue.emit({
      value: args.target.value
    });

    this.markAsTouched();
    this.onChange(args.target.value?.trim());
  }

  constructor(public service: GlComponentInputTextSimpleService) { }

  ngAfterViewInit(): void {
    this._input = this.inputElement.nativeElement;
    const host: HTMLElement = this._input.parentElement;

    this.applyInputMask();

    this.service.updateInputMask$.subscribe(() => {
      this.applyInputMask();
    });

    if (this.showIcon && this.iconSrc != null) {
      const iconElement: HTMLSpanElement = host.querySelector('.icon');
      const iconSource = `url("${this.iconSrc}")`;

      iconElement.style.setProperty('--input-text-image-src', iconSource);
    }
  }
  ngOnDestroy(): void {
    this.service.updateInputMask$.observers.map(x => x.complete);
  }

  applyInputMask(): void {
    setTimeout(() => {
      if (this.mask != null && this._input != null) {
        if (this.mask.includes('currency')) {
          this.inputElement.nativeElement.placeholder = InputMask.currency(
            this.inputElement.nativeElement,
            this.mask as TCurrencyTypes,
            this.maskSymbol
          );
        } else if (this.mask === 'percentage' || this.mask === 'numeric') {
          this.placeholder = InputMask[this.mask](
            this._input,
            this.allowMinus,
            this.decimalSeparator,
            this.rightAlign,
            this.step
          );
        } else if (this.mask === 'integer') {
          this.placeholder = InputMask.integer(
            this._input,
            this.allowMinus,
            this.rightAlign,
            this.step
          );
        } else if (this.mask === 'custom') {
          InputMask.customNumberPhone(
            this.placeholder,
            this._input,
            this.rightAlign
          );
        }
      } else if (this._input != null) {
        InputMask.remove(this._input);
      }
    }, 0);
  }

  onChange = (value) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  markAsTouched(): void {
    if (!this._touched) {
      this.onTouched();
      this._touched = true;
    }
  }

  // validate(control: AbstractControl): ValidationErrors | null {
  //   const value = control.value;
  //   if (value == null) {
  //     return {
  //       cannotBeNull: {
  //         value
  //       }
  //     };
  //   }
  // }
}
