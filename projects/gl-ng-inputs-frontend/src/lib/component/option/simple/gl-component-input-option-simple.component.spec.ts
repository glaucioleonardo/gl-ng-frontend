import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputOptionSimpleComponent } from './gl-component-input-option-simple.component';

describe('GlComponentInputOptionSimpleComponent', () => {
  let component: GlComponentInputOptionSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputOptionSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentInputOptionSimpleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputOptionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
