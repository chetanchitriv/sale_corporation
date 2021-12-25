import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsellComponent } from './adminsell.component';

describe('AdminsellComponent', () => {
  let component: AdminsellComponent;
  let fixture: ComponentFixture<AdminsellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
