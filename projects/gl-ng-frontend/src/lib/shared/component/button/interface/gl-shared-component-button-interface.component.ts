import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gl-shared-component-button-interface',
  templateUrl: './gl-shared-component-button-interface.component.html',
  styleUrls: ['./gl-shared-component-button-interface.component.scss']
})
export class GlSharedComponentButtonInterfaceComponent implements OnInit {
  @Input() innerHtml: string;
  @Input() buttonClick: () => void;
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
