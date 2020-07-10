import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-seeker-signup',
  templateUrl: './job-seeker-signup.component.html',
  styleUrls: ['./job-seeker-signup.component.css']
})
export class JobSeekerSignupComponent implements OnInit {

  forms = <any>{};

  constructor(private _service: ExamplesService,private http: HttpClient) { }

  ngOnInit(){
  }

  signup(forms){
    console.log(forms);
    console.log(this.forms);
    const url = 'http://18.140.131.246:4300/api/user/register';
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};
    this.http.post(url, forms, { headers: headers1 }).subscribe(
      (data) => {
        // this.loginUser.reset();
        // this.formSubmitted = false;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    // this._service.signupJobseeker(forms).subscribe(response => {
    //   if(response.status == true){

    //   }else{
        
    //   }
    // })
  }

}
