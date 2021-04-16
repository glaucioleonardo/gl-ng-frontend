import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gl-component-button-interface',
  templateUrl: './gl-component-button-interface.component.html',
  styleUrls: ['./gl-component-button-interface.component.scss']
})
export class GlComponentButtonInterfaceComponent implements OnInit {
  @Input() innerHtml: string;
  @Input() buttonClick: () => void;
  @Input() imageSrc: string;
  @Input() imageAlt: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
