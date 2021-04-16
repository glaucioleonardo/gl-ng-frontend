import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentFooterSimpleComponent } from './gl-component-footer-simple.component';

describe('GlSharedComponentFooterComponent', () => {
  let component: GlComponentFooterSimpleComponent;
  let fixture: ComponentFixture<GlComponentFooterSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentFooterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentFooterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
