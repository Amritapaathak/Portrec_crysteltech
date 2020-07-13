import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRecruitmentComponent } from './it-recruitment.component';

describe('ItRecruitmentComponent', () => {
  let component: ItRecruitmentComponent;
  let fixture: ComponentFixture<ItRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
