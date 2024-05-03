import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentOutputsVideoPreviewComponent } from './gl-component-outputs-video-preview.component';

describe('GlComponentOutputsVideoPreviewComponent', () => {
  let component: GlComponentOutputsVideoPreviewComponent;
  let fixture: ComponentFixture<GlComponentOutputsVideoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentOutputsVideoPreviewComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentOutputsVideoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
