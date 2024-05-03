import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentInputDropdownLabelComponent } from './gl-component-input-dropdown-label.component';

describe('GlComponentInputDropdownLabelComponent', () => {
  let component: GlComponentInputDropdownLabelComponent;
  let fixture: ComponentFixture<GlComponentInputDropdownLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentInputDropdownLabelComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputDropdownLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
