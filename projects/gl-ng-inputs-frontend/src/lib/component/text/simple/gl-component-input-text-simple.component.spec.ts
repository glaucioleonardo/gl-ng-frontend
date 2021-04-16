import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GlComponentInputTextSimpleComponent } from './gl-component-input-text-simple.component';

describe('GlComponentInputTextSimpleComponent', () => {
  let component: GlComponentInputTextSimpleComponent;
  let fixture: ComponentFixture<GlComponentInputTextSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentInputTextSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
