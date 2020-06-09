import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentModalAlertComponent } from './gl-shared-component-modal-alert.component';

describe('GlSharedComponentModalAlertComponent', () => {
  let component: GlSharedComponentModalAlertComponent;
  let fixture: ComponentFixture<GlSharedComponentModalAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentModalAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentModalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
