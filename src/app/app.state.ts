import { Todo } from "./todos/models/todo.model";
import { ActionReducerMap } from "@ngrx/store"
import { _todoReducer } from "./todos/todo.reducer";
import { _filtroReducer } from "./filtro/filtro.reducer";
import { filtrosValidos } from "./filtro/filtro.action";

export interface AppState{
    todos:Todo[],
    filtro:filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: _todoReducer,
    filtro: _filtroReducer
}