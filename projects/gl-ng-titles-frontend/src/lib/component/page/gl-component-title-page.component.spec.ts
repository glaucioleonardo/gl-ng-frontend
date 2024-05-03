import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentTitlePageComponent } from './gl-component-title-page.component';

describe('GlSharedComponentTitlePageComponent', () => {
  let component: GlComponentTitlePageComponent;
  let fixture: ComponentFixture<GlComponentTitlePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentTitlePageComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
