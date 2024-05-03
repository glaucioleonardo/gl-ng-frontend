import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputTextAreaLabelComponent } from './gl-component-input-text-area-label.component';

describe('GlComponentInputTextAreaLabelComponent', () => {
  let component: GlComponentInputTextAreaLabelComponent;
  let fixture: ComponentFixture<GlComponentInputTextAreaLabelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentInputTextAreaLabelComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextAreaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
