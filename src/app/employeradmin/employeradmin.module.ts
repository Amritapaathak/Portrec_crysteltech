

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeradminRoutingModule } from './employeradmin-routing.module';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostjobComponent } from './postjob/postjob.component';
import { CandidatepoolComponent } from './candidatepool/candidatepool.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ViewcreditbalanceComponent } from './viewcreditbalance/viewcreditbalance.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [WhatsnewComponent, DashboardComponent, JobsComponent, PostjobComponent, CandidatepoolComponent, ProductsComponent, CartComponent, OrderhistoryComponent, ViewcreditbalanceComponent, ProfileComponent],
  imports: [
    CommonModule,
    EmployeradminRoutingModule
  ]
})
export class EmployeradminModule { }
