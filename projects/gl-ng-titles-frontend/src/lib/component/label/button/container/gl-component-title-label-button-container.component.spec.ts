import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentTitleLabelButtonContainerComponent } from './gl-component-title-label-button-container.component';

describe('GlComponentTitleLabelButtonContainerComponent', () => {
  let component: GlComponentTitleLabelButtonContainerComponent;
  let fixture: ComponentFixture<GlComponentTitleLabelButtonContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentTitleLabelButtonContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentTitleLabelButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
