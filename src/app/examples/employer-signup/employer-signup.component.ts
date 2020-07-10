import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employer-signup',
  templateUrl: './employer-signup.component.html',
  styleUrls: ['./employer-signup.component.css']
})
export class EmployerSignupComponent implements OnInit {

  forms = <any>{};

  constructor(private _service: ExamplesService,private http: HttpClient,private router: Router) { }

  ngOnInit(){
  }
  
  
  signup(forms){

    console.log(forms);
    console.log(this.forms);
    // const url = 'http://18.140.131.246:4300/api/user/register';
    const url = 'http://18.140.131.246:4300/api/user/register/emp';
    // const headers1 = { 'content-type': 'application/json' };
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};
    this.http.post(url, forms, { headers: headers1 }).subscribe(
      (data) => {
        // this.loginUser.reset();
        // this.formSubmitted = false;
        this.router.navigate(['#/home']);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
