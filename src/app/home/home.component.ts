import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

declare let echarts: any;

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
    public pieOption:any;
    public radarOption:any;
    public gaugeOption:any;


    public echartsInstance1: any;
    public echartsInstance2: any;
    public echartsInstance3: any;
    public echartsInstance4: any;
    public echartsInstance5: any;

   
  constructor() { 
    //   this.barOption = Object.assign({},this.barOption);
    //   this.lineOption = Object.assign({},this.lineOption);
    //   this.pieOption = Object.assign({},this.pieOption);
    //   this.radarOption = Object.assign({},this.radarOption);
    //   this.gaugeOption = Object.assign({},this.gaugeOption);
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
        minItemCols:3,
        minItemRows:3,
        minItemArea:9,
        itemChangeCallBack: function(item,itemComponent){
            let echarts = document.getElementById(`${item.id}`);
            if(echarts){
                echarts.style.width = itemComponent.width + 'px';
                echarts.style.height = itemComponent.height-80+'px';
    
                // 根据不同的模块，重置相应的图
                let a = {'demo1': self.echartsInstance1,'demo2': self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4,'demo5':self.echartsInstance5};
                a[item.id].resize();
            }
        },
        itemResizeCallback: function(item,itemComponent) {
            let echarts = document.getElementById(`${item.id}`);

            if(echarts){
                echarts.style.width = itemComponent.width+'px';
                echarts.style.height = itemComponent.height-80+'px';

                let a = {'demo1': self.echartsInstance1,'demo2':self.echartsInstance2,'demo3':self.echartsInstance3,'demo4':self.echartsInstance4,'demo5':self.echartsInstance5};
                a[item.id].resize();
            }
        }
      }


      this.dashboard = [
          {cols:5,rows:3,y:0,x:0,id:'demo1'},
          {cols:5,rows:3,y:0,x:5,id:'demo2'},
          {cols:3,rows:3,y:0,x:10,id:'demo3'},
          {cols:10,rows:4,y:1,x:0,id:'demo4'},
          {cols:3,rows:4,y:1,x:10,id:'demo5'}
      ]

  }
  
  
  ngAfterContentInit(){
        this.barOption = {
            title: {
             text: '柱状图'
            },
            // color: [
            //     '#000','#ff0033','#ff3300','#c23531','#2f4554', '#61a0a8'
            // ],
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
                show:true,
                feature: {
                    // dataZoom:{
                    //     yAxisIndex:'none'
                    // },
                    // magicType:{
                    //     type:['line','bar']
                    // },
                    saveAsImage: {}
                }
            },
            grid: {
            left: '3',
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
            // legend: {
            //     data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            // },
            toolbox: {
                feature: {
                    magicType:{
                        type:['line','bar','stack','tiled'], // 折线 柱状  堆叠  平铺
                    },
                    saveAsImage: {show:false}
                }
            },
            grid: {
                left: '3%',   
                right: '5%',
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
                // areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                // areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                // areaStyle: {normal: {}},
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                // areaStyle: {normal: {}},
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
                // areaStyle: {normal: {}},
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
            ]
        }
        this.pieOption = {
            aria: {
                show: false
            },
            title: {
                text: '某站点用户访问来源',
                x: 'center'
            },
            tooltip:{
                trigger:'item',
                formatter:"{a} <br/>{b}:{c} ({d}%)"
            },
            // legend:{
            //     orient:'vertical',
            //     x:'left',
            //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            // },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius:['50%','70%'],// 扇形还是圆形展示
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ]
                }
            ]
        };

        this.radarOption = {
            title: {
                text: '浏览器占比变化',
                subtext: '纯属虚构',
                top: 10,
                left: 10
            },
            tooltip: {
                trigger: 'item',
                backgroundColor : 'rgba(0,0,250,0.3)'
            },
            legend: {
                type: 'scroll',
                bottom: 10,
                data: (function (){
                    var list = [];
                    for (var i = 1; i <=28; i++) {
                        list.push(i + 2000 + '');
                    }
                    return list;
                })()
            },
            visualMap: {
                top: 'middle',
                right: 10,
                color: ['red', 'yellow'],
                calculable: true  
            },
            radar: {
               indicator : [
                   { name: 'IE8-', max: 400},
                   { name: 'IE9+', max: 400},
                   { name: 'Safari', max: 400},
                   { name: 'Firefox', max: 400},
                   { name: 'Chrome', max: 400}
                ]
            },
            series : (function (){
                var series = [];
                for (var i = 1; i <= 28; i++) {
                    series.push({
                        name:'浏览器（数据纯属虚构）',
                        type: 'radar',
                        symbol: 'none',
                        lineStyle: {
                            width: 1
                        },
                        emphasis: {
                            areaStyle: {
                                color: 'rgba(0,250,0,0.3)'
                            }
                        },
                        data:[
                          {
                            value:[
                                (40 - i) * 10,
                                (38 - i) * 4 + 60,
                                i * 5 + 10,
                                i * 9,
                                i * i /2
                            ],
                            name: i + 2000 + ''
                          }
                        ]
                    });
                }
                return series;
            })()
        };


        this.gaugeOption = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    // restore: {},
                    // saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '完成率'}]
                }
            ]
        }

    }

    onChartInit(e:any,i:number) { 
        if(i===0){
            this.echartsInstance1 = e;
        }else if(i===1) {
            this.echartsInstance2 = e;
        }else if(i===2){
            this.echartsInstance3 = e;
        }else if(i===3){
            this.echartsInstance4 = e;
        }else if(i===4){
            this.echartsInstance5 = e;
            var myEchart = echarts.init(this.echartsInstance5._dom);
            setInterval(()=> {
                this.gaugeOption.series[0].data[0].value = (Math.random() * 100).toFixed(2);
                myEchart.setOption(this.gaugeOption, true);
            },2000);
        }
    }
}