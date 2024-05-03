import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IMenuItem, TMenuItemTheme, TUrlTarget } from './gl-component-menu-item.interface';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { GlComponentMenuService } from '../gl-component-menu.service';
import * as SmoothScroll from 'smooth-scroll';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'gl-component-menu-item',
    templateUrl: './gl-component-menu-item.component.html',
    styleUrls: ['./gl-component-menu-item.component.scss'],
    animations: [
        trigger('fadeInOut', [
            state('', style({
                opacity: 0,
                height: 0,
                transform: 'scaleY(0)'
            })),
            transition(':enter', [
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
            transition(':leave', [
                animate(250, style({
                    opacity: 0,
                    height: 0,
                    transform: 'scaleY(0)'
                }))
            ])
        ])
    ],
    standalone: true,
    imports: [NgIf, RouterLink, NgFor]
})
export class GlComponentMenuItemComponent {
  @Input() itemClass: TMenuItemTheme = 'dark';
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
    private _menu: GlComponentMenuService
  ) {

  }

  openAbsoluteLink(event, href, target: TUrlTarget = '_self'): void {
    this._router.navigate(['/externalRedirect', { externalUrl: href, target}], {
      skipLocationChange: true,
    }).then(() => {
      console.log(`Redirected to: ${href}`);
    });

    event.preventDefault();
  }

  toggleActive(): void {
    this.active = !this.active;
  }

  onClick(event): void {
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
