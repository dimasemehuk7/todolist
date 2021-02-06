import {Component} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoStatus} from '../../models/todo-status';
import {Observable} from 'rxjs';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo.list.component.html',
  styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent {

  public todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = todoService.todos$;
  }

  onRemoveClick(todo: Todo): void {
    this.todoService.remove$(todo.id).subscribe();
  }

  onCheckBoxClick(todo: Todo): void {
    const todoToUpdate = {...todo, status: TodoStatus.DONE};
    this.todoService.update$(todoToUpdate).subscribe();
  }

  onStartClick(todo: Todo): void {
    const todoToUpdate = {...todo, status: TodoStatus.IN_PROGRESS};
    this.todoService.update$(todoToUpdate).subscribe();
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


