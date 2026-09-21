import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Footer } from '../../component/footer/footer';


@Component({
  imports: [Navbar, Footer],
  selector: 'app-checkout',
  styleUrl: './checkout.css',
  templateUrl: './checkout.html',
})
export class Checkout {}
