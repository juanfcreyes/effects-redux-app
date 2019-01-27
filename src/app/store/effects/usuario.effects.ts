import { Injectable } from '@angular/core';
import { Actions, Effect, ofType  } from '@ngrx/effects'
import { CARGAR_USUARIO, CargarUsuarioSuccess, CargarUsuarioFail, CargarUsuario } from '../actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    
    constructor(private actions$: Actions,
         private usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuario$ = this.actions$.pipe(
        ofType(CARGAR_USUARIO), 
        switchMap((action: CargarUsuario) => {
            return this.usuarioService.cargarUsuarioById(action.id)
            .pipe(
                map(usuario => new CargarUsuarioSuccess(usuario)),
                catchError(error => of(new CargarUsuarioFail(error)))
            )
        }));
}