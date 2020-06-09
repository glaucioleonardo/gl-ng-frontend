import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlSharedComponentTitlePageComponent } from './gl-shared-component-title-page.component';

describe('GlSharedComponentTitlePageComponent', () => {
  let component: GlSharedComponentTitlePageComponent;
  let fixture: ComponentFixture<GlSharedComponentTitlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlSharedComponentTitlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlSharedComponentTitlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
