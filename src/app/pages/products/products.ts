import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { inject,signal } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../interfaces/products'; 
import { Productservices } from '../../services/products';
import { CartService } from '../../services/cart';
import swal from 'sweetalert';

@Component({
  imports: [Navbar, Footer,CommonModule,FormsModule],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
_productService = inject(Productservices);

_cartService = inject(CartService)

  productos = signal<Product[]>([]);
  cargando = signal(false);


  nuevoProducto = {
    image: '',
    name: '',
    price: 0,
    stock: 0
  };

  ngOnInit(): void {
    this.mostrarProductos();
  }

  agregarAlCarrito(producto: Product){
this._cartService.addToCart(producto);

Swal.fire({
icon: 'success',
      title: 'Agregado al carrito',
      text: `${producto.name} se añadió correctamente.`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true

})

  }


  mostrarProductos() {
    this.cargando.set(true);

    this._productService.mostrarProductos().subscribe({
      next: (data: any) => {
        this.productos.set(data.datos ?? []);
        this.cargando.set(false);
      },
      error: (err) => {
        this.cargando.set(false);
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'No se pudieron cargar los productos'
        });
      }
    });
  }

    obtenerCantidadEnCarrito(productId: string): number {

    const itemEnCarrito = this._cartService.currentCartItems.find(
      (item: any) => item._id === productId
    );
    
    return itemEnCarrito ? itemEnCarrito.quantity : 0;
  }


  
  crearProducto() {
    this._productService.crearProducto(this.nuevoProducto as Product).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Producto creado',
          timer: 1500,
          showConfirmButton: false
        });
        this.nuevoProducto = { image: '', name: '', price: 0, stock: 0 };
        this.mostrarProductos(); 
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo crear el producto'
        });
      }
    });
  }


  eliminarProducto(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this._productService.eliminarProducto(id).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'El producto fue eliminado', 'success');
            this.mostrarProductos();
          },
          error: (err) => {
            console.error(err);
            Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
          }
        });
      }
    });
  }
}
