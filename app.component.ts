import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, Colors, Legend, plugins } from 'chart.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // title = 'Task-4';
  value1: any;
  value2: any;
  data: any;
  options: any;
  chartData: any;


  // addition : any;
  updateValue(box: string, value: any) {
    if (box === 'box1') {
      this.value1 = value;
      this.value2 = 100 - value;
      console.log(this.value1);

    } else {
      this.value2 = value;
      this.value1 = 100 - value;
      console.log(this.value2);

    }
  }
  createChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      // labels: ['Box 1', 'Box 2'],
      datasets: [
        {
          data: [this.value1, this.value2],
          backgroundColor: [documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--gray-800')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--gray-300'), documentStyle.getPropertyValue('--gray-700')]
        }
      ]
    };
    this.options = {
      plugins: {
        legend: {

          usePointStyle: true,
          color: textColor
        }

      }
    }

  }
  ngOnInit(): void {

  }

}
