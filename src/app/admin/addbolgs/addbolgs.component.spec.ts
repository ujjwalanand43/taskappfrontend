import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbolgsComponent } from './addbolgs.component';

describe('AddbolgsComponent', () => {
  let component: AddbolgsComponent;
  let fixture: ComponentFixture<AddbolgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbolgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbolgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
