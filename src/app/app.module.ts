import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProductosComponent,
    HeaderComponent,
    CartComponent,
    FooterComponent,
    ComprarComponent,

  ],
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,

    RouterModule.forRoot([
      {path : '', component : HomeComponent},
      { path: 'productos', component: ProductosComponent },
      { path: 'contactos', component: ContactosComponent },
      { path: 'carrito', component: CartComponent },
      { path: 'comprar', component: ComprarComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
