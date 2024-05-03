import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentMenuComponent } from './gl-component-menu.component';

describe('GlSharedComponentMenuComponent', () => {
  let component: GlComponentMenuComponent;
  let fixture: ComponentFixture<GlComponentMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentMenuComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
