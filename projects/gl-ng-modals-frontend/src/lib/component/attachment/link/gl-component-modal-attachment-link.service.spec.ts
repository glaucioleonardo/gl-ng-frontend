import { TestBed } from '@angular/core/testing';

import { GlComponentModalAttachmentLinkService } from './gl-component-modal-attachment-link.service';

describe('GlSharedComponentModalAttachmentLinkService', () => {
  let service: GlComponentModalAttachmentLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentModalAttachmentLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
