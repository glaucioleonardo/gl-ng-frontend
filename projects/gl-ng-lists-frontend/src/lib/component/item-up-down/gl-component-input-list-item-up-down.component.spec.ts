import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentInputListItemUpDownComponent } from './gl-component-input-list-item-up-down.component';

describe('GlComponentInputListItemUpDownComponent', () => {
  let component: GlComponentInputListItemUpDownComponent;
  let fixture: ComponentFixture<GlComponentInputListItemUpDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentInputListItemUpDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputListItemUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
