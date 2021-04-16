import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GlComponentMenuService } from './gl-component-menu.service';
import { IMenuItem, IMenuItemComplex } from './item/gl-component-menu-item.interface';
import { TMenuPosition } from './gl-component-menu.interface';

@Component({
  selector: 'gl-component-menu',
  templateUrl: './gl-component-menu.component.html',
  styleUrls: ['./gl-component-menu.component.scss']
})
export class GlComponentMenuComponent implements OnInit {
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLDivElement>;
  @ViewChild('background', { static: true, read: ElementRef }) background: ElementRef<HTMLDivElement>;

  @Input() title: string;
  @Input() subtitle: string;
  @Input() systemVersion: string;
  @Input() menuItems: IMenuItem[];
  @Input() menuItemsComplex: IMenuItemComplex[];
  @Input() showSettings: boolean;
  @Input() className: string;
  @Input() settingsUrl: string;
  @Input() settingsTarget = '_blank';
  @Input() menuLogo = '../assets/img/logo/glaucio-logo-colored.svg';
  @Input() menuBottomTitle: string;
  @Input() menuBottomVersion = '1.0.0';
  @Input() menuPosition: TMenuPosition = 'right';

  @Output() $click: EventEmitter<any> = new EventEmitter();

  readonly closeButton = '../assets/img/icon/side-menu/close.svg';
  readonly settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';

  constructor(
    public service: GlComponentMenuService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
  }
}
