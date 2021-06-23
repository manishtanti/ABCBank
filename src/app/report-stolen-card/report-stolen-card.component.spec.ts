import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStolenCardComponent } from './report-stolen-card.component';

describe('ReportStolenCardComponent', () => {
  let component: ReportStolenCardComponent;
  let fixture: ComponentFixture<ReportStolenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStolenCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportStolenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
