import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class GlComponentMenuService implements OnDestroy {

  container: HTMLDivElement;
  background: HTMLDivElement;

  router: Router;

  menuHidden: Subject<boolean> = new Subject();
  opened = false;

  constructor() { }

  ngOnDestroy(): void {
    this.menuHidden.observers.map(x => x.complete());
  }

  initialize(container: HTMLDivElement, background: HTMLDivElement, router: Router): void {
    this.container = container;
    this.background = background;
    this.router = router;

    this.menuHidden.next(true);
  }

  close(event: Event): boolean {
    event.preventDefault();
    this.container.classList.remove('menu-active');
    this.background.classList.remove('visible-background');

    this.menuHidden.next(true);
    this.opened = false;
    return false;
  }
  open(event: Event): boolean {
    event.preventDefault();
    this.container.classList.add('menu-active');
    this.background.classList.add('visible-background');

    this.menuHidden.next(false);
    this.opened = true;
    return true;
  }

  goToSettings(url: string, target: string = '_blank'): void {
    window.open(url, target);
  }

  backgroundClick(event): void {
    if (this.opened) { this.close(event); }
  }
}
