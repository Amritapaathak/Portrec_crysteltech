import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesMarketingRecruitmentComponent } from './sales-marketing-recruitment.component';

describe('SalesMarketingRecruitmentComponent', () => {
  let component: SalesMarketingRecruitmentComponent;
  let fixture: ComponentFixture<SalesMarketingRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesMarketingRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesMarketingRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
