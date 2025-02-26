import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss'],
  imports: [IonicModule], 
})
export class MyHeaderComponent {
  @Input() labName: string = 'Лабораторна робота 1. Знайомство з Ionic';
}
