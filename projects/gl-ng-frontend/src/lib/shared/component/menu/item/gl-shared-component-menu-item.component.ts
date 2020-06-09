import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gl-shared-component-menu-item',
  templateUrl: './gl-shared-component-menu-item.component.html',
  styleUrls: ['./gl-shared-component-menu-item.component.scss']
})
export class GlSharedComponentMenuItemComponent {
  @Input() itemClass: string;
  @Input() absolute: boolean;
  @Input() menuLogo: string = '../assets/img/logo/glaucio-logo-colored.svg';
  @Input() src = this.menuLogo;
  @Input() href;
  @Input() alt;
  @Input() content;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor(private _router: Router) { }

  openAbsoluteLink(event, href) {
    this._router.navigate(['/externalRedirect', { externalUrl: href }], {
      skipLocationChange: true,
    }).then(() => {
      console.log(`Redirected to: ${href}`);
    });

    event.preventDefault();
  }
}
