import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../../shared/services/todo.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    })
  }

}
