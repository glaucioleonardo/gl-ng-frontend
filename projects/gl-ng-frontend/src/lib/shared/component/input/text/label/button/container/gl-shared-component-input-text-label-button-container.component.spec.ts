import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputTextLabelButtonContainerComponent } from './gl-shared-component-input-text-label-button-container.component';

describe('GlSharedComponentInputTextLabelButtonContainerComponent', () => {
  let component: GlSharedComponentInputTextLabelButtonContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentInputTextLabelButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputTextLabelButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputTextLabelButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
