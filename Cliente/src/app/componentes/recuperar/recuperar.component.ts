import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";
import { ModalRComponent } from "./modal-r/modal-r.component";

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

}
