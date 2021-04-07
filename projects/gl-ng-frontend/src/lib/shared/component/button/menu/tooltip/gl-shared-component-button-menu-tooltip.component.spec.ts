import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentButtonMenuTooltipComponent } from './gl-shared-component-button-menu-tooltip.component';

describe('GlSharedComponentButtonMenuTooltipComponent', () => {
  let component: GlSharedComponentButtonMenuTooltipComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonMenuTooltipComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonMenuTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonMenuTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
