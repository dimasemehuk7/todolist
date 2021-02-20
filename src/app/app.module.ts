import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TodoListComponent} from './components/todo-list/todo.list.component';
import {TodoHeaderComponent} from './components/todo-header/todo-header.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TodoDialogComponent} from './dialogs/new-todo/todo-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
