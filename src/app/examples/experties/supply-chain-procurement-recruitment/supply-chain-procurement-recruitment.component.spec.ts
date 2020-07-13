import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyChainProcurementRecruitmentComponent } from './supply-chain-procurement-recruitment.component';

describe('SupplyChainProcurementRecruitmentComponent', () => {
  let component: SupplyChainProcurementRecruitmentComponent;
  let fixture: ComponentFixture<SupplyChainProcurementRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyChainProcurementRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyChainProcurementRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
