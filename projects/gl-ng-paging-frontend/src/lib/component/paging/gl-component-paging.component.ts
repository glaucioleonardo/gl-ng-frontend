import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemsPerPage, IPageButtons, IPaging, TPagingThemeType, TPagingType } from './gl-component-paging.interface';

@Component({
  selector: 'gl-component-paging',
  templateUrl: './gl-component-paging.component.html',
  styleUrls: ['./gl-component-paging.component.scss']
})
export class GlComponentPagingComponent implements AfterViewInit {
  @Input() pageInfo: string;
  @Input() hasNext: boolean;
  @Input() hasPrevious: boolean;
  @Input() type: TPagingThemeType = 'dark';
  @Input() firstPageTitle = 'First page';
  @Input() previousPageTitle = 'Previous page';
  @Input() nextPageTitle = 'Next page';
  @Input() lastPageTitle = 'Last page';
  @Input() pageDescription = 'Page';
  @Input() pageSize: number;
  @Input() itemsPerPageDescriptions = 'Items per page';
  @Input() pageSizeValue1 = 5;
  @Input() pageSizeValue2 = 10;
  @Input() pageSizeValue3 = 15;
  @Input() pageSizeValue4 = 20;
  @Input() pageSizeValue5 = 25;

  @Input() pageButtons: IPageButtons[] = [];

  @Output() pageChange$: EventEmitter<IPaging> = new EventEmitter();
  @Output() setNumberOfItems$: EventEmitter<number> = new EventEmitter();
  @Output() setPage$: EventEmitter<number> = new EventEmitter();

  itemsPerPage: IItemsPerPage[] = [];
  readonly firstIcon: string = '../assets/img/icon/paging/first.svg';
  readonly previousIcon: string = '../assets/img/icon/paging/previous.svg';
  readonly nextIcon: string = '../assets/img/icon/paging/next.svg';
  readonly lastIcon: string = '../assets/img/icon/paging/last.svg';

  constructor() {}

  ngAfterViewInit(): void {
    for (let i = 1; i <= 5; i++) {
      const pageSize = +this[`pageSizeValue${i}`];

      this.itemsPerPage.push({
        title: `${pageSize} ${this.itemsPerPageDescriptions.toLowerCase()}`,
        innerValue: pageSize?.toString(),
        value: pageSize?.toString(),
        theme: this.pageSize === pageSize ? 'active' : '',
        pageSize
      });
    }
  }

  onPageChange(event: MouseEvent, type: TPagingType): void {
    this.pageChange$.emit({ event, type });
  }
  setNumberOfItems(items: number): void {
    this.itemsPerPage.map(x => x.theme = x.pageSize === items ? 'active' : '');
    this.setNumberOfItems$.emit(items);
  }
  setPage(page: number): void {
    this.setPage$.emit(page);
  }
}
