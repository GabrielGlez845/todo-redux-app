import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as actionsFilter from 'src/app/filtro/filtro.action';
import * as actionTodo from '../../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  filtroActual:actionsFilter.filtrosValidos = 'todos';
  filtros:actionsFilter.filtrosValidos[] = ['todos','completado','pendientes'];
  pendientes:number = 0;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filtro').subscribe( filtro => {
    //   this.filtroActual = filtro
    // })
    this.store.subscribe( state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter( todo => !todo.completado ).length
    })
  }

  cambiarFiltro(filtro:actionsFilter.filtrosValidos){
    this.store.dispatch(actionsFilter.setFiltro({filtro}))
  }

  borrarCompletados(){
    this.store.dispatch( actionTodo.borrarCompletados() )
  }
}
