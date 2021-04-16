import { TestBed } from '@angular/core/testing';

import { GlComponentFilterService } from './gl-component-filter.service';

describe('GlComponentFilterService', () => {
  let service: GlComponentFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
