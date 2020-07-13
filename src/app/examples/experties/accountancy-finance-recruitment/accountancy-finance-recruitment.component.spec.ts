import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountancyFinanceRecruitmentComponent } from './accountancy-finance-recruitment.component';

describe('AccountancyFinanceRecruitmentComponent', () => {
  let component: AccountancyFinanceRecruitmentComponent;
  let fixture: ComponentFixture<AccountancyFinanceRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountancyFinanceRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountancyFinanceRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
