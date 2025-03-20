import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Appliance } from '../class/Abstract/Appliance';
import { VacuumCleaner } from '../class/Abstract/vacuumcleaner';
import { Refrigerator } from '../class/Abstract/refrigerator';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [CommonModule, MyHeaderComponent, IonicModule]
})
export class AbstractClassPage implements OnInit {
  labName = 'Лабораторна робота 3. Абстрактні класи';
  appliances: Appliance[] = [];
  topPowerfulAppliances: Appliance[] = [];

  constructor() {}

  ngOnInit() {
    this.loadAppliances();
    this.displayAllAppliances();
    this.findTopPowerfulDevices();
  }

  loadAppliances() {
    this.appliances = [
      new VacuumCleaner('Samsung', 1200, 5.5, 3.0),
      new VacuumCleaner('LG', 1400, 6.0, 2.5),
      new VacuumCleaner('Bosch', 3200, 9.0, 11.8),
      new Refrigerator('Samsung', 200, 70.2, 400),
      new Refrigerator('LG', 190, 68.0, 350),
      new Refrigerator('FIT_3 kurs', 8000, 99.124, 400),
    ];
  }

  displayAllAppliances() {
    console.log('Всі пристрої:');
    this.appliances.forEach((appliance) => appliance.displayInfo());
  }

  findTopPowerfulDevices() {
    this.topPowerfulAppliances = this.appliances
      .slice()
      .sort((a, b) => b.getPower() - a.getPower())
      .slice(0, 3);
  }

  isVacuumCleaner(appliance: any): appliance is VacuumCleaner {
    return appliance instanceof VacuumCleaner;
  }

  isRefrigerator(appliance: any): appliance is Refrigerator {
    return appliance instanceof Refrigerator;
  }

  getKeys(appliance: Appliance): string[] {
    return Object.keys(appliance) as string[];
  }  
}

