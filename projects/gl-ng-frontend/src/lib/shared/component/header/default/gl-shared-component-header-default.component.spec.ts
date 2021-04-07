import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlSharedComponentHeaderDefaultComponent } from './gl-shared-component-header-default.component';

describe('GlSharedComponentHeaderDefaultComponent', () => {
  let component: GlSharedComponentHeaderDefaultComponent;
  let fixture: ComponentFixture<GlSharedComponentHeaderDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentHeaderDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
