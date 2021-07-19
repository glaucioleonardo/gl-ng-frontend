import { TestBed } from '@angular/core/testing';

import { GlComponentOutputsVideoPreviewService } from './gl-component-outputs-video-preview.service';

describe('GlComponentOutputsVideoPreviewService', () => {
  let service: GlComponentOutputsVideoPreviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentOutputsVideoPreviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
