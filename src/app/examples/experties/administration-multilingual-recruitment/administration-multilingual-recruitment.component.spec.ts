import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationMultilingualRecruitmentComponent } from './administration-multilingual-recruitment.component';

describe('AdministrationMultilingualRecruitmentComponent', () => {
  let component: AdministrationMultilingualRecruitmentComponent;
  let fixture: ComponentFixture<AdministrationMultilingualRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationMultilingualRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationMultilingualRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
