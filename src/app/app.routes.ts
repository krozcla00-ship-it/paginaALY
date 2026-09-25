import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Gallery } from './pages/gallery/gallery';
import { Checkout } from './pages/checkout/checkout';
import { Inform } from './pages/inform/inform';
import { NotFound } from './pages/not-found/not-found';


import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';

export const routes: Routes = [

{ path: '', redirectTo: '/home', pathMatch: 'full' },


{ path: 'login', component: LoginComponent, title: 'Iniciar sesión' },
{ path: 'register', component: RegisterComponent, title: 'Crear cuenta' },


{ path: 'home', component: Home, title: '/' },
{ path: 'products', component: Products, title: 'Productos' },
{ path: 'gallery', component: Gallery, title: 'Galería' },
{ path: 'checkout', component: Checkout, title: 'Carrito de compras' },
{ path: 'inform', component: Inform, title: 'Contacto' },


{ path: '**', component: NotFound, title: 'No encontrado' }
];
