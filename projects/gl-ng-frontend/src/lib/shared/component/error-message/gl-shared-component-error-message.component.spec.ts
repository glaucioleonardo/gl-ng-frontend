import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentErrorMessageComponent } from './gl-shared-component-error-message.component';

describe('GlSharedComponentErrorMessageComponent', () => {
  let component: GlSharedComponentErrorMessageComponent;
  let fixture: ComponentFixture<GlSharedComponentErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
