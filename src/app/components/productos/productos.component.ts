import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listaProductos = [
    {
      "id" : 1,
      "nombre" : "Bimota KB4",
      "precio" : 8800,
      "descripcion" : "Descripcion del producto 1",
      "imagen" : "assets/moto1.jpg"

    },
    {
      "id" : 2,
      "nombre" : "BMW K 1600 Grand America",
      "precio" : 11000,
      "descripcion" : "Descripcion del producto 2",
      "imagen" : "assets/moto2.jpg"

    },
    {
      "id" : 3,
      "nombre" : "Yamaha MT-03 / YZF-R3",
      "precio" : 6600,
      "descripcion" : "Descripcion del producto 3",
      "imagen" : "assets/moto3.jpeg"
    },
    {
      "id" : 4,
      "nombre" : "BMW G 310 R",
      "precio" :9500,
      "descripcion" : "Descripcion del producto 4",
      "imagen" : "assets/moto4.jpg"
    },
    {
      "id" : 5,
      "nombre" : "Honda CB125R",
      "precio" : 10000,
      "descripcion" : "Descripcion del producto 5",
      "imagen" : "assets/moto5.jpg"
    },
    {
      "id" : 6,
      "nombre" : "Honda CMX 500 Rebel",
      "precio" : 9000,
      "descripcion" : "Descripcion del producto 6",
      "imagen" : "assets/moto6.jpg"
    }
  ]

}
