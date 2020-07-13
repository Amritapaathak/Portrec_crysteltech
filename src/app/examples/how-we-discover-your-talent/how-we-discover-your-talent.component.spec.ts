import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeDiscoverYourTalentComponent } from './how-we-discover-your-talent.component';

describe('HowWeDiscoverYourTalentComponent', () => {
  let component: HowWeDiscoverYourTalentComponent;
  let fixture: ComponentFixture<HowWeDiscoverYourTalentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeDiscoverYourTalentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeDiscoverYourTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
