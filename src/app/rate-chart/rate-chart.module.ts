import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateChartComponent } from './rate-chart/rate-chart.component';

@NgModule({
  declarations: [RateChartComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RateChartComponent
  ]
})
export class RateChartModule { }
