import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertiesRoutingModule } from './experties-routing.module';
import { AccountancyFinanceRecruitmentComponent } from './accountancy-finance-recruitment/accountancy-finance-recruitment.component';
import { AdministrationMultilingualRecruitmentComponent } from './administration-multilingual-recruitment/administration-multilingual-recruitment.component';
import { BankingFinancialInsuranceRecruitmentComponent } from './banking-financial-insurance-recruitment/banking-financial-insurance-recruitment.component';
import { DigitalRecruitmentComponent } from './digital-recruitment/digital-recruitment.component';
import { HealthcareRecruitmentServicesComponent } from './healthcare-recruitment-services/healthcare-recruitment-services.component';
import { HrRecruitmentComponent } from './hr-recruitment/hr-recruitment.component';
import { ItRecruitmentComponent } from './it-recruitment/it-recruitment.component';
import { LegalRiskAuditRecruitmentComponent } from './legal-risk-audit-recruitment/legal-risk-audit-recruitment.component';
import { ProjectTransformationConsultingRecruitmentComponent } from './project-transformation-consulting-recruitment/project-transformation-consulting-recruitment.component';
import { SalesMarketingRecruitmentComponent } from './sales-marketing-recruitment/sales-marketing-recruitment.component';
import { StrategyTransformationRecruitmentComponent } from './strategy-transformation-recruitment/strategy-transformation-recruitment.component';
import { SupplyChainProcurementRecruitmentComponent } from './supply-chain-procurement-recruitment/supply-chain-procurement-recruitment.component';


@NgModule({
  declarations: [AccountancyFinanceRecruitmentComponent, AdministrationMultilingualRecruitmentComponent, BankingFinancialInsuranceRecruitmentComponent, DigitalRecruitmentComponent, HealthcareRecruitmentServicesComponent, HrRecruitmentComponent, ItRecruitmentComponent, LegalRiskAuditRecruitmentComponent, ProjectTransformationConsultingRecruitmentComponent, SalesMarketingRecruitmentComponent, StrategyTransformationRecruitmentComponent, SupplyChainProcurementRecruitmentComponent],
  imports: [
    CommonModule,
    ExpertiesRoutingModule
  ]
})
export class ExpertiesModule { }
