import { Service } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Credentials } from '../interfaces/credentials';

@Service()
export class Login {

    _http = inject(HttpClient);
    URL_LOGIN = environment.apiUrl + '/usuarios/iniciar-sesion';

    
    iniciarSesion(credenciales: Credentials) {
        return this._http.post(this.URL_LOGIN, credenciales);
    }


    guardarToken(token: string){
        localStorage.setItem('id_user', token);
    }


    obtenerToken(){
        return localStorage.getItem('id_user');
    }

    cerrarSesion(){
        localStorage.removeItem('id_user');
    }


    estaLogeado(): boolean {
        
        if(this.obtenerToken() != null){
            return true;
        } else {
            return false;
        }
    }

}