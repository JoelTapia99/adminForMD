import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/navegacion/footer/footer.component';
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { NavbarComponent } from './componentes/navegacion/navbar/navbar.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CuponesComponent,
    TicketComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
