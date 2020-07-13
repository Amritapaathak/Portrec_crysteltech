import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceTipsComponent } from './advice-tips.component';

describe('AdviceTipsComponent', () => {
  let component: AdviceTipsComponent;
  let fixture: ComponentFixture<AdviceTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdviceTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdviceTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
