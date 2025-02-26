import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, MyHeaderComponent],
})
export class Tab1Page {
  labName: string = 'Лабораторна робота 1. Знайомство з Ionic';
  num1!: number;
  num2!: number;
  num3!: number;
  result: number | null = null;
  errorMessage: string | null = null;  

  constructor() {}

  calculate() {
    const numbers = [this.num1, this.num2, this.num3];

    if (numbers.some(n => typeof n !== 'number' || isNaN(n) || n < 0 || !Number.isInteger(n))) {
      this.result = null;  
      this.errorMessage = 'Invalid number'; 
      return;
    } else {
      this.errorMessage = null;
    }

    
    if (numbers.some(n => n % 2 === 0)) {
      this.result = Math.pow(numbers.reduce((sum, n) => sum + n, 0), 3);
    } else {
      const numbers_sum = numbers
        .map(n => [...String(n)].reduce((sum, digit) => sum + Number(digit), 0))
        .reduce((sum, n) => sum + n, 0);

      if (numbers_sum % 2 !== 0) {
        this.result = numbers.reduce((sum, n) => sum + Math.pow(n, 3), 0);
      } else {
        this.result = 0;
      }
    }
  }
}
