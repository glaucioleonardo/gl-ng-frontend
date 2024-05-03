import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonAttachmentFileComponent } from './gl-component-button-attachment-file.component';

describe('GlComponentButtonAttachmentComponent', () => {
  let component: GlComponentButtonAttachmentFileComponent;
  let fixture: ComponentFixture<GlComponentButtonAttachmentFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentButtonAttachmentFileComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonAttachmentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
