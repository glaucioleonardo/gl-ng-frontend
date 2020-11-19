import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputListItemUpDownComponent } from './gl-shared-component-input-list-item-up-down.component';

describe('GlSharedComponentInputListItemUpDownComponent', () => {
  let component: GlSharedComponentInputListItemUpDownComponent;
  let fixture: ComponentFixture<GlSharedComponentInputListItemUpDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputListItemUpDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputListItemUpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
