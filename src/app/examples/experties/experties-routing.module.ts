import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertiesComponent } from './experties.component';
import { AccountancyFinanceRecruitmentComponent } from './accountancy-finance-recruitment/accountancy-finance-recruitment.component';
import { AdministrationMultilingualRecruitmentComponent } from './administration-multilingual-recruitment/administration-multilingual-recruitment.component';
import { BankingFinancialInsuranceRecruitmentComponent } from './banking-financial-insurance-recruitment/banking-financial-insurance-recruitment.component';
import { DigitalRecruitmentComponent } from './digital-recruitment/digital-recruitment.component';
import { HealthcareRecruitmentServicesComponent } from './healthcare-recruitment-services/healthcare-recruitment-services.component';
import { from } from 'rxjs';
import { HrRecruitmentComponent } from './hr-recruitment/hr-recruitment.component';
import { ItRecruitmentComponent } from './it-recruitment/it-recruitment.component';
import { LegalRiskAuditRecruitmentComponent } from './legal-risk-audit-recruitment/legal-risk-audit-recruitment.component';
import { ProjectTransformationConsultingRecruitmentComponent } from './project-transformation-consulting-recruitment/project-transformation-consulting-recruitment.component';
import { SalesMarketingRecruitmentComponent } from './sales-marketing-recruitment/sales-marketing-recruitment.component';
import { StrategyTransformationRecruitmentComponent } from './strategy-transformation-recruitment/strategy-transformation-recruitment.component';
import { SupplyChainProcurementRecruitmentComponent } from './supply-chain-procurement-recruitment/supply-chain-procurement-recruitment.component'; 
const routes: Routes = [
  { path: '',                                component: ExpertiesComponent },
  { path: 'accountancy-finance-recruitment', component: AccountancyFinanceRecruitmentComponent},
  { path: 'administration-multilingual-recruitment', component: AdministrationMultilingualRecruitmentComponent},
  { path: 'banking-financial-insurance-recruitment', component: BankingFinancialInsuranceRecruitmentComponent},
  { path: 'digital-recruitment', component: DigitalRecruitmentComponent},
  { path: 'healthcare-recruitment-services', component: HealthcareRecruitmentServicesComponent},
  { path: 'hr-recruitment', component: HrRecruitmentComponent},
  { path: 'it-recruitment', component: ItRecruitmentComponent},
  { path: 'legal-risk-audit-recruitment', component: LegalRiskAuditRecruitmentComponent},
  { path: 'Project-Transformation-consulting-recruitment', component: ProjectTransformationConsultingRecruitmentComponent},
  { path: 'sales-marketing-recruitment', component: SalesMarketingRecruitmentComponent},
  { path: 'strategy-transformation-recruitment', component: StrategyTransformationRecruitmentComponent},
  { path: 'supply-chain-procurement-recruitment', component: SupplyChainProcurementRecruitmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertiesRoutingModule { }
