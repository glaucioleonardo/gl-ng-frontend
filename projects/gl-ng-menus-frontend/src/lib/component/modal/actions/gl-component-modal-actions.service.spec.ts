import { TestBed } from '@angular/core/testing';

import { GlComponentModalActionsService } from './gl-component-modal-actions.service';

describe('ActionsService', () => {
  let service: GlComponentModalActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentModalActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
