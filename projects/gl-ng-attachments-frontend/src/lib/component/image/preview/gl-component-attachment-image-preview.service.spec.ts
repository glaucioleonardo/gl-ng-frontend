import { TestBed } from '@angular/core/testing';

import { GlComponentAttachmentImagePreviewService } from './gl-component-attachment-image-preview.service';

describe('GlSharedComponentAttachmentImagePreviewService', () => {
  let service: GlComponentAttachmentImagePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentAttachmentImagePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
