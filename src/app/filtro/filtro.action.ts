import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'completado' | 'pendientes'

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{filtro:filtrosValidos}>()
    );