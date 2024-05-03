import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentInputListItemRemoveComponent } from './gl-component-input-list-item-remove.component';

describe('GlComponentInputListItemRemoveComponent', () => {
  let component: GlComponentInputListItemRemoveComponent;
  let fixture: ComponentFixture<GlComponentInputListItemRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentInputListItemRemoveComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputListItemRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
