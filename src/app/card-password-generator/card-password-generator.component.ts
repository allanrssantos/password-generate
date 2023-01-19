import { Component, OnInit } from '@angular/core';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';

@Component({
  selector: 'app-card-password-generator',
  templateUrl: './card-password-generator.component.html',
  styleUrls: ['./card-password-generator.component.scss'],
})
export class CardPasswordGeneratorComponent implements OnInit {
  newPassword: any;

  constructor() {}

  ngOnInit(): void {}

  receptPassword(password: any) {
    return this.newPassword = password;
  }
}
