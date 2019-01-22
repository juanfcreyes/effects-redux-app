import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private url = 'https://reqres.in/api';


	constructor(private http: HttpClient) { }


	cargarUsaurios() {
		return this.http.get(`${this.url}/users`);
	}

}
