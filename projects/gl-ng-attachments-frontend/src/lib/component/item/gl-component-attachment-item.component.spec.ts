import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentAttachmentItemComponent } from './gl-component-attachment-item.component';

describe('GlSharedComponentAttachmentItemComponent', () => {
  let component: GlComponentAttachmentItemComponent;
  let fixture: ComponentFixture<GlComponentAttachmentItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentAttachmentItemComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentAttachmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
