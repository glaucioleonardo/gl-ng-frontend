import { TestBed } from '@angular/core/testing';

import { GlComponentModalLoadingService } from './gl-component-modal-loading.service';

describe('GlSharedComponentModalLoadingService', () => {
  let service: GlComponentModalLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentModalLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
