import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentModalLoadingComponent } from './gl-component-modal-loading.component';

describe('GlSharedComponentModalLoadingComponent', () => {
  let component: GlComponentModalLoadingComponent;
  let fixture: ComponentFixture<GlComponentModalLoadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentModalLoadingComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
