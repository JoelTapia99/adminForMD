import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModalRComponent } from "./modal-r/modal-r.component";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.less']
})
export class RecuperarComponent implements OnInit {


  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
  }

  ejemplos= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  openDialog():void{
    const dialogRef =  this.dialog.open( ModalRComponent, {} )
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      
    })
  }

  recuperarAlert(){
    Swal.fire({
      title: '¿Estas seguro de recuperar?',
      text: "aquí puede ir informacion del componente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Recuperar'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Recuperado',
          'mas info, si es necesario',
          'success'
        )
      }
    })
  }

}
