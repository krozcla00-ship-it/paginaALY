import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';
import { Contacto } from '../../services/contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importamos CommonModule para usar *ngIf estructural en standalone

@Component({
  imports: [Navbar, Footer, FormsModule, CommonModule], // Añadido CommonModule aquí
  selector: 'app-inform',
  styleUrl: './inform.css',
  templateUrl: './inform.html',
})
export class Inform {
  datosForm = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  constructor(private contactoService: Contacto) {}

  onEnviar() {

    const patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!patronCorreo.test(this.datosForm.correo)) {
      alert('Por favor, escribe un correo electrónico válido.');
      return; 
    }

    this.contactoService.enviarMensaje(this.datosForm).subscribe({
      next: (response) => {
        alert('¡Mensaje enviado con éxito!');
        this.datosForm = { nombre: '', correo: '', mensaje: '' };
      },
      error: (err) => {
        console.error(err);
        alert('Ocurrió un error al enviar el mensaje.');
      }
    });
  }
}
