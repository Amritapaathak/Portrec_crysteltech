import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerSignupComponent } from './job-seeker-signup.component';

describe('JobSeekerSignupComponent', () => {
  let component: JobSeekerSignupComponent;
  let fixture: ComponentFixture<JobSeekerSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSeekerSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSeekerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
