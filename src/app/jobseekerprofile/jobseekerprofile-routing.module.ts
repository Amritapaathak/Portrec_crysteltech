import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AcountsettingComponent } from './acountsetting/acountsetting.component';
import { CareerComponent } from './career/career.component';


const routes: Routes = [
  // {path:'', redirectTo: 'welcome', pathMatch: 'full'},
  {path:'',        component: ProfileComponent},
  {path:'account', component: AcountsettingComponent},
  {path:'career',  component: CareerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekerprofileRoutingModule { }
