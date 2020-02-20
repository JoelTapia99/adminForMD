import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiosService } from '../../../servicios/premios-service/premios.service';
import { ImagenesService } from '../../../servicios/imagenes-service/imagenes.service';

@Component({
  selector: 'app-modal-crear',
  templateUrl: './modal-crear.component.html',
  styleUrls: ['./modal-crear.component.less']
})
export class ModalCrearComponent implements OnInit {

  imagenes: object = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public mensage: string,
    public dialogRef: MatDialogRef<ModalCrearComponent>,
    private p_service: PremiosService,
    private i_service: ImagenesService
  ) { }

  ngOnInit() {
    this.i_service.getImagenes().subscribe(imagenes => {
      this.imagenes = imagenes;
    });
  }

  agregarPremio(){
    var input = document.getElementsByTagName('input');
    var textarea = document.getElementsByTagName('textarea');
    var selector = document.getElementsByTagName('select');

    var premio = {
      nombre: input[0].value,
      descripcion: textarea[0].value,
      costo: parseInt(input[1].value),
      imagen: parseInt(selector[0].value),
      local: 1
    };
    this.p_service.createPremios(premio).subscribe();
    document.location.reload();
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
