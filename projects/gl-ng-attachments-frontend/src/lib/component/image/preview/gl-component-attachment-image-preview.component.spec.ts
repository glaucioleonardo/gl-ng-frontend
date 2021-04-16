import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentAttachmentImagePreviewComponent } from './gl-component-attachment-image-preview.component';

describe('GlSharedComponentAttachmentImagePreviewComponent', () => {
  let component: GlComponentAttachmentImagePreviewComponent;
  let fixture: ComponentFixture<GlComponentAttachmentImagePreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentAttachmentImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentAttachmentImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
