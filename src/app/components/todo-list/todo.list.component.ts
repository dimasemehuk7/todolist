import {Component} from '@angular/core';
import {Todo} from '../../models/todo';
import {TodoStatus} from '../../models/todo-status';
import {Observable} from 'rxjs';
import {TodoService} from '../../services/todo.service';
import {TodoDialogComponent} from '../../dialogs/new-todo/todo-dialog.component';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TodoDialogMode} from '../../models/todo-dialog-mode';

@Component({
  selector: 'app-todo-list',
  templateUrl: 'todo.list.component.html',
  styleUrls: ['todo.list.component.scss']
})
export class TodoListComponent {

  public modalRef: BsModalRef;
  public todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService,
              private modalService: BsModalService) {
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

  onEditClick(todo: Todo): void {
    const initialState = {title: 'Edit todo', todo, mode: TodoDialogMode.EDIT};
    this.modalRef = this.modalService.show(TodoDialogComponent, {initialState});
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


