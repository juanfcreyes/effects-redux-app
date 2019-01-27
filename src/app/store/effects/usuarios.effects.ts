import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { CARGAR_USUARIOS, CargarUsuariosSuccess, CargarUsuariosFail } from '../actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable()
export class UsuariosEffects {

    constructor(private actions$: Actions,
        private usuarioService: UsuarioService) { }

    @Effect()
    cargarUsuarios$ = this.actions$.pipe(
        ofType(CARGAR_USUARIOS), 
        switchMap(() => {
            return this.usuarioService.cargarUsuarios()
            .pipe(
                map(usuario => new CargarUsuariosSuccess(usuario)),
                catchError(error => of(new CargarUsuariosFail(error)))
            )
        })); 

}