import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';


@Component({
  imports: [Navbar],
  selector: 'app-gallery',
  styleUrl: './gallery.css',
  templateUrl: './gallery.html',
})
export class Gallery {}
