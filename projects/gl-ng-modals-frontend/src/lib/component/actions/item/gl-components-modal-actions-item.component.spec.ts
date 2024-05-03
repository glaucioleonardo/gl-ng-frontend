import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentsModalActionsItemComponent } from './gl-components-modal-actions-item.component';

describe('SharedComponentsModalActionsItemComponent', () => {
  let component: GlComponentsModalActionsItemComponent;
  let fixture: ComponentFixture<GlComponentsModalActionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentsModalActionsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentsModalActionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
