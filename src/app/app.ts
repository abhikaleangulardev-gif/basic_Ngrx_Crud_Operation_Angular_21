import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from "./component/student/student";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Student],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basic-crud-ngrx-operation');
}
