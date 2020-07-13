import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTransformationConsultingRecruitmentComponent } from './project-transformation-consulting-recruitment.component';

describe('ProjectTransformationConsultingRecruitmentComponent', () => {
  let component: ProjectTransformationConsultingRecruitmentComponent;
  let fixture: ComponentFixture<ProjectTransformationConsultingRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTransformationConsultingRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTransformationConsultingRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
