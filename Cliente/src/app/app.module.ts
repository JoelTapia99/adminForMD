import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { NavbarComponent } from './componentes/navegacion/navbar/navbar.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material";
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { ModalCrearComponent } from './componentes/cupones/modal-crear/modal-crear.component';
import { ModalEditComponent } from './componentes/cupones/modal-edit/modal-edit.component';
import { LoginComponent } from './componentes/login/login.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CuponesComponent,
    TicketComponent,
    RecuperarComponent,
    ModalCrearComponent,
    ModalEditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents: [
    ModalCrearComponent,
    ModalEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
