import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { ExpertiesComponent } from './experties/experties.component';
import { WhyusComponent } from './whyus/whyus.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { HowWeDiscoverYourTalentComponent } from './how-we-discover-your-talent/how-we-discover-your-talent.component';
import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility/corporate-social-responsibility.component';
import { PermanentRecruitmentComponent } from './services/permanent-recruitment/permanent-recruitment.component';
import { JobDescriptionTemplatesComponent } from './job-description-templates/job-description-templates.component';
import { LatestInsightsAndAdviceComponent } from './latest-insights-and-advice/latest-insights-and-advice.component';
import { SalaryGuidesComponent } from './salary-guides/salary-guides.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpModule,
        HttpClientModule,
    ],
    declarations: [
        SignupComponent,
        ProfileComponent,
        LoginComponent,
        ForgetPasswordComponent,
        JobSeekerSignupComponent,
        EmployerSignupComponent,
        ResetPasswordComponent,
        VerifyTokenComponent,
        PostjobComponent,
        FindjobComponent,
        ContactComponent,
        BannerComponent,
        ContainerComponent,
        ExpertiesComponent,
        WhyusComponent,
        ServicesComponent,
        PricingComponent,
        OurStoryComponent,
        HowWeDiscoverYourTalentComponent,
        CorporateSocialResponsibilityComponent,
        PermanentRecruitmentComponent,
        JobDescriptionTemplatesComponent,
        LatestInsightsAndAdviceComponent,
        SalaryGuidesComponent
    ],
    providers: [HttpClientModule]
})
export class ExamplesModule { }
