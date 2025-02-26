import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyHeaderComponent } from '../my-header/my-header.component';


@Component({
  standalone: true, 
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [CommonModule, FormsModule, IonicModule, MyHeaderComponent],
})
export class Tab3Page {
  labName: string = 'Лабораторна робота 1. Знайомство з Ionic';
  n!: number;
  matrix: number[][] = [];

  constructor() {}

  generateMatrix() {
    this.matrix = Array.from({ length: this.n }, () =>
      Array.from({ length: this.n }, () => Math.floor(Math.random() * 21 - 10)) // генеруємо випадкові числа [-10, 10]
    );
  }

  shouldHighlight(cell: number): boolean {
    const negativeEvenNumbers = this.matrix.flat().filter((n: number) => n < 0 && n % 2 === 0);
    return negativeEvenNumbers.length % 2 !== 0 && cell < 0 && cell % 2 === 0;
  }
}
 