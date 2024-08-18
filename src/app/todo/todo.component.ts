import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  task: string = '';
  tasksArray: Task[] = [];
  @Output() tasks = new EventEmitter<Task[]>();

  addTask() {
    if (this.task) {
      this.tasksArray.push({ name: this.task, completed: false });
      this.tasks.emit(this.tasksArray);
      this.task = '';
    }
  }

}
