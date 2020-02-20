import { Component, OnInit } from '@angular/core';
import { CuponesService } from '../../servicios/cupones-service/cupones.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.less']
})
export class TicketComponent implements OnInit {

  cupones: object = [];

  constructor(private service: CuponesService) { }

  ngOnInit() {
    this.service.getCupones().subscribe(cupones => {
      this.cupones = cupones;
    });
  }

  reclamarCupon(id_cupon: number){
    var fechaActual = new Date();
    this.service.deleteCupones(id_cupon, fechaActual).subscribe();
    document.location.reload();
  }
}
