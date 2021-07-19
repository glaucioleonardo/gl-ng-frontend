import { Component, EventEmitter, Input, Output } from '@angular/core';
import { THorizontalAlignment } from '../../../core/interfaces/alignments.interface';
import { IDropdownSettings, ListItem } from '../simple/gl-component-input-dropdown-simple.model';

@Component({
  selector: 'gl-component-input-dropdown-label',
  templateUrl: './gl-component-input-dropdown-label.component.html',
  styleUrls: ['./gl-component-input-dropdown-label.component.scss']
})
export class GlComponentInputDropdownLabelComponent {
  @Input() labelAlignment: THorizontalAlignment;
  @Input() required: boolean;
  @Input() labelValue: string;
  @Input() requiredLabelDescription: string;
  @Input() labelId: string;

  @Input() placeholder: string;
  @Input() disabled: boolean;
  @Input() settings: IDropdownSettings;
  @Input() selected: ListItem[];
  @Input() data: ListItem[];

  @Input() iconPreview: string;
  @Input() showIcon = false;

  @Output() $filterChange: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $dropDownClose: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $select: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $deselect: EventEmitter<ListItem> = new EventEmitter<any>();
  @Output() $selectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();
  @Output() $deselectAll: EventEmitter<ListItem[]> = new EventEmitter<any[]>();

  constructor() { }
}
