import { Component, OnInit, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Student } from '../class/Student/student';
import { StudentList } from '../class/Student/studentList';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.css'],
  imports: [MyHeaderComponent]
})
export class CloudPage implements OnInit, AfterViewInit {
  labName = 'Лабораторна робота 2. Робота з хмарним сховищем. JSONBin';
  studentList = new StudentList();
  groupedStudents: { [key: string]: Student[] } = {};
  groupedStudentsKeys: string[] = [];
  chart: any;
  apiUrl = 'https://api.jsonbin.io/v3/b/67bb2232e41b4d34e4996a33';  
  apiKey = '$2a$10$mlzYjNnPXHk3hk/dXdBQEuE5ufhMht9Yi4yMZpf5CU1pUJx1ikyHC';   

  constructor() {}

  async ngOnInit() {
    await this.loadStudentsFromAPI();
  }

  ngAfterViewInit() {
    this.createChart();
  }

  async loadStudentsFromAPI() {
    try {
      const response = await fetch(this.apiUrl, {
        headers: { 'X-Master-Key': this.apiKey }
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const data = await response.json();
      console.log('Сирі дані з API:', data);
      const studentsData = data.record; 
      
      this.studentList = new StudentList(); 
      studentsData.forEach((s: any) => {
        this.studentList.addStudent(new Student(s.name, s.group, s.averageGrade, s.scholarship));
      });

      // відбувається групування студентів
      this.groupedStudents = this.studentList.groupByGroup();
      this.groupedStudentsKeys = Object.keys(this.groupedStudents);

      this.createChart(); // після завантаження даних з JSONBIN, створюємо chart 
    } catch (error) {
      console.error('Помилка завантаження даних:', error);
    }
    console.log('Студенти після завантаження:', this.studentList.students);
  }

  createChart() {
    if (!this.studentList.students.length) return;
  
    const groupedStudents = this.studentList.groupByGroup();
    
    //  отримуємо всі унікальні групи студентів (назви груп) у масив labels
    const labels = Object.keys(groupedStudents);
    const avgGpa = labels.map(group => {
      const students = groupedStudents[group];
      return students.reduce((sum, s) => sum + s.gpa, 0) / students.length;
    });
  
    // генеруємо унікальні кольори для кожної групи студентів:
    // для кожної групи створює унікальний колір у форматі HSL (відтінок, насиченість, яскравість)
    // index * 50 — збільшує кут кольору кожного разу на 50 градусів
    // % 360 — гарантує, що відтінок не вийде за межі 360 градусів
    const colors = labels.map((_, index) => `hsl(${(index * 50) % 360}, 70%, 50%)`);
  
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found!');
      return;
    } 
  
    if (this.chart) {
      this.chart.destroy(); //   знищуємо попередній "старий" графік
    }
  
    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Середній бал',
          data: avgGpa,
          backgroundColor: colors, //  унікальні кольори для всіх барів
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              usePointStyle: true, // робимо легенду кружками замість квадратів
              pointStyle: 'rect', // тип позначки (залишаємо прямокутник)
              color: 'white', // колір тексту 'середній бал'
              generateLabels: (chart) => {
                const original = Chart.defaults.plugins.legend.labels.generateLabels;
                const labels = original(chart);
                labels.forEach(label => label.fillStyle = 'gray'); // робимо позначку (маленький квадратик біля 'середній бал') сірого кольору
                return labels;
              }
            }
          }
        }
      }
    });
  }
  
  
}
