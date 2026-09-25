import { Component, inject, signal } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, Navbar, Footer],
  templateUrl: './register.html',
  styleUrl: './register.css' 
})
export class RegisterComponent {
_loginService = inject(LoginService);
_router = inject(Router);

  cargando = signal(false);
  usuario = { name: '', email: '', password: '' };

  registrar() {
    this.cargando.set(true);
    this._loginService.registrarUsuario(this.usuario).subscribe({
      next: () => {
        this.cargando.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Ya puedes iniciar sesión',
          timer: 2000
        });
        this._router.navigate(['/login']); 
      },
      error: (err) => {
        this.cargando.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error al registrar',
          text: err.error?.mensaje || 'Hubo un problema al crear la cuenta'
        });
      }
    });
  }
}
