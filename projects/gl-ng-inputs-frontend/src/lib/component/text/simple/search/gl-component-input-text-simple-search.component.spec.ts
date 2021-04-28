import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentInputTextSimpleSearchComponent } from './gl-component-input-text-simple-search.component';

describe('GlComponentInputTextSimpleSearchComponent', () => {
  let component: GlComponentInputTextSimpleSearchComponent;
  let fixture: ComponentFixture<GlComponentInputTextSimpleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentInputTextSimpleSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextSimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
