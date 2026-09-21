import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',

  imports: [Navbar, Footer, ReactiveFormsModule, RouterLink], 
})
export class Login {

  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      
      if (username === 'usuario@correo.com' && password === '123456') {
        console.log('¡Inicio de sesión exitoso!');
        this.router.navigate(['/dashboard']); 
      } else {
        this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
      }
    } else {
      this.errorMessage = 'Por favor, rellena el formulario correctamente.';
    }
  } 
} 
