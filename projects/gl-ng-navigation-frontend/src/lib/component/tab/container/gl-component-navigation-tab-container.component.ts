import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INavigationTab } from '../simple/gl-component-navigation-tab-simple.interface';

@Component({
  selector: 'gl-component-navigation-tab-container',
  templateUrl: './gl-component-navigation-tab-container.component.html',
  styleUrls: ['./gl-component-navigation-tab-container.component.scss']
})
export class GlComponentNavigationTabContainerComponent {

  @Input() navigationTabs: INavigationTab[];
  @Output() activatedTab$: EventEmitter<number> = new EventEmitter();

  constructor() { }

  activate(sequence: number): void {
    this.reset();
    const active = this.navigationTabs.filter(x => x.sequence === sequence);
    active[0].active = true;
    this.activatedTab$.emit(sequence);
  }

  reset(): void {
    for (const item of this.navigationTabs) {
      item.active = false;
    }
  }

  tabHovering(hovering: boolean, sequence: number, active: boolean): void {
    const tab = document.querySelector(`#navigation-tab-${sequence}`) as HTMLDivElement;

    if (!active) {
      if (hovering) {
        tab.style.zIndex = '990';
      } else {
        tab.style.zIndex = (100 - sequence).toString();
      }
    }
  }
}
