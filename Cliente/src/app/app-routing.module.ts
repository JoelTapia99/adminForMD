import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';
import { LoginComponent } from './componentes/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'premios', component: CuponesComponent },
  { path: 'cupones', component: TicketComponent },
  { path: 'recuperar', component: RecuperarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
