import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';

@Component({
  imports: [Navbar, Footer],
  selector: 'app-not-found',
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {}
