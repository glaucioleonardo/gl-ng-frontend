import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonImageTooltipComponent } from './gl-component-button-image-tooltip.component';

describe('GlComponentButtonImageTooltipComponent', () => {
  let component: GlComponentButtonImageTooltipComponent;
  let fixture: ComponentFixture<GlComponentButtonImageTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentButtonImageTooltipComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonImageTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
