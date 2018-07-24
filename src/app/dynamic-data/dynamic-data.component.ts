import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterModule, GridsterItemComponent } from 'angular-gridster2';
import { dynamicData } from '../data';

declare let echarts: any;

@Component({
  selector: 'app-dynamic-data',
  templateUrl: './dynamic-data.component.html',
  styleUrls: ['./dynamic-data.component.scss']
})
export class DynamicComponent implements OnInit, AfterContentInit {

  options1: GridsterConfig;
    dashboard1: Array<GridsterItem>;
    itemToPush: GridsterItemComponent;


    public myOption: any;
    public mixOption: any;

    public xData:any[] = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    public dynamicData:any;
    constructor() { }

  ngOnInit() { 
      this.options1 = {
        gridType: 'fit',
        compactType: 'none',
        draggable: {
          enabled: true
        },
        resizable: {
          enabled: true,
        },
        swap:true, //  允许项目切换位置，如果放在另一个上面  
        pushItems: true,//  在调整大小和拖动时推送项目 
        displayGrid: 'none',
        margin:10,
    }

      this.dashboard1 = [
        {cols:5,rows:3,y:0,x:0},
        {cols:5,rows:3,y:0,x:5},
        {cols:5,rows:3,y:3,x:0},
        {cols:5,rows:3,y:3,x:5},
      ]
      
  }
  
  ngAfterContentInit(){
    this.myOption = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    this.dynamicData = dynamicData;
      this.mixOption = {
        tooltip: {
          trigger:'axis',
          axisPointer:{
            type:'cross',
            crossStyle:{
              color:'#999'
            }
          }
        },
        toolbox:{
          feature:{
            dataView:{show:true,readOnly:false},
            magicType:{show:true,type:['line','bar']},
            restore:{show:true},
          }
        },
        legend:{
          data: ['蒸发量','降水量','平均温度']
        },
        xAxis:[
          {
            type:'category',
            data: this.xData,
            axisPointer:{
              type:'shadow'
            }
          }
        ],
        yAxis:[
          {
            type:'value',
            name:'水量',
            min:0,
            max:250,
            interval:50,
            axisLabel:{
              formatter:'{value}ml'
            }
          },
          {
            type:'value',
            name:'温度',
            min:0,
            max:25,
            interval:5,
            axisLabel:{
              formatter:'{value}°C'
            }
          }
        ],
        series:this.dynamicData
      }
  }

}