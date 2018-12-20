import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginService } from '../app/services/core/login.service';
import { HttpProvider } from '../app/services/core/http.service';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { apiUrls } from '../app/constants/urls';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
         path:'',
         redirectTo:'app',
         pathMatch:'full',
      },
      {
         path:'app',
         component:AppComponent
      }
    ])
  ],
  providers: [LoginService, HttpProvider, apiUrls],
  bootstrap: [AppComponent]
})
export class AppModule { }
