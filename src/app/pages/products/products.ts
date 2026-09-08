import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';


@Component({
  imports: [Navbar],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {}
