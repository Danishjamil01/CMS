import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageteacherComponent } from './manageteacher.component';

describe('ManageteacherComponent', () => {
  let component: ManageteacherComponent;
  let fixture: ComponentFixture<ManageteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageteacherComponent]
    });
    fixture = TestBed.createComponent(ManageteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
