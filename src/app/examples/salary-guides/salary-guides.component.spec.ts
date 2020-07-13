import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGuidesComponent } from './salary-guides.component';

describe('SalaryGuidesComponent', () => {
  let component: SalaryGuidesComponent;
  let fixture: ComponentFixture<SalaryGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
