import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractRecruitmentComponent } from './contract-recruitment.component';

describe('ContractRecruitmentComponent', () => {
  let component: ContractRecruitmentComponent;
  let fixture: ComponentFixture<ContractRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
