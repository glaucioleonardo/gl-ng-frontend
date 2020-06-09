import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentModalHeaderComponent } from './gl-shared-component-modal-header.component';

describe('GlSharedComponentModalHeaderComponent', () => {
  let component: GlSharedComponentModalHeaderComponent;
  let fixture: ComponentFixture<GlSharedComponentModalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentModalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentModalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
