import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreatReportComponent } from './threat-report.component';

describe('ThreatReportComponent', () => {
  let component: ThreatReportComponent;
  let fixture: ComponentFixture<ThreatReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreatReportComponent]
    });
    fixture = TestBed.createComponent(ThreatReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
