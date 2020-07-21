import { NgModule, Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { LoginComponent } from './examples/login/login.component';
import { ForgetPasswordComponent } from './examples/forget-password/forget-password.component';
import { EmployerSignupComponent } from './examples/employer-signup/employer-signup.component';
import { JobSeekerSignupComponent } from './examples/job-seeker-signup/job-seeker-signup.component';
import { ResetPasswordComponent } from './examples/reset-password/reset-password.component';
import { VerifyTokenComponent } from './examples/verify-token/verify-token.component';
import { PostjobComponent } from './examples/postjob/postjob.component';
import { FindjobComponent } from './examples/findjob/findjob.component';
import { ContactComponent } from './examples/contact/contact.component';
import { ExpertiesComponent } from './examples/experties/experties.component';
import { PricingComponent } from './examples/pricing/pricing.component';
import { ServicesComponent } from './examples/services/services.component';
import { WhyusComponent } from './examples/whyus/whyus.component';
import { OurStoryComponent } from './examples/our-story/our-story.component';
import { HowWeDiscoverYourTalentComponent } from './examples/how-we-discover-your-talent/how-we-discover-your-talent.component';
import { CorporateSocialResponsibilityComponent } from './examples/corporate-social-responsibility/corporate-social-responsibility.component';
  import { from } from 'rxjs';
import { JobDescriptionTemplatesComponent } from './examples/job-description-templates/job-description-templates.component';
import { SalaryGuidesComponent } from './examples/salary-guides/salary-guides.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'job',              component: FindjobComponent},
    { path: 'postjob',          component: PostjobComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'forget-password',  component: ForgetPasswordComponent},
    { path: 'employersignup',   component: EmployerSignupComponent},
    { path: 'jobseekersignup',  component: JobSeekerSignupComponent},
    { path: 'resetpassword',    component: ResetPasswordComponent },
    { path: 'verifytoken',      component: VerifyTokenComponent},
    { path: 'contact',          component: ContactComponent},
    { path: 'experties',        loadChildren: './examples/experties/experties.module#ExpertiesModule'},
    { path: 'pricing',          component: PricingComponent},
    { path: 'services',         loadChildren: './examples/services/services.module#ServicesModule'},
    { path: 'why-us',           component: WhyusComponent},
    { path: 'our-story',        component: OurStoryComponent},
    { path: 'how-we-discover-your-talent', component: HowWeDiscoverYourTalentComponent},
    { path: 'corporate-social-responsibility', component: CorporateSocialResponsibilityComponent},
    { path: 'job-description-templates', component: JobDescriptionTemplatesComponent},
    { path: 'latest-insights-and-advice', loadChildren: './examples/latest-insights-and-advice/latest-insights-and-advice.module#LatestInsightsAndAdviceModule'},
    { path: 'salary-guides', component:SalaryGuidesComponent},
    { path: 'jobseeker', loadChildren: './jobseekerprofile/jobseekerprofile.module#JobseekerprofileModule'},
    { path: 'employer', loadChildren: './employeradmin/employeradmin.module#EmployeradminModule'},

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
