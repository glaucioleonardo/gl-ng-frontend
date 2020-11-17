import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentNavigationTabSimpleComponent } from './gl-shared-component-navigation-tab-simple.component';

describe('GlSharedComponentNavigationTabSimpleComponent', () => {
  let component: GlSharedComponentNavigationTabSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentNavigationTabSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentNavigationTabSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentNavigationTabSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
