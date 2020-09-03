import { TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerSimpleService } from './gl-shared-component-input-datepicker-simple.service';

describe('GlSharedComponentInputAutocompleteSimpleService', () => {
  let service: GlSharedComponentInputDatepickerSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentInputDatepickerSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
