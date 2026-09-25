import { Component, OnInit, signal } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { Productservices } from '../../services/products';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  categorias = signal<any[]>([]);
  cargando = signal<boolean>(true);

  constructor(private productService: Productservices) {}

  ngOnInit(): void {
    this.obtenerCategoriasDesdeBD();
  }

  obtenerCategoriasDesdeBD() {
    this.cargando.set(true);
    
    this.productService.getCategorias().subscribe({
      next: (data: any) => {
        this.categorias.set(data);
        this.cargando.set(false);
      },
      error: (error: any) => {
        console.error('Error al cargar categorías desde la BD', error);
        this.cargando.set(false);
      }
    });
  }
}
