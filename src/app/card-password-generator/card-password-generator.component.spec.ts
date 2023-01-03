import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPasswordGeneratorComponent } from './card-password-generator.component';

describe('CardPasswordGeneratorComponent', () => {
  let component: CardPasswordGeneratorComponent;
  let fixture: ComponentFixture<CardPasswordGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPasswordGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPasswordGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
