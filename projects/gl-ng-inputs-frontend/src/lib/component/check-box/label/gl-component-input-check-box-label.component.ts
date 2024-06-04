import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment } from '../../../core/interfaces/alignments.interface';
import { GlComponentInputCheckBoxSimpleComponent } from '../simple/gl-component-input-check-box-simple.component';
import { GlComponentTitleLabelSimpleComponent } from '../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.component';
import { TLabelColor, TLabelTheme } from '../../../../../../gl-ng-titles-frontend/src/lib/component/label/simple/gl-component-title-label-simple.interface';

@Component({
    selector: 'gl-component-input-check-box-label',
    templateUrl: './gl-component-input-check-box-label.component.html',
    styleUrls: ['./gl-component-input-check-box-label.component.scss'],
    standalone: true,
    imports: [GlComponentTitleLabelSimpleComponent, GlComponentInputCheckBoxSimpleComponent]
})
export class GlComponentInputCheckBoxLabelComponent {

  @Input() checked = false;
  @Input() showBackground = true;

  @Input() labelId: string;
  @Input() labelAlignment: THorizontalAlignment = 'center';
  @Input() required: boolean;
  @Input() labelValue: string;
  @Input() requiredLabelDescription: string;
  @Input() labelTheme: TLabelTheme = ''
  @Input() labelColor: TLabelColor = '';

  @Output() checked$: EventEmitter<boolean> = new EventEmitter();

  constructor() { }
}
