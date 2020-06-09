import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentMenuItemComponent } from './gl-shared-component-menu-item.component';

describe('GlSharedComponentMenuItemComponent', () => {
  let component: GlSharedComponentMenuItemComponent;
  let fixture: ComponentFixture<GlSharedComponentMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
