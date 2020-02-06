import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CuponesComponent } from './componentes/cupones/cupones.component';
import { TicketComponent } from './componentes/ticket/ticket.component';
import { RecuperarComponent } from './componentes/recuperar/recuperar.component';


const routes: Routes = [
  { path: '', redirectTo: '/cupones', pathMatch: 'full' },
  { path: 'cupones', component: CuponesComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'recuperar', component: RecuperarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
