import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { UserGamesService } from "../user-games.service";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-rate-chart',
  templateUrl: './rate-chart.component.html',
  styleUrls: ['./rate-chart.component.css']
})
export class RateChartComponent implements AfterViewInit {

  @ViewChild('lineCanvas') lineCanvas;
  @Input() userId;
  lineChart: any;

  constructor(private userGamesService: UserGamesService) {}
  ngAfterViewInit() {
    this.userGamesService.getUserGames(this.userId).subscribe(
      (res) => {
        let data = this.userGamesService.getUserRates(res);
        console.log(data)
        this.lineChartMethod(data.score, data.date);
      }
    );
    
  }

  lineChartMethod(score, date) {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: date,
        datasets: [
          {
            data: score,
            label: 'Rate',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            spanGaps: false,
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }
}
