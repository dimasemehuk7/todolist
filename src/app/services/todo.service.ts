import {Todo} from '../models/todo';
import {Injectable} from '@angular/core';
import {TodoStatus} from '../models/todo-status';

@Injectable({providedIn: 'root'})
export class TodoService {

  public todos: Todo[];

  constructor() {
    this.todos = [
      {id: '123', title: 'Todo title 123', status: TodoStatus.IN_PROGRESS},
      {id: '124', title: 'Todo title 1254', status: TodoStatus.NOT_STARTED},
      {id: '125', title: 'Todo title 125', status: TodoStatus.DONE},
      {id: '126', title: 'Todo title 126', status: TodoStatus.IN_PROGRESS},
      {id: '127', title: 'Todo title 127', status: TodoStatus.DONE},
      {id: '128', title: 'Todo title 128', status: TodoStatus.DONE}
    ];
  }

  remove(todo: Todo): void {
    const indexToRemove = this.todos.indexOf(todo);
    this.todos.splice(indexToRemove, 1);
  }

  create(title: string): void {
    this.todos.push({id: null, title, status: TodoStatus.NOT_STARTED});
  }

  makeDone(todo: Todo): void {
    todo.status = TodoStatus.DONE;
  }

  startTodo(todo: Todo): void {
    todo.status = TodoStatus.IN_PROGRESS;
  }
}
