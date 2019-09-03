import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockTableComponent } from './clock-table.component';

describe('ClockTableComponent', () => {
  let component: ClockTableComponent;
  let fixture: ComponentFixture<ClockTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
