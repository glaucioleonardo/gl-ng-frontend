import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputListItemRemoveComponent } from './gl-shared-component-input-list-item-remove.component';

describe('GlSharedComponentInputListItemRemoveComponent', () => {
  let component: GlSharedComponentInputListItemRemoveComponent;
  let fixture: ComponentFixture<GlSharedComponentInputListItemRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputListItemRemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputListItemRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
