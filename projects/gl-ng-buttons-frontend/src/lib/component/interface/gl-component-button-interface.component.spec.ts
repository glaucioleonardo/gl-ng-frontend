import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlComponentButtonInterfaceComponent } from './gl-component-button-interface.component';

describe('GlComponentButtonInterfaceComponent', () => {
  let component: GlComponentButtonInterfaceComponent;
  let fixture: ComponentFixture<GlComponentButtonInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [GlComponentButtonInterfaceComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentButtonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
