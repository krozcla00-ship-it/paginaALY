import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, Navbar, Footer ],
  templateUrl: './login.html'
})
export class LoginComponent {
  _loginService = inject(LoginService);
  _router = inject(Router);

  cargando = signal(false);
  credenciales = { email: '', password: '' };

  login() {
    this.cargando.set(true);
    this._loginService.iniciarSesion(this.credenciales).subscribe({
      next: (res: any) => {
        this.cargando.set(false);
        localStorage.setItem('token', res.token); 
        
        Swal.fire({
          icon: 'success',
          title: '¡Bienvenido!',
          timer: 1500,
          showConfirmButton: false
        });
        
        this._router.navigate(['/products']); 
      },
      error: (err) => {
        this.cargando.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: err.error?.mensaje || 'Credenciales inválidas'
        });
      }
    });
  }
}
