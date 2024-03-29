import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction(
    '[TODO] Crea todo',
    props<{text:string}>()
    );

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{id:number}>()
    );

export const editar = createAction(
    '[TODO] Editar todo',
    props<{id:number,texto:string}>()
    );

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{id:number}>()
    );

export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{completado:boolean}>()
    );

export const borrarCompletados = createAction(
    '[TODO] BorrarCompletados todo'
    );