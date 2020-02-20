import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiosService } from '../../../servicios/premios-service/premios.service';
import { ImagenesService } from 'src/app/servicios/imagenes-service/imagenes.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.less']
})
export class ModalEditComponent implements OnInit {

  premios: object;
  imagenes: object;
  
  constructor(
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string,
    private p_service: PremiosService,
    private i_service: ImagenesService
  ) { }

  ngOnInit() {
    this.p_service.getPremio(this.p_service.id).subscribe(premio => {
      this.premios = premio;
    });

    this.i_service.getImagenes().subscribe(imagenes => {
      this.imagenes = imagenes;
    });
  }

  editarPremio(){
    var input = document.getElementsByTagName('input');
    var textarea = document.getElementsByTagName('textarea');
    var selector = document.getElementsByTagName('select');

    var premio = {
      nombre: input[0].value,
      descripcion: textarea[0].value,
      costo: parseInt(input[1].value),
      imagen: parseInt(selector[0].value)
    };
    this.p_service.editPremios(this.p_service.id, premio).subscribe();
    document.location.reload();
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
