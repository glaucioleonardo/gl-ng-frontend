import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputAutocompleteSimpleComponent } from './gl-component-input-autocomplete-simple.component';

describe('GlComponentInputAutocompleteSimpleComponent', () => {
  let component: GlComponentInputAutocompleteSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputAutocompleteSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputAutocompleteSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputAutocompleteSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
