import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlSharedComponentFilterService {
  container: HTMLDivElement;
  background: HTMLDivElement;
  menuNavContainer: HTMLDivElement;
  opened: boolean = false;

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
  ) {
    this.container = container;
    this.background = background;
    this.menuNavContainer = menuNavContainer;
    this.router = router;
    this.menuHidden$.next(true);
  }

  backgroundClick(event) {
    if (this.opened) { this.close(event); }
  }
  open(event: Event) {
    event.preventDefault();
    this.applyPartialResult;
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
    return true;
  }
  close(event: Event) {
    event.preventDefault();
    this.container.classList.remove('menu-active');
    this.background.classList.remove('visible-background');

    this.menuHidden$.next(true);
    this.opened = false;
    return false;
  }
}
