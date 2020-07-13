import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentInsightsComponent } from './recruitment-insights.component';

describe('RecruitmentInsightsComponent', () => {
  let component: RecruitmentInsightsComponent;
  let fixture: ComponentFixture<RecruitmentInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
