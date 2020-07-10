import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  forms = <any>{};

  constructor(private _service: ExamplesService,private http: HttpClient) { }

  ngOnInit(){
  }

  Reset(forms){

    console.log(forms);
    console.log(this.forms);
    const url = 'http://18.140.131.246:5000/api/user/reset/password';
    const headers1 = { 'content-type': 'application/json' };
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
  }

}
