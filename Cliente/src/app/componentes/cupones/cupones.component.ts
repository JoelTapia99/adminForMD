import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModalCrearComponent } from './modal-crear/modal-crear.component';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { PremiosService } from '../../servicios/premios-service/premios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.component.html',
  styleUrls: ['./cupones.component.less']
})
export class CuponesComponent implements OnInit {

  premios: object = [];

  constructor(public dialog: MatDialog, private service: PremiosService) { }

  ngOnInit() {
    this.service.getPremios().subscribe(premios => {
      this.premios = premios;
    });
  }

  openDialogEdit(id_premio: number): void {
    this.service.recogerID(id_premio);
    const dialogRef = this.dialog.open(ModalEditComponent, {})
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  openDialogCreate(): void {
    const dialogRef = this.dialog.open(ModalCrearComponent, {
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }

  openDialogDelete(id_premio: number){
    Swal.fire({
      title: '¿Estas seguro de eliminar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.value) {
        this.service.deletePremios(id_premio).subscribe();
        document.location.reload();
      }
    });
    
  }
}