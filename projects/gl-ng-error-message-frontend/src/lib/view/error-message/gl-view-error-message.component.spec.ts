import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlViewErrorMessageComponent } from './gl-view-error-message.component';

describe('GlViewErrorMessageComponent', () => {
  let component: GlViewErrorMessageComponent;
  let fixture: ComponentFixture<GlViewErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlViewErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlViewErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
