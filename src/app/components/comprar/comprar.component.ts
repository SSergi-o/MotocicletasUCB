import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  public form : FormGroup;
  items =  this.cartService.getItems();

  subTotal = this.cartService.totalPagar();
  descuento = this.cartService.descuento();
  descuentoPorcentaje = this.cartService.descuentoPorcentaje();

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService

  ) {
    this.form = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      correo: ['',Validators.compose([Validators.required, Validators.email])],
      telefono: ['',Validators.required],
      direccion: ['',Validators.required],
      numTarjeta: ['',Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      fechaVencimiento: ['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      codigoSeguridad: ['',Validators.required],
      nombreTarjeta: ['',Validators.required],

    });
  }

  ngOnInit(): void {

  }
  send(){
    console.log(this.form.value);
    console.log(this.form.valid);
  }

}
