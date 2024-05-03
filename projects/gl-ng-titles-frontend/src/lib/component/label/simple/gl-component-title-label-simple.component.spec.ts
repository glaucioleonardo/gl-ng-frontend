import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentTitleLabelSimpleComponent } from './gl-component-title-label-simple.component';

describe('GlSharedComponentTitleLabelSimpleComponent', () => {
  let component: GlComponentTitleLabelSimpleComponent;
  let fixture: ComponentFixture<GlComponentTitleLabelSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentTitleLabelSimpleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentTitleLabelSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
