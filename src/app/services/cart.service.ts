import { Injectable } from '@angular/core';
import { Product } from '../products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }
  totalPagar(){

    let total = 0;
    for(let i = 0; i < this.items.length; i++){
      total += this.items[i].precio;
    }
    return total;
  }
  descuento(){
    if (this.items.at(0)?.exclusivo){
      return this.totalPagar()*0.15;
    }
    else{
      return this.totalPagar()*0.10;    }
  }
  descuentoPorcentaje(){
    if (this.items.at(0)?.exclusivo){
      return "-15%";
    }
    else{
      return "-10%";    }
  }
  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  itemsCount() {

    return this.items.length;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}
