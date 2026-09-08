import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
