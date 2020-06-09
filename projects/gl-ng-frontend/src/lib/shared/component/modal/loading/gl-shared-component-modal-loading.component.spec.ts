import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentModalLoadingComponent } from './gl-shared-component-modal-loading.component';

describe('GlSharedComponentModalLoadingComponent', () => {
  let component: GlSharedComponentModalLoadingComponent;
  let fixture: ComponentFixture<GlSharedComponentModalLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentModalLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentModalLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
