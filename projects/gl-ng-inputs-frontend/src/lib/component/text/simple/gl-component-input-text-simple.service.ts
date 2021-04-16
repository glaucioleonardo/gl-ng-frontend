import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlComponentInputTextSimpleService {

  updateInputMask$: Subject<undefined> = new Subject();

  constructor() { }

  updateInputMask(): void {
    this.updateInputMask$.next();
  }
}
