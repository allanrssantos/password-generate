import { Component, Input, OnInit } from '@angular/core';
import { PasswordGeneratorComponent } from '../password-generator/password-generator.component';

@Component({
  selector: 'app-password-output',
  templateUrl: './password-output.component.html',
  styleUrls: ['./password-output.component.scss'],
})
export class PasswordOutputComponent implements OnInit {
@Input() senha: string = '';

  constructor() {}

  ngOnInit(): void {
    if(typeof this.senha === 'undefined' || this.senha.length === 0){
      this.senha = '';
    }

  }

  copyPassword() {
    const inputTest = document.querySelector('#text') as HTMLInputElement;
    inputTest.select();
    document.execCommand('copy');

  };

  update() {
    window.setTimeout( () => {
      location.reload();
    }, 1000);
  }
}
