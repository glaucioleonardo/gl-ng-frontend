import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonAttachmentLinkComponent } from './gl-component-button-attachment-link.component';

describe('GlComponentButtonAttachmentLinkComponent', () => {
  let component: GlComponentButtonAttachmentLinkComponent;
  let fixture: ComponentFixture<GlComponentButtonAttachmentLinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentButtonAttachmentLinkComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonAttachmentLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
