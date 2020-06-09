import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentFooterSimpleComponent } from './gl-shared-component-footer-simple.component';

describe('GlSharedComponentFooterComponent', () => {
  let component: GlSharedComponentFooterSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentFooterSimpleComponent>;

  beforeEach(async(() => {
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
