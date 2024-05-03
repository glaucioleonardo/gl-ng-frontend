import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentModalHeaderComponent } from './gl-component-modal-header.component';

describe('GlSharedComponentModalHeaderComponent', () => {
  let component: GlComponentModalHeaderComponent;
  let fixture: ComponentFixture<GlComponentModalHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentModalHeaderComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
