import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ContactosComponent } from './contactos/contactos.component';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    ContactosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'lista-productos', component: ListaProductosComponent },
      { path: 'contactos', component: ContactosComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
