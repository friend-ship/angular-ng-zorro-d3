import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterModule, GridsterItemComponent } from 'angular-gridster2';
import { dynamicMonthData,dynamicWeekData } from '../data';

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

    public xData: any;
    public month:any[] = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    public week: any[] = ['周一','周二','周三','周四','周五','周六','周日'];
    
    public dynamicData:any;

    public echartsInstance1: any;
    public echartsInstance2: any;
    public echartsInstance3: any;
    public echartsInstance4: any;

    public timeData = ['month','week'];
    // public timeData : any = {
    //   'month':['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    //   'week':['周一','周二','周三','周四','周五','周六','周日']
    // }
    constructor() { }

  ngOnInit() { 
    let self = this;
    this.xData = this.month;
    this.dynamicData = dynamicMonthData;
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
        itemChangeCallBack: function(item,itemComponent){
          let echarts = document.getElementById(`${item.id}`);
          if(echarts){
              echarts.style.width = itemComponent.width + 'px';
              echarts.style.height = itemComponent.height-30+'px';
  
              // 根据不同的模块，重置相应的图
              let a = {'demo1': self.echartsInstance1,'demo2': self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4,'demo5':self.echartsInstance5};
              a[item.id].resize();
          }
      },
      itemResizeCallback: function(item,itemComponent) {
          let echarts = document.getElementById(`${item.id}`);

          if(echarts){
              echarts.style.width = itemComponent.width+'px';
              echarts.style.height = itemComponent.height-30+'px';

              let a = {'demo1': self.echartsInstance1,'demo2':self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4,'demo5':self.echartsInstance5};
              a[item.id].resize();
          }
      }
    }

      this.dashboard1 = [
        {cols:5,rows:3,y:0,x:0,id:'demo1'},
        {cols:5,rows:3,y:0,x:5,id:'demo2'},
        {cols:5,rows:3,y:3,x:0,id:'demo3'},
        {cols:5,rows:3,y:3,x:5,id:'demo4'},
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

  onChartInit(e,i){
    if(i==0){
      this.echartsInstance1 = e;
    }else if(i ==1){
      this.echartsInstance2 = e;
    }else if(i ==2){
      this.echartsInstance3 = e;
    }else if(i ==4){
      this.echartsInstance4 = e;
    }
  }

  deleteChart(i){
    this.dashboard1.splice(i,1);
  }

  selectDataByTime(e){
    if(e==='month'){
      this.xData = this.month;
      this.dynamicData = dynamicMonthData;
    }else{
      this.xData = this.week;
      this.dynamicData = dynamicWeekData;
    }
    this.ngAfterContentInit();
  }
}