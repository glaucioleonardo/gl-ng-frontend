import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment, TTheme } from '../../../core/interfaces/alignments.interface';
import { ISimpleTextAreaResult } from '../simple/gl-component-input-text-area-simple.interface';
import { GlComponentTitleLabelSimpleComponent } from '../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.component';
import { GlComponentInputTextAreaSimpleComponent } from '../simple/gl-component-input-text-area-simple.component';

@Component({
    selector: 'gl-component-input-text-area-label',
    templateUrl: './gl-component-input-text-area-label.component.html',
    styleUrls: ['./gl-component-input-text-area-label.component.scss'],
    standalone: true,
    imports: [GlComponentInputTextAreaSimpleComponent, GlComponentTitleLabelSimpleComponent]
})
export class GlComponentInputTextAreaLabelComponent {
  @Input() disabled = false;
  @Input() id: string;
  @Input() labelAlignment: THorizontalAlignment;
  @Input() labelValue: string;
  @Input() placeholder: string;
  @Input() itemContentAlignment: THorizontalAlignment;
  @Input() theme: TTheme = '';
  @Input() autoScroll: boolean = false;

  @Input() value = '';
  @Input() maxLength: number;
  @Input() required: boolean;
  @Input() requiredLabel = 'Required label';

  @Output() currentValue: EventEmitter<ISimpleTextAreaResult> = new EventEmitter();

  constructor() { }

  onKeyUp(values): void {
    this.currentValue.emit(values);
  }
}
