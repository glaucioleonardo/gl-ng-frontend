import { Component, Input } from '@angular/core';

@Component({
  selector: 'gl-shared-component-title-page',
  templateUrl: './gl-shared-component-title-page.component.html',
  styleUrls: ['./gl-shared-component-title-page.component.scss']
})
export class GlSharedComponentTitlePageComponent{

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }
}
