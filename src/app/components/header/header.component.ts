import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
  }
  itemCount(){
    return this.cartservice.itemsCount();
  }

}
