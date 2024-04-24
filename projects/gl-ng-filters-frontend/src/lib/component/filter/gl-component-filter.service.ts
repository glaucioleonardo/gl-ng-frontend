import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlComponentFilterService {
  container: HTMLDivElement;
  background: HTMLDivElement;
  menuNavContainer: HTMLDivElement;
  opened = false;
  menuHidden$: Subject<boolean> = new Subject();
  router: Router;
  isIE: boolean;
  applyPartialResult: () => Promise<void>;

  constructor() { }

  initialize(
    container: HTMLDivElement,
    background: HTMLDivElement,
    menuNavContainer: HTMLDivElement,
    router: Router,
    applyPartialResult: () => Promise<void>
  ): void {
    this.container = container;
    this.background = background;
    this.menuNavContainer = menuNavContainer;
    this.router = router;
    this.menuHidden$.next(true);
    this.applyPartialResult = applyPartialResult;
  }

  backgroundClick(event): void {
    if (this.opened) { this.close(event); }
  }
  open(event: Event): boolean {
    event.preventDefault();


    this.container.classList.add('menu-active');
    this.background.classList.add('visible-background');

    setTimeout(() => {
      if (this.isIE) {
        this.menuNavContainer.scrollTop = 0;
      } else {
        this.menuNavContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);

    this.menuHidden$.next(false);
    this.opened = true;

    setTimeout(async (): Promise<void> => {
      if(this.applyPartialResult !== null && this.applyPartialResult !== undefined) {
        await this.applyPartialResult();
      }
    }, 100);

    return true;
  }
  close(event: Event): boolean {
    event.preventDefault();
    this.container.classList.remove('menu-active');
    this.background.classList.remove('visible-background');

    this.menuHidden$.next(true);
    this.opened = false;
    return false;
  }
}
