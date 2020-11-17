import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentPagingComponent } from './gl-shared-component-paging.component';

describe('GlSharedComponentPagingComponent', () => {
  let component: GlSharedComponentPagingComponent;
  let fixture: ComponentFixture<GlSharedComponentPagingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
