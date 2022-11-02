import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartservice.getItems();
  subTotal = this.cartservice.totalPagar();
  descuento = this.cartservice.descuento();
  descuentoPorcentaje = this.cartservice.descuentoPorcentaje();
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }

}
