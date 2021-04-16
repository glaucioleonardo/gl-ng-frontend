import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentNavigationTabSimpleComponent } from './gl-component-navigation-tab-simple.component';

describe('GlSharedComponentNavigationTabSimpleComponent', () => {
  let component: GlComponentNavigationTabSimpleComponent;
  let fixture: ComponentFixture<GlComponentNavigationTabSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentNavigationTabSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentNavigationTabSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
