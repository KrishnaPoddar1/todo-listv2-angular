import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { Task } from './task';
import { TodoDisplayComponent } from './todo-display/todo-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent,TodoDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-listv2';
  tasks: Task[] = [];  

  onTasksReceived(tasks: Task[]) {
    this.tasks = tasks;
  }
}
