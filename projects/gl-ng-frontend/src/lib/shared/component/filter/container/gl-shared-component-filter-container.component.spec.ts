import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentFilterContainerComponent } from './gl-shared-component-filter-container.component';

describe('GlSharedComponentFilterContainerComponent', () => {
  let component: GlSharedComponentFilterContainerComponent;
  let fixture: ComponentFixture<GlSharedComponentFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentFilterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
