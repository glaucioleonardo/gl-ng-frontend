import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentModalAttachmentLinkComponent } from './gl-component-modal-attachment-link.component';

describe('GlSharedComponentModalAttachmentLinkComponent', () => {
  let component: GlComponentModalAttachmentLinkComponent;
  let fixture: ComponentFixture<GlComponentModalAttachmentLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentModalAttachmentLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentModalAttachmentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
