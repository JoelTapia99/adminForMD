import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/navegacion/footer/footer.component';
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { NavbarComponent } from './componentes/navegacion/navbar/navbar.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";
import { ModalRComponent } from './componentes/recuperar/modal-r/modal-r.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { ModalCrearComponent } from './componentes/cupones/modal-crear/modal-crear.component';
import { ModalEditComponent } from './componentes/cupones/modal-edit/modal-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CuponesComponent,
    TicketComponent,
    ModalRComponent,
    RecuperarComponent,
    ModalCrearComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [
    ModalRComponent,
    ModalCrearComponent,
    ModalEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
