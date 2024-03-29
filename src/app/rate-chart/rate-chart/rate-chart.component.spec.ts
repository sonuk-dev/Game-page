import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChartComponent } from './rate-chart.component';

describe('RateChartComponent', () => {
  let component: RateChartComponent;
  let fixture: ComponentFixture<RateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
