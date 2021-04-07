import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentButtonImageTooltipComponent } from './gl-shared-component-button-image-tooltip.component';

describe('GlSharedComponentButtonImageTooltipComponent', () => {
  let component: GlSharedComponentButtonImageTooltipComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonImageTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonImageTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonImageTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
