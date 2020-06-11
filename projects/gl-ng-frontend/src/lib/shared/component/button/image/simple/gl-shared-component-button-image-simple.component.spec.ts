import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonImageSimpleComponent } from './gl-shared-component-button-image-simple.component';

describe('GlSharedComponentButtonImageSimpleComponent', () => {
  let component: GlSharedComponentButtonImageSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonImageSimpleComponent>;

  beforeEach(async(() => {
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
