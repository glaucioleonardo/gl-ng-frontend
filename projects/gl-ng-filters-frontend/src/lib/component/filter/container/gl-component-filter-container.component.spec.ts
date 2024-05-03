import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentFilterContainerComponent } from './gl-component-filter-container.component';

describe('GlComponentFilterContainerComponent', () => {
  let component: GlComponentFilterContainerComponent;
  let fixture: ComponentFixture<GlComponentFilterContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentFilterContainerComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
