import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesessionComponent } from './managesession.component';

describe('ManagesessionComponent', () => {
  let component: ManagesessionComponent;
  let fixture: ComponentFixture<ManagesessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagesessionComponent]
    });
    fixture = TestBed.createComponent(ManagesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
