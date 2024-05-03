import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentModalUploadFileComponent } from './gl-component-modal-upload-file.component';

describe('GlComponentModalUploadFileComponent', () => {
  let component: GlComponentModalUploadFileComponent;
  let fixture: ComponentFixture<GlComponentModalUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentModalUploadFileComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalUploadFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
