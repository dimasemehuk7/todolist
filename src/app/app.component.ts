import {Component} from '@angular/core';
import {TodoService} from './services/todo.service';
import {TodoRestService} from './rest/todo-rest.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private todoService: TodoService) {}

  createTodo(title: string): void {
    this.todoService.create(title);
  }
}
