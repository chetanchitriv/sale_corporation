import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditproducthereComponent } from './editproducthere.component';

describe('EditproducthereComponent', () => {
  let component: EditproducthereComponent;
  let fixture: ComponentFixture<EditproducthereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditproducthereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproducthereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
