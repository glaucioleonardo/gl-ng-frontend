import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentTitleLabelButtonSimpleComponent } from './gl-component-title-label-button-simple.component';

describe('GlSharedComponentTitleLabelButtonSimpleComponent', () => {
  let component: GlComponentTitleLabelButtonSimpleComponent;
  let fixture: ComponentFixture<GlComponentTitleLabelButtonSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentTitleLabelButtonSimpleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentTitleLabelButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
