import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestInsightsAndAdviceComponent } from './latest-insights-and-advice.component';

describe('LatestInsightsAndAdviceComponent', () => {
  let component: LatestInsightsAndAdviceComponent;
  let fixture: ComponentFixture<LatestInsightsAndAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestInsightsAndAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestInsightsAndAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
