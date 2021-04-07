import { TestBed } from '@angular/core/testing';

import { GlSharedComponentFilterService } from './gl-shared-component-filter.service';

describe('GlSharedComponentFilterService', () => {
  let service: GlSharedComponentFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
