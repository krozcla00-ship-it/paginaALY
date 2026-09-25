import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class LoginService {
private _http = inject(HttpClient);


private URL_API = 'http://localhost:3000/usuarios';


iniciarSesion(credenciales: any): Observable<any> {
    return this._http.post(`${this.URL_API}/iniciar-sesion`, credenciales);
}


registrarUsuario(datos: any): Observable<any> {
    return this._http.post(`${this.URL_API}/register`, datos);
}
}
