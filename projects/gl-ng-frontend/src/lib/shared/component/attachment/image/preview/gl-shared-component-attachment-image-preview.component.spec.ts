import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentAttachmentImagePreviewComponent } from './gl-shared-component-attachment-image-preview.component';

describe('GlSharedComponentAttachmentImagePreviewComponent', () => {
  let component: GlSharedComponentAttachmentImagePreviewComponent;
  let fixture: ComponentFixture<GlSharedComponentAttachmentImagePreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentAttachmentImagePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentAttachmentImagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
