import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentFooterSimpleComponent } from './gl-shared-component-footer-simple.component';

describe('GlSharedComponentFooterComponent', () => {
  let component: GlSharedComponentFooterSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentFooterSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentFooterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentFooterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
