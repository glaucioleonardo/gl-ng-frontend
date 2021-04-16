import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentMenuBackgroundComponent } from './gl-component-menu-background.component';

describe('GlSharedComponentMenuBackgroundComponent', () => {
  let component: GlComponentMenuBackgroundComponent;
  let fixture: ComponentFixture<GlComponentMenuBackgroundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentMenuBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentMenuBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
