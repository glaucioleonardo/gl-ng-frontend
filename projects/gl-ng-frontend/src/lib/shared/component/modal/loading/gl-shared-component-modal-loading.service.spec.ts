import { TestBed } from '@angular/core/testing';

import { GlSharedComponentModalLoadingService } from './gl-shared-component-modal-loading.service';

describe('GlSharedComponentModalLoadingService', () => {
  let service: GlSharedComponentModalLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentModalLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
