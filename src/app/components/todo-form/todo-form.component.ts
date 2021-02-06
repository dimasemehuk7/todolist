import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  @ViewChild('titleInput') titleInput: ElementRef<HTMLInputElement>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onCreateClick(): void {
    const title = this.titleInput.nativeElement.value;
    this.todoService.create$(title).subscribe(() => {
      this.titleInput.nativeElement.value = '';
    });
  }
}
