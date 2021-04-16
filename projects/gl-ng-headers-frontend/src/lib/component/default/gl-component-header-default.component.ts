import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuButton } from '../../../../../gl-ng-buttons-frontend/src/lib/component/menu/simple/gl-component-button-menu-simple.interface';
import { THeaderType } from './gl-component-header-default.interface';

@Component({
  selector: 'gl-component-header-default',
  templateUrl: './gl-component-header-default.component.html',
  styleUrls: ['./gl-component-header-default.component.scss']
})
export class GlComponentHeaderDefaultComponent {
  @Input() systemLogo = false;
  @Input() labelModel: string;
  @Input() labelId: number;
  @Input() labelArea: string;
  @Input() type: THeaderType = '';
  @Input() title: string;
  @Input() subtitle: string;
  @Input() menuButtons: IMenuButton[];
  @Output() keyDown: EventEmitter<any> = new EventEmitter();

  @Input() readonly: boolean;

  constructor() { }

  onKeyDown(event): void {
    this.keyDown.emit(event);
  }
}
