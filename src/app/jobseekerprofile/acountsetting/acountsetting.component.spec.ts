import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountsettingComponent } from './acountsetting.component';

describe('AcountsettingComponent', () => {
  let component: AcountsettingComponent;
  let fixture: ComponentFixture<AcountsettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcountsettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountsettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
