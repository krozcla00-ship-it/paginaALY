import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart';
import { NgIf } from '@angular/common';
@Component({
  imports: [NgIf],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {

    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.getTotalCount();
    });
  }


}
