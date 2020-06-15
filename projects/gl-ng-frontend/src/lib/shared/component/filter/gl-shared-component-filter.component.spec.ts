import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentFilterComponent } from './gl-shared-component-filter.component';

describe('GlSharedComponentFilterComponent', () => {
  let component: GlSharedComponentFilterComponent;
  let fixture: ComponentFixture<GlSharedComponentFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
