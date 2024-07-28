import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private cartService: CartService) { }
  products: Number = this.cartService.getItems().length;
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/