import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { GridsterModule } from 'angular-gridster2';
import { HomeComponent } from './home/home.component';
import { SocketComponent } from './socket/socket.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    GridsterModule,
    NgxEchartsModule
  ],
  exports: [
    NgZorroAntdModule,
    GridsterModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
