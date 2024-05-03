import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonMenuTooltipComponent } from './gl-component-button-menu-tooltip.component';

describe('GlComponentButtonMenuTooltipComponent', () => {
  let component: GlComponentButtonMenuTooltipComponent;
  let fixture: ComponentFixture<GlComponentButtonMenuTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentButtonMenuTooltipComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonMenuTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
