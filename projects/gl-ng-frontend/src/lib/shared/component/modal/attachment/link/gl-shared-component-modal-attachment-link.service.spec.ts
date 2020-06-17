import { TestBed } from '@angular/core/testing';

import { GlSharedComponentModalAttachmentLinkService } from './gl-shared-component-modal-attachment-link.service';

describe('GlSharedComponentModalAttachmentLinkService', () => {
  let service: GlSharedComponentModalAttachmentLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentModalAttachmentLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
