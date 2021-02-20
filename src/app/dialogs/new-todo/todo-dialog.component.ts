import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {TodoFactory} from '../../services/todo.factory';
import {Todo} from '../../models/todo';
import {TodoService} from '../../services/todo.service';
import {TodoDialogMode} from '../../models/todo-dialog-mode';

@Component({
  templateUrl: 'todo-dialog.component.html',
  styleUrls: ['todo-dialog.component.scss']
})
export class TodoDialogComponent implements OnInit {

  public mode: TodoDialogMode;
  public title: string;
  public todo?: Todo;
  public todoTitle: string;
  public todoDescription: string;

  constructor(public modalRef: BsModalRef, public todoService: TodoService) {}

  ngOnInit(): void {
    if (this.mode === TodoDialogMode.EDIT) {
      this.todoTitle = this.todo.title;
      this.todoDescription = this.todo.description;
    }
  }

  onSubmitClick(): void {
    if (this.mode === TodoDialogMode.CREATE) {
      this.createTodo();
    }
    if (this.mode === TodoDialogMode.EDIT) {
      this.editTodo();
    }
  }

  isCreateMode(): boolean {
    return this.mode === TodoDialogMode.CREATE;
  }

  private createTodo(): void {
    const todo: Todo = TodoFactory.createNotStarted({
      title: this.todoTitle,
      description: this.todoDescription
    });
    this.modalRef.hide();
    this.todoService.create$(todo).subscribe();
  }

  private editTodo(): void {
    const todo: Todo = {
      ...this.todo,
      description: this.todoDescription,
      title: this.todoTitle
    };
    this.todoService.update$(todo).subscribe();
  }
}
