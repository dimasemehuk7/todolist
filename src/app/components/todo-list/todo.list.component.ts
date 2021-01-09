import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoStatus} from '../../models/todo-status';
import {TodoRestService} from '../../rest/todo-rest.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo.list.component.html',
  styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]>;

  constructor(private todoRestService: TodoRestService) {
    console.log('test');
    this.todos$ = todoRestService.getAll$();
  }

  ngOnInit(): void {}

  onRemoveClick(todo: Todo): void {
    // this.todoRestService.remove(todo);
  }

  onCheckBoxClick(todo: Todo): void {
    // this.todoRestService.makeDone(todo);
  }

  onStartClick(todo: Todo): void {
    // this.todoRestService.startTodo(todo);
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


