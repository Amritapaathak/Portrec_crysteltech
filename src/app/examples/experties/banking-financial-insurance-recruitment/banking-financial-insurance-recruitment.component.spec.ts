import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFinancialInsuranceRecruitmentComponent } from './banking-financial-insurance-recruitment.component';

describe('BankingFinancialInsuranceRecruitmentComponent', () => {
  let component: BankingFinancialInsuranceRecruitmentComponent;
  let fixture: ComponentFixture<BankingFinancialInsuranceRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingFinancialInsuranceRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingFinancialInsuranceRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
