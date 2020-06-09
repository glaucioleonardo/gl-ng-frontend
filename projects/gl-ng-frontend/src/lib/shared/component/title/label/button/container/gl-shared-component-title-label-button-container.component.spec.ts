import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentTitleLabelButtonContainerComponent } from './gl-shared-component-title-label-button-container.component';

describe('GlSharedComponentTitleLabelButtonContainerComponent', () => {
  let component: GlSharedComponentTitleLabelButtonContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentTitleLabelButtonContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentTitleLabelButtonContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentTitleLabelButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
