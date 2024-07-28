import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cartService: CartService) { }
  items: Product[] = this.cartService.getItems();
}
