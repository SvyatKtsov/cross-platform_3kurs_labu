import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component'; 

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent], 
})
export class Tab2Page {
  labName: string = 'Лабораторна робота 1. Знайомство з Ionic';
  a: number = 0;
  b: number = 0;
  numbersInRange: number[] = [];
  sum: number = 0;
  errorMessage: string | null = null;  

  constructor() {}

  calculate() {
    if (typeof this.a !== 'number' || isNaN(this.a) || !Number.isInteger(this.a) || 
        typeof this.b !== 'number' || isNaN(this.b) || !Number.isInteger(this.b)) {
      this.errorMessage = 'Invalid number'; 
      this.sum = 0;  
      return;
    } else {
      this.errorMessage = null;
    }

    // so here we're swapping values if a > b
    if (this.a > this.b) {
      [this.a, this.b] = [this.b, this.a]; 
    }

    this.numbersInRange = [];
    for (let i = this.a; i <= this.b; i++) {
      this.numbersInRange.push(i);
    }

    this.sum = this.numbersInRange
      .filter(n => n % 2 === 0)
      .reduce((acc, val) => acc + val, 0); // акумулятор .reduce(), який починається з 0
  }

  // it's a getter function - to get filtered even numbers
  get evenNumbers(): number[] {
    return this.numbersInRange.filter(n => n % 2 === 0);
  }
}
