import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Inyectamos el cliente HTTP de Angular
  private http = inject(HttpClient);

  // Define la URL base de tu backend de Node.js (ajústala si usas otro puerto)
  private apiUrl = 'http://localhost:3000/api/orders';

  /**
   * 1. POST: Enviar el carrito al backend para procesar el pago
   * @param userId ID del usuario que compra
   * @param items Arreglo de productos del carrito
   */
  procesarCheckout(userId: string, items: CartItem[]): Observable<any> {
    const body = { userId, items };
    return this.http.post(`${this.apiUrl}/checkout`, body);
  }

  /**
   * 2. GET: Obtener todas las compras pasadas de un usuario
   * @param userId ID del usuario en MongoDB
   */
  obtenerHistorial(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${userId}`);
  }
}