import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonAttachmentComponent } from './gl-shared-component-button-attachment.component';

describe('GlSharedComponentButtonAttachmentComponent', () => {
  let component: GlSharedComponentButtonAttachmentComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
