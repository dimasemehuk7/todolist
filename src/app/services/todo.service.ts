import {Todo} from '../models/todo';
import {Injectable} from '@angular/core';
import {TodoStatus} from '../models/todo-status';
import {BehaviorSubject, fromEvent, Observable, of} from 'rxjs';
import {TodoRestService} from '../rest/todo-rest.service';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class TodoService {

  public todos$: BehaviorSubject<Todo[]>;

  constructor(private todoRestService: TodoRestService) {
    this.todos$ = new BehaviorSubject<Todo[]>([]);
    const all$: Observable<Todo[]> = this.todoRestService.getAll$();
    all$.subscribe((todos: Todo[]) => {
      this.todos$.next(todos);
    });
  }

  remove$(todoId: string): Observable<Todo> {
    return this.todoRestService.remove$(todoId).pipe(tap(() => {
      let todos: Todo[] = this.todos$.getValue();
      todos = todos.filter(todo => todo.id !== todoId);
      this.todos$.next(todos);
    }));
  }

  create$(title: string): Observable<Todo> {
    const todo: Todo = {id: null, title, status: TodoStatus.NOT_STARTED};
    return this.todoRestService.create$(todo).pipe(tap((newTodo: Todo) => {
      const todos: Todo[] = this.todos$.getValue();
      todos.push(newTodo);
      this.todos$.next(todos);
    }));
  }

  update$(todo: Todo): Observable<Todo> {
    return this.todoRestService.update$(todo).pipe(
      tap((updatedTodo: Todo) => {
        const todos: Todo[] = this.todos$.getValue();
        const newTodos: Todo[] = todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);
        this.todos$.next(newTodos);
      })
    );
  }
}
