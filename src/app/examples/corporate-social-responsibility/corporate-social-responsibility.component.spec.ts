import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSocialResponsibilityComponent } from './corporate-social-responsibility.component';

describe('CorporateSocialResponsibilityComponent', () => {
  let component: CorporateSocialResponsibilityComponent;
  let fixture: ComponentFixture<CorporateSocialResponsibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSocialResponsibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSocialResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
