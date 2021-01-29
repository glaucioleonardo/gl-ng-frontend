import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { IResetAutocompleteValue, ISetAutocompleteValue, IUpdateOptionList } from './gl-shared-component-input-autocomplete-simple.interface';
export declare class GlSharedComponentInputAutocompleteSimpleService implements OnDestroy {
    autocompleteList$: Subject<IUpdateOptionList>;
    autocompleteReset$: Subject<IResetAutocompleteValue>;
    autocompleteLoaded$: Subject<boolean>;
    autocompleteUpdateValue$: Subject<ISetAutocompleteValue>;
    constructor();
    ngOnDestroy(): void;
}
