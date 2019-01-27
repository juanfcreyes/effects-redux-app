import { Usuario } from 'src/app/models/usuario.model';
import * as UsuarioActions from '../actions';

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}

export function usuarioReducer(state = initState,
    action: UsuarioActions.UnionUsuarioActions): UsuarioState {

    switch (action.type) {
        case UsuarioActions.CARGAR_USUARIO: {
            return {
                ...state, loading: true
            };
        }
        case UsuarioActions.CARGAR_USUARIO_SUCCESS: {
            return {
                loaded: true, loading: false, error: null,
                user: { ...action.usuario }
            };
        }
        case UsuarioActions.CARGAR_USUARIO_FAIL: {
            return {
                user: null, loaded: false, loading: false,
                error: action.payload
            };
        }
        default: {
            return state;
        }

    }
}