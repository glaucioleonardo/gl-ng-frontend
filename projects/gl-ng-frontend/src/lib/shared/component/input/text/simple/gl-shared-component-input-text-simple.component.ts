import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ICurrencyTypes } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.interface';
import { InputMask } from 'gl-w-frontend/lib/es5/scripts/core/services/input/core-services-input.service';
import { ISimpleTextResult } from './gl-shared-component-input-text-simple.interface';


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

  @Input() mask: string | ICurrencyTypes;
  @Input() maskSymbol: string;
  @Input() maxLength = 255;

  @Output() currentValue: EventEmitter<ISimpleTextResult> = new EventEmitter();
  @Output() onKeyUp(args) {
    if (args.target.value.trim().length > 0) { args.target.classList.remove('required-fill'); }
    this.currentValue.emit({ value: args.target.value });
  }

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.mask != null && this.mask.includes('currency')) {
        this.inputElement.nativeElement.placeholder = InputMask.currency(this.inputElement.nativeElement, this.mask as ICurrencyTypes, this.maskSymbol);
      }
    }, 0);
  }
}
