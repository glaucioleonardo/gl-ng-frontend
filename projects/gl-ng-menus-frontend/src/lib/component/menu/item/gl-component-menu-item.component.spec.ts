import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentMenuItemComponent } from './gl-component-menu-item.component';

describe('GlSharedComponentMenuItemComponent', () => {
  let component: GlComponentMenuItemComponent;
  let fixture: ComponentFixture<GlComponentMenuItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
