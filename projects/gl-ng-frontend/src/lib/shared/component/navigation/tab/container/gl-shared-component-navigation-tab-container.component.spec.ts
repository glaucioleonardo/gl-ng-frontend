import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentNavigationTabContainerComponent } from './gl-shared-component-navigation-tab-container.component';

describe('GlSharedComponentNavigationTabContainerComponent', () => {
  let component: GlSharedComponentNavigationTabContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentNavigationTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentNavigationTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentNavigationTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
