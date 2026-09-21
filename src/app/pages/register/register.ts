import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrl: './register.css',

  imports: [Navbar, Footer, ReactiveFormsModule, RouterLink, CommonModule],
})
export class Register {

  registerForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {

      validators: this.passwordMatchValidator
    });
  }


  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { name, username, password } = this.registerForm.value;
      

      console.log('Registrando usuario:', { name, username, password });
      
      this.successMessage = '¡Registro exitoso! Redirigiendo al login...';
      this.errorMessage = '';


      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    } else {
      this.errorMessage = 'Por favor, rellena el formulario correctamente.';
    }
  } 
}
