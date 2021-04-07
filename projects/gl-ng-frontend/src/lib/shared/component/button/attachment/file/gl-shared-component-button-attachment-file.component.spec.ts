import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentButtonAttachmentFileComponent } from './gl-shared-component-button-attachment-file.component';

describe('GlSharedComponentButtonAttachmentComponent', () => {
  let component: GlSharedComponentButtonAttachmentFileComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonAttachmentFileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonAttachmentFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonAttachmentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
