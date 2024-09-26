import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  todoList:string[] = [];
  newTodo:string = '';

  private _todoService = inject(TodosService);

  ngOnInit(): void {
      this.todoList = this._todoService.getTodos();
  }

  addTodo(){
    this._todoService.addTodo(this.newTodo);
    this.newTodo = '';
    this.todoList = this._todoService.getTodos();
  }

  deleteTodo(index:number){
    this._todoService.deleteTodo(index);
    this.todoList = this._todoService.getTodos();
  }
}
