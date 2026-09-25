import { Component,OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { OrderService } from '../../services/order';
import { CartService } from '../../services/cart';
import { CartItem } from '../../interfaces/cart-item';
import Swal from 'sweetalert2';

@Component({
  imports: [Navbar, Footer, CommonModule],
  selector: 'app-checkout',
  styleUrl: './checkout.css',
  templateUrl: './checkout.html',
})
export class Checkout implements OnInit{

_cartService = inject(CartService);
_orderService = inject(OrderService)

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  isLoggedIn: boolean = true; 

    userIdTemporal = '650f1a2b3c4d5e6f7a8b9c0d'; //user temporal


  ngOnInit(): void {
      this._cartService.cart$.subscribe({
      next: (items) => {
        this.cartItems = items;
        this.totalPrice = this._cartService.getTotalPrice();
      }
    });
  }


  incrementarCantidad(producto: CartItem): void {
    this._cartService.addToCart(producto);
  }

  decrementarCantidad(producto: CartItem): void {
    this._cartService.removeFromCart(producto._id);
  }

  eliminarArticulo(id: string): void {
    this._cartService.deleteItem(id);
  }

  procesarPago(): void {
    if (this.cartItems.length === 0) return;

    Swal.fire({
      title: 'Procesando tu pedido',
      text: 'Comunicándonos con el servidor...',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    // Disparamos la petición POST a Node.js
    this._orderService.procesarCheckout(this.userIdTemporal, this.cartItems).subscribe({
      next: (response: any) => {
        // Cerramos el cargando y mostramos éxito
        Swal.fire({
          icon: 'success',
          title: '¡Compra completada!',
          text: response.mensaje || 'Tu pedido ha sido registrado con éxito.',
          confirmButtonColor: '#3b185f'
        });

        // Vaciamos el carrito en el navegador tras la compra exitosa
        this._cartService.clearCart();
      },
      error: (err: any) => {
        console.error(err);
        // Si Node rechaza la compra, atrapamos el error aquí
        Swal.fire({
          icon: 'error',
          title: 'Error al procesar la compra',
          text: err.error?.mensaje || 'No se pudo conectar con el servidor.',
          confirmButtonColor: '#3b185f'
        });
      }
    });
  }
  }


