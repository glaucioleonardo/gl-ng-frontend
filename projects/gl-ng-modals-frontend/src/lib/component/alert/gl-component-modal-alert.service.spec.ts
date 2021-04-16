import { TestBed } from '@angular/core/testing';

import { GlComponentModalAlertService } from './gl-component-modal-alert.service';

describe('GlComponentModalAlertService', () => {
  let service: GlComponentModalAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentModalAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
