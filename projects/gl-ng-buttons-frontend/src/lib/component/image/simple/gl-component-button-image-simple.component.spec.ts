import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonImageSimpleComponent } from './gl-component-button-image-simple.component';

describe('GlComponentButtonImageSimpleComponent', () => {
  let component: GlComponentButtonImageSimpleComponent;
  let fixture: ComponentFixture<GlComponentButtonImageSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentButtonImageSimpleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonImageSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
