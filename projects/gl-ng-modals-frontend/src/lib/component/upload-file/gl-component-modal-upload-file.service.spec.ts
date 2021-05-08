import { TestBed } from '@angular/core/testing';

import { GlComponentModalUploadFileService } from './gl-component-modal-upload-file.service';

describe('SharedComponentsModalUploadFileService', () => {
  let service: GlComponentModalUploadFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentModalUploadFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
