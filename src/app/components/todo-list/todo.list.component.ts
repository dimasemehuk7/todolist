import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoStatus} from '../../models/todo-status';
import {TodoRestService} from '../../rest/todo-rest.service';
import {interval, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo.list.component.html',
  styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  constructor(private todoRestService: TodoRestService) {
    this.todos$ = todoRestService.getAll$();
  }

  ngOnInit(): void {}

  onRemoveClick(todo: Todo): void {
    const todoToRemove = {...todo, todo};
    this.todoRestService.remove$(todoToRemove).subscribe((removedTodo: Todo) => {
      this.todos$ = this.todoRestService.getAll$();
    });
  }

  onCheckBoxClick(todo: Todo): void {
    const todoToUpdate = {...todo, status: TodoStatus.DONE};
    this.todoRestService.update$(todoToUpdate).subscribe((updatedTodo: Todo) => {
      this.todos$ = this.todoRestService.getAll$();
    });
  }

  onStartClick(todo: Todo): void {
    const todoToUpdate = {...todo, status: TodoStatus.IN_PROGRESS};
    this.todoRestService.update$(todoToUpdate).subscribe((updatedTodo: Todo) => {
      this.todos$ = this.todoRestService.getAll$();
    });
  }

  isDone(todo: Todo): boolean {
    return todo.status === TodoStatus.DONE;
  }

  isInProgress(todo: Todo): boolean {
    return todo.status === TodoStatus.IN_PROGRESS;
  }

  isNotStated(todo: Todo): boolean {
    return todo.status === TodoStatus.NOT_STARTED;
  }
}


