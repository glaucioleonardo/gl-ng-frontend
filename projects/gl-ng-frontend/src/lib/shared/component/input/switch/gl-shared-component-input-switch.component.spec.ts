import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentInputSwitchComponent } from './gl-shared-component-input-switch.component';

describe('GlSharedComponentInputSwitchComponent', () => {
  let component: GlSharedComponentInputSwitchComponent;
  let fixture: ComponentFixture<GlSharedComponentInputSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentInputSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentInputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
