import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAbComponent } from './form-ab.component';

describe('FormAbComponent', () => {
  let component: FormAbComponent;
  let fixture: ComponentFixture<FormAbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
