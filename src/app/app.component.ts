import { Component } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonicModule],
})
export class AppComponent {
  labName: string = 'Лабораторна робота 1'; 

  constructor(private menuController: MenuController) {}

  openMenu() {
    this.menuController.open('first'); 
  }

  updateLabName(name: string) {
    this.labName = name; 
  }
}
