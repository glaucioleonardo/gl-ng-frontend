import { TestBed } from '@angular/core/testing';

import { GlComponentsModalActionsService } from './gl-components-modal-actions.service';

describe('SharedComponentsModalActionsService', () => {
  let service: GlComponentsModalActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentsModalActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
