import { UsuariosState, usuariosReducer, UsuarioState, usuarioReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: UsuariosState
    usuario: UsuarioState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer,
    usuario: usuarioReducer
}