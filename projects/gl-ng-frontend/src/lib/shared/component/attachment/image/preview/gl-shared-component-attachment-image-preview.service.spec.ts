import { TestBed } from '@angular/core/testing';

import { GlSharedComponentAttachmentImagePreviewService } from './gl-shared-component-attachment-image-preview.service';

describe('GlSharedComponentAttachmentImagePreviewService', () => {
  let service: GlSharedComponentAttachmentImagePreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentAttachmentImagePreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
