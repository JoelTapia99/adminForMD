import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiosService } from '../../../servicios/premios-service/premios.service';

@Component({
  selector: 'app-modal-crear',
  templateUrl: './modal-crear.component.html',
  styleUrls: ['./modal-crear.component.less']
})
export class ModalCrearComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalCrearComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string,
    private service: PremiosService
  ) { }

  ngOnInit() {
  }

  agregarPremio(){
    var input = document.getElementsByTagName('input');
    var textarea = document.getElementsByTagName('textarea');
    var premio = {
      nombre: input[1].value,
      descripcion: textarea[0].value,
      costo: input[2].value,
      //imagen: input[0].value,
      local: 1
    };
    this.service.createPremios(premio).subscribe();
    //document.location.reload();
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
