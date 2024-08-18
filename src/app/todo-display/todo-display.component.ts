import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  name: string;
  completed: boolean;
}


@Component({
  selector: 'app-todo-display',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './todo-display.component.html',
  styleUrl: './todo-display.component.css'
})
export class TodoDisplayComponent {
  @Input() tasks: Task[] = [];


  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
