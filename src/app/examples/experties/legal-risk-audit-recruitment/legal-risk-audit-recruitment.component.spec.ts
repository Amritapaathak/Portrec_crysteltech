import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalRiskAuditRecruitmentComponent } from './legal-risk-audit-recruitment.component';

describe('LegalRiskAuditRecruitmentComponent', () => {
  let component: LegalRiskAuditRecruitmentComponent;
  let fixture: ComponentFixture<LegalRiskAuditRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalRiskAuditRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalRiskAuditRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
