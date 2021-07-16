import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentInputDropdownSimpleComponent } from './gl-component-input-dropdown-simple.component';

describe('GlComponentInputDropdownSimpleComponent', () => {
  let component: GlComponentInputDropdownSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputDropdownSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlComponentInputDropdownSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputDropdownSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
