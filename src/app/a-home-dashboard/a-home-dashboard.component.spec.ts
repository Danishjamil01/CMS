import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AHomeDashboardComponent } from './a-home-dashboard.component';

describe('AHomeDashboardComponent', () => {
  let component: AHomeDashboardComponent;
  let fixture: ComponentFixture<AHomeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AHomeDashboardComponent]
    });
    fixture = TestBed.createComponent(AHomeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
