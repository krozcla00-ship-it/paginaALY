import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Gallery } from './pages/gallery/gallery';
import { Checkout } from './pages/checkout/checkout';
import { Login } from './pages/login/login';
import { NotFound } from './pages/not-found/not-found';


export const routes: Routes = [
    {path: '', component: Home, title: 'Inicio'},
    {path: 'products', component: Products,  title: 'Productos'},
    {path: 'gallery', component: Gallery, title: 'Galería'},
    {path: 'checkout', component: Checkout, title: 'Carrito de compras'},
    {path: 'login', component: Login, title: 'Iniciar sesión'},
    {path: '**', component: NotFound, title: 'No encontrado'}
];
