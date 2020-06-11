import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonMenuSimpleComponent } from './gl-shared-component-button-menu-simple.component';

describe('GlSharedComponentButtonMenuSimpleComponent', () => {
  let component: GlSharedComponentButtonMenuSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonMenuSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonMenuSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonMenuSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
