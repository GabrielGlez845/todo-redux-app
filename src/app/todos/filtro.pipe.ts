import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.action';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro:filtrosValidos): Todo[] {
    switch (filtro) {
      case 'completado':
        return todos.filter( todo =>  todo.completado)
        break;

        case 'pendientes':
          return todos.filter( todo =>  !todo.completado)
          break;
    
      default:
        return todos
        break;
    }
  }

}
