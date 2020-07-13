import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermanentRecruitmentComponent } from './permanent-recruitment/permanent-recruitment.component';
import { ServicesComponent } from './services.component';
import { ContractRecruitmentComponent } from './contract-recruitment/contract-recruitment.component';


const routes: Routes = [
  { path: '',                      component: ServicesComponent },
  { path: 'permanent-recruitment', component: PermanentRecruitmentComponent },
  { path: 'contract-recruitment', component: ContractRecruitmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
