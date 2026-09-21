import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
})
export class Gallery {}
