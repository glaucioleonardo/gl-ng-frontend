import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputTextAreaSimpleComponent } from './gl-component-input-text-area-simple.component';

describe('GlComponentInputTextAreaSimpleComponent', () => {
  let component: GlComponentInputTextAreaSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputTextAreaSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputTextAreaSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextAreaSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
