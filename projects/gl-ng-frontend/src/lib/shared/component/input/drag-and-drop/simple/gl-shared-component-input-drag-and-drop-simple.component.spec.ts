import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputDragAndDropSimpleComponent } from './gl-shared-component-input-drag-and-drop-simple.component';

describe('GlSharedComponentInputDragAndDropSimpleComponent', () => {
  let component: GlSharedComponentInputDragAndDropSimpleComponent;
  let fixture: ComponentFixture<GlSharedComponentInputDragAndDropSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputDragAndDropSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputDragAndDropSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
