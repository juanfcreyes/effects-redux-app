import { Action } from '@ngrx/store';

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios success';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    constructor(public payload:any) {}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public payload:any) {}
}

export type UnionUsuariosActions = CargarUsuarios |
 CargarUsuariosFail | CargarUsuariosSuccess;