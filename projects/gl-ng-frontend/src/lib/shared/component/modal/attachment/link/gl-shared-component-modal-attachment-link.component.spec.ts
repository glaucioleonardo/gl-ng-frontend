import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentModalAttachmentLinkComponent } from './gl-shared-component-modal-attachment-link.component';

describe('GlSharedComponentModalAttachmentLinkComponent', () => {
  let component: GlSharedComponentModalAttachmentLinkComponent;
  let fixture: ComponentFixture<GlSharedComponentModalAttachmentLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentModalAttachmentLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentModalAttachmentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
