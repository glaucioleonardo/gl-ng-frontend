import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuButton } from '../../button/menu/simple/gl-shared-component-button-menu-simple.interface';

@Component({
  selector: 'gl-shared-component-header-default',
  templateUrl: './gl-shared-component-header-default.component.html',
  styleUrls: ['./gl-shared-component-header-default.component.scss']
})
export class GlSharedComponentHeaderDefaultComponent {
  @Input() systemLogo: boolean = false;
  @Input() labelModel: string;
  @Input() labelId: number;
  @Input() labelArea: string;
  @Input() type: 'only-buttons' | 'light' | 'inverted' | 'dark-translucid' | 'light-translucid' | '';
  @Input() title: string;
  @Input() subtitle: string;
  @Input() menuButtons: IMenuButton[];
  @Output() keyDown: EventEmitter<any> = new EventEmitter();

  @Input() readonly: boolean;

  constructor() { }

  onKeyDown(event) {
    this.keyDown.emit(event);
  }
}
