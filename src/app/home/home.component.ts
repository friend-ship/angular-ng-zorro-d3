import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

    options: GridsterConfig;
    dashboard: Array<GridsterItem>;
    public barOption:any;
    public lineOption: any;
    static eventStart: any;
    static eventStop: any;

    public echartsInstance1: any;
    public echartsInstance2: any;
    public echartsInstance3: any;
    public echartsInstance4: any;
   
  constructor() { }

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
        itemChangeCallBack: function(item,itemComponent){
            let echarts = document.getElementById(`${item.id}`);

            if(echarts){
                echarts.style.width = itemComponent.width + 'px';
                echarts.style.height = itemComponent.height-30+'px';
    
                // 根据不同的模块，重置相应的图
                let a = {'demo1': self.echartsInstance1,'demo2': self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4};
                a[item.id].resize();
            }
        },
        itemResizeCallback: function(item,itemComponent) {
            let echarts = document.getElementById(`${item.id}`);

            if(echarts){
                echarts.style.width = itemComponent.width+'px';
                echarts.style.height = itemComponent.height-30+'px';

                let a = {'demo1': self.echartsInstance1,'demo2':self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4};
                a[item.id].resize();
            }
        }
      }

      this.dashboard = [
          {cols:4,rows:3,y:0,x:0,id:'demo1'},
          {cols:2,rows:3,y:0,x:4,id:'demo2'},
          {cols:2,rows:3,y:3,x:6,id:'demo3'},
          {cols:4,rows:3,y:3,x:10,id:'demo4'},
      ]
  }

  
  ngAfterContentInit(){
        this.barOption = {
            title: {
             text: '柱状图'
            },
            tooltip : {
            trigger: 'axis',
            axisPointer: {
                type:'shadow'
            }
            },
            legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            toolbox: {
            feature: {
                saveAsImage: {}
            }
            },
            grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
            },
            xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
            ],
            yAxis : [
            {
                type : 'value'
            }
            ],
            series : [
            {
                name:'邮件营销',
                type:'bar',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'bar',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'bar',
                stack: '总量',
                label: {
                normal: {
                    show: true,
                    position: 'top'
                }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
            ]
        }

        this.lineOption = {
            title: {
             text: '线状图'
            },
            tooltip : {
            trigger: 'axis',
            axisPointer: {
                type:'line'
            }
            },
            legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            toolbox: {
            feature: {
                saveAsImage: {}
            }
            },
            grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
            },
            xAxis : [
            {
                type : 'category',
                boundaryGap : true,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
            ],
            yAxis : [
            {
                type : 'value'
            }
            ],
            series : [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                label: {
                normal: {
                    show: true,
                    position: 'top'
                }
                },
                areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
            ]
        }
    }

    onChartInit(e:any,i:number) { 
        if(i===1){
            this.echartsInstance1 = e;
        }else if(i===2) {
            this.echartsInstance2 = e;
        }else if(i===3){
            this.echartsInstance3 = e;
        }else if(i===4){
            this.echartsInstance4 = e;
        }
    }
}