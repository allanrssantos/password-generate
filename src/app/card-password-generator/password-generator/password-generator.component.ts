import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss'],
})
export class PasswordGeneratorComponent implements OnInit {
  @Output() newPasswordEmitter = new EventEmitter();
  newPassword: any;
  totalLengthInput: number = 0;
  lowerCase: boolean = false;
  upperCase: boolean = false;
  number: boolean = false;
  symbol: boolean = false;
  lowerCaseInputValue: number = 0;
  upperCaseInputValue: number = 0;
  numberInputValue: number = 0;
  symbolInputValue: number = 0;
  styleColor = {};
  styleStrong = {};
  textStrong: string = 'FORÇA';

  smallLettersInput = document.querySelector(
    '#smallLetters'
  ) as HTMLInputElement;
  capitalLettersInput = document.querySelector(
    '#capitalLetters'
  ) as HTMLInputElement;
  numbersInput = document.querySelector('#numbers') as HTMLInputElement;
  symbolsInput = document.querySelector('#symbols') as HTMLInputElement;
  lowerCaseInput = document.querySelector(
    '#lowerCaseLetters'
  ) as HTMLInputElement;
  upperCaseInput = document.querySelector(
    '#upperCaseLetters'
  ) as HTMLInputElement;
  numberInput = document.querySelector('#number') as HTMLInputElement;
  symbolInput = document.querySelector('#symbol') as HTMLInputElement;
  constructor() {}

  ngOnInit(): void {}

  private generatePassword(length: any) {
    const smallLettersInput = document.querySelector(
      '#smallLetters'
    ) as HTMLInputElement;
    const capitalLettersInput = document.querySelector(
      '#capitalLetters'
    ) as HTMLInputElement;
    const numbersInput = document.querySelector('#numbers') as HTMLInputElement;
    const symbolsInput = document.querySelector('#symbols') as HTMLInputElement;
    const lowerCaseInput = document.querySelector(
      '#lowerCaseLetters'
    ) as HTMLInputElement;
    const upperCaseInput = document.querySelector(
      '#upperCaseLetters'
    ) as HTMLInputElement;
    const numberInput = document.querySelector('#number') as HTMLInputElement;
    const symbolInput = document.querySelector('#symbol') as HTMLInputElement;

    const passwordLength = +length;
    const rules: any[] = [];

    if (smallLettersInput.checked === true && lowerCaseInput.value != '') {
      rules.push({
        chars: 'abcdefghijklmnopqrstuvwxyz',
        min: lowerCaseInput.value,
      });
      this.lowerCaseInputValue = parseInt(lowerCaseInput.value);
    } else {
      rules.push({ chars: '', min: 0 });
      this.lowerCaseInputValue = 0;
    }

    if (capitalLettersInput.checked === true && upperCaseInput.value != '') {
      rules.push({
        chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        min: upperCaseInput.value,
      });
      this.upperCaseInputValue = parseInt(upperCaseInput.value);
    } else {
      rules.push({ chars: '', min: 0 });
      this.upperCaseInputValue = 0;
    }

    if (numbersInput.checked === true && numberInput.value != '') {
      rules.push({ chars: '0123456789', min: numberInput.value });
      this.numberInputValue = parseInt(numberInput.value);
    } else {
      rules.push({ chars: '', min: 0 });
      this.numberInputValue = 0;
    }

    if (symbolsInput.checked === true && symbolInput.value != '') {
      rules.push({ chars: '!@#$&*?|%+-_./:;=()[]{}', min: symbolInput.value });
      this.symbolInputValue = parseInt(symbolInput.value);
    } else {
      rules.push({ chars: '', min: 0 });
      this.symbolInputValue = 0;
    }

    this.totalLengthInput =
      this.lowerCaseInputValue +
      this.upperCaseInputValue +
      this.numberInputValue +
      this.symbolInputValue;

    if (rules.length === 0) {
      return;
    }

    var allChars = '';
    var allMin = 0;
    rules.forEach((rule) => {
      allChars += rule.chars;
      allMin += rule.min;
    });
    if (length < allMin) {
      length = allMin;
    }
    rules.push({ chars: allChars, min: length - allMin });

    var password = '';
    rules.forEach((rule) => {
      if (rule.min > 0) {
        password += this.shuffleString(rule.chars, rule.min);
      }
    });

    return (this.newPassword = this.shuffleString(password, passwordLength));
  }

