import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { GlComponentInputTextSimpleComponent } from '../gl-component-input-text-simple.component';
import { ISearchOutput } from './gl-component-input-text-simple-search.interface';

@Component({
    selector: 'gl-component-input-text-simple-search',
    templateUrl: './gl-component-input-text-simple-search.component.html',
    styleUrls: ['./gl-component-input-text-simple-search.component.scss'],
    standalone: true,
    imports: [GlComponentInputTextSimpleComponent]
})
export class GlComponentInputTextSimpleSearchComponent implements AfterViewInit{
  @Input() isOnSearch = false;
  @Output() keyDown$: EventEmitter<ISearchOutput> = new EventEmitter();

  private timeouts: any[] = [];
  search: string = null;
  searchInput: HTMLElement;

  constructor() { }

  onSearchFocus(inputComponent: GlComponentInputTextSimpleComponent, backgroundTranslucid: HTMLDivElement): void {
    // backgroundTranslucid.classList.add('highlight');
    const input = inputComponent.inputElement.nativeElement.parentElement.parentElement.parentElement;

    backgroundTranslucid.classList.remove('remove-highlight');
    input.classList.remove('remove-highlight');
    backgroundTranslucid.classList.add('highlight');
    input.classList.add('highlight');
  }
  onSearchLostFocus(inputComponent: GlComponentInputTextSimpleComponent, backgroundTranslucid: HTMLDivElement): void {
    const input = inputComponent.inputElement.nativeElement.parentElement.parentElement.parentElement;
    const activeItem = document.activeElement.id;
    if (activeItem !== 'search-input' && activeItem !== 'search-button') {
      input.classList.add('remove-highlight');
      backgroundTranslucid.classList.add('remove-highlight');
    }

    // const activeItem = document.activeElement.id;
    // if (activeItem !== 'search-input' && activeItem !== 'search-button') {
    //
    //   backgroundTranslucid.classList.add('remove-highlight');
    //
    //   this.timeouts.push(
    //     setTimeout(() => {
    //       backgroundTranslucid.classList.remove('remove-highlight');
    //       backgroundTranslucid.classList.remove('highlight');
    //
    //       this.clearTimeouts();
    //     }, 500)
    //   );
    // }
  }

  onSearchKeyDown(inputComponent: GlComponentInputTextSimpleComponent, event, click: boolean = false): void {
    const input = inputComponent.inputElement.nativeElement;
    const isEnter = !click && event.key?.toLowerCase() === 'enter';

    if (click || isEnter) {
      this.keyDown$.emit({
        value: input.value?.trim(),
        isOnSearch: this.isOnSearch
      });
    }
  }

  private clearTimeouts(): void {
    for (const timeout of this.timeouts) {
      clearInterval(timeout);
      clearTimeout(timeout);

      this.timeouts.shift();
    }
  }

  ngAfterViewInit(): void {
    this.searchInput = document.querySelector('#search-input');
  }
}
