import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostjobComponent } from './postjob/postjob.component';
import { JobsComponent } from './jobs/jobs.component';
import { CandidatepoolComponent } from './candidatepool/candidatepool.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ViewcreditbalanceComponent } from './viewcreditbalance/viewcreditbalance.component';

const routes: Routes = [
  // {path:'', pathMatch: 'welcome'},
  {path:'', redirectTo: 'welcome', pathMatch: 'full'}, 
  {path:'welcome',   component: WhatsnewComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'jobcreate', component: PostjobComponent},
  {path:'jobs',      component: JobsComponent},
  {path:'candidate-pool', component: CandidatepoolComponent},
  {path:'products',       component: ProductsComponent},
  {path:'cart',           component: CartComponent},
  {path:'orderhistory',   component: OrderhistoryComponent},
  {path:'credit-balance', component: ViewcreditbalanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeradminRoutingModule { }
