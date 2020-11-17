import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentMenuItemComponent } from './gl-shared-component-menu-item.component';

describe('GlSharedComponentMenuItemComponent', () => {
  let component: GlSharedComponentMenuItemComponent;
  let fixture: ComponentFixture<GlSharedComponentMenuItemComponent>;

  beforeEach(waitForAsync(() => {
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
