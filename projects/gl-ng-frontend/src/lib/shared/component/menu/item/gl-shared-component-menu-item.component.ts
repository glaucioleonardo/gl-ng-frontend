import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IMenuItem, TUrlTarget } from './gl-shared-component-menu-item.interface';
import {style, state, animate, transition, trigger} from '@angular/animations';
import {GlSharedComponentMenuService} from '../gl-shared-component-menu.service';
import * as SmoothScroll from 'smooth-scroll';

@Component({
  selector: 'gl-shared-component-menu-item',
  templateUrl: './gl-shared-component-menu-item.component.html',
  styleUrls: ['./gl-shared-component-menu-item.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('', style({
        opacity: 0,
        height: 0,
        transform: 'scaleY(0)'
      })),
      transition(':enter', [   // :enter is alias to 'void => *'
        style({
          opacity: 0,
          height: 0,
          transform: 'scaleY(0)'
        }),
        animate('0.3s ease-in', style({
          opacity: 1,
          height: '*',
          transform: 'scaleY(1)'
        }))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(250, style({
          opacity: 0,
          height: 0,
          transform: 'scaleY(0)'
        }))
      ])
    ])
  ]
})
export class GlSharedComponentMenuItemComponent {
  @Input() itemClass: 'translucid' | 'dark' | '' = 'dark';
  @Input() absolute: boolean;
  @Input() menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
  @Input() src = this.menuLogo;
  @Input() href: string;
  @Input() fragment: string;
  @Input() alt;
  @Input() content;
  @Input() target: TUrlTarget = '_self';

  @Input() hasSubitem: boolean;
  @Input() active: boolean;
  @Input() subItems: IMenuItem[];

  @Output() $click: EventEmitter<any> = new EventEmitter();

  constructor(
    private _router: Router,
    private _menu: GlSharedComponentMenuService
  ) {

  }

  openAbsoluteLink(event, href, target: TUrlTarget = '_self') {
    this._router.navigate(['/externalRedirect', { externalUrl: href, target}], {
      skipLocationChange: true,
    }).then(() => {
      console.log(`Redirected to: ${href}`);
    });

    event.preventDefault();
  }

  toggleActive() {
    this.active = !this.active;
  }

  onClick(event) {
    if (this.fragment != null) {
      this._menu.close(event);

      const element: HTMLElement = document.querySelector(`#${this.fragment}`);
      const scroll = new SmoothScroll(`#${this.fragment}`, {
        speed: 1000,
        speedAsDuration: true,
        easing: 'easeInOutQuad',
        updateURL: true,
        popstate: true
      });
      scroll.animateScroll(element);

      this.$click.emit({ event, href: this.href, fragment: this.fragment });
    }
  }
}
