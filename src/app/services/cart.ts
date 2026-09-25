import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
providedIn: 'root'
})
export class CartService {
private cartItems: CartItem[] = [];

private cartSubject = new BehaviorSubject<CartItem[]>([]);
cart$ = this.cartSubject.asObservable();

get currentCartItems(): CartItem[] {
    return this.cartItems;
  }


constructor() {
    // Recupera el carrito guardado automáticamente al iniciar o refrescar la web
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
    this.cartItems = JSON.parse(savedCart);
    this.cartSubject.next(this.cartItems);
    }
}

  // Añadir un artículo al carrito o sumar +1 si ya existe
addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item._id === product._id);

    if (existingItem) {
    existingItem.quantity += 1;
    } else {
    this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCart();
}

  // Restar -1 a la cantidad. Si llega a 0, se elimina del arreglo
removeFromCart(productId: string) {
    const existingItem = this.cartItems.find(item => item._id === productId);

    if (existingItem) {
    if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
    } else {
        this.cartItems = this.cartItems.filter(item => item._id !== productId);
    }
    }
    this.updateCart();
}

  // Eliminar el artículo por completo usando el botón del basurero
deleteItem(productId: string) {
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
    this.updateCart();
}

  // Vaciar el carrito tras una compra exitosa
clearCart() {
    this.cartItems = [];
    this.updateCart();
}

  // Obtener el precio total acumulado
getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

  // Obtener el número total de artículos (útil para la burbuja roja del Navbar)
getTotalCount(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
}

  // Sincroniza el estado del BehaviorSubject y actualiza el localStorage
private updateCart() {
    this.cartSubject.next([...this.cartItems]);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
}
}
