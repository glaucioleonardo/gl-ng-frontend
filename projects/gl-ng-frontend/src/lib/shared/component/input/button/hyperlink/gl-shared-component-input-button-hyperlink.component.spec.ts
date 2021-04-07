import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentInputButtonHyperlinkComponent } from './gl-shared-component-input-button-hyperlink.component';

describe('GlSharedComponentInputButtonHyperlinkComponent', () => {
  let component: GlSharedComponentInputButtonHyperlinkComponent;
  let fixture: ComponentFixture<GlSharedComponentInputButtonHyperlinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputButtonHyperlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputButtonHyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
