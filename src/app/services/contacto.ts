import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Contacto {
    private apiUrl = 'http://localhost:3000/mensajes';

constructor(private http: HttpClient) { }

enviarMensaje(datosFormulario: any): Observable<any> {
    return this.http.post(this.apiUrl, datosFormulario);
}
}
