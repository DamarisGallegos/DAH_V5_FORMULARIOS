import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { NumericValueAccessor } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() { 
    this.students.push({
    name: 'Damaris Yaquelin Gallegos Navarro',
    controlnumber: '17400980',
    active: true,
    });
    this.students.push({
      name: 'Israel Arjona Vizcaino',
      controlnumber: '17401780',
      active: true,
      });
      this.students.push({
        name: 'Pedro Perez',
        controlnumber: '17400958',
        active: false,
        });  
     
  }

  changeStatus(position: number) {
    this.students[position].active = !this.students[position].active;
  }

  getStudents(): Student[] {
    return this.students;
  }

  newStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(position: number): void {
    this.students.splice(position, 1);
  }
}
