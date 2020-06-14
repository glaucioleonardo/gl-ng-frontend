import { TestBed } from '@angular/core/testing';

import { GlSharedComponentInputAutocompleteSimpleService } from './gl-shared-component-input-autocomplete-simple.service';

describe('GlSharedComponentInputAutocompleteSimpleService', () => {
  let service: GlSharedComponentInputAutocompleteSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentInputAutocompleteSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
