import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlComponentInputTextSimpleWithStepComponent } from './gl-component-input-text-simple-with-step.component';
import 'jasmine';

describe('GlComponentInputTextSimpleContainerComponent', () => {
  let component: GlComponentInputTextSimpleWithStepComponent;
  let fixture: ComponentFixture<GlComponentInputTextSimpleWithStepComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ GlComponentInputTextSimpleWithStepComponent ]
  //   })
  //   .compileComponents();
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentInputTextSimpleWithStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', async () => {
  //   expect(component).toBeTruthy();
  // });
});
