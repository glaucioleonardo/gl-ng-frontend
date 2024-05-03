import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentModalAlertComponent } from './gl-component-modal-alert.component';

describe('GlComponentModalAlertComponent', () => {
  let component: GlComponentModalAlertComponent;
  let fixture: ComponentFixture<GlComponentModalAlertComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentModalAlertComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
