import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalRecruitmentComponent } from './digital-recruitment.component';

describe('DigitalRecruitmentComponent', () => {
  let component: DigitalRecruitmentComponent;
  let fixture: ComponentFixture<DigitalRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
