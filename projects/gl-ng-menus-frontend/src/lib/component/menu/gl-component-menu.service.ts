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

  private _timeouts: any[] = [];

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
    this.background.classList.add('hide-background');
    this.container.classList.remove('menu-active');

    this._timeouts.push(setTimeout(() => {
      this.background.classList.remove('hide-background');
      this.background.classList.remove('visible-background');
    }, 1100));

    this.menuHidden.next(true);
    this.opened = false;
    return false;
  }
  open(event: Event): boolean {
    event.preventDefault();
    this.container.classList.add('menu-active');

    for (const timeout of this._timeouts) {
      clearInterval(timeout);
    }

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
