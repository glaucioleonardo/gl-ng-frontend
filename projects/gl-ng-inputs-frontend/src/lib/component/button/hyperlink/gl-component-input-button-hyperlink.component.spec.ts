import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputButtonHyperlinkComponent } from './gl-component-input-button-hyperlink.component';

describe('GlComponentInputButtonHyperlinkComponent', () => {
  let component: GlComponentInputButtonHyperlinkComponent;
  let fixture: ComponentFixture<GlComponentInputButtonHyperlinkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputButtonHyperlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputButtonHyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
