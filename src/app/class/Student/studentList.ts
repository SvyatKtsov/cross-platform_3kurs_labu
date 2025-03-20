import { Student } from './student';
export class StudentList {
    students: Student[] = [];

    addStudent(s: Student) {
        this.students.push(s);
    }

    sort() {
        this.students.sort((a, b) => b.gpa - a.gpa); //   сортуємо за середнім балом (від найвижчого на найнижчого)
    }

    groupByGroup(): { [key: string]: Student[] } {
        return this.students.reduce((groups, student) => {
            if (!groups[student.group]) {
                groups[student.group] = [];
            }
            groups[student.group].push(student);
            return groups;
        }, {} as { [key: string]: Student[] });
    }
}