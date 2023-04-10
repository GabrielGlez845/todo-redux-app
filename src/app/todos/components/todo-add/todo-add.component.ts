import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store'
import * as todo from '../../todo.action';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtInput:FormControl;
  constructor(private store:Store<AppState>) {
    this.txtInput = new FormControl('',Validators.required)
   }

  ngOnInit(): void {
  }

  agregar(){
    if (this.txtInput.invalid){ return; }
    console.log( 'enter' )
    this.store.dispatch( todo.crearTodo({text:this.txtInput.value}) )
    this.txtInput.reset();
  }

}
