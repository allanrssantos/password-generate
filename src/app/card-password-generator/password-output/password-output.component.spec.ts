import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordOutputComponent } from './password-output.component';

describe('PasswordOutputComponent', () => {
  let component: PasswordOutputComponent;
  let fixture: ComponentFixture<PasswordOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
