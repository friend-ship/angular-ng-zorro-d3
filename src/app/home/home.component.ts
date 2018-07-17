import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';

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
   


    static itemChange(item,itemComponent) {
        // console.info('itemChanged',item,itemComponent);
    }

    static itemResize(item,itemComponent) {
        // console.info('itemResized',item,itemComponent);
    }
 
  constructor() {
  }

  ngOnInit() {
      this.options = {
        gridType: GridType.Fit,
        compactType: CompactType.None,
        pushItems: true,
        draggable: {
          enabled: true
        },
        resizable: {
          enabled: true,
          delayStart:0,
          start: HomeComponent.eventStart,
          stop: HomeComponent.eventStop
  }
      }

      this.dashboard = [
          {cols:2,rows:1,y:0,x:0},
          {cols:2,rows:1,y:0,x:2}
      ]
  }

  changedOptions() {
      if(this.options.api && this.options.api.optionsChanged){
          this.options.api.optionsChanged();
      }
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
}