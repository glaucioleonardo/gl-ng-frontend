import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputAutocompleteSimpleComponent } from './gl-shared-component-input-autocomplete-simple.component';

describe('GlSharedComponentInputAutocompleteSimpleComponent', () => {
  let component: GlSharedComponentInputAutocompleteSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputAutocompleteSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputAutocompleteSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputAutocompleteSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
