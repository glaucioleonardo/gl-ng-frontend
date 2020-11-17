import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedViewErrorMessageComponent } from './gl-shared-view-error-message.component';

describe('GlSharedViewErrorMessageComponent', () => {
  let component: GlSharedViewErrorMessageComponent;
  let fixture: ComponentFixture<GlSharedViewErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedViewErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedViewErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
