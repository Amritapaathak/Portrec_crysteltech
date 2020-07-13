import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ContractRecruitmentComponent } from './contract-recruitment/contract-recruitment.component';


@NgModule({
  declarations: [ContractRecruitmentComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
