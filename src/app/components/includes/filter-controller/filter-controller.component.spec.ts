import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { filterComponent } from './filter-controller.component';

describe('OrderbyComponent', () => {
  let component: filterComponent;
  let fixture: ComponentFixture<filterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ filterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(filterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
