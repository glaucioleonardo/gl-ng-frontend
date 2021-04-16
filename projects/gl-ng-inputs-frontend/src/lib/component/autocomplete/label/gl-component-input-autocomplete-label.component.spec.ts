import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputAutocompleteLabelComponent } from './gl-component-input-autocomplete-label.component';

describe('GlComponentInputAutocompleteLabelSharepointComponent', () => {
  let component: GlComponentInputAutocompleteLabelComponent;
  let fixture: ComponentFixture<GlComponentInputAutocompleteLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputAutocompleteLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputAutocompleteLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
