import { TestBed } from '@angular/core/testing';

import { GlComponentMenuService } from './gl-component-menu.service';

describe('GlSharedComponentMenuService', () => {
  let service: GlComponentMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
