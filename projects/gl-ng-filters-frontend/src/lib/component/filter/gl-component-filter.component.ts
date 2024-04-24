import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { TFilterButtonClass, TFilterType } from './gl-component-filter.interface';
import { GlComponentFilterService } from './gl-component-filter.service';

@Component({
  selector: 'gl-component-filter',
  templateUrl: './gl-component-filter.component.html',
  styleUrls: ['./gl-component-filter.component.scss']
})
export class GlComponentFilterComponent implements AfterViewInit {
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLDivElement>;
  @ViewChild('background', { static: true, read: ElementRef }) background: ElementRef<HTMLDivElement>;
  @ViewChild('menuNavContainer') menuNavContainer: ElementRef<HTMLDivElement>;

  @Input() title: string;
  @Input() subtitle = 'Filter';
  @Input() type: TFilterType = '';
  @Input() closeButton = '../assets/img/icon/menu/close.svg';
  @Input() partialResult: number;
  @Input() partialResultDescription = 'Partial results with these filters:';
  @Input() itemSingularDescription = 'item';
  @Input() itemPluralDescription = 'items';
  @Input() applyButtonDescription = 'Apply filter';
  @Input() clearButtonDescription = 'Clear filter';
  @Input() buttonClass: TFilterButtonClass = 'light-translucid';

  @Input() isIE = false;
  @Input() applyPartialResult: () => Promise<void>;

  @Output() applyFilter$: EventEmitter<void> = new EventEmitter();
  @Output() clearFilter$: EventEmitter<void> = new EventEmitter();

  constructor(
    public router: Router,
    public service: GlComponentFilterService
  ) {}

  ngAfterViewInit(): void {
    this.service.initialize(
      this.container.nativeElement,
      this.background.nativeElement,
      this.menuNavContainer.nativeElement,
      this.router,
      this.applyPartialResult
    );


  }

  onApply(): void {
    this.applyFilter$.emit();
  }

  onClear(): void {
    this.clearFilter$.emit();
  }
}
