import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { NgIf } from '@angular/common';

@Component({
  imports: [NgIf],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getTotalCount();
    });
  }

  // 1. COMPROBAR SESIÓN: Devuelve true si el token existe en el navegador
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // 2. CERRAR SESIÓN: Elimina las credenciales y redirige a la pantalla de login
  ejecutarLogout(): void {
    // Borramos el token JWT para quitar los accesos del backend
    localStorage.removeItem('token');
    
    // Limpiamos el carrito por seguridad para que no se queden productos guardados
    this.cartService.clearCart(); 

    // Redireccionamos refrescando la sesión
    window.location.href = '/login';
  }
}