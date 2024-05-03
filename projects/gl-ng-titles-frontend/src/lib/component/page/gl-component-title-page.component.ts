import { Component, Input } from '@angular/core';

@Component({
    selector: 'gl-component-title-page',
    templateUrl: './gl-component-title-page.component.html',
    styleUrls: ['./gl-component-title-page.component.scss'],
    standalone: true
})
export class GlComponentTitlePageComponent {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }
}
