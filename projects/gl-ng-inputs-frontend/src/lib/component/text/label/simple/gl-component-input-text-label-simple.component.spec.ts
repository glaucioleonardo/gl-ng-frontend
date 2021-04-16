import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputTextLabelSimpleComponent } from './gl-component-input-text-label-simple.component';

describe('GlComponentInputTextLabelSimpleComponent', () => {
  let component: GlComponentInputTextLabelSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputTextLabelSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputTextLabelSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextLabelSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
