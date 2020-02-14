import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { PremiosService } from '../../servicios/premios-service/premios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.less']
})
export class RecuperarComponent implements OnInit {

  premios: object = [];

  constructor( public dialog: MatDialog, private service: PremiosService) { }

  ngOnInit() {
    this.service.getPremiosEliminados().subscribe(premios => {
      this.premios = premios;
    });
  }

  recuperarAlert(id: number){
    Swal.fire({
      title: '¿Estas seguro de recuperar?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Recuperar'
    }).then((result) => {
      if (result.value) {
        this.service.recoverPremios(id).subscribe();
        document.location.reload();
      }
    });
  }

}
