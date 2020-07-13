import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentRecruitmentComponent } from './permanent-recruitment.component';

describe('PermanentRecruitmentComponent', () => {
  let component: PermanentRecruitmentComponent;
  let fixture: ComponentFixture<PermanentRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
