import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-not-found',
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {}
