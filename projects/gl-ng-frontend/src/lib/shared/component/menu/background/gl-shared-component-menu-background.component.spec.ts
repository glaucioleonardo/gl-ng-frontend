import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentMenuBackgroundComponent } from './gl-shared-component-menu-background.component';

describe('GlSharedComponentMenuBackgroundComponent', () => {
  let component: GlSharedComponentMenuBackgroundComponent;
  let fixture: ComponentFixture<GlSharedComponentMenuBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentMenuBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentMenuBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
