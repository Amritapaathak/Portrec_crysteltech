import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forms = <any>{};

  constructor(private _service: ExamplesService,private http: HttpClient) { }

  ngOnInit(){
  }

  forgetPassword(forms){
    
    console.log(forms);
    console.log(this.forms);
    const url = 'http://18.140.131.246:4300/api/user/reset/password';

    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};

    this.http.post(url, forms, { headers: headers1 }).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
