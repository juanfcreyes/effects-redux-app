import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ErrorComponent } from '../shared/error/error.component';

@NgModule({
	declarations: [
		ListaComponent,
		UsuarioComponent,
		LoadingComponent,
		ErrorComponent, 
	],
	imports: [
		CommonModule
	],
	exports: [
		ListaComponent,
		UsuarioComponent,
	]
})
export class UsuariosModule { }
