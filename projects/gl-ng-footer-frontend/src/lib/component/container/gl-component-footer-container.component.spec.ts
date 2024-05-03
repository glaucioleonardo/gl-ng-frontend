import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentFooterContainerComponent } from './gl-component-footer-container.component';

describe('GlSharedComponentFooterContainerComponent', () => {
  let component: GlComponentFooterContainerComponent;
  let fixture: ComponentFixture<GlComponentFooterContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentFooterContainerComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