  private shuffleString(str: any, maxlength?: any) {
    var shuffledString = str
      .split('')
      .sort(() => {
        return 0.5 - Math.random();
      })
      .join('');
    if (maxlength > 0) {
      shuffledString = shuffledString.substr(0, maxlength);
    }
    return shuffledString;
  }

  manipulateValues() {
    this.generatePassword(this.totalLengthInput);
  }

  newPasswordEmit(e: any) {
    this.newPasswordEmitter.emit(this.newPassword);
  }

  isCheckedValid() {
    const smallLettersInput = document.querySelector(
      '#smallLetters'
    ) as HTMLInputElement;
    const capitalLettersInput = document.querySelector(
      '#capitalLetters'
    ) as HTMLInputElement;
    const numbersInput = document.querySelector('#numbers') as HTMLInputElement;
    const symbolsInput = document.querySelector('#symbols') as HTMLInputElement;

    if (smallLettersInput.checked === true) {
      this.lowerCase = true;
    } else {
      this.lowerCase = false;
    }

    if (capitalLettersInput.checked === true) {
      this.upperCase = true;
    } else {
      this.upperCase = false;
    }

    if (numbersInput.checked === true) {
      this.number = true;
    } else {
      this.number = false;
    }

    if (symbolsInput.checked === true) {
      this.symbol = true;
    } else {
      this.symbol = false;
    }
    this.styleClass(this.lowerCase, this.upperCase, this.number, this.symbol);
  }

  private styleClass(
    lowerCase: boolean,
    upperCase: boolean,
    number: boolean,
    symbol: boolean
  ) {
    if (lowerCase || upperCase || number || symbol) {
      this.textStrong = 'FRACA';
      this.styleColor = {
        warning: true,
      };
      this.styleStrong = {
        redtype: true,
      };
    } else {
      this.textStrong = 'FORÇA';
      this.styleColor = {
        warning: false,
      };
      this.styleStrong = {
        redtype: false,
      };
      this.totalLengthInput = 0;
    }
    if (
      (lowerCase && upperCase) ||
      (lowerCase && number) ||
      (lowerCase && symbol) ||
      (upperCase && number) ||
      (upperCase && symbol) ||
      (number && symbol)
    ) {
      this.textStrong = 'MÉDIA';
      this.styleColor = {
        warning: true,
        'low-warning': true,
      };
      this.styleStrong = {
        orangetype: true,
      };
    }
    if (
      (lowerCase && upperCase && number) ||
      (lowerCase && upperCase && symbol) ||
      (lowerCase && number && symbol) ||
      (upperCase && number && symbol)
    ) {
      this.textStrong = 'MODERADA';
      this.styleColor = {
        warning: true,
        'low-warning': true,
        moderate: true,
      };
      this.styleStrong = {
        yellowtype: true,
      };
    }
    if (lowerCase && upperCase && number && symbol) {
      this.textStrong = 'FORTE';
      this.styleColor = {
        warning: true,
        'low-warning': true,
        moderate: true,
        strong: true,
      };
      this.styleStrong = {
        greentype: true,
      };
    }

    return this.styleColor, this.styleStrong;
  }

  sumValues() {

    let sumvalues = [{ valor: 0 }];

    const upperCaseInput = document.getElementById('upperCaseLetters') as HTMLInputElement;
    const lowerCaseInput = document.getElementById('lowerCaseLetters') as HTMLInputElement;
    const numberInput = document.getElementById('number') as HTMLInputElement;
    const symbolInput = document.getElementById('symbol') as HTMLInputElement;

    let val1 = Number(upperCaseInput?.value) || 0;
    let val2 = Number(lowerCaseInput?.value) || 0;
    let val3 = Number(numberInput?.value) || 0;
    let val4 = Number(symbolInput?.value) || 0;

    sumvalues.map((value) => {
      value.valor = val1 + val2 + val3 + val4;
    });
    this.totalLengthInput = sumvalues[0].valor;

  }
}
