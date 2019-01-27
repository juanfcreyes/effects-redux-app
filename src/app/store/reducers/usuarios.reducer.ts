import { Usuario } from 'src/app/models/usuario.model';
import * as UsuariosActions from '../actions';

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export function usuariosReducer(state = initState,
    action: UsuariosActions.UnionUsuariosActions): UsuariosState {

    switch (action.type) {
        case UsuariosActions.CARGAR_USUARIOS: {
            return {
                ...state, loading: true
            };
        }
        case UsuariosActions.CARGAR_USUARIOS_SUCCESS: {
            return {
                loaded: true, loading: false, error: null,
                users: [...action.payload]
            };
        }
        case UsuariosActions.CARGAR_USUARIOS_FAIL: {
            return {
                users: [], loaded: false, loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }

    }
}