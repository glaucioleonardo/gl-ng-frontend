import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentFilterComponent } from './gl-component-filter.component';

describe('GlComponentFilterComponent', () => {
  let component: GlComponentFilterComponent;
  let fixture: ComponentFixture<GlComponentFilterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentFilterComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
