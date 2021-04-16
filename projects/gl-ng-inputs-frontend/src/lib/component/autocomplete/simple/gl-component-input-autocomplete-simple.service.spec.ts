import { TestBed } from '@angular/core/testing';
import { GlComponentInputAutocompleteSimpleService } from './gl-component-input-autocomplete-simple.service';

describe('GlComponentInputAutocompleteSimpleService', () => {
  let service: GlComponentInputAutocompleteSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentInputAutocompleteSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
