import { Action } from "@ngrx/store";
import { borrar, borrarCompletados, crearTodo, editar, toggle, toggleAll } from "./todo.action";
import { Todo } from "./models/todo.model";


export const initialState : Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer Thanos'),
    new Todo('Comprar traje ironman'),
    new Todo('Robar escudo capitan america'),
];

export function _todoReducer(state = initialState, action:any){
    switch (action.type) {
        case crearTodo.type:
            return [...state, new Todo( action.text )];
            
        case toggle.type:
            return state.map( todo => {
                if (todo.id == action.id){
                    return{
                        ...todo,
                        completado: !todo.completado
                    }
                }else{
                    return todo
                }
               
            });

        case editar.type:
            return state.map( todo => {
                if (todo.id === action.id){
                    return{
                        ...todo,
                        texto: action.texto
                    }
                }else{
                    return todo
                }
                
            });

        case borrar.type:
            return state.filter( todo => todo.id !== action.id );

        case toggleAll.type:
            return state.map( todo => {
                return {
                    ...todo,
                    completado: action.completado
                }
            } )

        case borrarCompletados.type:
            return state.filter( todo => !todo.completado)     
    
        default:
            console.log( state )
            return state
    }
}