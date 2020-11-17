import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentAttachmentItemComponent } from './gl-shared-component-attachment-item.component';

describe('GlSharedComponentAttachmentItemComponent', () => {
  let component: GlSharedComponentAttachmentItemComponent;
  let fixture: ComponentFixture<GlSharedComponentAttachmentItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentAttachmentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentAttachmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
