import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: 'todo-form.component.html'
})
export class TodoFormComponent implements OnInit {

  @ViewChild('titleInput') titleInput: ElementRef<HTMLInputElement>;
  @Output() create: EventEmitter<string>;

  constructor() {
    this.create = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  onCreateClick(): void {
    const title = this.titleInput.nativeElement.value;
    this.create.emit(title);
    this.titleInput.nativeElement.value = '';
  }
}
