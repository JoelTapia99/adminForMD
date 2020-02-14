import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PremiosService } from '../../../servicios/premios-service/premios.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.less']
})
export class ModalEditComponent implements OnInit {

  premios: object = [];
  
  constructor(
    public dialogRef: MatDialogRef<ModalEditComponent>,
    @Inject(MAT_DIALOG_DATA) public mensage: string,
    private service: PremiosService
  ) { }

  ngOnInit() {
    this.service.getPremio(this.service.id).subscribe(premio => {
      this.premios = premio;
    });
  }

  editarPremio(){
    var inputs = document.getElementsByTagName('input');
    var textarea = document.getElementsByTagName('textarea');
    var premio = {
      nombre: inputs[1].value,
      descripcion: textarea[0].value,
      costo: inputs[2].value,
      //imagen: inputs[0].value,
    };
    this.service.editPremios(this.service.id, premio).subscribe();
  }

  onClickNo(): void{
    this.dialogRef.close();
  }

}
