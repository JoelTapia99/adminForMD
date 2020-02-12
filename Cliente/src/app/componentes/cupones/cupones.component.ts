import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModalCrearComponent } from './modal-crear/modal-crear.component';
import { PremiosService } from '../../servicios/premios-service/premios.service';

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

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCrearComponent, {
      height: '650px',
      width: '600px',
    })
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}