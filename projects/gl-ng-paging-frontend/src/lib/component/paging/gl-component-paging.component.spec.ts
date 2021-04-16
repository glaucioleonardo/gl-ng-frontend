import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentPagingComponent } from './gl-component-paging.component';

describe('GlComponentPagingComponent', () => {
  let component: GlComponentPagingComponent;
  let fixture: ComponentFixture<GlComponentPagingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
