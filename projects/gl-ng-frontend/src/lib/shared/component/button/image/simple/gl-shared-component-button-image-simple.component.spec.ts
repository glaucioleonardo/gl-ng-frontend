import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentButtonImageSimpleComponent } from './gl-shared-component-button-image-simple.component';

describe('GlSharedComponentButtonImageSimpleComponent', () => {
  let component: GlSharedComponentButtonImageSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonImageSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonImageSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonImageSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
