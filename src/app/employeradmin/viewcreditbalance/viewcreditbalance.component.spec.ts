import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcreditbalanceComponent } from './viewcreditbalance.component';

describe('ViewcreditbalanceComponent', () => {
  let component: ViewcreditbalanceComponent;
  let fixture: ComponentFixture<ViewcreditbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcreditbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcreditbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
