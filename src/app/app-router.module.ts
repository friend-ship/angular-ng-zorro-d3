import { NgModule,  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './dynamic-data/dynamic-data.component';



const routes: Routes = [
    { path:'',redirectTo:'home',pathMatch:'full'},
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'dynamic',
        component: DynamicComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}