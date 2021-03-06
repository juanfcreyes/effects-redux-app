import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuarios } from 'src/app/store/actions';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: []
})
export class ListaComponent implements OnInit, OnDestroy {

	usuarios: Usuario[] = [];
	loading: boolean;
	error: any;
	subscription: Subscription = new Subscription();
	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.subscription = this.store.select('usuarios').subscribe( usuarios => {
			this.usuarios = usuarios.users;
			this.loading = usuarios.loading;
			this.error = usuarios.error;
		});
		this.store.dispatch(new CargarUsuarios());
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
