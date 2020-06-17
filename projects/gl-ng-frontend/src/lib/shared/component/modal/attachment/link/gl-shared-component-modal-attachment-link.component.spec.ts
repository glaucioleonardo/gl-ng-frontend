import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentModalAttachmentLinkComponent } from './gl-shared-component-modal-attachment-link.component';

describe('GlSharedComponentModalAttachmentLinkComponent', () => {
  let component: GlSharedComponentModalAttachmentLinkComponent;
  let fixture: ComponentFixture<GlSharedComponentModalAttachmentLinkComponent>;

  beforeEach(async(() => {
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
