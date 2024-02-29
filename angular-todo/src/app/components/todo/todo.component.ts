import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] = [];
  inputTodo!: string;

  constructor() {

  }

  ngOnInit(): void {
      this.todos = [
        {
          content: 'first todo',
          completed: false,
        },
        {
          content: 'second todo',
          completed: false,
        },
      ]
  }

  toggleDone (id: number) {
    this.todos.map((value: Todo, index: number): Todo => {
      if (index === id) {
        value.completed = !value.completed;
      }
      return value;
    })
  }

  removeTodo (id: number) {
    this.todos = this.todos.filter((value: Todo, index: number) => index != id);
  }

  addTodo(): void {
    if (this.inputTodo) {
      this.todos.push({
        completed: false,
        content: this.inputTodo,
      });
    }

    this.inputTodo = '';
  }
}
