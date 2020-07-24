import { Component, OnInit } from '@angular/core';
import { ExamplesService } from '../examples.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  test : Date = new Date();
  focus;
  focus1;
  forms = <any>{};

  constructor(private _service: ExamplesService,
              private authService: SocialAuthService,
              private http: HttpClient,
              private router: Router) {}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
 
  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit(){
    
  }

  // Login(forms){

  //   let user = {
  //     email: this.forms.email,
  //     password: this.forms.password,
  //   }
  //   const url = 'http://18.140.131.246:4300/api/user/login';
  //   const headers1 = {'Content-Type':  'application/json',
  //   Accept: '*/*',};
  //   this.http.post(url, user, { headers: headers1 }).subscribe(
  //     (data) => {
  //       this.router.navigate(['/home']);
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
    
  // }

  login(){
    localStorage.setItem('utype','2');
    localStorage.setItem('loadpage','1');
    this.router.navigate(['employer']);
  }
}
