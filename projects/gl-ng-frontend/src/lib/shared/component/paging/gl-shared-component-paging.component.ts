import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IItemsPerPage, IPageButtons, IPaging, TPagingType } from './gl-shared-component-paging.interface';

@Component({
  selector: 'gl-shared-component-paging',
  templateUrl: './gl-shared-component-paging.component.html',
  styleUrls: ['./gl-shared-component-paging.component.scss']
})
export class GlSharedComponentPagingComponent implements AfterViewInit {
  @Input() pageInfo: string;
  @Input() hasNext: boolean;
  @Input() hasPrevious: boolean;
  @Input() type: 'translucid' | 'dark' | '' = 'dark';
  @Input() firstPageTitle: string = 'First page';
  @Input() previousPageTitle: string = 'Previous page';
  @Input() nextPageTitle: string = 'Next page';
  @Input() lastPageTitle: string = 'Last page';
  @Input() pageDescription: string = 'Page';
  @Input() pageSize: number;
  @Input() itemsPerPageDescriptions: string = 'Items per page';
  @Input() pageSizeValue1: number = 5;
  @Input() pageSizeValue2: number = 10;
  @Input() pageSizeValue3: number = 15;
  @Input() pageSizeValue4: number = 20;
  @Input() pageSizeValue5: number = 25;

  @Input() pageButtons: IPageButtons[] = [];

  @Output() onPageChange$: EventEmitter<IPaging> = new EventEmitter();
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
        class: this.pageSize == pageSize ? 'active' : '',
        pageSize
      })
    }
  }

  onPageChange(event: MouseEvent, type: TPagingType) {
    this.onPageChange$.emit({ event, type });
  }
  setNumberOfItems(items: number) {
    this.itemsPerPage.map(x => x.class = x.pageSize == items ? 'active' : '')
    this.setNumberOfItems$.emit(items);
  }
  setPage(page: number) {
    this.setPage$.emit(page);
  }
}
