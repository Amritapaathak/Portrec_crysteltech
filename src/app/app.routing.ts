import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './examples/login/login.component';
import { ForgetPasswordComponent } from './examples/forget-password/forget-password.component';
import { EmployerSignupComponent } from './examples/employer-signup/employer-signup.component';
import { JobSeekerSignupComponent } from './examples/job-seeker-signup/job-seeker-signup.component';
import { ResetPasswordComponent } from './examples/reset-password/reset-password.component';
import { VerifyTokenComponent } from './examples/verify-token/verify-token.component';
import { PostjobComponent } from './examples/postjob/postjob.component';
import { FindjobComponent } from './examples/findjob/findjob.component';
  import { from } from 'rxjs';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'job',              component: FindjobComponent},
    { path: 'postjob',          component: PostjobComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'forget-password',  component: ForgetPasswordComponent},
    { path: 'employersignup',   component: EmployerSignupComponent},
    { path: 'jobseekersignup',  component: JobSeekerSignupComponent},
    { path: 'resetpassword',    component: ResetPasswordComponent },
    { path: 'verifytoken',      component: VerifyTokenComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
