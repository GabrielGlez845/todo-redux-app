import { Action } from "@ngrx/store";
import { filtrosValidos, setFiltro } from "./filtro.action";


export const initialState:filtrosValidos = 'todos'

export function _filtroReducer(state = initialState, action:any){
    switch (action.type) {
        case setFiltro.type:
            return action.filtro;
                        
    
        default:
            return state
    }
}