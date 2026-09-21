import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-inform',
  styleUrl: './inform.css',
  templateUrl: './inform.html',
})
export class Inform {}
