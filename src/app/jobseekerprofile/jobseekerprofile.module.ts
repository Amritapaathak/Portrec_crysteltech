import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekerprofileRoutingModule } from './jobseekerprofile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { CareerComponent } from './career/career.component';
import { AcountsettingComponent } from './acountsetting/acountsetting.component';


@NgModule({
  declarations: [ProfileComponent, CareerComponent, AcountsettingComponent],
  imports: [
    CommonModule,
    JobseekerprofileRoutingModule
  ]
})
export class JobseekerprofileModule { }
