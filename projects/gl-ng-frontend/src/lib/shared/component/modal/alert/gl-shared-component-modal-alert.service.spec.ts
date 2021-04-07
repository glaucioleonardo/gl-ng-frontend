import { TestBed } from '@angular/core/testing';

import { GlSharedComponentModalAlertService } from './gl-shared-component-modal-alert.service';

describe('GlSharedComponentModalAlertService', () => {
  let service: GlSharedComponentModalAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentModalAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
