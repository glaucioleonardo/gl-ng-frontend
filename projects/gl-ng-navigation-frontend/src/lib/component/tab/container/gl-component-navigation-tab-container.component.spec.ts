import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentNavigationTabContainerComponent } from './gl-component-navigation-tab-container.component';

describe('GlSharedComponentNavigationTabContainerComponent', () => {
  let component: GlComponentNavigationTabContainerComponent;
  let fixture: ComponentFixture<GlComponentNavigationTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentNavigationTabContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentNavigationTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
