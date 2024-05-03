import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentModalActionsComponent } from './gl-component-modal-actions.component';

describe('ActionsComponent', () => {
  let component: GlComponentModalActionsComponent;
  let fixture: ComponentFixture<GlComponentModalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentModalActionsComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
