import { TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextSimpleService } from './gl-shared-component-input-text-simple.service';

describe('GlSharedComponentInputTextSimpleService', () => {
  let service: GlSharedComponentInputTextSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentInputTextSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
