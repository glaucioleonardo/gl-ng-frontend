import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDatepickerSimpleComponent } from './gl-shared-component-input-datepicker-simple.component';

describe('GlSharedComponentInputAutocompleteSimpleComponent', () => {
  let component: GlSharedComponentInputDatepickerSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDatepickerSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDatepickerSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDatepickerSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
