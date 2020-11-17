import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentButtonAttachmentLinkComponent } from './gl-shared-component-button-attachment-link.component';

describe('GlSharedComponentButtonAttachmentLinkComponent', () => {
  let component: GlSharedComponentButtonAttachmentLinkComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonAttachmentLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonAttachmentLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonAttachmentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
