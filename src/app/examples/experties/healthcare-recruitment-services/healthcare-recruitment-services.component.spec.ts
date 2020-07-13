import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthcareRecruitmentServicesComponent } from './healthcare-recruitment-services.component';

describe('HealthcareRecruitmentServicesComponent', () => {
  let component: HealthcareRecruitmentServicesComponent;
  let fixture: ComponentFixture<HealthcareRecruitmentServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthcareRecruitmentServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthcareRecruitmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
