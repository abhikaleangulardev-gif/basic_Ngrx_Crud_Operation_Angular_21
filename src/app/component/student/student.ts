import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addStudent, deleteStudent } from '../../student/student.actions';
import { Student } from '../../student/student.model';


@Component({
  selector: 'app-student',
  imports: [CommonModule, AsyncPipe],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  student$: Observable<Student[]>;

  constructor(private store: Store<{ students: Student[] }>) {
    this.student$ = this.store.select(state => state.students);
  }



  addStudent() {
    const student = {
      id: Date.now(),
      name: 'Rahul',
      marks: 80
    };

    this.store.dispatch(addStudent({ student }));
  }

  deleteStudent(id: number) {
    this.store.dispatch(deleteStudent({ id }))
  }



}
