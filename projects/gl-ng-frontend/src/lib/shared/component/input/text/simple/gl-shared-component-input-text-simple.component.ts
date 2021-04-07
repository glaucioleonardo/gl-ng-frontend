import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { THorizontalAlignment } from '../../../title/label/simple/gl-shared-component-title-label-simple.interface';
import { ISimpleTextResult, TInputTextMask } from './gl-shared-component-input-text-simple.interface';
import { InputMask, TCurrencySymbolTypes, TCurrencyTypes, TDecimalSeparators } from 'gl-w-frontend';
import { GlSharedComponentInputTextSimpleService } from './gl-shared-component-input-text-simple.service';

@Component({
  selector: 'gl-shared-component-input-text-simple',
  templateUrl: './gl-shared-component-input-text-simple.component.html',
  styleUrls: ['./gl-shared-component-input-text-simple.component.scss']
})
export class GlSharedComponentInputTextSimpleComponent implements AfterViewInit, OnDestroy {
  @ViewChild('inputElement', { read: ElementRef, static: true }) inputElement: ElementRef<HTMLInputElement>;

  private _input: HTMLInputElement;

  @Input() disabled = false;
  @Input() autocomplete = false;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() class: string;
  @Input() value: string = null;

  @Input() mask: TInputTextMask;
  @Input() decimalSeparator: TDecimalSeparators = ',';
  @Input() allowMinus = true;
  @Input() rightAlign = true;
  @Input() step = 5;

  @Input() maskSymbol: TCurrencySymbolTypes;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<ISimpleTextResult> = new EventEmitter();
  @Output() onKeyUp(args) {
    if (args.target.value.trim().length > 0) { args.target.classList.remove('required-fill'); }
    this.currentValue.emit({ value: args.target.value });
  }

  constructor(public service: GlSharedComponentInputTextSimpleService) { }

  ngAfterViewInit(): void {
    this._input = this.inputElement.nativeElement;
    this.applyInputMask();

    this.service.updateInputMask$.subscribe(() => {
      this.applyInputMask();
    });
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

  ngOnDestroy(): void {
    this.service.updateInputMask$.observers.map(x => x.complete);
  }
}
