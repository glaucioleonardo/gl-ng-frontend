import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IMenuButton } from '../../../../../gl-ng-buttons-frontend/src/lib/component/menu/simple/gl-component-button-menu-simple.interface';
import { THeaderTheme } from './gl-component-header-default.interface';
import { GlComponentButtonMenuTooltipComponent } from '../../../../../gl-ng-buttons-frontend/src/lib/component/menu/tooltip/gl-component-button-menu-tooltip.component';
import { GlComponentTitlePageComponent } from '../../../../../gl-ng-titles-frontend/src/lib/component/page/gl-component-title-page.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'gl-component-header-default',
    templateUrl: './gl-component-header-default.component.html',
    styleUrls: ['./gl-component-header-default.component.scss'],
    standalone: true,
    imports: [NgIf, GlComponentTitlePageComponent, NgFor, GlComponentButtonMenuTooltipComponent]
})
export class GlComponentHeaderDefaultComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() systemLogo = false;
  @Input() labelModel: string;
  @Input() labelId: number;
  @Input() labelArea: string;
  @Input() theme: THeaderTheme = '';
  @Input() title: string;
  @Input() subtitle: string;
  @Input() menuButtons: IMenuButton[];
  @Input() hideOnScrollDown = false;
  @Output() keyDown$: EventEmitter<any> = new EventEmitter();

  @Input() readonly: boolean;

  private _previousScrollPosition = window.pageYOffset;
  private _header: HTMLElement;

  constructor() { }

  onKeyDown(event): void {
    this.keyDown$.emit(event);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true); // third parameter
  }

  ngOnInit(): void {
    if (this.hideOnScrollDown) {
      window.addEventListener('scroll', this.scroll, true); // third parameter
    }
  }
  ngAfterViewInit(): void {
    this._header = document.querySelector('gl-component-header-default');

    this._header.style.position = 'fixed';
    this._header.style.top = '0';
    this._header.style.zIndex = '100';
    this._header.style.width = '100vw';
  }

  scroll = (): void => {
    const currentScrollPosition = window.pageYOffset <= 0 ? 0 : window.pageYOffset;

    if (this._header != null) {
      if (currentScrollPosition === 0 || this._previousScrollPosition > currentScrollPosition) {
        this._header.style.top = '0';
      } else {
        this._header.style.top = '-' + this._header.getBoundingClientRect().height.toString() + 'px';
      }
      this._previousScrollPosition = currentScrollPosition;
    }
  }
}
