import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';
import { IMenuItem, IMenuItemComplex } from './item/gl-shared-component-menu-item.interface';
import { TMenuPosition } from './gl-shared-component-menu.interface';

@Component({
  selector: 'gl-shared-component-menu',
  templateUrl: './gl-shared-component-menu.component.html',
  styleUrls: ['./gl-shared-component-menu.component.scss']
})
export class GlSharedComponentMenuComponent implements OnInit {
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
  @Input() settingsTarget: string = '_blank';
  @Input() menuLogo: string = '../assets/img/logo/glaucio-logo-colored.svg';
  @Input() menuBottomTitle: string;
  @Input() menuBottomVersion: string = '1.0.0';
  @Input() menuPosition: TMenuPosition = 'right';

  @Output() $click: EventEmitter<any> = new EventEmitter();

  readonly closeButton = '../assets/img/icon/side-menu/close.svg';
  readonly settingsButton = '../assets/img/icon/side-menu/admin-settings.svg';

  constructor(
    public service: GlSharedComponentMenuService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.service.initialize(this.container.nativeElement, this.background.nativeElement, this.router);
  }
}
