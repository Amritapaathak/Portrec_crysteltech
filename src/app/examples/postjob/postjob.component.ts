import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {

  forms = <any>{};

  constructor(private _service: ExamplesService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  jobPost(forms){
    console.log(forms);
    console.log(this.forms);
    // const url = 'http://18.140.131.246:4300/api/user/register';
    const url = 'http://18.140.131.246:4300/api/user/emp/jobspost';
    const headers1 = {'Content-Type':  'application/json',
    Accept: '*/*'};
    forms.user_id = '5ee0c95f5cd6402decc2792f';
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
