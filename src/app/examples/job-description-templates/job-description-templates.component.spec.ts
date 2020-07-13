import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionTemplatesComponent } from './job-description-templates.component';

describe('JobDescriptionTemplatesComponent', () => {
  let component: JobDescriptionTemplatesComponent;
  let fixture: ComponentFixture<JobDescriptionTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDescriptionTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptionTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
