/**
 * Component for main app module.
 * Functionality:lists all the questions for the case study.
 * API calls:
 *  OAUth : For Authentication
 * getUser: To get all the details of the current User
 * getCaseStudy: To fetch the case study details
 */
import { Component } from '@angular/core';
import { LoginService } from '../app/services/core/login.service';
import { DataService } from '../app/services/core/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jombay';
  pagesData;
  constructor(private login: LoginService, private data:DataService) {
    this.getLoginAccess();
  }
  getLoginAccess(){
    const data = {
      grant_type:"password",
      scope:"user",
      client_id:"4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5",
      client_secret:"908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88",
      auth_token:"azd4jXWWLagyb9KzgfDJ"
    }
    this.login.getAccess(data).then((res:any) => {
       console.log(res); 
        sessionStorage.setItem("access-token", res.access_token);
        this.getCasePages()
      },
       
      (error) => {
         console.log(error); 
    });
  }

  getCasePages(){
    this.data.getCaseStudy().then((res:any) => {
      console.log(res); 
      this.pagesData = res.user_company_case_study.company_case_study.pages;
       
     },
      
     (error) => {
        console.log(error); 
   });
  }

}
