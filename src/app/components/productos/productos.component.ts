import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../../products';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productList = products;
  product : Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((product: { id: number; }) => product.id === productIdFromRoute);
    console.log(this.product);

  }



  addToCart(product: any){
    console.log(product);
    this.cartService.addToCart(product);
    window.alert(product.nombre + ' ha sido añadido al carrito');
  }
}
