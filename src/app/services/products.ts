import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Productservices {

  _http = inject(HttpClient);

  URL_PRODUCTOS = environment.apiUrl + '/productos';

  // Nuevo método para traer las categorías desde tu backend
  getCategorias() {
    return this._http.get(environment.apiUrl + '/categorias');
  }

  crearProducto(producto: Product) {
    return this._http.post(this.URL_PRODUCTOS + '/crear', producto);
  }

  mostrarProductos() {
    return this._http.get(this.URL_PRODUCTOS + '/mostrar');
  }

  editarProducto(id: string, productoActualizado: Product) {
    return this._http.put(this.URL_PRODUCTOS + '/actualizar/' + id, productoActualizado);
  }

  eliminarProducto(id: string) {
    return this._http.delete(this.URL_PRODUCTOS + '/eliminar/' + id);
  }
}
