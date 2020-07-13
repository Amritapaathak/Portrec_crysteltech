import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyTransformationRecruitmentComponent } from './strategy-transformation-recruitment.component';

describe('StrategyTransformationRecruitmentComponent', () => {
  let component: StrategyTransformationRecruitmentComponent;
  let fixture: ComponentFixture<StrategyTransformationRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyTransformationRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyTransformationRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
