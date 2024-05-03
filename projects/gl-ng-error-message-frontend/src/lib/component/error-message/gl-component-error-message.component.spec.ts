import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GlComponentErrorMessageComponent } from './gl-component-error-message.component';

describe('GlComponentErrorMessageComponent', () => {
  let component: GlComponentErrorMessageComponent;
  let fixture: ComponentFixture<GlComponentErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GlComponentErrorMessageComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlComponentErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
