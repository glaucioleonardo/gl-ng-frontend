import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentFilterContainerComponent } from './gl-shared-component-filter-container.component';

describe('GlSharedComponentFilterContainerComponent', () => {
  let component: GlSharedComponentFilterContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentFilterContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentFilterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
