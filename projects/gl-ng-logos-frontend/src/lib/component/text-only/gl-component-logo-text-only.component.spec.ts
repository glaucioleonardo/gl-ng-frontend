import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentLogoTextOnlyComponent } from './gl-component-logo-text-only.component';

describe('GlComponentLogoTextOnlyComponent', () => {
  let component: GlComponentLogoTextOnlyComponent;
  let fixture: ComponentFixture<GlComponentLogoTextOnlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentLogoTextOnlyComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentLogoTextOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
