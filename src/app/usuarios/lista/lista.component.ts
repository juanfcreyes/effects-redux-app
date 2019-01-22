import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
	selector: 'app-lista',
	templateUrl: './lista.component.html',
	styles: []
})
export class ListaComponent implements OnInit {

	usuarios: Usuario[] = [];

	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
		this.usuarioService.cargarUsaurios()
		.pipe(map((response: any) => response.data))
		.subscribe((data: Usuario[]) => {
			this.usuarios = data;
		});
	}

}
