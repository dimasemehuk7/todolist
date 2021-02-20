import {TodoParams} from '../models/todo-params';
import {Todo} from '../models/todo';
import {TodoStatus} from '../models/todo-status';

export class TodoFactory {

  public static createNotStarted(params: TodoParams): Todo {
    params.status = TodoStatus.NOT_STARTED;
    return this.create(params);
  }

  public static create(params: TodoParams): Todo {
    return {
      id: typeof params.id !== 'undefined' ? params.id : null,
      title: params.title || null,
      description: params.description || null,
      status: params.status || null
    };
  }
}
