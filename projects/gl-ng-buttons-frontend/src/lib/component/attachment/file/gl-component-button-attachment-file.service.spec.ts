import { TestBed } from '@angular/core/testing';

import { GlComponentButtonAttachmentFileService } from './gl-component-button-attachment-file.service';

describe('GlComponentButtonAttachmentService', () => {
  let service: GlComponentButtonAttachmentFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentButtonAttachmentFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
