import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReactComponent } from './new-react.component';

describe('NewReactComponent', () => {
  let component: NewReactComponent;
  let fixture: ComponentFixture<NewReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
