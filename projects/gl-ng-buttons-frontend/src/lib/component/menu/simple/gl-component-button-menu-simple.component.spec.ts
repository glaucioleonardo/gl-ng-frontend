import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentButtonMenuSimpleComponent } from './gl-component-button-menu-simple.component';

describe('GlComponentButtonMenuSimpleComponent', () => {
  let component: GlComponentButtonMenuSimpleComponent;
  let fixture: ComponentFixture<GlComponentButtonMenuSimpleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GlComponentButtonMenuSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonMenuSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
