import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentsModalActionsComponent } from './gl-components-modal-actions.component';

describe('SharedComponentsModalActionsComponent', () => {
  let component: GlComponentsModalActionsComponent;
  let fixture: ComponentFixture<GlComponentsModalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentsModalActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentsModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
