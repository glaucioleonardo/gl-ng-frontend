import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentHeaderDefaultComponent } from './gl-component-header-default.component';

describe('GlSharedComponentHeaderDefaultComponent', () => {
  let component: GlComponentHeaderDefaultComponent;
  let fixture: ComponentFixture<GlComponentHeaderDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentHeaderDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
