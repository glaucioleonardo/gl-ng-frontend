import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';

@Component({
  selector: 'gl-shared-component-filter',
  templateUrl: './gl-shared-component-filter.component.html',
  styleUrls: ['./gl-shared-component-filter.component.scss']
})
export class GlSharedComponentFilterComponent implements AfterViewInit {
  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLDivElement>;
  @ViewChild('background', { static: true, read: ElementRef }) background: ElementRef<HTMLDivElement>;
  @ViewChild('menuNavContainer') menuNavContainer: ElementRef<HTMLDivElement>;

  @Input() title: string;
  @Input() subtitle: string = 'Filter';
  @Input() type: 'translucid' | '' = '';
  @Input() closeButton: string = '../assets/img/icon/menu/close.svg';
  @Input() partialResult: number;
  @Input() partialResultDescription: string = 'Partial results with these filters:';
  @Input() itemSingularDescription: string = 'item';
  @Input() itemPluralDescription: string = 'items';
  @Input() applyButtonDescription: string = 'Apply filter';
  @Input() clearButtonDescription: string = 'Clear filter';
  @Input() buttonClass: 'light-translucid' | '' = 'light-translucid';

  @Input() isIE: boolean = false;
  @Input() applyPartialResult: () => Promise<void>;

  @Output() applyFilter$: EventEmitter<void> = new EventEmitter();
  @Output() clearFilter$: EventEmitter<void> = new EventEmitter();

  constructor(
    public router: Router,
    public service: GlSharedComponentFilterService
  ) {
    service.applyPartialResult = this.applyPartialResult;
  }

  ngAfterViewInit(): void {
    this.service.initialize(
      this.container.nativeElement,
      this.background.nativeElement,
      this.menuNavContainer.nativeElement,
      this.router
    );
  }

  onApply() {
    this.applyFilter$.emit();
  }

  onClear() {
    this.clearFilter$.emit();
  }
}
