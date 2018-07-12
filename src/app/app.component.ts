import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single, radarData, pieData, lineData } from './data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  single: any[];
  radarData: any[];
  pieData: any[];
  lineData: any[];


  view: any[] = [600, 400];
  horizontalView: any[] = [700, 200];
  pieView: any[] = [700, 300];
  radarView: any[] = [700, 700];
  lineView: any[] = [700, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yaxisLabel = 'Population';

  animations = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { radarData });
    Object.assign(this, { pieData });
    Object.assign(this, { lineData });
  }


}
