
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputDatepickerLabelComponent } from './gl-component-input-datepicker-label.component';

describe('GlComponentInputDatepickerLabelComponent', () => {
  let component: GlComponentInputDatepickerLabelComponent;
  let fixture: ComponentFixture<GlComponentInputDatepickerLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputDatepickerLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputDatepickerLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
