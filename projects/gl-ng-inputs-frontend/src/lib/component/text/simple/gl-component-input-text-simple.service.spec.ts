import { TestBed } from '@angular/core/testing';
import { GlComponentInputTextSimpleService } from './gl-component-input-text-simple.service';

describe('GlComponentInputTextSimpleService', () => {
  let service: GlComponentInputTextSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlComponentInputTextSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
