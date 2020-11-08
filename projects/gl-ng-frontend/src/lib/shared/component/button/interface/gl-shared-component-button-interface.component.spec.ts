import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentButtonInterfaceComponent } from './gl-shared-component-button-interface.component';

describe('GlSharedComponentButtonInterfaceComponent', () => {
  let component: GlSharedComponentButtonInterfaceComponent;
  let fixture: ComponentFixture<GlSharedComponentButtonInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlSharedComponentButtonInterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentButtonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
