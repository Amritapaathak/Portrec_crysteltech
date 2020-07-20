import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatepoolComponent } from './candidatepool.component';

describe('CandidatepoolComponent', () => {
  let component: CandidatepoolComponent;
  let fixture: ComponentFixture<CandidatepoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatepoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatepoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
