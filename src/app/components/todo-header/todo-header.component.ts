import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TodoDialogComponent} from '../../dialogs/new-todo/todo-dialog.component';
import {TodoDialogMode} from '../../models/todo-dialog-mode';

@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo-header.component.html',
  styleUrls: ['todo-header.component.scss']
})
export class TodoHeaderComponent {

  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(): void {
    const initialState = {title: 'Create todo', mode: TodoDialogMode.CREATE};
    this.modalRef = this.modalService.show(TodoDialogComponent, {initialState});
  }
}
