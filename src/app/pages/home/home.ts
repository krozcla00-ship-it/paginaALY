import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
