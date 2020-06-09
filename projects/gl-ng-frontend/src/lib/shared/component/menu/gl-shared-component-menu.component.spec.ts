import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentMenuComponent } from './gl-shared-component-menu.component';

describe('GlSharedComponentMenuComponent', () => {
  let component: GlSharedComponentMenuComponent;
  let fixture: ComponentFixture<GlSharedComponentMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
