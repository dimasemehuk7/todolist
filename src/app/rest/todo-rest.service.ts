import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo';

@Injectable({providedIn: 'root'})
export class TodoRestService {

  constructor(private http: HttpClient) {}

  getAll$(): Observable<Todo[]> {
    return this.http.get<Todo[]>('api/todos');
  }

  update$(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`api/todos/${todo.id}`, todo);
  }

  remove$(todo: Todo): Observable<Todo> {
    return this.http.delete<Todo>(`api/todos/${todo.id}`);
  }
}
