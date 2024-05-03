import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentModalActionsItemComponent } from './gl-component-modal-actions-item.component';

describe('ActionsItemComponent', () => {
  let component: GlComponentModalActionsItemComponent;
  let fixture: ComponentFixture<GlComponentModalActionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentModalActionsItemComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalActionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
