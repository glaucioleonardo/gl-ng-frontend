import { TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonAttachmentService } from './gl-shared-component-button-attachment.service';

describe('GlSharedComponentButtonAttachmentService', () => {
  let service: GlSharedComponentButtonAttachmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentButtonAttachmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
