import { TestBed } from '@angular/core/testing';

import { GlSharedComponentMenuService } from './gl-shared-component-menu.service';

describe('GlSharedComponentMenuService', () => {
  let service: GlSharedComponentMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlSharedComponentMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
