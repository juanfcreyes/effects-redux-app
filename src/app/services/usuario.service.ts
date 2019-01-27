import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private url = 'https://reqres.in/api';

	constructor(private http: HttpClient) { }

	cargarUsuarios() {
		return this.http.get(`${this.url}/users?per_page=12&delay=2`)
		.pipe(map(resp =>  resp['data'] ));
	}

	cargarUsuarioById(id: string) {
		return this.http.get(`${this.url}/users/${id}`)
		.pipe(map((resp: any) => resp.data ))

	}
}
