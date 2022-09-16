import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule, ActivatedRoute, ParamMap } from '@angular/router';
import { AppComponent } from './app.component';
import { ZeroTabComponent } from './zero-tab/zero-tab.component';
import { FirstTabComponent } from './navigator/first-tab/first-tab.component';
import { SecondTabComponent } from './navigator/second-tab/second-tab.component';
import { ThirdTabComponent } from './navigator/third-tab/third-tab.component';
import { NavigatorComponent } from './navigator/navigator.component';

const appRoutes:Routes=[
  {path:'navigator', component:NavigatorComponent,
    children:[
      {path:'?tab=0', component:ZeroTabComponent},      
      {path:'?tab=1', component:FirstTabComponent},
      {path:'?tab=2', component:SecondTabComponent},
      {path:'?tab=3', component:ThirdTabComponent},
  ]},


]

@NgModule({
  declarations: [
    AppComponent,
    ZeroTabComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
