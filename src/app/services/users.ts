import { inject } from '@angular/core';
import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Service()
export class Users {
    
_http = inject(HttpClient); 

URL_USUARIOS = environment.apiUrl + '/Usurarios';

mostrarUsuarios() {
    return this._http.get(this.URL_USUARIOS + '/mostrar');

}

registrarUsuario(user: User) {
        return this._http.post(this.URL_USUARIOS + '/registrar', user);
    }



}


