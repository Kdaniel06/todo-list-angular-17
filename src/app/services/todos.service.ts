import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private localStorageKey = 'todoList'; //* Is the todos storage

  getTodos():string[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  addTodo(todo: string) {
    const todos = this.getTodos();
    todos.push(todo);
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }

  deleteTodo(index: number) {
    const todos = this.getTodos();
    todos.splice(index, 1); //* Delete the index, delete only 1 todo
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }
}
