import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { JobSeekerSignupComponent } from './job-seeker-signup/job-seeker-signup.component';
import { EmployerSignupComponent } from './employer-signup/employer-signup.component';
import { HttpModule } from '@angular/http';
// import { HttpInterceptorService } from './http-interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyTokenComponent } from './verify-token/verify-token.component';
import { PostjobComponent } from './postjob/postjob.component';
import { FindjobComponent } from './findjob/findjob.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        LoginComponent,
        ForgetPasswordComponent,
        JobSeekerSignupComponent,
        EmployerSignupComponent,
        ResetPasswordComponent,
        VerifyTokenComponent,
        PostjobComponent,
        FindjobComponent
    ],
    providers: [HttpClientModule]
})
export class ExamplesModule { }
