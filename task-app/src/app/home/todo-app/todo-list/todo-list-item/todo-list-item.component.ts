import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from '../../../../shared/services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input('data') task;
  
  constructor( private todoService: TodoService) { }

  ngOnInit() {
  }  

  remove(id) {
    let confirmed = confirm('Are you sure?');

    if(confirmed) {
      this.todoService.removeTask(id).subscribe(() => {
        
      })
    }    
  }

}
