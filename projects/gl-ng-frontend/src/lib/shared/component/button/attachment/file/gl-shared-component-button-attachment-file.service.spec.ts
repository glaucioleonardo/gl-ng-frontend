import { TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonAttachmentFileService } from './gl-shared-component-button-attachment-file.service';

describe('GlSharedComponentButtonAttachmentService', () => {
  let service: GlSharedComponentButtonAttachmentFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentButtonAttachmentFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
