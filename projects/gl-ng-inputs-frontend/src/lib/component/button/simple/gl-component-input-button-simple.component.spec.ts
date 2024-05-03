import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputButtonSimpleComponent } from './gl-component-input-button-simple.component';

describe('GlComponentInputButtonSimpleComponent', () => {
  let component: GlComponentInputButtonSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputButtonSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentInputButtonSimpleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputButtonSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
