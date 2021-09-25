import { Component, OnInit } from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

canvas: any;
ctx: any;
  public hr: any[] = [];
  public ECG: any[] = [];
  public time: any[] = [];
  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {

  this.http.get('assets/data.csv', {responseType: 'text'})
    .subscribe(
        data => {
            let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.time.push(row[0]);
              this.ECG.push(row[1]);
                this.hr.push(row[2]);
            }
            console.log(this.time);
        },
        error => {
            console.log(error);
        }
    );


///////
this.canvas = document.getElementById('myChart');
this.ctx = this.canvas.getContext('2d');
const myChart = new Chart(this.ctx, {
type: 'line',
data: {
labels: this.time,
datasets: [{
label: 'ECG',
data: this.ECG,
backgroundColor:  'blue',
 

},
]
},



 options: {
      

       
        tooltips: {
          mode: 'nearest',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: false
        },
        pan: {
          enabled: true,
          mode: 'x',
          rangeMax: {
            x: 4000
          },
          rangeMin: {
            x: 0
          }
        },
        
  }

});

}

}
