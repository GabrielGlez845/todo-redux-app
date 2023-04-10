import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as action from '../../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = { id:0, texto:'', completado:false };
  @ViewChild('inputFisico') txtInputFisico: ElementRef = new ElementRef('inputFisico')
  chkCompletado: FormControl = new FormControl();
  txtInput: FormControl = new FormControl();
  editando = false;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe( resp => {
        this.store.dispatch( action.toggle({id:this.todo.id}) )  
    } )
  }

  editar(){
    this.editando = true
    this.txtInput.setValue( this.todo.texto )
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.focus();
    },1)
    
  }

  terminarEdicion(){
    this.editando = false;

    if(this.txtInput.invalid){ return; }
    if(this.txtInput.value === this.todo.texto){ return; }

    this.store.dispatch( action.editar({
      id:this.todo.id,
      texto:this.txtInput.value
    }) )
  }

  borrar(){
    this.store.dispatch( action.borrar({id:this.todo.id}) )
  }

}
