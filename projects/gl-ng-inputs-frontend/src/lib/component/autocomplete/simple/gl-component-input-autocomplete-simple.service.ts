import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IResetAutocompleteValue, ISetAutocompleteValue, IUpdateOptionList
} from './gl-component-input-autocomplete-simple.interface';

@Injectable({
  providedIn: 'root'
})
export class GlComponentInputAutocompleteSimpleService implements OnDestroy {
  autocompleteList$: Subject<IUpdateOptionList> = new Subject();
  autocompleteReset$: Subject<IResetAutocompleteValue> = new Subject();
  autocompleteLoaded$: Subject<boolean> = new Subject();
  autocompleteUpdateValue$: Subject<ISetAutocompleteValue> = new Subject();

  constructor() {}

  ngOnDestroy(): void {
    this.autocompleteList$.observers.map(x => x.complete());
    this.autocompleteLoaded$.observers.map(x => x.complete());
    this.autocompleteReset$.observers.map(x => x.complete());
    this.autocompleteUpdateValue$.observers.map(x => x.complete());
  }
}
