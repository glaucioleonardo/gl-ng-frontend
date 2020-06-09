import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentFooterContainerComponent } from './gl-shared-component-footer-container.component';

describe('GlSharedComponentFooterContainerComponent', () => {
  let component: GlSharedComponentFooterContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentFooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentFooterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
