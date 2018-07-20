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

    options: GridsterConfig;
    dashboard: Array<GridsterItem>;
    itemToPush: GridsterItemComponent;
    // public barOption:any;
    // public lineOption: any;
    // public pieOption:any;
    // public radarOption:any;
    // public gaugeOption:any;
    // public echartsInstance1: any;
    // public echartsInstance2: any;
    // public echartsInstance3: any;
    // public echartsInstance4: any;
    // public echartsInstance5: any;


    public mixOption: any;

    public xData:any[] = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    public dynamicData:any;
  constructor() { 
    //   this.barOption = Object.assign({},this.barOption);
    //   this.lineOption = Object.assign({},this.lineOption);
    //   this.pieOption = Object.assign({},this.pieOption);
    //   this.radarOption = Object.assign({},this.radarOption);
    //   this.gaugeOption = Object.assign({},this.gaugeOption);

    this.mixOption = Object.assign({},this.mixOption);
  }

  ngOnInit() {
    let self = this;
      this.options = {
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

      this.dashboard = [
          {cols:4,rows:3,y:0,x:0,initCallback: this.initItem.bind(this)},
          {cols:6,rows:3,y:0,x:4,},
          // {cols:4,rows:3,y:3,x:10,},
          // {cols:10,rows:4,y:5,x:3,},
          // {cols:4,rows:3,y:6,x:4}
      ]
      
  }


  initItem(item:GridsterItem,itemComponent:GridsterItemComponent){
    this.itemToPush = itemComponent;
  }

  changedOptions(){
    if(this.options.api && this.options.api.optionsChanged){
      this.options.api.optionsChanged();
    }
    if(this.options.api && this.options.api.resize){
      this.options.api.resize();
    }
  }
  
  ngAfterContentInit(){

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